## Data Stats ##

| Collection | Original	| Final |
|------------|----------|-------|
| Business | 61184 | 8410 |
| Tip | 495107 | 73016 |
| Checkin | 45166 | 6149 |
| Reviews | 1569264	| 219815 |
| User | 366715 | 65188 |


## MongoImport Commands ##

*Note: All paths are relative to my local machine

```
mongoimport.exe -h ds041651.mongolab.com:41651 -d yelp -c business -u admin -p admin --file "D:\ASU\3. Spring 2015\CSE598 - DV\Project\yelp_phoenix_dataset\yelp_phoenix_business.json"

mongoimport.exe -h ds041651.mongolab.com:41651 -d yelp -c tip -u admin -p admin --file "D:\ASU\3. Spring 2015\CSE598 - DV\Project\yelp_phoenix_dataset\yelp_phoenix_tip.json"

mongoimport.exe -h ds041651.mongolab.com:41651 -d yelp -c checkin -u admin -p admin --file "D:\ASU\3. Spring 2015\CSE598 - DV\Project\yelp_phoenix_dataset\yelp_phoenix_checkin.json"

mongoimport.exe -h ds041651.mongolab.com:41651 -d yelp -c user -u admin -p admin --file "D:\ASU\3. Spring 2015\CSE598 - DV\Project\yelp_phoenix_dataset\yelp_phoenix_user.json"

mongoimport.exe -h ds041651.mongolab.com:41651 -d yelp -c review -u admin -p admin --file "D:\ASU\3. Spring 2015\CSE598 - DV\Project\yelp_phoenix_dataset\yelp_phoenix_review.json"
```