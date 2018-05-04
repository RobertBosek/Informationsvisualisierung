import requests
import json

BASE_URL = "https://swapi.co/api/"
verbose = True

if verbose:
    def vprint(arg):
        print(arg)
else:
    vprint = lambda *a: None
    
def parseContent(url):
    request = requests.get(url)
    if request.status_code == 200:
        content = json.loads(request.content)
        return content
    else:
        vprint("Response for '%s' with Code: %i" % (url, request.status_code))
        return None
    
def writeSubToFile(subDb, url):
    subArr = []
    vprint(subDb)
    rContent = parseContent(url)
    if rContent:
        nxt = rContent["next"]
        while nxt:
            appendList(rContent, subArr)
            rContent = parseContent(nxt)
            nxt = rContent["next"]
        appendList(rContent, subArr)
        with open("./data/%s.json" % subDb, "w") as outfile:
            json.dump(subArr, outfile)

def appendList(content, lst):
    for dic in content["results"]:
        lst.append(dic)
        vprint(len(lst))

if __name__ == "__main__":
    dbContent = parseContent(BASE_URL)

    if dbContent:
        for key in dbContent.keys():
            writeSubToFile(key, dbContent[key])
    vprint("Done")