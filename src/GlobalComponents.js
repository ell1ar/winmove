export default {
    install(app) {
        // Импортируем все .vue файлы из папки components и её подкаталогов
        const components = import.meta.glob("./components/**/*.vue");

        // Регистрируем каждый компонент
        for (const path in components) {
            components[path]().then((component) => {
                // Убираем начальную часть пути и расширение файла
                const relativePath = path.replace(/^.*\/components\//, "").replace(/\.\w+$/, "");

                // Заменяем слэши на дефисы для получения имени компонента
                const componentName = relativePath.replace(/\//g, "");
                app.component(componentName, component.default);
            });
        }
    },
};
