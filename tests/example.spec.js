// @ts-check
const { test, request, expect } = require('@playwright/test');
const exp = require('constants');

test('carregando pagina inicial pokemon', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/');

  const locatorNumber = page.locator('.pokemon__number');
  await expect(locatorNumber).toHaveText(/1/);
  
  const locatorName = page.locator('.pokemon__name');
  await expect(locatorName).toHaveText(/bulbasaur/);

  const locatorImage = page.locator('.pokemon__image');
  console.log(locatorImage, 'imagem')
  await expect(locatorImage).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png');

});

test('pokemon não encontrado?', async ({page}) => {
  await page.goto('http://127.0.0.1:5500/');

  const locatorInput = page.locator('.input__search');
  await expect(locatorInput).toHaveAttribute('value', '')
  await locatorInput.fill('1326')
  await locatorInput.press('Enter')

  const locatorName = page.locator('.pokemon__name');
  await expect(locatorName).toHaveText('não encontrado');
})

test('procurando pokemon e encontrando ',async ({page}) => {
  await page.goto('http://127.0.0.1:5500/');

  const locatorInput = page.locator('.input__search');
  await expect(locatorInput).toHaveAttribute('value', '')
  await locatorInput.fill('pikachu')
  await locatorInput.press('Enter')
    
  const locatorName = page.locator('.pokemon__name');
  await expect(locatorName).toHaveText(/pikachu/);

  const locatorImage = page.locator('.pokemon__image');
  console.log(locatorImage, 'imagem')
  await expect(locatorImage).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png');

  const locatorNumber = page.locator('.pokemon__number');
  await expect(locatorNumber).toHaveText(/25/);

});

