import { forIn, isDate, padStart } from 'lodash';

export default function mapCustomFormFieldsFromFormValues(
    customFieldsObject: { [id: string]: any }
): Array<{fieldId: string; fieldValue: string}> {
    const customFields: Array<{fieldId: string; fieldValue: string}> = [];
    forIn(customFieldsObject, (value, key) => {
        let fieldValue: string;
        // console.log('customFieldsObject.id-key' );
        // console.log(key as string);

        // if (customFieldsObject.id = "field_31") {

        //     fieldValue = "AZAZAZA!!!!"
        
        // }  else 
        if (isDate(value)) {
            const padMonth = padStart((value.getMonth() + 1).toString(), 2, '0');
            const padDay = padStart((value.getDate()).toString(), 2, '0');
            fieldValue = `${value.getFullYear()}-${padMonth}-${padDay}`;

        } else {
            fieldValue = value;
        }

        // if (customFieldsObject.id == "field_31") {

        //     fieldValue = "AZAZAZA!!!!"
        
        // }  

        customFields.push({
            fieldId: key,
            fieldValue,
        });
    });

    return customFields;
}
