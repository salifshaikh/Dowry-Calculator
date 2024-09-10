document.getElementById('dowry-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get user inputs
    let age = parseInt(document.getElementById('age').value);
    let height = parseInt(document.getElementById('height').value);
    let colour = parseInt(document.getElementById('colour').value);
    let education = parseInt(document.getElementById('education').value);
    let salary = parseInt(document.getElementById('salary').value);
    let house = parseInt(document.getElementById('house').value);
    let car = parseInt(document.getElementById('car').value);
    let fathersOccupation = parseInt(document.getElementById('fathersOccupation').value);
    let location = parseInt(document.getElementById('location').value);
  
    // Simple dowry calculation logic
    let dowryWorth = (education + salary + house + car + fathersOccupation + location + colour) - age * 100 + height * 10;
  
    // Show result
    let resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    document.getElementById('dowry-worth').innerText = `$${dowryWorth}`;
  });
  