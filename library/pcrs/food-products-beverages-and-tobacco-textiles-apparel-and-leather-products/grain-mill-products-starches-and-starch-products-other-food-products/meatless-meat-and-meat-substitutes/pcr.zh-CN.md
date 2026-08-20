---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.meatless-meat-and-meat-substitutes
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 无肉肉类和肉类替代品

## 1. 范围与适用性

本 PCR 适用于产品身份为无肉肉类或肉类替代品的可食用产品。它覆盖 CPC 3.0 子类 23998 的完整语义范围：由大豆、其他豆类、谷物、蔬菜、坚果、马铃薯、木薯、西米或其他淀粉制成的植物基替代品；豆腐；天贝；面筋；汉堡、肉饼、肉块、香肠和整切模拟品等结构化或配方产品；以及实验室培育肉或培养肉。产品可按冷藏、冷冻、常温稳定、干态或湿态销售，但必须声明实际产品状态与路线。

参考 Tiangong 流是类别级产品流，并不表示一种配方、蛋白来源、组织来源、结构化技术、水分含量或市场状态可以代表整个类别。前景数据包必须识别实际产品；当存在语义上匹配实际产品且已通过 Tiangong CLI 回读的更具体公开 Tiangong 产品流时，必须使用该更具体流。若没有更具体流，只能在填写全部必需限定信息后使用类别流。

本 PCR 对生产建模直至所声明的工厂门。它要求按实际制造路线采集前景记录，并把采购的配料、培养投入、包装、燃料、电力和其他供应与上游数据集关联。工厂门后的配送、零售、消费者制备、食用和售后废弃默认在边界之外。研究可以扩展边界，但新增阶段必须与工厂门结果分开报告。

本 PCR 不把质量相等的产品视为营养或功能等同。植物基、传统豆类/谷物、培养肉或传统动物肉产品之间的比较性论断，需要另行论证功能等效性、营养规格、使用阶段与研究设计。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.meatless-meat-and-meat-substitutes |
| classification_refs | CPC 3.0:23998，精确映射语境 |
| covered_products | 植物基肉类替代品；大豆肉和汉堡；蔬菜汉堡；豆腐；天贝；面筋；以豆类、谷物、蔬菜、坚果、马铃薯、木薯、西米或其他淀粉制成的替代品；结构化、成型或整切模拟品；培养肉或实验室培育肉 |
| excluded_products | 传统屠宰来源肉；仅作为配料销售而非肉类替代品的分离蛋白或组织化蛋白配料；产品身份是完整餐食而不是替代品的多配料预制菜肴或餐食；未作为肉类替代品销售的乳制品或蛋类替代品 |
| representative_product | 数据集所代表的实际可食用无肉肉类或肉类替代品；类别级参考流只作为身份回退，必须以路线、组成、形式和市场状态加以限定 |
| production_route | 路线特定：植物配料制备后进行凝固、发酵、面团洗涤、混合/成型、挤压或其他声明的结构化路线；培养肉则包括动物细胞获取/建库、培养基制备、增殖、分化或组织形成、收获和食品后处理 |
| market_state | 在所声明工厂门处为冷藏、冷冻、常温稳定、干态或湿态产品；净可食用产品质量不含包装质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 具有所声明配方、路线、形式和市场状态的可食用无肉肉类或肉类替代品 |
| How much | 1 kg 净可食用产品，不含包装质量 |
| How well | 符合所声明的产品规格、组成、水分含量、食品安全放行状态、储存条件和预期烹饪用途 |
| How long or cycle | 一个生产批次，归一化到 1 kg 工厂门参考；食品产品不赋予服务期限 |
| reference_flow_link | 参考流是最后一个范围内后处理步骤后离开所声明工厂门的合格产品净质量；不得用含包装的总质量替代净产品质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 工厂门处 1 kg 净可食用产品 |
| 参考产品流 | 无肉肉类和肉类替代品 `f072db26-a3e4-4979-b9ad-d883d280bfe6` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | actual_product_name; route_family; principal_ingredient_or_species_and_tissue; product_format; net_moisture_content_or_solids_basis; market_state; storage_temperature_class; production_technology; geography; reference_period; packaging_configuration |

构建前景数据包时，`必需限定信息` 中每一项都必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。对于培养肉，`principal_ingredient_or_species_and_tissue` 标识来源物种以及组织或细胞类型。对于植物基或传统路线，它标识主要配料和任何实质性蛋白来源。缺少必需限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在最后一个范围内后处理步骤之后、加入包装质量之前测量合格净可食用产品质量；将秤量记录与批次放行和包装单元净含量记录核对。 |
| `ingredient_mass` | 配料、培养基成分、细胞、支架、加工助剂、清洗化学品和包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按实际使用基准记录实际接收或领用质量；当水分、浓度或固形物基准会改变解释或质量平衡时，必须声明。 |
| `water_mass` | 工艺水、配方水、培养基用水和清洗水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按用途记录计量值或批次计算值；当路线判断需要分开时，不得合并配料水、工艺水和清洗水。 |
| `energy_carrier_units` | 电力、热能、制冷和燃料 | 与所选 Tiangong 流核对的载能体特定属性 | kWh、MJ，或用有记录的因子换算的载能体质量/体积 | 保留原始计量表或发票单位、换算因子以及向生产批次的归属；不得把搜索排序当作所选能源流的身份依据。 |
| `waste_and_coproduct_mass` | 固体残余物、不合格产品、废生物质、废培养基成分、包装边角料和可销售共产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按去向和物料状态计量；没有记录的水分换算时不得混用湿质量和干质量。 |

## 5. 系统边界

以下规则定义默认工厂门前景边界：

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_complete` | 所有产品路线 | 纳入从所声明起始条件到工厂门处合格产品放行之间实际执行的每项操作；区分植物基/传统转化和培养细胞生产，不得静默地用一种路线替代另一种。 | `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`; `fao-who-cell-based-food-2023` |
| `boundary_purchased_inputs` | 采购物料和服务 | 将采购的每种配料、蛋白或淀粉制备物、培养基成分、细胞库或接种物、支架、加工助剂、包装项、燃料、电力、供水和废物管理服务作为可见投入，并关联适合其所声明身份的上游数据集。 | `eu-environmental-footprint-2021` |
| `boundary_support_operations` | 设施操作 | 纳入可直接控制且归属于生产批次的公用工程、制冷、压缩空气、蒸汽、清洗与消毒、换线、废水处理、废物预处理和实测直接排放。 | `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021` |
| `boundary_packaging_storage` | 产品放行 | 纳入工厂门前施加的初级和次级包装，以及直至所声明门点的场内冷藏、冷冻或常温储存；净产品质量与包装质量分开报告。 | `gfi-plant-meat-manufacturing-2019` |
| `boundary_same_category_input` | 本身属于无肉肉类或肉类替代品的采购投入 | 将同类别投入保留为带供应商特定上游数据集的产品投入；除非该操作实际在所声明前景内完成，不得在消费过程中递归重建其生产。 | `un-cpc-3-23998` |
| `boundary_post_gate_exclusion` | 默认工厂门结果 | 默认结果排除门后配送、零售、消费者储存和烹饪、食用及废弃；若研究纳入这些阶段，应作为显式新增阶段单独建模和报告。 | `eu-environmental-footprint-2021` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 植物基/传统路线：制造场址接收的合格农业原料或采购食品配料；培养路线：制造场址接收的合格来源细胞或细胞库/接种物，以及培养基和支架投入；准确起始条件必须说明哪些上游制备是采购的、哪些在场内进行 |
| starting_condition_role | 定义第一个由前景控制的转化，防止把上游配料、细胞库或培养基生产误作场内操作 |
| product_classification_scope | 覆盖完整 CPC 3.0:23998 语义范围的无肉肉类和肉类替代品，采用路线特定限定信息，不假设类别参考流代表一种技术 |
| recursive_input_rule | 采购的 CPC 23998 投入保留为单独量化且带上游数据集的技术圈投入；当前前景只纳入该投入在场内发生的转化 |
| upstream_dataset_requirement | 物料投入和服务需要与供应商、地理、技术和时期匹配的上游数据集；对有实质影响的代理必须标识、说明理由并做敏感性检验 |
| disclosure | 声明实际产品名称、路线族、主要配料或来源物种/组织、产品形式、水分或固形物基准、市场状态、储存条件、技术、地理、参考期、包装、采购与场内中间体的区分、排除项、代理和边界扩展 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `material_preparation` | 物料接收与制备 | required | 始终纳入；深度取决于分离物、粉料、完整配料、细胞、培养基或支架是采购还是场内制备 | 建立可追溯的配料和培养投入及其可用制备状态 | 转移到下一路线步骤的制备物料或接种物 kg，与批次核对 |
| `plant_conversion` | 植物基或传统转化 | conditional | 植物、豆类、谷物、蔬菜、坚果或淀粉路线时纳入，包括豆腐、天贝、面筋、挤压、剪切、混合或成型路线 | 将制备植物物料转化成结构化、凝固、发酵、洗涤或配方化替代品中间体 | 合格植物路线中间体 kg |
| `cultivated_cell_production` | 培养细胞生产与组织形成 | conditional | 实验室培育肉或培养肉时纳入；只纳入在所声明前景中实际执行的阶段 | 通过培养基制备、增殖、成熟、支架和收获扩增并分化细胞或形成组织 | 收获的可食细胞或组织中间体 kg |
| `finishing_and_preservation` | 产品配方、成型、熟制与保藏 | required | 纳入实际使用的全部操作；直接在转化后放行的产品，其个别子步骤可不适用 | 生产合格可食用产品并实施路线特定的成型、热或非热保藏 | 包装前合格净可食用产品 kg |
| `packaging_and_storage` | 包装与场内储存 | required | 始终纳入；储存技术遵循所声明的冷藏、冷冻、常温稳定、干态或湿态市场状态 | 施加包装并维持所声明状态直至工厂门 | 工厂门处 1 kg 净可食用产品，包装单独报告 |
| `facility_support` | 公用工程、清洗与残余物管理 | required | 对直接控制的操作始终纳入；只有穷尽分表或物理归属后才进行分配 | 捕捉清洗、换线、共用公用工程、废水、废物处理和直接排放 | 归属于批次并归一化到 1 kg 净产品的辅助消耗 |

### 过程：物料接收与制备（`material_preparation`）

#### 输入

##### 产品流

###### 小麦粉 (`prep_wheat_flour`)

本卡片仅记录“小麦粉”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Wheat flour `f87532de-91ec-4971-8cde-7cb05b236b0f`
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的植物基或传统路线且发生该单一交换时；纯培养路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每单位物料制备输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch`
- 来源: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### 豌豆蛋白浓缩物 (`prep_pea_protein_concentrate`)

