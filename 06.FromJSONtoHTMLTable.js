function FromJSONtoHTMLTable(input){
const json = Array.isArray(input) ? input[0] : input;   
const data = JSON.parse(json);
let result = '<table>\n';

const keys = Object.keys(data[0]);
result += '  <tr>';
for(const key of keys){
    result += `<th>${escapeHtml(key)}</th>`;

}
    result += '</tr>\n';

    for(const obj of data){
        result += '  <tr>';
        for(const key of keys){
            result += `<td>${escapeHtml(String(obj[key]))}</td>`;
        }
        result += '</tr>\n';
    }
    result += '</table>';

    return result;
    function escapeHtml(text){
        return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }

}
FromJSONtoHTMLTable();
