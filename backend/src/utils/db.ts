import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  PutCommand,
  GetCommand,
  QueryCommand,
  ScanCommand,
} from '@aws-sdk/lib-dynamodb';
import { getConfig } from './config';
import { createLogger } from './logger';

const config = getConfig();
const logger = createLogger({ requestId: 'db-init' });

// Initialize DynamoDB client
const dynamoClient = new DynamoDBClient({
  region: config.region,
});

const docClient = DynamoDBDocumentClient.from(dynamoClient);

/**
 * Database utility functions
 */
export class Database {
  private tableName: string;

  constructor(tableName?: string) {
    this.tableName = tableName || config.tableName;
  }

  /**
   * Create a new item
   */
  async create<T extends Record<string, any>>(item: T): Promise<T> {
    try {
      logger.info('Creating item', { tableName: this.tableName, itemId: item.id });

      await docClient.send(
        new PutCommand({
          TableName: this.tableName,
          Item: item,
          ConditionExpression: 'attribute_not_exists(id)',
        })
      );

      logger.info('Item created successfully', { itemId: item.id });
      return item;
    } catch (error: any) {
      if (error.name === 'ConditionalCheckFailedException') {
        logger.warn('Item already exists', { itemId: item.id });
        throw new Error('Item with this ID already exists');
      }
      logger.error('Failed to create item', error, { itemId: item.id });
      throw error;
    }
  }

  /**
   * Get item by ID
   */
  async getById<T>(id: string, formType?: string): Promise<T | null> {
    try {
      logger.info('Fetching item', { tableName: this.tableName, id, formType });

      const key: Record<string, string> = { id };
      if (formType) {
        key.formType = formType;
      }

      const result = await docClient.send(
        new GetCommand({
          TableName: this.tableName,
          Key: key,
        })
      );

      if (!result.Item) {
        logger.info('Item not found', { id, formType });
        return null;
      }

      logger.info('Item fetched successfully', { id });
      return result.Item as T;
    } catch (error) {
      logger.error('Failed to fetch item', error, { id, formType });
      throw error;
    }
  }

  /**
   * Query items by form type
   */
  async queryByFormType<T>(
    formType: string,
    limit: number = 20,
    lastEvaluatedKey?: Record<string, any>
  ): Promise<{ items: T[]; lastEvaluatedKey?: Record<string, any> }> {
    try {
      logger.info('Querying items by form type', {
        tableName: this.tableName,
        formType,
        limit,
      });

      const params: any = {
        TableName: this.tableName,
        IndexName: 'formType-createdAt-index',
        KeyConditionExpression: 'formType = :formType',
        ExpressionAttributeValues: {
          ':formType': formType,
        },
        Limit: limit,
        ScanIndexForward: false, // Most recent first
      };

      if (lastEvaluatedKey) {
        params.ExclusiveStartKey = lastEvaluatedKey;
      }

      const result = await docClient.send(new QueryCommand(params));

      logger.info('Query completed', {
        formType,
        count: result.Items?.length || 0,
      });

      return {
        items: (result.Items || []) as T[],
        lastEvaluatedKey: result.LastEvaluatedKey,
      };
    } catch (error) {
      logger.error('Failed to query items', error, { formType });
      throw error;
    }
  }

  /**
   * Scan all items (use with caution)
   */
  async scan<T>(
    limit: number = 20,
    lastEvaluatedKey?: Record<string, any>
  ): Promise<{ items: T[]; lastEvaluatedKey?: Record<string, any> }> {
    try {
      logger.info('Scanning items', { tableName: this.tableName, limit });

      const params: any = {
        TableName: this.tableName,
        Limit: limit,
      };

      if (lastEvaluatedKey) {
        params.ExclusiveStartKey = lastEvaluatedKey;
      }

      const result = await docClient.send(new ScanCommand(params));

      logger.info('Scan completed', { count: result.Items?.length || 0 });

      return {
        items: (result.Items || []) as T[],
        lastEvaluatedKey: result.LastEvaluatedKey,
      };
    } catch (error) {
      logger.error('Failed to scan items', error);
      throw error;
    }
  }
}

/**
 * Creates a database instance
 */
export function createDatabase(tableName?: string): Database {
  return new Database(tableName);
}