本卡片仅记录“豌豆蛋白浓缩物”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Pea protein concentrate `218fc918-14a6-4085-bb6a-f8a52632c8d6`
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的植物基或传统路线且发生该单一交换时；纯培养路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每单位物料制备输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch`
- 来源: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### 大豆分离蛋白 (`prep_soy_protein_isolate`)

本卡片仅记录“大豆分离蛋白”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Soy protein isolate
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的植物基或传统路线且发生该单一交换时；纯培养路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每单位物料制备输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch`
- 来源: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### 马铃薯淀粉 (`prep_potato_starch`)

本卡片仅记录“马铃薯淀粉”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Potato starch `1acb7b11-0259-4f61-b05b-83f1f3f11eda`
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的植物基或传统路线且发生该单一交换时；纯培养路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每单位物料制备输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch`
- 来源: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### 木薯淀粉 (`prep_cassava_starch`)

本卡片仅记录“木薯淀粉”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Cassava starch `00f8688a-9af4-40bf-95fd-8529f7bc70ce`
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的植物基或传统路线且发生该单一交换时；纯培养路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每单位物料制备输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch`
- 来源: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### 精炼植物油 (`prep_refined_vegetable_oil`)

本卡片仅记录“精炼植物油”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Refined vegetable oil `4c682796-f13c-4585-8046-f1b0b08edc1c`
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的植物基或传统路线且发生该单一交换时；纯培养路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每单位物料制备输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch`
- 来源: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### 豆腐 (`prep_tofu`)

本卡片仅记录“豆腐”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Tofu
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的植物基或传统路线且发生该单一交换时；纯培养路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每单位物料制备输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch`
- 来源: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### 天贝 (`prep_tempeh`)

本卡片仅记录“天贝”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Tempeh
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的植物基或传统路线且发生该单一交换时；纯培养路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每单位物料制备输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch`
- 来源: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### 面筋制品 (`prep_seitan`)

本卡片仅记录“面筋制品”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Seitan
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的植物基或传统路线且发生该单一交换时；纯培养路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每单位物料制备输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch`
- 来源: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### 合格培养细胞接种物 (`prep_qualified_cell_inoculum`)

本卡片仅记录“合格培养细胞接种物”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Qualified cultivated-cell inoculum
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每单位物料制备输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch`
- 来源: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### 一水葡萄糖 (`prep_dextrose_monohydrate`)

本卡片仅记录“一水葡萄糖”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Dextrose monohydrate `8f56ee97-f5f8-4685-a958-74f586b40cd9`
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每单位物料制备输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch`
- 来源: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### L-谷氨酰胺 (`prep_l_glutamine`)

本卡片仅记录“L-谷氨酰胺”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: L-glutamine
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每单位物料制备输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch`
- 来源: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### 食品级盐 (`prep_food_grade_salt`)

本卡片仅记录“食品级盐”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Food-grade salt `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每单位物料制备输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch`
- 来源: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### 碳酸氢钠 (`prep_sodium_bicarbonate`)

本卡片仅记录“碳酸氢钠”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Sodium bicarbonate `4aef6625-223e-4097-8b0d-97eb9a3e1cb1`
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每单位物料制备输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch`
- 来源: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### 胰岛素 (`prep_insulin`)

本卡片仅记录“胰岛素”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Insulin
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每单位物料制备输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch`
- 来源: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### 转铁蛋白 (`prep_transferrin`)

本卡片仅记录“转铁蛋白”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Transferrin
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每单位物料制备输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch`
- 来源: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### 食品级胶原支架 (`prep_collagen_scaffold`)

本卡片仅记录“食品级胶原支架”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Food-grade collagen scaffold
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每单位物料制备输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch`
- 来源: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### 工艺水 (`prep_process_water`)

本卡片仅记录“工艺水”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Process water `68ac99df-f4b9-43b9-8da3-661c7d51f356`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每单位物料制备输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch`
- 来源: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### 去离子水 (`prep_deionised_water`)

本卡片仅记录“去离子水”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每单位物料制备输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch`
- 来源: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### 食品级硫酸钙 (`prep_food_grade_calcium_sulfate`)

本卡片仅记录“食品级硫酸钙”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Food-grade calcium sulfate
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每单位物料制备输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch`
- 来源: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### 食品级氯化镁 (`prep_food_grade_magnesium_chloride`)

本卡片仅记录“食品级氯化镁”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Food-grade magnesium chloride
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每单位物料制备输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch`
- 来源: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 热处理大豆浆 (`prepared_heat_treated_soy_slurry`)

本卡片仅记录“热处理大豆浆”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Heat-treated soy slurry `fa4e7afd-e43c-4284-afd2-8af068c5eceb`
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的植物基或传统路线且发生该单一交换时；纯培养路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每单位物料制备输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch`
- 来源: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### 制备植物蛋白混合物 (`prepared_plant_protein_blend`)

本卡片仅记录“制备植物蛋白混合物”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Prepared plant-protein blend
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的植物基或传统路线且发生该单一交换时；纯培养路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每单位物料制备输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch`
- 来源: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### 合格培养细胞接种物 (`prepared_qualified_cell_inoculum`)

本卡片仅记录“合格培养细胞接种物”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Qualified cultivated-cell inoculum
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每单位物料制备输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch`
- 来源: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### 制备直接配方混合物 (`prepared_direct_formulation_blend`)

本卡片仅记录“制备直接配方混合物”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Prepared direct-formulation blend
- 流属性/单位: Mass / kg
- 适用性: 仅在制备物料不经植物转化或培养细胞生产而直接进入后处理时适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每单位物料制备输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch`
- 来源: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

##### 废物流

###### 过滤残余物 (`prep_filtration_residue`)

本卡片仅记录“过滤残余物”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Filtration residue `f1b6f4e0-72d1-4e9b-afcc-cfca4e75b184`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 按物料、水分状态和去向实测质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每单位物料制备输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_coproduct`
- 来源: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

###### 食品残渣 (`prep_food_debris`)

本卡片仅记录“食品残渣”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Food debris `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 按物料、水分状态和去向实测质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每单位物料制备输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_coproduct`
- 来源: `un-cpc-3-23998`; `fao-who-cell-based-food-2023`

##### 基本流

### 过程：植物基或传统转化（`plant_conversion`）

#### 输入

##### 产品流

###### 小麦粉 (`plant_wheat_flour`)

本卡片仅记录“小麦粉”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Wheat flour `f87532de-91ec-4971-8cde-7cb05b236b0f`
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的植物基或传统路线且发生该单一交换时；纯培养路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_plant_conversion_batch`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### 豌豆蛋白浓缩物 (`plant_pea_protein_concentrate`)

本卡片仅记录“豌豆蛋白浓缩物”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Pea protein concentrate `218fc918-14a6-4085-bb6a-f8a52632c8d6`
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的植物基或传统路线且发生该单一交换时；纯培养路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_plant_conversion_batch`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### 大豆分离蛋白 (`plant_soy_protein_isolate`)

本卡片仅记录“大豆分离蛋白”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Soy protein isolate
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的植物基或传统路线且发生该单一交换时；纯培养路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_plant_conversion_batch`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### 马铃薯淀粉 (`plant_potato_starch`)

本卡片仅记录“马铃薯淀粉”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Potato starch `1acb7b11-0259-4f61-b05b-83f1f3f11eda`
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的植物基或传统路线且发生该单一交换时；纯培养路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_plant_conversion_batch`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### 木薯淀粉 (`plant_cassava_starch`)

本卡片仅记录“木薯淀粉”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Cassava starch `00f8688a-9af4-40bf-95fd-8529f7bc70ce`
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的植物基或传统路线且发生该单一交换时；纯培养路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_plant_conversion_batch`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### 精炼植物油 (`plant_refined_vegetable_oil`)

本卡片仅记录“精炼植物油”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Refined vegetable oil `4c682796-f13c-4585-8046-f1b0b08edc1c`
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的植物基或传统路线且发生该单一交换时；纯培养路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_plant_conversion_batch`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### 豆腐 (`plant_tofu`)

本卡片仅记录“豆腐”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Tofu
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的植物基或传统路线且发生该单一交换时；纯培养路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_plant_conversion_batch`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### 天贝 (`plant_tempeh`)

本卡片仅记录“天贝”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Tempeh
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的植物基或传统路线且发生该单一交换时；纯培养路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_plant_conversion_batch`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### 面筋制品 (`plant_seitan`)

