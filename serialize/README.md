## Usage

```html
<form id="myForm">
  <input name="email" type="email" value="myEmail@mysite.com"/>
  <input name="password" type="password" value="mysecretpassword"/>
</form>
```

```javascript
document.getElementById('myForm').serialize()
```
This method will return the first form of the page serialized as JSON based on inputs and selects property name.<br/><br/>
Este método devolverá el primer formulario de la página serializado como JSON basándose en la propiedad name de los inputs y selects.

Output:    
```javascript
email=myEmail@mysite.com&password=mysecretpassword
```