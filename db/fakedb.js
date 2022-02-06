import _ from 'lodash';

const defaultItems = [{
    id: 1,
    name: "first item",
    description: "lorem ipsum"
},
{
    id: 2,
    name: "second item",
    description: "lorem ipsum 2"
}];

let items = _.cloneDeep(defaultItems);

export const db = {
    list: () => items,
    insert: (item) => items.push(item),
    delete: (id) => _.remove(items, (i) => i.id === id),
    update: (id, item) => {
        const index = _.findIndex(items, (i) => i.id === id);
        if (index != -1) {
            items[index] = _.merge(items[index], _.omit(item, 'id'));
        } else {
            throw "Item not found";
        }
    },
    reset: () => items = _.cloneDeep(defaultItems)
}