本卡片仅记录“面筋制品”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Seitan
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的植物基或传统路线且发生该单一交换时；纯培养路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_plant_conversion_batch`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### 热处理大豆浆 (`plant_heat_treated_soy_slurry`)

本卡片仅记录“热处理大豆浆”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Heat-treated soy slurry `fa4e7afd-e43c-4284-afd2-8af068c5eceb`
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的植物基或传统路线且发生该单一交换时；纯培养路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_plant_conversion_batch`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### 低于1 kV交流电消费混合 (`plant_electricity_lt1kv_mix`)

本卡片仅记录“低于1 kV交流电消费混合”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Alternating-current electricity, below 1 kV, consumption mix `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: Energy / kWh
- 适用性: 仅用于该电压及供给情景的耗电；同一计量用电只能选择一个电压/供给情景，不得叠加替代情景。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_plant_conversion_batch`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### 1–35 kV交流电消费混合 (`plant_electricity_1_35kv_mix`)

本卡片仅记录“1–35 kV交流电消费混合”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Alternating-current electricity, 1–35 kV, consumption mix `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: Energy / kWh
- 适用性: 仅用于该电压及供给情景的耗电；同一计量用电只能选择一个电压/供给情景，不得叠加替代情景。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_plant_conversion_batch`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### 35–330 kV交流电消费混合 (`plant_electricity_35_330kv_mix`)

本卡片仅记录“35–330 kV交流电消费混合”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Alternating-current electricity, 35–330 kV, consumption mix `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位: Energy / kWh
- 适用性: 仅用于该电压及供给情景的耗电；同一计量用电只能选择一个电压/供给情景，不得叠加替代情景。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_plant_conversion_batch`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### 35–330 kV光伏电技术混合 (`plant_electricity_pv_35_330kv_mix`)

本卡片仅记录“35–330 kV光伏电技术混合”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Photovoltaic electricity, 35–330 kV, technology mix `3c8f0942-49e6-4a85-8acd-0c6653d21386`
- 流属性/单位: Energy / kWh
- 适用性: 仅用于该电压及供给情景的耗电；同一计量用电只能选择一个电压/供给情景，不得叠加替代情景。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_plant_conversion_batch`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### 蒸汽 (`plant_steam`)

本卡片仅记录“蒸汽”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 流属性/单位: Energy / MJ
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_plant_conversion_batch`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### 工业热水 (`plant_industrial_hot_water`)

本卡片仅记录“工业热水”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Industrial hot water
- 流属性/单位: Energy / MJ
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_plant_conversion_batch`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### 冷却水 (`plant_cooling_water`)

本卡片仅记录“冷却水”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_plant_conversion_batch`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### 压缩空气 (`plant_compressed_air`)

本卡片仅记录“压缩空气”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位: Volume / m3
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_plant_conversion_batch`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### 天然气 (`plant_natural_gas`)

本卡片仅记录“天然气”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- 流属性/单位: Energy / MJ
- 适用性: 仅在实际消耗该单一燃料时适用；每种不同燃料均保留为独立卡片。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_plant_conversion_batch`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### 柴油 (`plant_diesel_oil`)

本卡片仅记录“柴油”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位: Energy / MJ
- 适用性: 仅在实际消耗该单一燃料时适用；每种不同燃料均保留为独立卡片。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_plant_conversion_batch`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### 液化石油气 (`plant_lpg`)

本卡片仅记录“液化石油气”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- 流属性/单位: Energy / MJ
- 适用性: 仅在实际消耗该单一燃料时适用；每种不同燃料均保留为独立卡片。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_plant_conversion_batch`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### 木颗粒 (`plant_wood_pellets`)

本卡片仅记录“木颗粒”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Wood pellets `4905586c-0722-4c91-923f-112215546a41`
- 流属性/单位: Energy / MJ
- 适用性: 仅在实际消耗该单一燃料时适用；每种不同燃料均保留为独立卡片。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_plant_conversion_batch`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 组织化植物蛋白中间体 (`plant_textured_protein_intermediate`)

本卡片仅记录“组织化植物蛋白中间体”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Textured plant-protein intermediate
- 流属性/单位: Mass / kg
- 适用性: 仅适用于产生该单一中间体的声明植物路线；替代路线输出不得重复作为同一批次定量参考。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_plant_conversion_batch`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### 压制豆凝乳中间体 (`plant_pressed_curd_intermediate`)

本卡片仅记录“压制豆凝乳中间体”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Pressed soybean-curd intermediate
- 流属性/单位: Mass / kg
- 适用性: 仅适用于产生该单一中间体的声明植物路线；替代路线输出不得重复作为同一批次定量参考。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_plant_conversion_batch`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### 发酵大豆饼 (`plant_fermented_soybean_cake`)

本卡片仅记录“发酵大豆饼”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Fermented soybean cake
- 流属性/单位: Mass / kg
- 适用性: 仅适用于产生该单一中间体的声明植物路线；替代路线输出不得重复作为同一批次定量参考。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_plant_conversion_batch`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### 洗涤小麦面筋中间体 (`plant_washed_gluten_intermediate`)

本卡片仅记录“洗涤小麦面筋中间体”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Washed wheat-gluten intermediate
- 流属性/单位: Mass / kg
- 适用性: 仅适用于产生该单一中间体的声明植物路线；替代路线输出不得重复作为同一批次定量参考。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_plant_conversion_batch`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

##### 废物流

###### 豆渣 (`plant_bean_pulp`)

本卡片仅记录“豆渣”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Bean pulp `e99c058b-8acc-4db6-b730-a1b6b04371b9`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 按物料、水分状态和去向实测质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_coproduct`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### 食品残渣 (`plant_food_debris`)

本卡片仅记录“食品残渣”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Food debris `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 按物料、水分状态和去向实测质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_coproduct`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### 过滤残余物 (`plant_filtration_residue`)

本卡片仅记录“过滤残余物”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Filtration residue `f1b6f4e0-72d1-4e9b-afcc-cfca4e75b184`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 按物料、水分状态和去向实测质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_coproduct`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

###### 食品加工废水 (`plant_food_processing_wastewater`)

本卡片仅记录“食品加工废水”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Food-processing wastewater
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 按物料、水分状态和去向实测质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每千克合格植物路线中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_coproduct`
- 来源: `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`

##### 基本流

### 过程：培养细胞生产与组织形成（`cultivated_cell_production`）

#### 输入

##### 产品流

###### 合格培养细胞接种物 (`cult_qualified_cell_inoculum`)

本卡片仅记录“合格培养细胞接种物”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Qualified cultivated-cell inoculum
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克收获可食细胞或组织中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cultivated_batch`
- 来源: `fao-who-cell-based-food-2023`

###### 一水葡萄糖 (`cult_dextrose_monohydrate`)

本卡片仅记录“一水葡萄糖”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Dextrose monohydrate `8f56ee97-f5f8-4685-a958-74f586b40cd9`
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克收获可食细胞或组织中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cultivated_batch`
- 来源: `fao-who-cell-based-food-2023`

###### L-谷氨酰胺 (`cult_l_glutamine`)

本卡片仅记录“L-谷氨酰胺”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: L-glutamine
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克收获可食细胞或组织中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cultivated_batch`
- 来源: `fao-who-cell-based-food-2023`

###### 食品级盐 (`cult_food_grade_salt`)

本卡片仅记录“食品级盐”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Food-grade salt `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克收获可食细胞或组织中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cultivated_batch`
- 来源: `fao-who-cell-based-food-2023`

###### 碳酸氢钠 (`cult_sodium_bicarbonate`)

本卡片仅记录“碳酸氢钠”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Sodium bicarbonate `4aef6625-223e-4097-8b0d-97eb9a3e1cb1`
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克收获可食细胞或组织中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cultivated_batch`
- 来源: `fao-who-cell-based-food-2023`

###### 胰岛素 (`cult_insulin`)

本卡片仅记录“胰岛素”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Insulin
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克收获可食细胞或组织中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cultivated_batch`
- 来源: `fao-who-cell-based-food-2023`

###### 转铁蛋白 (`cult_transferrin`)

本卡片仅记录“转铁蛋白”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Transferrin
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克收获可食细胞或组织中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cultivated_batch`
- 来源: `fao-who-cell-based-food-2023`

###### 食品级胶原支架 (`cult_collagen_scaffold`)

本卡片仅记录“食品级胶原支架”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Food-grade collagen scaffold
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克收获可食细胞或组织中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cultivated_batch`
- 来源: `fao-who-cell-based-food-2023`

###### 工艺水 (`cult_process_water`)

本卡片仅记录“工艺水”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Process water `68ac99df-f4b9-43b9-8da3-661c7d51f356`
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克收获可食细胞或组织中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cultivated_batch`
- 来源: `fao-who-cell-based-food-2023`

###### 去离子水 (`cult_deionised_water`)

本卡片仅记录“去离子水”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克收获可食细胞或组织中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cultivated_batch`
- 来源: `fao-who-cell-based-food-2023`

###### 低于1 kV交流电消费混合 (`cult_electricity_lt1kv_mix`)

本卡片仅记录“低于1 kV交流电消费混合”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Alternating-current electricity, below 1 kV, consumption mix `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: Energy / kWh
- 适用性: 仅用于该电压及供给情景的耗电；同一计量用电只能选择一个电压/供给情景，不得叠加替代情景。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每千克收获可食细胞或组织中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cultivated_batch`
- 来源: `fao-who-cell-based-food-2023`

###### 1–35 kV交流电消费混合 (`cult_electricity_1_35kv_mix`)

本卡片仅记录“1–35 kV交流电消费混合”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Alternating-current electricity, 1–35 kV, consumption mix `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: Energy / kWh
- 适用性: 仅用于该电压及供给情景的耗电；同一计量用电只能选择一个电压/供给情景，不得叠加替代情景。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每千克收获可食细胞或组织中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cultivated_batch`
- 来源: `fao-who-cell-based-food-2023`

###### 35–330 kV交流电消费混合 (`cult_electricity_35_330kv_mix`)

本卡片仅记录“35–330 kV交流电消费混合”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Alternating-current electricity, 35–330 kV, consumption mix `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位: Energy / kWh
- 适用性: 仅用于该电压及供给情景的耗电；同一计量用电只能选择一个电压/供给情景，不得叠加替代情景。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每千克收获可食细胞或组织中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cultivated_batch`
- 来源: `fao-who-cell-based-food-2023`

###### 35–330 kV光伏电技术混合 (`cult_electricity_pv_35_330kv_mix`)

本卡片仅记录“35–330 kV光伏电技术混合”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Photovoltaic electricity, 35–330 kV, technology mix `3c8f0942-49e6-4a85-8acd-0c6653d21386`
- 流属性/单位: Energy / kWh
- 适用性: 仅用于该电压及供给情景的耗电；同一计量用电只能选择一个电压/供给情景，不得叠加替代情景。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每千克收获可食细胞或组织中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cultivated_batch`
- 来源: `fao-who-cell-based-food-2023`

