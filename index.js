superbowlWin = function(record) {
const result = record.find((record) => {return record.result === "W";})
if (result)
{return result.year}
else
{return undefined}
}