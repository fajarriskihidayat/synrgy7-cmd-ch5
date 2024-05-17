# ERD
![Untitled](https://github.com/fajarriskihidayat/synrgy7-cmd-ch5/assets/113827933/4d48ded9-e9e6-430e-832f-9262c8d85773)

# Rest API

The REST API to the example web is described below.

## Table car_sizes

### Request GET ALL

`GET v1/cars/sizes`

### Response GET ALL

    {
        "data": [
            {
                "id": 1,
                "size": "small"
            },
            {
                "id": 2,
                "size": "medium"
            },
            {
                "id": 8,
                "size": "large"
            }
        ],
        "message": "Get all type"
    }


### Request GET BY ID

`GET v1/cars/sizes/:id`

### Response GET BY ID

    {
        "data": [
            {
                "id": 1,
                "type": "small"
            }
        ],
        "message": "Get type by Id"
    }


### Request POST

`POST v1/cars/sizes`

    {
        "type": "extra large"
    }

### Response POST

    {
        "data": {
            "type": "extra large",
            "id": 9
        },
        "message": "Created type success"
    }


### Request PUT

`PUT v1/cars/sizes/:id`

    {
        "type": "extra large large"
    }

### Response PUT

    {
        "data": {
            "updated": 1
        },
        "message": "Update type success"
    }


### Request DELETE

`DELETE v1/cars/sizes/:id`

### Response DELETE

    {
        "data": {
            "deleted": 1
        },
        "message": "Delete type success"
    }




## Table cars

### Request GET ALL

`GET v1/cars/`

### Response GET ALL

    {
        "data": [
            {
                "id": 1,
                "rentPerDay": 200000,
                "img_url": "img_contoh",
                "car_size": "medium"
            },
            {
                "id": 2,
                "rentPerDay": 200000,
                "img_url": "img_contoh",
                "car_size": "medium"
            },
            {
               
                "id": 3,
                "rentPerDay": 200000,
                "img_url": "img_contoh",
                "car_size": "medium"
            }
        ],
        "message": "Get all Cars"
    }


### Request GET BY ID

`GET v1/cars/:id`

### Response GET BY ID

    {
        "data": [
            {
                "id": 1,
                "rentPerDay": 200000,
                "img_url": "img_contoh",
                "car_size": "medium"
            }
        ],
        "message": "Get cars by Id"
    }


### Request POST

`POST v1/cars/create`

    {
        "size_id": 1,
        "rentPerDay": 200000,
        "car_size": "medium"
        "img_url": "img_contoh",
    }

### Response POST

    {
        "data": {
            "size_id": 1,
            "rentPerDay": 200000,
            "car_size": "medium"
            "img_url": "http://res.cloudinary.com/dq5jhu4au/image/upload/v1699622523/l1mmvcjtbmwomx7vi3up.png",
            "id": 6
        },
        "message": "Created car success"
    }


### Request PUT

`PUT v1/cars/edit/:id`

    {
        "size_id": 1,
        "rentPerDay": 200000,
        "car_size": "medium"
    }

### Response PUT

    {
        "data": {
            "updated": 1
        },
        "message": "Update car success"
    }


### Request DELETE

`DELETE v1/cars/delete/:id`

### Response DELETE

    {
        "data": {
            "deleted": 1
        },
        "message": "Delete car success"
    }