###### 蒸汽 (`cult_steam`)

本卡片仅记录“蒸汽”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 流属性/单位: Energy / MJ
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克收获可食细胞或组织中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cultivated_batch`
- 来源: `fao-who-cell-based-food-2023`

###### 工业热水 (`cult_industrial_hot_water`)

本卡片仅记录“工业热水”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Industrial hot water
- 流属性/单位: Energy / MJ
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克收获可食细胞或组织中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cultivated_batch`
- 来源: `fao-who-cell-based-food-2023`

###### 冷却水 (`cult_cooling_water`)

本卡片仅记录“冷却水”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克收获可食细胞或组织中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cultivated_batch`
- 来源: `fao-who-cell-based-food-2023`

###### 压缩空气 (`cult_compressed_air`)

本卡片仅记录“压缩空气”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位: Volume / m3
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克收获可食细胞或组织中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cultivated_batch`
- 来源: `fao-who-cell-based-food-2023`

###### 天然气 (`cult_natural_gas`)

本卡片仅记录“天然气”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- 流属性/单位: Energy / MJ
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克收获可食细胞或组织中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cultivated_batch`
- 来源: `fao-who-cell-based-food-2023`

###### 氧气 (`cult_oxygen`)

本卡片仅记录“氧气”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- 流属性/单位: Volume / m3
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克收获可食细胞或组织中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cultivated_batch`
- 来源: `fao-who-cell-based-food-2023`

###### 氮气 (`cult_nitrogen_gas`)

本卡片仅记录“氮气”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Nitrogen gas `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- 流属性/单位: Volume / m3
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克收获可食细胞或组织中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cultivated_batch`
- 来源: `fao-who-cell-based-food-2023`

###### 食品级二氧化碳 (`cult_food_grade_carbon_dioxide`)

本卡片仅记录“食品级二氧化碳”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Food-grade carbon dioxide
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克收获可食细胞或组织中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cultivated_batch`
- 来源: `fao-who-cell-based-food-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 收获的培养生物质 (`cult_harvested_biomass`)

本卡片仅记录“收获的培养生物质”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Harvested cultivated biomass `b36f0fe8-8cac-4b68-b24a-a5ed52e54886`
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每千克收获可食细胞或组织中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cultivated_batch`
- 来源: `fao-who-cell-based-food-2023`

##### 废物流

###### 废培养基 (`cult_spent_culture_medium`)

本卡片仅记录“废培养基”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Spent culture medium
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 按物料、水分状态和去向实测质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每千克收获可食细胞或组织中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_coproduct`
- 来源: `fao-who-cell-based-food-2023`

###### 不合格培养细胞生物质 (`cult_off_spec_biomass`)

本卡片仅记录“不合格培养细胞生物质”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Off-spec cultivated-cell biomass
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 按物料、水分状态和去向实测质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每千克收获可食细胞或组织中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_coproduct`
- 来源: `fao-who-cell-based-food-2023`

###### 废食品级支架 (`cult_spent_scaffold`)

本卡片仅记录“废食品级支架”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Spent food-grade scaffold
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 按物料、水分状态和去向实测质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每千克收获可食细胞或组织中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_coproduct`
- 来源: `fao-who-cell-based-food-2023`

###### 一次性生物反应器塑料废物 (`cult_bioreactor_plastic_waste`)

本卡片仅记录“一次性生物反应器塑料废物”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Single-use bioreactor plastic waste
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 按物料、水分状态和去向实测质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每千克收获可食细胞或组织中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_coproduct`
- 来源: `fao-who-cell-based-food-2023`

###### 过滤残余物 (`cult_filtration_residue`)

本卡片仅记录“过滤残余物”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Filtration residue `f1b6f4e0-72d1-4e9b-afcc-cfca4e75b184`
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 按物料、水分状态和去向实测质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每千克收获可食细胞或组织中间体
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_coproduct`
- 来源: `fao-who-cell-based-food-2023`

##### 基本流

### 过程：产品配方、成型、熟制和保藏（`finishing_and_preservation`）

#### 输入

##### 产品流

###### 组织化植物蛋白中间体 (`finish_textured_protein_intermediate`)

本卡片仅记录“组织化植物蛋白中间体”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Textured plant-protein intermediate
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的植物基或传统路线且发生该单一交换时；纯培养路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing_batch`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### 压制豆凝乳中间体 (`finish_pressed_curd_intermediate`)

本卡片仅记录“压制豆凝乳中间体”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Pressed soybean-curd intermediate
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的植物基或传统路线且发生该单一交换时；纯培养路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing_batch`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### 发酵大豆饼 (`finish_fermented_soybean_cake`)

本卡片仅记录“发酵大豆饼”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Fermented soybean cake
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的植物基或传统路线且发生该单一交换时；纯培养路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing_batch`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### 洗涤小麦面筋中间体 (`finish_washed_gluten_intermediate`)

本卡片仅记录“洗涤小麦面筋中间体”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Washed wheat-gluten intermediate
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的植物基或传统路线且发生该单一交换时；纯培养路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing_batch`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### 收获的培养生物质 (`finish_harvested_cultivated_biomass`)

本卡片仅记录“收获的培养生物质”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Harvested cultivated biomass `b36f0fe8-8cac-4b68-b24a-a5ed52e54886`
- 流属性/单位: Mass / kg
- 适用性: 仅适用于声明的培养细胞路线且发生该单一交换时；纯植物路线批次记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing_batch`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### 工艺水 (`finish_process_water`)

本卡片仅记录“工艺水”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Process water `68ac99df-f4b9-43b9-8da3-661c7d51f356`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing_batch`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### 精炼植物油 (`finish_refined_vegetable_oil`)

本卡片仅记录“精炼植物油”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Refined vegetable oil `4c682796-f13c-4585-8046-f1b0b08edc1c`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing_batch`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### 甲基纤维素 (`finish_methylcellulose`)

本卡片仅记录“甲基纤维素”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Methylcellulose
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing_batch`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### 卡拉胶 (`finish_carrageenan`)

本卡片仅记录“卡拉胶”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Carrageenan
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing_batch`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### 食品级盐 (`finish_food_grade_salt`)

本卡片仅记录“食品级盐”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Food-grade salt `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing_batch`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### 维生素B12 (`finish_vitamin_b12`)

本卡片仅记录“维生素B12”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Vitamin B12
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing_batch`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### 面包糠 (`finish_breadcrumb`)

本卡片仅记录“面包糠”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Breadcrumb
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing_batch`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### 纤维素香肠肠衣 (`finish_cellulose_casing`)

本卡片仅记录“纤维素香肠肠衣”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Cellulose sausage casing
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing_batch`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### 碳酸氢钠 (`finish_sodium_bicarbonate`)

本卡片仅记录“碳酸氢钠”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Sodium bicarbonate `4aef6625-223e-4097-8b0d-97eb9a3e1cb1`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing_batch`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### 低于1 kV交流电消费混合 (`finish_electricity_lt1kv_mix`)

本卡片仅记录“低于1 kV交流电消费混合”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Alternating-current electricity, below 1 kV, consumption mix `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: Energy / kWh
- 适用性: 仅用于该电压及供给情景的耗电；同一计量用电只能选择一个电压/供给情景，不得叠加替代情景。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing_batch`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### 1–35 kV交流电消费混合 (`finish_electricity_1_35kv_mix`)

本卡片仅记录“1–35 kV交流电消费混合”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Alternating-current electricity, 1–35 kV, consumption mix `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: Energy / kWh
- 适用性: 仅用于该电压及供给情景的耗电；同一计量用电只能选择一个电压/供给情景，不得叠加替代情景。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing_batch`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### 35–330 kV交流电消费混合 (`finish_electricity_35_330kv_mix`)

本卡片仅记录“35–330 kV交流电消费混合”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Alternating-current electricity, 35–330 kV, consumption mix `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位: Energy / kWh
- 适用性: 仅用于该电压及供给情景的耗电；同一计量用电只能选择一个电压/供给情景，不得叠加替代情景。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing_batch`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### 35–330 kV光伏电技术混合 (`finish_electricity_pv_35_330kv_mix`)

本卡片仅记录“35–330 kV光伏电技术混合”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Photovoltaic electricity, 35–330 kV, technology mix `3c8f0942-49e6-4a85-8acd-0c6653d21386`
- 流属性/单位: Energy / kWh
- 适用性: 仅用于该电压及供给情景的耗电；同一计量用电只能选择一个电压/供给情景，不得叠加替代情景。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing_batch`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### 蒸汽 (`finish_steam`)

