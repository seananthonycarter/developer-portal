import { expect, test } from '@playwright/test';

test.describe('API Tests for Changelog', () => {
  test('should return 5 changelog entries', async ({ request }) => {
    const response = await request.get('http://localhost:3000/api/changelog/v1');
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('entries');
    expect(responseBody.entries.length).toEqual(5);
    expect(responseBody.hasNext).toBe(true);
    expect(responseBody.cursor).not.toBeEmpty;
  });

  test('should return a single changelog entry', async ({ request }) => {
    const response = await request.get('http://localhost:3000/api/changelog/v1/date/20240617');
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('entries');
    expect(responseBody.entries.length).toEqual(1);
    expect(responseBody.entries[0].title).toEqual('Adding content to your webpages gets easier in XM Cloud Pages ');
    expect(responseBody.entries[0].releaseDate).toEqual('Jun 17, 2024');
    expect(responseBody.hasNext).toBe(false);
    expect(responseBody.cursor).not.toBeEmpty;
  });

  test('should return 404 for invalid endpoint', async ({ request }) => {
    const response = await request.get('http://localhost:3000/api/changelog/v1/invalidEndpoint');
    expect(response.status()).toBe(404);
  });
});
