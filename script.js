// задаём необходимые константы
const sbmtBtnText = 'Рассчитать стоимость'
const rstBtnText = 'Сбросить'
const fixPrice = 3000

// создаем объект класса и присваиваем значения
let inCistern = new UserChoisee
inCistern.name = 'В цистерне'
inCistern.arrSelected = [
        ['Тип ТС:', ['types'], [
            ['', 1],
            ['Автоцистерна', 1],
            ['Тягач', 0.5],
            ['Контейнеровоз', 1]]],
        ['Вид ТС:', ['views'], [
            ['', 1],
            ['Механическое ТС', 1.5],
            ['Полуприцеп-цистерна', 1],
            ['Прицеп-цистерна', 1],
            ['Полуприцеп контейнеровоз', 0.4],
            ['Прицеп контейнеровоз', 0.4],
            ['MEMU', 1]]],
        ['Материал цистерны:', ['materials'], [
            ['', 1],
            ['Сталь', 1],
            ['Нержавеющая сталь', 1.2],
            ['Алюминий', 1.3],
            ['Композит', 1.5],
            ['Иное', 1.5]]],
        ['Первоначальное назначение:', ['purposes'], [
            ['', 1],
            ['Произведенный под ADR', 1],
            ['Доукомплектованный', 1.3]]],
        ['Класс ОГ:', ['classes'], [
            ['', 1],
            ['2', 1.2],
            ['3', 1],
            ['4.1', 1.3],
            ['4.2', 1.3],
            ['4.3', 1.3],
            ['5.1', 1.3],
            ['6.1', 1],
            ['8', 1.2],
            ['9', 1]]],
        ['Регион:', ['region'], [
            ['', 1]]],
        ['Вид обследования:', ['survey'], [
            ['', 1],
            ['Очное', 1],
            ['Дистанционное', 0.5]]],
        ['Год изготовления:', ['year'], [
            ['', 1]]],
        ['Изготовитель:', ['manufacturer'], [
            ['', 1],
            ['Россия', 1],
            ['Иное', 0.7]]]
        ]

// создаем объект класса и присваиваем значения
let inBulk = new UserChoisee
inBulk.name = 'Навалом/насыпью'
inBulk.arrSelected = [
        ['Тип ТС:', 'types', [
            ['', 1],
            ['Транспортное средство', 1],
            ['Тягач', 0.5],
            ['Контейнеровоз', 1]]],
        ['Вид ТС:', 'views', [
            ['', 1],
            ['Механическое ТС', 1.5],
            ['Полуприцеп', 1],
            ['Прицеп', 1],
            ['Полуприцеп контейнеровоз', 0.4],
            ['Прицеп контейнеровоз', 0.4]]],
        ['Первоначальное назначение:', 'purposes', [
            ['', 1],
            ['Произведенный под ADR', 1],
            ['Доукомплектованный', 1.3]]],
        ['Класс ОГ:', 'classes', [
            ['', 1],
            ['4.1', 1.3],
            ['4.2', 1.3],
            ['4.3', 1.3],
            ['5.1', 1.3],
            ['6.1', 1],
            ['6.2', 1],
            ['8', 1.2],
            ['9', 1]]],
        ['Регион:', 'region', [
            ['', 1]]],
        ['Вид обследования:', 'survey', [
            ['', 1],
            ['Очное', 1],
            ['Дистанционное', 0.5]]],
        ['Год изготовления:', 'year', [
            ['', 1]]],
        ['Изготовитель:', 'manufacturer', [
            ['', 1],
            ['Россия', 1],
            ['Иное', 0.7]]]
        ]

// создаем объект класса и присваиваем значения
let inPackages = new UserChoisee
inPackages.name = 'В упаковках'
inPackages.arrSelected = [
        ['Тип ТС:', 'types', [
            ['', 1],
            ['Транспортное средство', 1],
            ['Тягач', 0.5],
            ['Контейнеровоз', 1]]],
        ['Вид ТС:', 'views', [
            ['', 1],
            ['Фургон', 1],
            ['Полуприцеп', 1],
            ['Прицеп', 1],
            ['Полуприцеп контейнеровоз', 0.4],
            ['Прицеп контейнеровоз', 0.4]]],
        ['Категория:', 'categories', [
            ['', 1],
            ['EХ/II', 1],
            ['EХ/III', 1]]],
        ['Первоначальное назначение:', 'purposes', [
            ['', 1],
            ['Произведенный под ADR', 1],
            ['Доукомплектованный', 1.3]]],
        ['Класс ОГ:', 'classes', [
            ['', 1],
            ['1', 1],
            ['2', 1.2],
            ['3', 1],
            ['4.1', 1.3],
            ['4.2', 1.3],
            ['4.3', 1.3],
            ['5.1', 1.3],
            ['5.2', 1],
            ['6.1', 1],
            ['6.2', 1],
            ['7', 1],
            ['8', 1.2],
            ['9', 1]]],
        ['Регион:', 'region', [
            ['', 1]]],
        ['Вид обследования:', 'survey', [
            ['', 1],
            ['Очное', 1],
            ['Дистанционное', 0.5]]],
        ['Год изготовления:', 'year', [
            ['', 1]]],
        ['Изготовитель:', 'manufacturer', [
            ['', 1],
            ['Россия', 1],
            ['Иное', 0.7]]]
        ]