本卡片仅记录“蒸汽”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 流属性/单位: Energy / MJ
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing_batch`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### 工业热水 (`finish_industrial_hot_water`)

本卡片仅记录“工业热水”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Industrial hot water
- 流属性/单位: Energy / MJ
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing_batch`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### 冷却水 (`finish_cooling_water`)

本卡片仅记录“冷却水”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing_batch`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### 压缩空气 (`finish_compressed_air`)

本卡片仅记录“压缩空气”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位: Volume / m3
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing_batch`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### 天然气 (`finish_natural_gas`)

本卡片仅记录“天然气”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- 流属性/单位: Energy / MJ
- 适用性: 仅在实际消耗该单一燃料时适用；每种不同燃料均保留为独立卡片。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing_batch`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### 柴油 (`finish_diesel_oil`)

本卡片仅记录“柴油”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位: Energy / MJ
- 适用性: 仅在实际消耗该单一燃料时适用；每种不同燃料均保留为独立卡片。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing_batch`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### 液化石油气 (`finish_lpg`)

本卡片仅记录“液化石油气”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- 流属性/单位: Energy / MJ
- 适用性: 仅在实际消耗该单一燃料时适用；每种不同燃料均保留为独立卡片。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing_batch`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 无肉肉类及肉类替代品 (`finish_reference_product`)

本卡片仅记录“无肉肉类及肉类替代品”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Meatless meat and meat substitutes `f072db26-a3e4-4979-b9ad-d883d280bfe6`
- 流属性/单位: Mass / kg
- 适用性: 仅适用于符合声明配方、路线、形态和市场状态的放行净可食产品；包装质量另计。
- 数量规则: 恰好1 kg合格净可食产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing_batch`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

##### 废物流

###### 食品残渣 (`finish_food_debris`)

本卡片仅记录“食品残渣”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Food debris `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 按物料、水分状态和去向实测质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_coproduct`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### 肉类替代品修边料 (`finish_product_trimmings`)

本卡片仅记录“肉类替代品修边料”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Meat-substitute product trimmings
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 按物料、水分状态和去向实测质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_coproduct`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### 面包糠涂层残余物 (`finish_coating_residue`)

本卡片仅记录“面包糠涂层残余物”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Breadcrumb coating residue
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 按物料、水分状态和去向实测质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_coproduct`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

###### 食品加工废水 (`finish_food_processing_wastewater`)

本卡片仅记录“食品加工废水”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Food-processing wastewater
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 按物料、水分状态和去向实测质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1千克包装前合格净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_coproduct`
- 来源: `gfi-plant-meat-manufacturing-2019`; `codex-cxc-1-1969-2022`

##### 基本流

### 过程：包装和场内储存（`packaging_and_storage`）

#### 输入

##### 产品流

###### 聚乙烯薄膜 (`pack_polyethylene_film`)

本卡片仅记录“聚乙烯薄膜”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克工厂门净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_storage`
- 来源: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### 聚丙烯食品托盘 (`pack_polypropylene_tray`)

本卡片仅记录“聚丙烯食品托盘”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Polypropylene food tray
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克工厂门净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_storage`
- 来源: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### 聚对苯二甲酸乙二醇酯食品托盘 (`pack_pet_tray`)

本卡片仅记录“聚对苯二甲酸乙二醇酯食品托盘”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Polyethylene terephthalate food tray
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克工厂门净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_storage`
- 来源: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### 纸盒 (`pack_paper_box`)

本卡片仅记录“纸盒”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克工厂门净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_storage`
- 来源: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### 纸标签 (`pack_paper_label`)

本卡片仅记录“纸标签”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Paper label `7b25a54f-baa6-4593-9670-4240a3315eed`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克工厂门净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_storage`
- 来源: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### 铝箔 (`pack_aluminium_foil`)

本卡片仅记录“铝箔”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Aluminium foil `d3e373a5-987f-4e3a-9f5b-8feaa9aa01e2`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克工厂门净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_storage`
- 来源: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### 玻璃罐 (`pack_glass_jar`)

本卡片仅记录“玻璃罐”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Glass jar `eca48ea8-ab83-444f-98b2-15ab82570c80`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克工厂门净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_storage`
- 来源: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### 钢制食品罐 (`pack_steel_food_can`)

本卡片仅记录“钢制食品罐”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Steel food can `f09b782f-b3db-4b1e-8473-597edcc5b6d7`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克工厂门净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_storage`
- 来源: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### 木托盘 (`pack_wood_pallet`)

本卡片仅记录“木托盘”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Wood pallet `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克工厂门净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_storage`
- 来源: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### 低于1 kV交流电消费混合 (`pack_electricity_lt1kv_mix`)

本卡片仅记录“低于1 kV交流电消费混合”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Alternating-current electricity, below 1 kV, consumption mix `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: Energy / kWh
- 适用性: 仅用于该电压及供给情景的耗电；同一计量用电只能选择一个电压/供给情景，不得叠加替代情景。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每1千克工厂门净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_storage`
- 来源: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### 1–35 kV交流电消费混合 (`pack_electricity_1_35kv_mix`)

本卡片仅记录“1–35 kV交流电消费混合”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Alternating-current electricity, 1–35 kV, consumption mix `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: Energy / kWh
- 适用性: 仅用于该电压及供给情景的耗电；同一计量用电只能选择一个电压/供给情景，不得叠加替代情景。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每1千克工厂门净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_storage`
- 来源: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### 35–330 kV交流电消费混合 (`pack_electricity_35_330kv_mix`)

本卡片仅记录“35–330 kV交流电消费混合”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Alternating-current electricity, 35–330 kV, consumption mix `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位: Energy / kWh
- 适用性: 仅用于该电压及供给情景的耗电；同一计量用电只能选择一个电压/供给情景，不得叠加替代情景。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每1千克工厂门净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_storage`
- 来源: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### 35–330 kV光伏电技术混合 (`pack_electricity_pv_35_330kv_mix`)

本卡片仅记录“35–330 kV光伏电技术混合”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Photovoltaic electricity, 35–330 kV, technology mix `3c8f0942-49e6-4a85-8acd-0c6653d21386`
- 流属性/单位: Energy / kWh
- 适用性: 仅用于该电压及供给情景的耗电；同一计量用电只能选择一个电压/供给情景，不得叠加替代情景。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每1千克工厂门净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_storage`
- 来源: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### 制冷剂R134a (`pack_refrigerant_r134a`)

本卡片仅记录“制冷剂R134a”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Refrigerant R134a `a4facd51-1e5c-422e-8461-e9562c045164`
- 流属性/单位: Mass / kg
- 适用性: 仅在维修记录显示补充该单一制冷剂时适用；替代制冷剂不得共用同一补充量。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每1千克工厂门净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_storage`
- 来源: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### 制冷剂R404A (`pack_refrigerant_r404a`)

本卡片仅记录“制冷剂R404A”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Refrigerant R404A `76513c71-a148-484e-865f-2ab54afb4331`
- 流属性/单位: Mass / kg
- 适用性: 仅在维修记录显示补充该单一制冷剂时适用；替代制冷剂不得共用同一补充量。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每1千克工厂门净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_storage`
- 来源: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### 制冷剂R717 (`pack_refrigerant_r717`)

本卡片仅记录“制冷剂R717”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Refrigerant R717
- 流属性/单位: Mass / kg
- 适用性: 仅在维修记录显示补充该单一制冷剂时适用；替代制冷剂不得共用同一补充量。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每1千克工厂门净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_storage`
- 来源: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### 制冷剂R744 (`pack_refrigerant_r744`)

本卡片仅记录“制冷剂R744”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Refrigerant R744
- 流属性/单位: Mass / kg
- 适用性: 仅在维修记录显示补充该单一制冷剂时适用；替代制冷剂不得共用同一补充量。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每1千克工厂门净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_storage`
- 来源: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 无肉肉类及肉类替代品 (`pack_reference_product`)

本卡片仅记录“无肉肉类及肉类替代品”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Meatless meat and meat substitutes `f072db26-a3e4-4979-b9ad-d883d280bfe6`
- 流属性/单位: Mass / kg
- 适用性: 仅适用于符合声明配方、路线、形态和市场状态的放行净可食产品；包装质量另计。
- 数量规则: 恰好1 kg合格净可食产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1千克工厂门净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_storage`
- 来源: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

##### 废物流

###### 塑料包装废物 (`pack_plastic_packaging_waste`)

本卡片仅记录“塑料包装废物”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Plastic packaging waste `919351c4-3e25-4092-9934-73ecec021a3b`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 按物料、水分状态和去向实测质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1千克工厂门净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_coproduct`
- 来源: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### 纸和纸板包装废物 (`pack_paper_packaging_waste`)

本卡片仅记录“纸和纸板包装废物”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Paper and cardboard packaging waste `a318022d-c960-4eb5-a81c-04a9c4dda7e4`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 按物料、水分状态和去向实测质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1千克工厂门净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_coproduct`
- 来源: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

###### 破损包装肉类替代品 (`pack_damaged_product`)

本卡片仅记录“破损包装肉类替代品”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Damaged packaged meatless-meat product
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 按物料、水分状态和去向实测质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1千克工厂门净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_coproduct`
- 来源: `gfi-plant-meat-manufacturing-2019`; `eu-environmental-footprint-2021`

##### 基本流

### 过程：公用工程、清洁和残余物管理（`facility_support`）

#### 输入

##### 产品流

###### 低于1 kV交流电消费混合 (`support_electricity_lt1kv_mix`)

本卡片仅记录“低于1 kV交流电消费混合”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Alternating-current electricity, below 1 kV, consumption mix `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: Energy / kWh
- 适用性: 仅用于该电压及供给情景的耗电；同一计量用电只能选择一个电压/供给情景，不得叠加替代情景。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 1–35 kV交流电消费混合 (`support_electricity_1_35kv_mix`)

本卡片仅记录“1–35 kV交流电消费混合”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Alternating-current electricity, 1–35 kV, consumption mix `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: Energy / kWh
- 适用性: 仅用于该电压及供给情景的耗电；同一计量用电只能选择一个电压/供给情景，不得叠加替代情景。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 35–330 kV交流电消费混合 (`support_electricity_35_330kv_mix`)

