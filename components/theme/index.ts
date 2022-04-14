export const getTagColor = (type) => {
    type = type.toLowerCase()
    if (type === 'rails' || type === 'laravel') {
        return 'red'
    } else if (type === 'react') {
        return 'cyan'
    } else if (type === 'javascript') {
        return 'yellow'
    } else if (type === 'typescript' || type === 'tailwindcss') {
        return 'telegram'
    } else if (type === 'chakraui' || type === 'css') {
        return 'teal'
    } else if (type === 'php') {
        return 'blue'
    } else if (type === 'yii2' || type === 'vue') {
        return 'green'
    } else if (type === 'media temple' || type === 'tencent cloud' || type === 'cpanel') {
        return 'orange'
    } else if (type === 'jquery') {
        return 'twitter'
    }
}