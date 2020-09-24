package models

import (
	"backend/pkg/setting"
	"fmt"
)

func runScript() {
	if strIsTrue(setting.ScriptSetting.User) {
		superUser := &User{
			Name:     "zhou",
			Password: "123456",
		}
		err := CreateUser(superUser)
		if err != nil {
			fmt.Printf("%v", err)
			setting.UpdateCfg("Script", "User", "false")
		}
	}

	if strIsTrue(setting.ScriptSetting.Tag) {
		newTag := &Tag{
			Title: "new title",
		}
		err := CreateTag(newTag)
		if err != nil {
			fmt.Printf("%v", err)
			setting.UpdateCfg("Script", "Tag", "false")
		}
	}

	if strIsTrue(setting.ScriptSetting.Category) {
		newCategory := &Category{
			Title: "new category",
		}
		err := CreateCategory(newCategory)
		if err != nil {
			fmt.Printf("%v", err)
			setting.UpdateCfg("Script", "Category", "false")
		}
	}

	if strIsTrue(setting.ScriptSetting.Article) {
		tag, err := GetTag(1)
		if err != nil {
			fmt.Printf("%v", err)
			return
		}
		newArticle := &Article{
			Title:      "new article",
			SubTitle:   "sub title",
			CategoryID: 1,
			UserID:     1,
			Tags:       []Tag{*tag},
		}
		err = CreateArticle(newArticle)
		if err != nil {
			fmt.Printf("%v", err)
			setting.UpdateCfg("Script", "Article", "false")
		}
	}

}

func strIsTrue(str string) bool {
	return str == "true"
}