本卡片仅记录“35–330 kV交流电消费混合”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Alternating-current electricity, 35–330 kV, consumption mix `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位: Energy / kWh
- 适用性: 仅用于该电压及供给情景的耗电；同一计量用电只能选择一个电压/供给情景，不得叠加替代情景。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 35–330 kV光伏电技术混合 (`support_electricity_pv_35_330kv_mix`)

本卡片仅记录“35–330 kV光伏电技术混合”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Photovoltaic electricity, 35–330 kV, technology mix `3c8f0942-49e6-4a85-8acd-0c6653d21386`
- 流属性/单位: Energy / kWh
- 适用性: 仅用于该电压及供给情景的耗电；同一计量用电只能选择一个电压/供给情景，不得叠加替代情景。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 天然气 (`support_natural_gas`)

本卡片仅记录“天然气”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- 流属性/单位: Energy / MJ
- 适用性: 仅在实际消耗该单一燃料时适用；每种不同燃料均保留为独立卡片。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 柴油 (`support_diesel_oil`)

本卡片仅记录“柴油”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位: Energy / MJ
- 适用性: 仅在实际消耗该单一燃料时适用；每种不同燃料均保留为独立卡片。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 液化石油气 (`support_lpg`)

本卡片仅记录“液化石油气”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- 流属性/单位: Energy / MJ
- 适用性: 仅在实际消耗该单一燃料时适用；每种不同燃料均保留为独立卡片。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 木颗粒 (`support_wood_pellets`)

本卡片仅记录“木颗粒”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Wood pellets `4905586c-0722-4c91-923f-112215546a41`
- 流属性/单位: Energy / MJ
- 适用性: 仅在实际消耗该单一燃料时适用；每种不同燃料均保留为独立卡片。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 蒸汽 (`support_steam`)

本卡片仅记录“蒸汽”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 流属性/单位: Energy / MJ
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 工业热水 (`support_industrial_hot_water`)

本卡片仅记录“工业热水”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Industrial hot water
- 流属性/单位: Energy / MJ
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 冷却水 (`support_cooling_water`)

本卡片仅记录“冷却水”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 压缩空气 (`support_compressed_air`)

本卡片仅记录“压缩空气”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位: Volume / m3
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 工艺水 (`support_process_water`)

本卡片仅记录“工艺水”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Process water `68ac99df-f4b9-43b9-8da3-661c7d51f356`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 软化水 (`support_softened_water`)

本卡片仅记录“软化水”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Softened water `f80e7700-5324-4c6f-b4db-686a84e4b274`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 分表计量消耗、维修日志数量或对生产批次的物理归属量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 氢氧化钠 (`support_sodium_hydroxide`)

本卡片仅记录“氢氧化钠”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 硝酸50%溶液 (`support_nitric_acid_50`)

本卡片仅记录“硝酸50%溶液”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Nitric acid, 50% solution `db613797-10b0-4252-b818-659b99ce85dd`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 过氧化氢50%溶液 (`support_hydrogen_peroxide_50`)

本卡片仅记录“过氧化氢50%溶液”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Hydrogen peroxide, 50% solution `afda772f-b130-4c32-9a89-c4e79ba4e0e8`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 次氯酸钠 (`support_sodium_hypochlorite`)

本卡片仅记录“次氯酸钠”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Sodium hypochlorite `28c4ca0f-c924-4d2a-93dd-b9ac93009d25`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 正磷酸 (`support_orthophosphoric_acid`)

本卡片仅记录“正磷酸”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Orthophosphoric acid `9102d985-3980-4e5d-a870-f5164ff2e977`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 食品级盐 (`support_food_grade_salt`)

本卡片仅记录“食品级盐”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Food-grade salt `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 根据批次和批号记录实测领用、消耗或转移质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 食品加工废水 (`support_food_processing_wastewater`)

本卡片仅记录“食品加工废水”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Food-processing wastewater
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 按物料、水分状态和去向实测质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_coproduct`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 食品加工废水处理污泥 (`support_wastewater_treatment_sludge`)

本卡片仅记录“食品加工废水处理污泥”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Food-processing wastewater-treatment sludge
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 按物料、水分状态和去向实测质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_coproduct`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 过滤残余物 (`support_filtration_residue`)

本卡片仅记录“过滤残余物”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Filtration residue `f1b6f4e0-72d1-4e9b-afcc-cfca4e75b184`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 按物料、水分状态和去向实测质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_coproduct`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 肉类替代品生产清洁残余物 (`support_cleaning_residue`)

本卡片仅记录“肉类替代品生产清洁残余物”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Cleaning residue from meat-substitute production
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 按物料、水分状态和去向实测质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_coproduct`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 废食品生产个人防护用品 (`support_used_ppe`)

本卡片仅记录“废食品生产个人防护用品”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Used food-production personal protective equipment
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 按物料、水分状态和去向实测质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_coproduct`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 塑料包装废物 (`support_plastic_packaging_waste`)

本卡片仅记录“塑料包装废物”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Plastic packaging waste `919351c4-3e25-4092-9934-73ecec021a3b`
- 流属性/单位: Mass / kg
- 适用性: 仅在声明配方或操作中发生该单一交换时适用；否则记为不适用。
- 数量规则: 按物料、水分状态和去向实测质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_coproduct`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

##### 基本流

###### 化石二氧化碳排放至空气（未指定） (`emission_fossil_co2_air`)

本卡片仅记录“化石二氧化碳排放至空气（未指定）”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Carbon dioxide, fossil, to air, unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass / kg
- 适用性: 仅在监测、物料衡算或经核实计算表明该单一污染物直接排入所述环境介质时适用。
- 数量规则: 按污染物和受纳环境介质实测排放量或采用有记录的计算量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 化石甲烷排放至空气（未指定） (`emission_fossil_methane_air`)

本卡片仅记录“化石甲烷排放至空气（未指定）”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Methane, fossil, to air, unspecified `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位: Mass / kg
- 适用性: 仅在监测、物料衡算或经核实计算表明该单一污染物直接排入所述环境介质时适用。
- 数量规则: 按污染物和受纳环境介质实测排放量或采用有记录的计算量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 一氧化二氮排放至空气（未指定） (`emission_nitrous_oxide_air`)

本卡片仅记录“一氧化二氮排放至空气（未指定）”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Dinitrogen monoxide to air, unspecified `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位: Mass / kg
- 适用性: 仅在监测、物料衡算或经核实计算表明该单一污染物直接排入所述环境介质时适用。
- 数量规则: 按污染物和受纳环境介质实测排放量或采用有记录的计算量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 氮氧化物排放至空气（未指定） (`emission_nitrogen_oxides_air`)

本卡片仅记录“氮氧化物排放至空气（未指定）”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Nitrogen oxides to air, unspecified
- 流属性/单位: Mass / kg
- 适用性: 仅在监测、物料衡算或经核实计算表明该单一污染物直接排入所述环境介质时适用。
- 数量规则: 按污染物和受纳环境介质实测排放量或采用有记录的计算量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 硫氧化物排放至空气（未指定） (`emission_sulfur_oxides_air`)

本卡片仅记录“硫氧化物排放至空气（未指定）”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Sulfur oxides to air, unspecified `fe0acd60-3ddc-11dd-a207-0050c2490048`
- 流属性/单位: Mass / kg
- 适用性: 仅在监测、物料衡算或经核实计算表明该单一污染物直接排入所述环境介质时适用。
- 数量规则: 按污染物和受纳环境介质实测排放量或采用有记录的计算量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 粒径小于2.5 µm颗粒物排放至空气（未指定） (`emission_pm25_air`)

本卡片仅记录“粒径小于2.5 µm颗粒物排放至空气（未指定）”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Particulate matter, less than 2.5 µm, to air, unspecified `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位: Mass / kg
- 适用性: 仅在监测、物料衡算或经核实计算表明该单一污染物直接排入所述环境介质时适用。
- 数量规则: 按污染物和受纳环境介质实测排放量或采用有记录的计算量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 氨排放至空气（未指定） (`emission_ammonia_air`)

本卡片仅记录“氨排放至空气（未指定）”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Ammonia to air, unspecified `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位: Mass / kg
- 适用性: 仅在监测、物料衡算或经核实计算表明该单一污染物直接排入所述环境介质时适用。
- 数量规则: 按污染物和受纳环境介质实测排放量或采用有记录的计算量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 化学需氧量排放至水体（未指定） (`emission_cod_water`)

本卡片仅记录“化学需氧量排放至水体（未指定）”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Chemical oxygen demand to water, unspecified `e57fc631-2c77-457a-aa30-be79e357792b`
- 流属性/单位: Mass / kg
- 适用性: 仅在监测、物料衡算或经核实计算表明该单一污染物直接排入所述环境介质时适用。
- 数量规则: 按污染物和受纳环境介质实测排放量或采用有记录的计算量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 总氮排放至淡水 (`emission_total_n_freshwater`)

本卡片仅记录“总氮排放至淡水”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Nitrogen, total, to freshwater `e1716164-e906-48e4-ad77-8f2ec4a9a4c5`
- 流属性/单位: Mass / kg
- 适用性: 仅在监测、物料衡算或经核实计算表明该单一污染物直接排入所述环境介质时适用。
- 数量规则: 按污染物和受纳环境介质实测排放量或采用有记录的计算量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 总磷排放至淡水 (`emission_total_p_freshwater`)

