# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150209121117) do

  create_table "abilities", force: true do |t|
    t.integer  "insurance_id"
    t.integer  "category_id"
    t.float    "price"
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "abilities", ["category_id"], name: "index_abilities_on_category_id"
  add_index "abilities", ["insurance_id"], name: "index_abilities_on_insurance_id"

  create_table "blanks", force: true do |t|
    t.string   "type"
    t.string   "status"
    t.string   "code"
    t.string   "user_id"
    t.integer  "coming_id"
    t.date     "written_off"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "categories", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "clients", force: true do |t|
    t.string   "name"
    t.string   "middle_name"
    t.string   "surname"
    t.string   "passport"
    t.string   "identification_number"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "clients", ["identification_number"], name: "index_clients_on_identification_number", unique: true
  add_index "clients", ["passport"], name: "index_clients_on_passport", unique: true

  create_table "comings", force: true do |t|
    t.date     "date"
    t.integer  "insurance_id"
    t.integer  "count"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "insurances", force: true do |t|
    t.string   "name"
    t.string   "link"
    t.text     "categories"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "username"
    t.integer  "role"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  add_index "users", ["username"], name: "index_users_on_username", unique: true

end