// создаем класс для рендеринга, хранения и вычисления форм, свойств и значений
function UserChoisee(formName, arrSelected) {
    this.formName = formName
    this.arrSelected = arrSelected
}

// опеределяем какой вид перевозок выбрал пользователь
function defineForm(e){
    var choosen = e.target.value
    switch(choosen){
        case inCistern.name:
            deleteForm(inCistern.arrSelected)
            renderForm(inCistern.arrSelected)
            break
        case inBulk.name:
            deleteForm(inBulk.arrSelected)
            renderForm(inBulk.arrSelected)
            break
        case inPackages.name:
            deleteForm(inPackages.arrSelected)
            renderForm(inPackages.arrSelected)
            break
        default:
            deleteForm(inCistern.arrSelected)
            deleteForm(inBulk.arrSelected)
            deleteForm(inPackages.arrSelected)
    }
}

// рендерим форму в зависимости от выбранного вида перевозок (в параметры передаётся поле (тип-массив) объекта'UserChoisee')
function renderForm(arrSelected){
    let formChoosen = document.getElementById("choosen")
    arrSelected.forEach(element => {
        let nodeDiv = document.createElement('div')
        let nodeLabel = document.createElement('label')
        let nodeSelect = document.createElement('select')
        nodeSelect.setAttribute('id', element[1])
        if(element[1] == 'classes'){
            nodeSelect.setAttribute('multiple', 'multiple')}            
        nodeLabel.textContent = element[0]
        formChoosen.appendChild(nodeDiv)
        nodeDiv.appendChild(nodeLabel)
        nodeDiv.appendChild(nodeSelect)
        element[2].forEach(e => {
            let nodeOption = document.createElement('option')
            nodeOption.setAttribute('value', e[1])
            nodeOption.textContent = e[0]
            nodeSelect.appendChild(nodeOption)
            })
    });
    let nodeBottonSbmt = document.createElement('button')
    let nodeBottonRst = document.createElement('button')
    nodeBottonSbmt.setAttribute('type', 'submit')        
    nodeBottonRst.setAttribute('type', 'reset')
    nodeBottonSbmt.textContent = sbmtBtnText
    nodeBottonRst.textContent = rstBtnText
    formChoosen.append(nodeBottonRst)
    formChoosen.append(nodeBottonSbmt)
}
    
// удаляем все элементы из формы (потомков формы 'choosen')
function deleteForm(){
    let formChoosen = document.getElementById('choosen')
    while (formChoosen.lastElementChild) {
        formChoosen.removeChild(formChoosen.lastElementChild)
    }
}

// рендерим результат вычисления в отдельный div
function renderResult(e){
    e.preventDefault()
    clearResult()
    let viewForm = document.getElementById('choosen')
    let elSel = viewForm.querySelectorAll('select')
    let res = 1
    elSel.forEach(elem => {
        if(elem.id != 'classes'){
            res *= elem.options[elem.selectedIndex].value
        }
        if(elem.id == 'classes') {
            Array.prototype.forEach.call(elem.children, child => {
                if (child.selected){
                    res *= child.value
                }
            })
        }
    })
    let calcRes = document.createElement('div')
    calcRes.setAttribute('id', 'result')
    calcRes.textContent = parseInt(res*fixPrice)
    viewForm.append(calcRes)
}

// удаляем div со значением вычисления результата
function clearResult(){
    let isResult = document.getElementById('result')
    if (isResult) {isResult.remove()}
}

// по загрузке DOM контента вытаскиваем элементы DOM дерева и привязываем слушателей
document.addEventListener('DOMContentLoaded', () => {
    let elChoosen = document.getElementById('selectchoose')
    let elSbmt = document.getElementById('choosen')
    if (elChoosen) {elChoosen.addEventListener('change', defineForm)}   // по событию изменения поля в форме "Вид перевозки" вызываем метод defineForm
    if (elSbmt) {elSbmt.addEventListener('submit', renderResult)}       // по событию нажатия кнопки submit вызываем метод renderResult
    if (elSbmt) {elSbmt.addEventListener('reset', clearResult)}         // по событию нажатия кнопки reset вызываем метод clearResult
})