本卡片仅记录“总磷排放至淡水”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Phosphorus, total, to freshwater `f9df3107-6b59-4067-b920-3c61cf3630c7`
- 流属性/单位: Mass / kg
- 适用性: 仅在监测、物料衡算或经核实计算表明该单一污染物直接排入所述环境介质时适用。
- 数量规则: 按污染物和受纳环境介质实测排放量或采用有记录的计算量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 1,1,1,2-四氟乙烷排放至空气（未指定） (`emission_hfc134a_air`)

本卡片仅记录“1,1,1,2-四氟乙烷排放至空气（未指定）”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: 1,1,1,2-Tetrafluoroethane to air, unspecified `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- 流属性/单位: Mass / kg
- 适用性: 仅在监测、物料衡算或经核实计算表明该单一污染物直接排入所述环境介质时适用。
- 数量规则: 按污染物和受纳环境介质实测排放量或采用有记录的计算量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

###### 制冷剂R404A排放至空气（未指定） (`emission_r404a_air`)

本卡片仅记录“制冷剂R404A排放至空气（未指定）”这一项原子交换；其数量、状态和去向不得与其他物质合并。

- 选定流: Refrigerant R404A to air, unspecified
- 流属性/单位: Mass / kg
- 适用性: 仅在监测、物料衡算或经核实计算表明该单一污染物直接排入所述环境介质时适用。
- 数量规则: 按污染物和受纳环境介质实测排放量或采用有记录的计算量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 经因果归属和有记录分配后的每1千克净可食产品
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_support_utilities`
- 来源: `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021`

## 7. 分配与共产品处理

