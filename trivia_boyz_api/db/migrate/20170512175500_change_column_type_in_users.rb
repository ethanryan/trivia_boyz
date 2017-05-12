class ChangeColumnTypeInUsers < ActiveRecord::Migration[5.0]
  def change
      change_column :users, :high_score, :integer, default: 0
  end
end
