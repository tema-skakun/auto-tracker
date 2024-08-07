# Auto Tracker App

Auto Tracker App - это тестовое задание на React с использованием Vite, Typescript, MUI и REST API для управления списком устройств GPS.

## Установка и запуск проекта

### Шаги по установке:

1. **Клонировать репозиторий:**

    ```bash
    git clone https://github.com/tema-skakun/auto-tracker.git
    cd auto-tracker
    ```

2. **Установить зависимости:**

    ```bash
    npm install
    ```

3. **Запустить проект:**

    ```bash
    npm run dev
    ```

   Приложение будет доступно по адресу: `http://localhost:3000`

## Конфигурация Vite

В файле `vite.config.ts` указаны настройки сервера:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': 'https://gps.autotracker.group'
    }
  }
});
```

## Основные библиотеки и инструменты

- React: Библиотека для создания пользовательских интерфейсов.
- Vite: Инструмент для сборки проектов. 
- TypeScript: Язык программирования, расширяющий возможности JavaScript. 
- MUI: Библиотека компонентов для React. 
- Redux Toolkit: Инструмент для управления состоянием приложения. 
- Axios: HTTP-клиент для выполнения запросов к API. 
- React Router: Библиотека для маршрутизации в React. 
- React Testing Library: Инструмент для тестирования компонентов React. 
- Storybook: Инструмент для разработки и тестирования компонентов UI.

## Функциональные возможности

### Страницы
1. **Страница авторизации:**
- Форма входа с полями Email и Пароль. 
- Валидация полей.
- Обработка и вывод ошибок.
- Перенаправление на главную страницу при успешной авторизации.

2. **Главная страница (Home):**
- Доступна после успешной авторизации.

3. **Список устройств (DeviceList):**
- Выводит таблицу с данными устройств (id, name, uniqueId, status, lastUpdate).
- Поиск устройств по id.
- Добавление новых устройств.
- Удаление устройств.

### Компоненты
- AppBar: Верхняя панель навигации.
- DeviceList: Компонент для отображения списка устройств.
- SearchBar: Компонент для поиска устройств по id.
- AddDeviceForm: Форма для добавления нового устройства.
- AddDeviceModal: Модальное окно для добавления нового устройства.
- LogoutButton: Кнопка выхода из системы.

### API Запросы
- Получение данных:

```http
GET https://gps.autotracker.group/api/devices
```

- Добавление данных:

```http
POST https://gps.autotracker.group/api/devices
```
- Удаление данных:

```http
DELETE https://gps.autotracker.group/api/devices/{id}
```
- Создание сессии:

```http
POST https://gps.autotracker.group/api/session
```
### Управление состоянием
- **authSlice**: Управляет состоянием аутентификации.
- **deviceSlice**: Управляет состоянием устройств.
### Тестирование
Используется React Testing Library для тестирования компонентов.
Примеры тестов находятся в папке src/components/tests.
### Storybook
Используется для разработки и тестирования UI компонентов.
Конфигурация находится в файле .storybook/main.js.
```javascript
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
};
```
## Контакты
Если у вас есть вопросы или предложения, пожалуйста, свяжитесь со мной в [telegram](https://t.me/tema_skakun).