采用以下顺序并保留决策证据：

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_separate_routes` | 不同产品、路线、产线和批次 | 将植物基/传统路线与培养路线、不同产品形式和单独计量批次保留为不同过程记录；不得仅因使用同一类别级参考流而平均。 | `un-cpc-3-23998`; `eu-environmental-footprint-2021` |
| `allocation_avoid` | 多输出或共用过程 | 首先使用产线、批次、时间、计量表或设备记录细分过程以避免分配；只有新增功能和被替代产品系统得到明确论证并一致建模时才使用系统扩展。 | `eu-environmental-footprint-2021` |
| `allocation_physical_relation` | 无法细分或扩展的多输出过程 | 使用有记录的因果物理关系分配，例如独立测量的质量、干物质、能源需求、设备时间或其他能够解释资源使用的参数；不得只因方便就选择质量分配。 | `eu-environmental-footprint-2021` |
| `allocation_other_relation` | 没有可辩护物理关系 | 只有在说明物理分配为何无意义后，才使用经济价值等明确论证的其他关系；报告因子时期、价格或其他基准，并相对至少一种合理替代方案报告敏感性结果。 | `eu-environmental-footprint-2021` |
| `allocation_residue_status` | 残余物、废培养基、不合格物料、返工和可销售输出 | 同批闭环返工是内部转移，不是共产品。若输出在系统外销售或有益利用并承载功能或价值，应评估为共产品；否则按实际处理作为废物记录，并披露分类决定。 | `eu-environmental-footprint-2021` |
| `allocation_shared_support` | 清洗、制冷和共用公用工程 | 先通过分表或因果操作记录归属共用辅助消耗；只有未解析余量可以遵循所选分配顺序，并披露未分配总量与核对结果。 | `eu-environmental-footprint-2021`; `codex-cxc-1-1969-2022` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_batch` | `material_preparation` | 采购和制备物料、细胞、培养基、支架、水及制备残余物 | 接收、库存领用、配方、秤量、浓度和转移记录 | lot_id; supplier; material_identity; route_role; received_mass; issued_mass; returns; moisture_or_solids; concentration; prepared_output_mass; reject_mass; destination | 将接收和库存变动与批记录及校准秤或计量表记录核对 | kg 和所声明浓度基准 | 每个批号和批次 | 参考期内所有批次 | 每个范围内设施和制备线 | 经库存变动和退货后汇总接受的消耗；归一化前保留批号级追溯 | 校准记录；供应商规格；批次证书；库存核对；批次签核 |
| `cp_plant_conversion_batch` | `plant_conversion` | 植物路线物料、公用工程、中间体和残余物 | 配方、批次、发酵、挤压、熟制、干燥、水和公用工程记录 | batch_id; route; equipment_id; input_mass; process_water; electricity; thermal_energy; time; temperature; pressure; moisture; intermediate_mass; reject_mass; wastewater | 使用批记录和分表；保留与技术身份相关的实际操作顺序和设定 | kg、kWh、MJ、h 和路线特定设定 | 每批；连续计量表按班次或批次分辨率 | 参考期内所有植物路线批次 | 每条纳入的植物转化线 | 只汇总相同产品和技术；除以合格中间体输出 | 仪表校准；批次放行；水分检验；生产日志；废物票据 |
| `cp_cultivated_batch` | `cultivated_cell_production` | 细胞、培养基、支架、气体、公用工程、收获组织、废培养基和残余物 | 细胞库、培养基配方、生物反应器、收获、清洗和批次放行记录 | culture_lot; species; tissue_or_cell_type; cell_bank_input; media_component_mass; water; gas; scaffold_mass; vessel_volume; electricity; heat; cooling; culture_time; harvest_mass; moisture_or_solids; spent_media; reject_biomass | 将合格细胞库和培养基批号与设备日志、分表和收获测量关联 | kg、kWh、MJ、m3、h 和所声明细胞或固形物基准 | 每个培养和收获批次 | 参考期内所有培养路线批次 | 每个纳入的培养、分化、成熟和收获系统 | 保留阶段级数据；归一化前只汇总相同路线和设备状态 | 细胞库资质；培养基批记录；传感器校准；无菌和放行记录；质量平衡 |
| `cp_finishing_batch` | `finishing_and_preservation` | 配方投入、后处理公用工程、合格产品和残余物 | 配方、秤量、成型、熟制、保藏、冷却、放行和返工记录 | batch_id; intermediate_mass; ingredient_mass; water; energy; process_time; temperature_or_pressure; conforming_net_mass; rework; off_spec_mass; moisture; release_status | 将领用配料和设备记录与校准净产品质量及质量放行核对 | kg、kWh、MJ、h 和过程特定设定 | 每个后处理批次 | 参考期内所有后处理批次 | 每条纳入的后处理线 | 只按已放行净可食用产品归一化；扣除包装和未解析待检库存 | 校准；配方控制；过程日志；放行证书；返工和废品处置 |
| `cp_packaging_storage` | `packaging_and_storage` | 包装、包装单元、场内储存能源、制冷剂和储存损失 | 包装领用、包装单元、仓库、制冷和库存记录 | packaging_item; packaging_mass; units_packed; net_mass_per_unit; storage_state; storage_time; electricity; refrigerant_makeup; damaged_units; expired_units | 核对包装库存和包装数量；计量储存能源，或按经核实设备和占用记录计算 | kg、数量、kWh、h 或 day | 每个包装批次；储存计量表至少每月 | 参考期内生产的完整门前停留期 | 每条包装线和使用的场内仓库 | 仅在不能直接分批计量时，按核实的质量-时间或托盘-时间分配储存 | 净含量检查；包装规格；计量记录；制冷剂服务日志；库存核对 |
| `cp_support_utilities` | `facility_support` | 共用公用工程、清洗剂、废水、辅助废物和直接排放 | 公用工程发票和计量、卫生、废水、废物转移和排放记录 | meter_id; start_reading; end_reading; fuel; water; detergent; disinfectant; cleaning_time; wastewater; sludge; waste_mass; destination; direct_emission; factor_source | 优先使用分表和卫生日志；将设施总量与已归属和未归属消耗核对 | 载能体特定单位、kg、m3、kWh 或 MJ | 按班次、批次或月份读表；每次卫生事件 | 包含与生产相关停机和换线的完整参考期 | 整个设施，并在可能时分离到产线 | 按因果关系归属到产线/批次，随后仅对未解析余额按第 7 节分配 | 仪表校准；发票；卫生验证；排放报告；废物联单；排放计算记录 |
| `cp_waste_coproduct` | `all_processes` | 废物、返工、残余物和共产品 | 称重票据、容器、转移、销售和处理记录 | flow_identity; source_process; wet_mass; dry_mass_or_moisture; rework_destination; external_destination; revenue_or_function; treatment; transport_record | 按流和去向测量；核实由数量或体积进行的任何换算 | kg 并带水分基准；适用时采用去向特定服务单位 | 每次转移或发运 | 完整参考期 | 所有范围内过程和承包商 | 核对产生、内部返工、外部转移和储存量，不得重复计数 | 地磅或校准秤；转移联单；发票；处理证书；库存核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | 参考产品 | net_product_mass = sum(released_unit_net_mass) - returned_or_rejected_net_mass；排除包装质量 | released unit count; verified net mass per unit; bulk release mass; returns; rejects | 合格净可食用产品 kg | `codex-cxc-1-1969-2022` |
| `calc_normalized_inventory` | 每个前景流 | normalized_amount = campaign_flow_amount / conforming_net_product_mass；乘以 1 kg 参考流 | collected campaign flow amount; conforming net product mass; unit conversion | 每 1 kg 净可食用产品的流数量 | `eu-environmental-footprint-2021` |
| `calc_stock_adjusted_input` | 采购物料和包装 | consumed_mass = opening_stock + receipts - closing_stock - verified_returns；异常损失单独识别 | stock and receiving records; returns; abnormal loss | 每批次或时期的物料消耗 kg | `eu-environmental-footprint-2021` |
| `calc_mass_balance` | 每个过程和前景总计 | balance_gap = total_mass_inputs - total_mass_outputs - measured_direct_mass_emissions；显式列出产品含水、蒸发、废水、库存变动和水分基准换算 | all mass inputs; products; co-products; wastes; wastewater; mass emissions; stock change; moisture conversions | 带符号的 kg 差额及占投入质量百分比；报告时不虚构通过阈值 | `eu-environmental-footprint-2021` |
| `calc_shared_support` | 设施辅助 | assigned_support = directly_metered_support + unresolved_support × documented_allocation_factor；所有接收者的分配因子总和必须为一 | facility total; direct meters; operating records; allocation basis | 分配至每批次的公用工程或辅助数量 | `eu-environmental-footprint-2021` |
| `calc_allocation_factor` | 多输出过程 | factor_i = documented_physical_or_other_basis_i / sum(documented_basis_all_outputs)；只把同一因子用于不可分离的投入和输出，并保留未分配的直接记录 | co-product quantities; causal basis; price or other basis where approved | 各输出的分配因子和已分配清单 | `eu-environmental-footprint-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和所有路线中间体 | 保留实际产品名称、路线族、配料或物种/组织基准、形式、组成或配方版本、水分或固形物基准、市场状态、储存类别和生产技术；仅有类别级流身份不充分。 | 产品规格；配方版本；细胞库或配料规格；批次放行；必需限定信息 |
| `dq_technological_representativeness` | 前景过程 | 数据必须代表所声明产品实际使用的设备、路线以及采购或场内制备状态；不得合并植物基/传统路线和培养路线。 | 现场确认的过程流程图；设备清单；批记录；技术特定计量数据 |
| `dq_temporal_coverage` | 前景活动数据 | 正常连续生产应使用最近的完整代表性年度管理期；对于季节性、中试或批次生产，纳入所有相关批次，并披露较短覆盖期、利用率和放大局限。 | 带日期的计量、发票、批次和生产记录；批次清单；代表性说明 |
| `dq_geographical_coverage` | 前景和上游数据集 | 识别每个前景场址，并在可得时选择与供应商地理和技术匹配的上游数据集；披露代理地理及其实质性。 | 场址清单；供应商产地；上游数据集元数据；代理和敏感性记录 |
| `dq_measurement_traceability` | 质量、能源、水、过程条件和直接排放 | 保留原始读数、单位、换算因子、校准或验证证据和记录责任人；计算数据必须关联采集投入和计算规则。 | 计量表导出；校准秤记录；实验室记录；发票；公式审计轨迹 |
| `dq_completeness` | 所有范围内过程 | 纳入直接控制过程的所有已知投入和输出，包括清洗、换线、储存、废水、废物和直接排放；识别数据缺口和代理，不得使用未记录的截断。 | 已完成流清单；质量和公用工程核对；废物联单；缺口登记 |
| `dq_food_safety_and_lot_traceability` | 食品生产和放行记录 | 保留批号识别、监控、纠正行动、清洗验证和产品放行证据，以确认清单记录对应合格产品而非拒收或不安全输出。 | HACCP/GHP 记录；批号追溯；卫生验证；纠正行动；放行状态 |
| `dq_cultivated_route_transparency` | 培养细胞数据集 | 对外呈现时，保密可以隐去专有名称，但不得从可审计数据包中移除物料类别、数量、来源物种/组织、培养基功能、支架状态、能源、水、残余物或上游覆盖。 | 保密审计附件；质量平衡；培养基物料清单；培养和收获记录 |

## 9. 校验规则

只有每条适用规则均通过时，前景数据包才符合要求：

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 输出使用经回读为公开 Product flow 的 Tiangong 流；类别回退 UUID 为 `f072db26-a3e4-4979-b9ad-d883d280bfe6`，Mass 为 `93a60a56-a3c8-11da-a746-0800200b9a66`，Units of mass 为 `93a60a57-a4c8-11da-a746-0800200c9a66`，归一化净可食用输出恰为 1 kg 且不含包装。 | `un-cpc-3-23998` |
| `validate_specific_flow_preference` | 产品身份 | 若存在语义匹配实际产品的更具体公开 Tiangong 产品流，只有在 CLI 回读后才能替换类别回退；否则类别流必须附带全部必需限定信息，且不得暗示单一路线。 | `un-cpc-3-23998` |
| `validate_scope_and_route` | 产品和过程图 | 实际产品属于覆盖类别，排除的餐食或仅配料产品不存在，并且只纳入适用的植物基/传统或培养路线操作，不做路线平均。 | `un-cpc-3-23998`; `gfi-plant-meat-manufacturing-2019`; `fao-who-cell-based-food-2023` |
| `validate_required_qualifiers` | 数据集元数据 | 全部必需限定信息均已填写，并在产品规格、参考流备注、过程记录和发布元数据之间一致。 | `un-cpc-3-23998` |
| `validate_mass_reconciliation` | 每个过程和前景总计 | 在一致水分或固形物基准上核对投入、产品、共产品、内部返工、废物、废水、直接质量排放和库存变动；报告带符号差额及说明，不得静默强制平衡。 | `eu-environmental-footprint-2021` |
| `validate_utility_completeness` | 所有前景过程 | 在实际使用时纳入电力、燃料、加热、制冷、水、冷藏、清洗和共用辅助；设施总量与直接归属量加分配量核对。 | `eu-environmental-footprint-2021`; `codex-cxc-1-1969-2022` |
| `validate_residual_destinations` | 废物、废培养基、残余物和不合格输出 | 每种残余物都有实测或计算数量、适用时的水分状态、内部返工状态和外部处理或去向；不得为了操纵分配而选择废物或共产品分类。 | `codex-cxc-1-1969-2022`; `eu-environmental-footprint-2021` |
| `validate_allocation` | 多输出和共用过程 | 数据集显示分配顺序、基准、因子和接收者；首先考虑细分或扩展，其次偏好因果物理分配，任何其他关系都有替代基准敏感性结果。 | `eu-environmental-footprint-2021` |
| `validate_collection_links` | 前景清单行 | 每个前景记录或由采集记录计算的行都关联适用采集协议、原始记录和任何计算规则；无支持估算不得呈现为实测值。 | `eu-environmental-footprint-2021` |
| `validate_food_release_alignment` | 合格参考产品 | 批号、卫生、监控、纠正行动和放行记录证明清单分母为合格放行产品，并且拒收产品单独记录。 | `codex-cxc-1-1969-2022` |
| `validate_boundary_disclosure` | 发布数据集 | 采购或场内中间体、上游数据集、代理、排除项、门后扩展、包装约定和参考期均已披露，并与前景模型一致。 | `eu-environmental-footprint-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个所声明无肉肉类或肉类替代品及其路线的前景生产数据集 |
| downstream_use | 可发布为 `secondary_dataset`；只有在必需限定信息和工厂门边界匹配时，才可作为 `background_dataset` 使用 |
| allowed_use | 所声明产品、路线、技术、地理、市场状态、包装和参考期的质量归一化工厂门清单、过程数据集和生命周期模型投入 |
| excluded_use | 未限定类别平均；在植物基/传统、培养肉和传统动物肉路线之间自动替代；只基于 1 kg 质量的营养或比较性论断；仅配料蛋白数据集；预制餐食数据集；没有显式扩展的门后用途 |
| required_metadata | canonical PCR id 和版本；实际产品名称；全部必需限定信息；设施地理；参考期；路线过程图；采购或场内中间体；上游数据集身份；净质量约定；包装；分配；截断或缺口；代理登记 |
| required_quality_disclosure | 前景和上游的时间、技术和地理代表性；计量和质量平衡覆盖；分配敏感性；代理和保密处理；路线特定局限；清洗、储存、废水、废物和直接排放完整性 |
| update_trigger | 配方、主要配料、来源物种/组织或细胞系、培养基或支架系统、生产路线、设备规模、保藏方法、市场状态、包装、供应商地理、分配基准、设施边界或参考流身份发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-23998` | 官方指南（`official_guidance`） | 联合国统计司。《Central Product Classification Version 3.0, Explanatory Notes》，子类 23998 “Meatless meat and meat substitutes”，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-11） | 完整类别范围、排除项，以及区分植物基/传统产品与实验室培育产品的要求 |
| `fao-who-cell-based-food-2023` | 官方指南（`official_guidance`） | FAO 和 WHO。2023。《Food safety aspects of cell-based food》。罗马。https://doi.org/10.4060/cc4855en；ISBN 978-92-4-007094-3（检索日期 2026-08-11） | 培养细胞路线定义，以及细胞获取、细胞生产、收获和食品加工的过程分解；路线特定记录和危害控制语境 |
| `eu-environmental-footprint-2021` | 官方指南（`official_guidance`） | 欧盟委员会。Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods，含勘误。CELEX 32021H2279。https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32021H2279（检索日期 2026-08-11） | 企业特定投入/输出采集、功能单位归一化、代表性、完整性、多功能性顺序、分配和敏感性披露 |
| `codex-cxc-1-1969-2022` | 标准（`standard`） | FAO 和 WHO 食品法典委员会。《General Principles of Food Hygiene》，CXC 1-1969，2022 年修订，2023 年发布。https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/（检索日期 2026-08-11） | 清洗与消毒、监控、纠正行动、批号追溯、文件、记录和食品放行证据 |
| `gfi-plant-meat-manufacturing-2019` | 手册（`handbook`） | Kinney, M.J.; Weston, Z.; Bauman, J.D. 2019. 《Overview of Plant-Based Meat Manufacturing: Plant-Based Meat Manufacturing by Extrusion》。The Good Food Institute。https://gfi.org/wp-content/uploads/2021/01/Plant-Based-Meat-Manufacturing-Guide-_GFI.pdf（检索日期 2026-08-11） | 植物基产品谱，以及干/湿组织化、水合、混合、成型、裹层、熟制、保藏、冷却、包装和储存的过程分解 |
