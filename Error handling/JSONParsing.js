try {
    const jsonString = "{'name': 'john', 'age:' 30}";
    const parsedObject = JSON.parse(jsonString);
    console.log("parsedObject:", parsedObject);
} catch (error) {
    console.log("Error: invalid JSON string!");
}