class AddIsSelectedToCandidates < ActiveRecord::Migration[6.0]
  def change
    add_column :candidates, :is_selected, :boolean
  end
end
