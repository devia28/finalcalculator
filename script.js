document.addEventListener('DOMContentLoaded', () => {
  const baseSelect = document.getElementById('base');
  const inputValue = document.getElementById('inputValue');
  const convertBtn = document.getElementById('convertBtn');

  const outputFields = {
    binary: document.getElementById('binary'),
    octal: document.getElementById('octal'),
    decimal: document.getElementById('decimal'),
    hexadecimal: document.getElementById('hexadecimal'),
  };

  function convertNumber() {
    const value = inputValue.value.trim();
    const base = baseSelect.value;

    let decimalValue;
    try {
      if (value === '') {
        clearOutputs();
        return;
      }

      switch (base) {
        case 'binary':
          if (!/^[01]+$/.test(value)) throw 'Invalid binary';
          decimalValue = parseInt(value, 2);
          break;
        case 'octal':
          if (!/^[0-7]+$/.test(value)) throw 'Invalid octal';
          decimalValue = parseInt(value, 8);
          break;
        case 'decimal':
          if (!/^\d+$/.test(value)) throw 'Invalid decimal';
          decimalValue = parseInt(value, 10);
          break;
        case 'hexadecimal':
          if (!/^[0-9a-fA-F]+$/.test(value)) throw 'Invalid hexadecimal';
          decimalValue = parseInt(value, 16);
          break;
      }

      outputFields.binary.value = decimalValue.toString(2);
      outputFields.octal.value = decimalValue.toString(8);
      outputFields.decimal.value = decimalValue.toString(10);
      outputFields.hexadecimal.value = decimalValue.toString(16).toUpperCase();

    } catch (err) {
      clearOutputs();
    }
  }

  function clearOutputs() {
    for (const key in outputFields) {
      outputFields[key].value = '';
    }
  }

  convertBtn.addEventListener('click', convertNumber);
  baseSelect.addEventListener('change', () => {
    inputValue.value = '';
    clearOutputs();
  });
});
