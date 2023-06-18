exports.handler = async (event) => {
    try {

        console.log(event.body)
        console.log(JSON.parse(event.body))

       const exportTask = JSON.parse(event.body).tasks.filter((task) => {
            return task.name === "export-my-file"
        })

        return {
            statusCode: 200,
            body: exportTask[0].result.files[0].url,
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
