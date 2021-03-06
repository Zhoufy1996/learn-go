// GENERATED BY THE COMMAND ABOVE; DO NOT EDIT
// This file was generated by swaggo/swag

package docs

import (
	"bytes"
	"encoding/json"
	"strings"

	"github.com/alecthomas/template"
	"github.com/swaggo/swag"
)

var doc = `{
    "schemes": {{ marshal .Schemes }},
    "swagger": "2.0",
    "info": {
        "description": "{{.Description}}",
        "title": "{{.Title}}",
        "contact": {
            "name": "contact name",
            "url": "contact url",
            "email": "contact email"
        },
        "license": {
            "name": "license name",
            "url": "liscense url"
        },
        "version": "{{.Version}}"
    },
    "host": "{{.Host}}",
    "basePath": "{{.BasePath}}",
    "paths": {
        "/category/add": {
            "post": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "category"
                ],
                "summary": "创建类型",
                "parameters": [
                    {
                        "description": "row",
                        "name": "row",
                        "in": "body",
                        "schema": {
                            "$ref": "#/definitions/dto.CreateCategoryDTO"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "{\"success\":true,\"data\":{},\"msg\":\"上传成功\"}",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "500": {
                        "description": "{\"code\":1001,\"msg\":\"查询出错\", \"data\":null}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/category/all": {
            "get": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "category"
                ],
                "summary": "获取所有的类型",
                "responses": {
                    "200": {
                        "description": "{\"success\":true,\"data\":{},\"msg\":\"上传成功\"}",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/models.Category"
                            }
                        }
                    },
                    "500": {
                        "description": "{\"code\":1001,\"msg\":\"查询出错\", \"data\":null}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/category/count": {
            "get": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "category"
                ],
                "summary": "获取类型总数",
                "responses": {
                    "200": {
                        "description": "{\"success\":true,\"data\":{},\"msg\":\"上传成功\"}",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "500": {
                        "description": "{\"code\":1001,\"msg\":\"查询出错\", \"data\":null}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/category/delete/{id}": {
            "delete": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "category"
                ],
                "summary": "根据id删除类型",
                "parameters": [
                    {
                        "type": "integer",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "{\"code\":0,\"msg\":\"操作成功\", \"data\":{}}",
                        "schema": {
                            "$ref": "#/definitions/models.Category"
                        }
                    },
                    "500": {
                        "description": "{\"code\":1001,\"msg\":\"查询出错\", \"data\":null}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/category/id/{id}": {
            "get": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "category"
                ],
                "summary": "根据id获取类型",
                "parameters": [
                    {
                        "type": "integer",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "{\"code\":0,\"msg\":\"操作成功\", \"data\":{}}",
                        "schema": {
                            "$ref": "#/definitions/models.Category"
                        }
                    },
                    "500": {
                        "description": "{\"code\":1001,\"msg\":\"查询出错\", \"data\":null}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/category/update": {
            "put": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "category"
                ],
                "summary": "编辑类型",
                "parameters": [
                    {
                        "description": "row",
                        "name": "row",
                        "in": "body",
                        "schema": {
                            "$ref": "#/definitions/dto.UpdateCategoryDTO"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "{\"success\":true,\"data\":{},\"msg\":\"上传成功\"}",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "500": {
                        "description": "{\"code\":1001,\"msg\":\"查询出错\", \"data\":null}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/tag/add": {
            "post": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "tag"
                ],
                "summary": "创建标签",
                "parameters": [
                    {
                        "description": "row",
                        "name": "row",
                        "in": "body",
                        "schema": {
                            "$ref": "#/definitions/dto.CreateTagDTO"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "{\"success\":true,\"data\":{},\"msg\":\"上传成功\"}",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "500": {
                        "description": "{\"code\":1001,\"msg\":\"查询出错\", \"data\":null}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/tag/all": {
            "get": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "tag"
                ],
                "summary": "获取所有的标签",
                "responses": {
                    "200": {
                        "description": "{\"success\":true,\"data\":{},\"msg\":\"上传成功\"}",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/models.Category"
                            }
                        }
                    },
                    "500": {
                        "description": "{\"code\":1001,\"msg\":\"查询出错\", \"data\":null}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/tag/count": {
            "get": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "tag"
                ],
                "summary": "获取标签总数",
                "responses": {
                    "200": {
                        "description": "{\"success\":true,\"data\":{},\"msg\":\"上传成功\"}",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "500": {
                        "description": "{\"code\":1001,\"msg\":\"查询出错\", \"data\":null}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/tag/delete/{id}": {
            "delete": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "tag"
                ],
                "summary": "根据id删除标签",
                "parameters": [
                    {
                        "type": "integer",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "{\"code\":0,\"msg\":\"操作成功\", \"data\":{}}",
                        "schema": {
                            "$ref": "#/definitions/models.Tag"
                        }
                    },
                    "500": {
                        "description": "{\"code\":1001,\"msg\":\"查询出错\", \"data\":null}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/tag/id/{id}": {
            "get": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "tag"
                ],
                "summary": "根据id获取标签",
                "parameters": [
                    {
                        "type": "integer",
                        "description": "id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "{\"code\":0,\"msg\":\"操作成功\", \"data\":{}}",
                        "schema": {
                            "$ref": "#/definitions/models.Tag"
                        }
                    },
                    "500": {
                        "description": "{\"code\":1001,\"msg\":\"查询出错\", \"data\":null}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/tag/update": {
            "put": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "tag"
                ],
                "summary": "编辑标签",
                "parameters": [
                    {
                        "description": "row",
                        "name": "row",
                        "in": "body",
                        "schema": {
                            "$ref": "#/definitions/dto.UpdateTagDTO"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "{\"success\":true,\"data\":{},\"msg\":\"上传成功\"}",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "500": {
                        "description": "{\"code\":1001,\"msg\":\"查询出错\", \"data\":null}",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        }
    },
    "definitions": {
        "dto.CreateCategoryDTO": {
            "type": "object",
            "required": [
                "title"
            ],
            "properties": {
                "description": {
                    "type": "string"
                },
                "title": {
                    "type": "string"
                }
            }
        },
        "dto.CreateTagDTO": {
            "type": "object",
            "required": [
                "title"
            ],
            "properties": {
                "description": {
                    "type": "string"
                },
                "title": {
                    "type": "string"
                }
            }
        },
        "dto.UpdateCategoryDTO": {
            "type": "object",
            "required": [
                "id"
            ],
            "properties": {
                "description": {
                    "type": "string"
                },
                "id": {
                    "type": "integer"
                },
                "title": {
                    "type": "string"
                }
            }
        },
        "dto.UpdateTagDTO": {
            "type": "object",
            "required": [
                "id"
            ],
            "properties": {
                "description": {
                    "type": "string"
                },
                "id": {
                    "type": "integer"
                },
                "title": {
                    "type": "string"
                }
            }
        },
        "models.Article": {
            "type": "object",
            "properties": {
                "body": {
                    "type": "string"
                },
                "categoryId": {
                    "type": "integer"
                },
                "createdAt": {
                    "type": "string"
                },
                "deletedAt": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "id": {
                    "type": "integer"
                },
                "subTitle": {
                    "type": "string"
                },
                "tags": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/models.Tag"
                    }
                },
                "title": {
                    "type": "string"
                },
                "updateAt": {
                    "type": "string"
                },
                "userId": {
                    "type": "integer"
                }
            }
        },
        "models.Category": {
            "type": "object",
            "properties": {
                "articles": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/models.Article"
                    }
                },
                "createdAt": {
                    "type": "string"
                },
                "deletedAt": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "id": {
                    "type": "integer"
                },
                "title": {
                    "type": "string"
                },
                "updateAt": {
                    "type": "string"
                }
            }
        },
        "models.Tag": {
            "type": "object",
            "properties": {
                "articles": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/models.Article"
                    }
                },
                "createdAt": {
                    "type": "string"
                },
                "deletedAt": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "id": {
                    "type": "integer"
                },
                "title": {
                    "type": "string"
                },
                "updateAt": {
                    "type": "string"
                }
            }
        }
    }
}`

type swaggerInfo struct {
	Version     string
	Host        string
	BasePath    string
	Schemes     []string
	Title       string
	Description string
}

// SwaggerInfo holds exported Swagger Info so clients can modify it
var SwaggerInfo = swaggerInfo{
	Version:     "0.0.1",
	Host:        "127.0.0.1:8050",
	BasePath:    "/v1",
	Schemes:     []string{"http"},
	Title:       "title",
	Description: "description",
}

type s struct{}

func (s *s) ReadDoc() string {
	sInfo := SwaggerInfo
	sInfo.Description = strings.Replace(sInfo.Description, "\n", "\\n", -1)

	t, err := template.New("swagger_info").Funcs(template.FuncMap{
		"marshal": func(v interface{}) string {
			a, _ := json.Marshal(v)
			return string(a)
		},
	}).Parse(doc)
	if err != nil {
		return doc
	}

	var tpl bytes.Buffer
	if err := t.Execute(&tpl, sInfo); err != nil {
		return doc
	}

	return tpl.String()
}

func init() {
	swag.Register(swag.Name, &s{})
}
