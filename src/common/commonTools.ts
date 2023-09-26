const tags = [
    [1, { text: '美食', dotColor: '#FF0000' }],
    [2, { text: '快递', dotColor: '#b77a0a' }],
    [3, { text: 'Replace', dotColor: '#2fff00' }],
    [4, { text: '兼职', dotColor: '#2990ff' }],
];
const tagMap = new Map(tags.map(([key, value]) => [key, value]));

type TagSource = {
    text: string,
    dotColor: string
}

function formatTagValue(tagValue: number): TagSource {
    return (tagMap.get(tagValue) as TagSource) || { text: '标签', dotColor: '#000000' };
}

export { formatTagValue };