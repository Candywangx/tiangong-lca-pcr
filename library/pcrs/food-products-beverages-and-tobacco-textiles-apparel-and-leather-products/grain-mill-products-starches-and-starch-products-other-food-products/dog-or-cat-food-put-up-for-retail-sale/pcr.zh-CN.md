---
schema_version: 1
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.dog-or-cat-food-put-up-for-retail-sale
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 零售包装的犬粮或猫粮

## 1. 范围与适用性

本 PCR 规定投放零售市场的犬粮或猫粮的前景制造数据要求。范围包括干制、湿制和半湿制的完整型与补充型宠物食品；当零食依法作为补充型犬粮或猫粮销售时，也属于本 PCR 范围。前景数据集从制造场址接收配料、饲料原料、添加剂、加工助剂和包装开始，到制造大门处合格的零售就绪产品为止。

本 PCR 本身不构成从摇篮到坟墓的产品环境足迹。配料生产、包装材料生产、分销、饲喂、制造场址以外的食品损失以及包装寿命终止均需连接上游或下游数据集。完整餐食的下游 PEF 研究应使用产品特定的代谢能密度与每日能量需求，将本 PCR 的质量参考结果换算为 PEFCR 规定的“一日推荐摄入量”功能单位。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.dog-or-cat-food-put-up-for-retail-sale |
| classification_refs | CPC 3.0: 23311，零售包装的犬粮或猫粮 |
| covered_products | 面向犬或猫的零售包装完整型或补充型食品，包括干制、湿制和半湿制产品，以及作为补充型宠物食品销售的零食 |
| excluded_products | 面向犬猫以外物种的饲料；兽药产品；未以零售包装销售的散装饲料；家庭自制食品；饲喂器具；独立包装产品 |
| representative_product | 已声明的零售就绪犬粮或猫粮；下游 PEF 比较分别区分湿猫粮、干猫粮、湿犬粮和干犬粮 |
| production_route | 配料接收、配方与制备、路线特定的热加工、零售包装、场址支持与损失管理 |
| market_state | 制造大门处处于销售水分状态和零售包装配置的合格产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造处于声明销售状态的零售就绪犬粮或猫粮 |
| How much | 1 kg 宠物食品净含量，不含包装质量 |
| How well | 符合所声明的完整型或补充型饲喂用途、目标物种与生命阶段、配方、水分类别、代谢能声明和包装配置 |
| How long or cycle | 一个生产批次或报告期汇总，并归一化为 1 kg 合格净产出 |
| reference_flow_link | rf_retail_ready_pet_food |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 宠物食品净含量 |
| 参考产品流 | Dog or cat food, put up for retail sale `a044700b-9c04-49d8-8842-c967c80099d4` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 目标物种；完整型或补充型饲喂用途；目标生命阶段或生理状态；水分类别（干制/湿制/半湿制）；销售状态水分含量；代谢能密度及其方法；净含量；配方或产品族；制造路线；按层级记录的包装质量与材料（初级/次级/三级）；制造场址与地理范围；报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass | kg | 将所有清单结果归一化为 1 kg 合格宠物食品净含量；包装质量应单独记录，不得计入参考数量。 |
| `as_sold_moisture` | 参考产品和配料数量 | Mass | kg | 按销售状态报告产品，并保留用于核对湿制、干制或半湿制类别及物料平衡的实测水分或干物质数据。 |
| `energy_carrier_separation` | 电力和燃料 | Energy | 电力用 kWh；燃料用 MJ，或燃料特定的质量/体积及低位热值换算 | 分别保留每种能源载体。记录实测的采购量或自产量并说明每个换算因子，不得用一个不区分载体的能源总量替代能源身份。 |
| `water_accounting` | 工艺用水和卫生用水 | Volume 或 Mass | m3 或 kg | 按实测数量记录取水或供水；仅在声明密度假设并在重要时说明温度基准后，方可在质量与体积之间换算。 |
| `packaging_mass_conversion` | 初级、次级和三级包装 | Mass | kg | 使用产品特定规格、样品实测质量或供应商数据，将包装件数或表面积换算为质量，并保留来源记录。 |
| `daily_ration_conversion` | 下游完整餐食 PEF 使用 | Mass 和 metabolizable energy | kg 和 kcal ME/kg | 不得仅基于 1 kg 制造参考量比较完整型宠物食品。每日摄入质量应按声明的每日能量需求除以产品特定代谢能密度计算，并披露两个输入值及其方法。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 配料、饲料原料、添加剂、加工助剂和包装组件以实际接收状态进入制造场址，并声明其水分状态、来源、供应商身份和上游数据集引用 |
| starting_condition_role | 宠物食品前景制造数据集的工厂大门起始条件 |
| product_classification_scope | 面向犬或猫的零售包装完整型或补充型食品 |
| recursive_input_rule | 来自同一制造系统的内部循环料或返工宠物食品按内部循环记录，不重复分配上游负荷；从其他系统采购并跨越声明边界的犬猫成品或半成品按产品输入流记录，并连接上游数据集 |
| upstream_dataset_requirement | 每种采购配料、饲料原料、添加剂、加工助剂、能源载体、供水和包装材料均应连接在地理和技术上具有代表性的上游数据集，否则披露未解决的数据缺口 |
| disclosure | 声明物种、饲喂用途、生命阶段、水分类别、产品路线、场址、地理范围、报告期、配方或产品族汇总、返工处理、包装配置、分配方法、排除过程以及缺失的上游或下游阶段 |

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `sb_received_materials` | 制造前景 | 当配料和添加剂的接收、储存损失、称量、研磨或粒度减小以及混合发生在报告场址时，应将其纳入。 | `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing` |
| `sb_route_specific_processing` | 制造前景 | 纳入所声明的干制、湿制或半湿制加工路线，包括在报告场址发生的产品接触加热、冷却、干燥、涂层、灌装、封口和灭菌步骤。 | `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing` |
| `sb_packaging` | 制造前景 | 纳入初级、次级和三级包装的消耗与制造场址损失；包装材料生产通过相连的上游数据集建模。 | `fediaf-pet-food-pefcr-2025` |
| `sb_site_support` | 制造前景 | 适用时纳入生产线和场址共用电力、燃料、水、清洁与消毒材料、制冷、压缩空气、场内发电、制造损失、废水、固体废物处理和直接基本流排放。 | `fediaf-pet-food-pefcr-2025` |
| `sb_upstream_linking` | 背景连接 | 通过相连的背景数据集表示配料生产、包装生产、采购能源、供水、范围内的进厂物料运输和废物处理；不得将缺失连接视为零负荷。 | `fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`; `fao-leap-feed-2016` |
| `sb_downstream_exclusion` | 制造数据集 | 本前景制造数据集不包括制造大门后的分销、零售储存、消费者运输、饲喂与使用、消费者端食品损失及包装寿命终止；从摇篮到坟墓的研究应明确补充这些阶段。 | `fediaf-pet-food-pefcr-2025` |
| `sb_recursive_rework` | 返工与同类别输入 | 内部返工料仅在重新进入的过程记录一次，其原有负荷保留在同一系统内；跨越声明起始边界的外购同类别物料必须有上游数据集。 | `eu-recommendation-2021-2279` |

## 6. 过程清单结构

下列每张卡仅表示一项具体交换。仅在命名交换实际发生时纳入相应条件卡。若声明配方、包装配置、公用工程系统、卫生方案、废物系统或排放清单包含下列未列出的单一身份，应为该身份新增一张卡；不得与既有卡合并，也不得用集合标签替代。

### 过程图

| process_id | 过程名称 | 纳入方式 | 纳入条件 | 作用 | 定量参照 |
| --- | --- | --- | --- | --- | --- |
| `formulation_preparation` | 配料接收、配方与制备 | `required` | 制造宠物食品始终纳入 | 前景物料制备 | 送往声明加工路线的已制备混合物 |
| `dry_route_processing` | 干制或半湿制热加工 | `conditional` | 声明路线采用挤压、烘焙、干燥、涂层或干制/半湿制成型时纳入 | 前景干制路线加工 | 合格散装干制或半湿制产品 |
| `wet_route_processing` | 湿制灌装、封口与热力灭菌 | `conditional` | 产品在密封包装热处理前灌装入初级包装时纳入 | 前景湿制路线加工 | 初级包装内的灭菌湿制产品 |
| `retail_packaging` | 零售与配送包装 | `required` | 始终纳入场址消耗的产品特定包装；湿制路线初级包装保留在前一过程 | 前景包装 | 1 kg 合格宠物食品净产出 |
| `site_support_losses` | 场址支持、卫生与损失管理 | `required` | 始终纳入可归属的场址控制支持和损失管理活动 | 前景场址共用支持 | 每 1 kg 合格宠物食品净产出的分配份额 |

### 过程：配料接收、配方与制备（`formulation_preparation`）

#### 输入

##### 产品流



###### 鲜鸡肉配料（`formula_chicken_meat`）

声明配方消耗 鲜鸡肉 时，将其作为一项独立配料交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Fresh chicken meat
- 流属性/单位：Mass / kg
- 数量规则：批次或报告期按接收状态实测领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formula_materials`
- 数据来源：配方、接收和配料领用记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留供应商身份、接收状态基准、秤校准、替代记录和批次核对。
- 适用条件：条件适用：仅在声明配方消耗 鲜鸡肉 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`

###### 禽副产品粉配料（`formula_poultry_byproduct_meal`）

声明配方消耗 禽副产品粉 时，将其作为一项独立配料交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Poultry by-product meal
- 流属性/单位：Mass / kg
- 数量规则：批次或报告期按接收状态实测领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formula_materials`
- 数据来源：配方、接收和配料领用记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留供应商身份、接收状态基准、秤校准、替代记录和批次核对。
- 适用条件：条件适用：仅在声明配方消耗 禽副产品粉 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`

###### 小麦籽粒配料（`formula_wheat_grain`）

声明配方消耗 小麦籽粒 时，将其作为一项独立配料交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Wheat grain
- 流属性/单位：Mass / kg
- 数量规则：批次或报告期按接收状态实测领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formula_materials`
- 数据来源：配方、接收和配料领用记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留供应商身份、接收状态基准、秤校准、替代记录和批次核对。
- 适用条件：条件适用：仅在声明配方消耗 小麦籽粒 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`

###### 玉米籽粒配料（`formula_maize_grain`）

声明配方消耗 玉米籽粒 时，将其作为一项独立配料交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Maize grain
- 流属性/单位：Mass / kg
- 数量规则：批次或报告期按接收状态实测领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formula_materials`
- 数据来源：配方、接收和配料领用记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留供应商身份、接收状态基准、秤校准、替代记录和批次核对。
- 适用条件：条件适用：仅在声明配方消耗 玉米籽粒 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`

###### 稻米籽粒配料（`formula_rice_grain`）

声明配方消耗 稻米籽粒 时，将其作为一项独立配料交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Rice grain
- 流属性/单位：Mass / kg
- 数量规则：批次或报告期按接收状态实测领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formula_materials`
- 数据来源：配方、接收和配料领用记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留供应商身份、接收状态基准、秤校准、替代记录和批次核对。
- 适用条件：条件适用：仅在声明配方消耗 稻米籽粒 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`

###### 豆粕配料（`formula_soybean_meal`）

声明配方消耗 豆粕 时，将其作为一项独立配料交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Soybean meal
- 流属性/单位：Mass / kg
- 数量规则：批次或报告期按接收状态实测领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formula_materials`
- 数据来源：配方、接收和配料领用记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留供应商身份、接收状态基准、秤校准、替代记录和批次核对。
- 适用条件：条件适用：仅在声明配方消耗 豆粕 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`

###### 禽脂配料（`formula_poultry_fat`）

声明配方消耗 禽脂 时，将其作为一项独立配料交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Poultry fat
- 流属性/单位：Mass / kg
- 数量规则：批次或报告期按接收状态实测领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formula_materials`
- 数据来源：配方、接收和配料领用记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留供应商身份、接收状态基准、秤校准、替代记录和批次核对。
- 适用条件：条件适用：仅在声明配方消耗 禽脂 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`

###### 鱼油配料（`formula_fish_oil`）

声明配方消耗 鱼油 时，将其作为一项独立配料交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Fish oil
- 流属性/单位：Mass / kg
- 数量规则：批次或报告期按接收状态实测领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formula_materials`
- 数据来源：配方、接收和配料领用记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留供应商身份、接收状态基准、秤校准、替代记录和批次核对。
- 适用条件：条件适用：仅在声明配方消耗 鱼油 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`

###### 碳酸钙配料（`formula_calcium_carbonate`）

声明配方消耗 碳酸钙 时，将其作为一项独立配料交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Calcium carbonate
- 流属性/单位：Mass / kg
- 数量规则：批次或报告期按接收状态实测领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formula_materials`
- 数据来源：配方、接收和配料领用记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留供应商身份、接收状态基准、秤校准、替代记录和批次核对。
- 适用条件：条件适用：仅在声明配方消耗 碳酸钙 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`

###### 氯化钠配料（`formula_sodium_chloride`）

声明配方消耗 氯化钠 时，将其作为一项独立配料交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Sodium chloride
- 流属性/单位：Mass / kg
- 数量规则：批次或报告期按接收状态实测领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formula_materials`
- 数据来源：配方、接收和配料领用记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留供应商身份、接收状态基准、秤校准、替代记录和批次核对。
- 适用条件：条件适用：仅在声明配方消耗 氯化钠 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`

###### 牛磺酸配料（`formula_taurine`）

声明配方消耗 牛磺酸 时，将其作为一项独立配料交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Taurine
- 流属性/单位：Mass / kg
- 数量规则：批次或报告期按接收状态实测领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formula_materials`
- 数据来源：配方、接收和配料领用记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留供应商身份、接收状态基准、秤校准、替代记录和批次核对。
- 适用条件：条件适用：仅在声明配方消耗 牛磺酸 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`

###### 制备工艺用水（`preparation_water`）

将配方与制备阶段加入的工艺水作为一项独立用水交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：研磨、混合、浆料制备或预调质的计量或批次记录供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 数据来源：水表和批次加水记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留水表校准、管线边界、批次分配和水源身份。
- 适用条件：条件适用：配方或制备阶段加入工艺水时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

##### 废物流



##### 基本流



#### 输出

##### 产品流



###### 送往加工的已制备配方（`prepared_formula`）

将 已制备宠物食品配方 作为一项合格产品输出交换记录。

- Direction: 输出（`outputs`）
- Flow type: 产品（`product`）
- 选定流：Prepared pet-food formulation
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，或根据配方记录计算并核对的批次质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_batch_yield_losses`
- 数据来源：批次产量、转移和合格产品记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留秤校准、水分或净含量基准、不合格品和批次核对。
- 适用条件：每条声明的干制、半湿制或湿制加工路线均必须纳入。
- 来源：`fediaf-recipes-processing`
- 来源键：`fediaf-recipes-processing`

##### 废物流



###### 收集的谷物配料粉尘（`preparation_dust_waste`）

将 收集的谷物配料粉尘 作为一项独立废物输出记录，并识别其处理去向。

- Direction: 输出（`outputs`）
- Flow type: 废物（`waste`）
- 选定流：Captured cereal ingredient dust
- 流属性/单位：Mass / kg
- 数量规则：按去向实测数量；内部返工不得计作外部废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_yield_losses`
- 数据来源：废物称量、批次核对、库存和转运记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留秤校准、组成身份、处理路线、含水基准和返工排除。
- 适用条件：条件适用：谷物粉尘被收集并离开产品系统送往处理时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`
- 来源键：`fediaf-pet-food-pefcr-2025`

###### 不合格已制备配方（`rejected_prepared_formula`）

将 不合格已制备宠物食品配方 作为一项独立废物输出记录，并识别其处理去向。

- Direction: 输出（`outputs`）
- Flow type: 废物（`waste`）
- 选定流：Rejected prepared pet-food formulation
- 流属性/单位：Mass / kg
- 数量规则：按去向实测数量；内部返工不得计作外部废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_yield_losses`
- 数据来源：废物称量、批次核对、库存和转运记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留秤校准、组成身份、处理路线、含水基准和返工排除。
- 适用条件：条件适用：已制备配方被拒收且未作为内部返工返回时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`
- 来源键：`fediaf-pet-food-pefcr-2025`

##### 基本流



###### 制备阶段 PM10 空气排放（`preparation_pm10_air`）

排放至空气的粒径小于 10 微米颗粒物 由配料处理或粒度减小跨越环境边界时，将其作为一项独立基本流交换记录。

- Direction: 输出（`outputs`）
- Flow type: 基本（`elementary`）
- 选定流：Particulate matter below 10 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：污染物特定监测质量，或根据已记录源活动量及有文件依据的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 数据来源：场址监测、许可、燃料、维护或工程计算记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留监测方法或因子来源、源归属、时间覆盖和重复计算检查。
- 适用条件：条件适用：配料处理或粒度减小产生的 PM10 跨越场址空气边界时纳入。
- 来源：`eu-recommendation-2021-2279`
- 来源键：`eu-recommendation-2021-2279`
### 过程：干制或半湿制热加工（`dry_route_processing`）

#### 输入

##### 产品流



###### 干制路线加工用已制备配方（`dry_prepared_formula`）

记录转入干制或半湿制加工的已制备配方，不重复计算配料负荷。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Prepared pet-food formulation
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 散装干制或半湿制产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_yield_losses`
- 数据来源：过程间转移和批次产量记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留转移秤校准、水分基准、时间和批次核对。
- 适用条件：声明产品采用干制或半湿制加工路线时必须纳入。
- 来源：`fediaf-recipes-processing`
- 来源键：`fediaf-recipes-processing`

###### 干制路线电网电力（`dry_route_electricity`）

将输送、挤压、成型、干燥、冷却、涂层和控制消耗的 电网电力 作为一项独立能源或公用工程交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：该电力交换的生产线计量量或场址总表分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 散装干制或半湿制产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carriers`
- 数据来源：该载体的生产线计量、场址计量、采购发票和分配记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留计量边界、校准、载体规格、分配因子和换算基准。
- 适用条件：条件适用：仅在输送、挤压、成型、干燥、冷却、涂层和控制消耗 电网电力 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### 干制路线外购蒸汽（`dry_route_purchased_steam`）

将预调质、蒸煮、烘焙或干燥消耗的 外购蒸汽 作为一项独立能源或公用工程交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：该单一载体的计量、采购或库存领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 散装干制或半湿制产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carriers`
- 数据来源：该载体的生产线计量、场址计量、采购发票和分配记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留计量边界、校准、载体规格、分配因子和换算基准。
- 适用条件：条件适用：仅在预调质、蒸煮、烘焙或干燥消耗 外购蒸汽 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### 干制路线外购热水（`dry_route_purchased_hot_water`）

将预调质、蒸煮或分配至该路线的热清洗消耗的 外购热水 作为一项独立能源或公用工程交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：该单一载体的计量、采购或库存领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 散装干制或半湿制产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carriers`
- 数据来源：该载体的生产线计量、场址计量、采购发票和分配记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留计量边界、校准、载体规格、分配因子和换算基准。
- 适用条件：条件适用：仅在预调质、蒸煮或分配至该路线的热清洗消耗 外购热水 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### 干制路线天然气（`dry_route_natural_gas`）

将干制路线场内燃烧消耗的 天然气 作为一项独立能源或公用工程交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Natural gas
- 流属性/单位：Volume / m3
- 数量规则：该单一载体的计量、采购或库存领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 散装干制或半湿制产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carriers`
- 数据来源：该载体的生产线计量、场址计量、采购发票和分配记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留计量边界、校准、载体规格、分配因子和换算基准。
- 适用条件：条件适用：仅在干制路线场内燃烧消耗 天然气 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### 干制路线柴油（`dry_route_diesel`）

将干制路线燃烧器或专用移动设备消耗的 柴油 作为一项独立能源或公用工程交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：该单一载体的计量、采购或库存领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 散装干制或半湿制产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carriers`
- 数据来源：该载体的生产线计量、场址计量、采购发票和分配记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留计量边界、校准、载体规格、分配因子和换算基准。
- 适用条件：条件适用：仅在干制路线燃烧器或专用移动设备消耗 柴油 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### 干制路线液化石油气（`dry_route_lpg`）

将干制路线燃烧器消耗的 液化石油气 作为一项独立能源或公用工程交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：该单一载体的计量、采购或库存领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 散装干制或半湿制产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carriers`
- 数据来源：该载体的生产线计量、场址计量、采购发票和分配记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留计量边界、校准、载体规格、分配因子和换算基准。
- 适用条件：条件适用：仅在干制路线燃烧器消耗 液化石油气 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

##### 废物流



##### 基本流



#### 输出

##### 产品流



###### 散装干制或半湿制宠物食品（`bulk_dry_pet_food`）

将 散装干制或半湿制犬粮或猫粮 作为一项合格产品输出交换记录。

- Direction: 输出（`outputs`）
- Flow type: 产品（`product`）
- 选定流：Bulk dry or semi-moist dog or cat food
- 流属性/单位：Mass / kg
- 数量规则：实测合格散装产品质量及实测水分含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 散装干制或半湿制产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_quality_yield`
- 数据来源：批次产量、转移和合格产品记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留秤校准、水分或净含量基准、不合格品和批次核对。
- 适用条件：声明产品采用干制或半湿制加工路线时必须纳入。
- 来源：`fediaf-recipes-processing`; `fediaf-nutritional-guidelines-2024`
- 来源键：`fediaf-recipes-processing`; `fediaf-nutritional-guidelines-2024`

##### 废物流



###### 干制宠物食品细粉（`dry_route_fines`）

将 干制宠物食品细粉 作为一项独立废物输出记录，并识别其处理去向。

- Direction: 输出（`outputs`）
- Flow type: 废物（`waste`）
- 选定流：Dry pet-food fines
- 流属性/单位：Mass / kg
- 数量规则：按去向实测数量；内部返工不得计作外部废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 散装干制或半湿制产品产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_yield_losses`
- 数据来源：废物称量、批次核对、库存和转运记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留秤校准、组成身份、处理路线、含水基准和返工排除。
- 适用条件：条件适用：细粉离开该路线送往处理且不作为内部返工时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`
- 来源键：`fediaf-pet-food-pefcr-2025`

###### 干制路线开机废物（`dry_route_startup_waste`）

将 干制宠物食品开机废物 作为一项独立废物输出记录，并识别其处理去向。

- Direction: 输出（`outputs`）
- Flow type: 废物（`waste`）
- 选定流：Dry pet-food start-up waste
- 流属性/单位：Mass / kg
- 数量规则：按去向实测数量；内部返工不得计作外部废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 散装干制或半湿制产品产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_yield_losses`
- 数据来源：废物称量、批次核对、库存和转运记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留秤校准、组成身份、处理路线、含水基准和返工排除。
- 适用条件：条件适用：开机物料离开该路线送往处理时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`
- 来源键：`fediaf-pet-food-pefcr-2025`

###### 不合格干制宠物食品（`dry_route_reject`）

将 不合格干制或半湿制犬粮或猫粮 作为一项独立废物输出记录，并识别其处理去向。

- Direction: 输出（`outputs`）
- Flow type: 废物（`waste`）
- 选定流：Rejected dry or semi-moist dog or cat food
- 流属性/单位：Mass / kg
- 数量规则：按去向实测数量；内部返工不得计作外部废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 散装干制或半湿制产品产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_yield_losses`
- 数据来源：废物称量、批次核对、库存和转运记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留秤校准、组成身份、处理路线、含水基准和返工排除。
- 适用条件：条件适用：不合格产品离开该路线且未作为内部返工返回时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`
- 来源键：`fediaf-pet-food-pefcr-2025`

##### 基本流



###### 干制路线化石二氧化碳空气排放（`dry_route_co2_air`）

排放至空气的化石二氧化碳 由干制路线场内燃烧跨越环境边界时，将其作为一项独立基本流交换记录。

- Direction: 输出（`outputs`）
- Flow type: 基本（`elementary`）
- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：污染物特定监测质量，或根据已记录源活动量及有文件依据的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 散装干制或半湿制产品产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 数据来源：场址监测、许可、燃料、维护或工程计算记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留监测方法或因子来源、源归属、时间覆盖和重复计算检查。
- 适用条件：条件适用：场内燃烧化石燃料时纳入，并排除上游燃料供应排放。
- 来源：`eu-recommendation-2021-2279`
- 来源键：`eu-recommendation-2021-2279`

###### 干制路线氮氧化物空气排放（`dry_route_nox_air`）

排放至空气的氮氧化物 由干制路线场内燃烧跨越环境边界时，将其作为一项独立基本流交换记录。

- Direction: 输出（`outputs`）
- Flow type: 基本（`elementary`）
- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg
- 数量规则：污染物特定监测质量，或根据已记录源活动量及有文件依据的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 散装干制或半湿制产品产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 数据来源：场址监测、许可、燃料、维护或工程计算记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留监测方法或因子来源、源归属、时间覆盖和重复计算检查。
- 适用条件：条件适用：干制路线场内燃烧排放氮氧化物时纳入。
- 来源：`eu-recommendation-2021-2279`
- 来源键：`eu-recommendation-2021-2279`

###### 干制路线二氧化硫空气排放（`dry_route_so2_air`）

排放至空气的二氧化硫 由干制路线场内燃烧跨越环境边界时，将其作为一项独立基本流交换记录。

- Direction: 输出（`outputs`）
- Flow type: 基本（`elementary`）
- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：污染物特定监测质量，或根据已记录源活动量及有文件依据的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 散装干制或半湿制产品产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 数据来源：场址监测、许可、燃料、维护或工程计算记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留监测方法或因子来源、源归属、时间覆盖和重复计算检查。
- 适用条件：条件适用：所耗燃料及燃烧条件产生二氧化硫时纳入。
- 来源：`eu-recommendation-2021-2279`
- 来源键：`eu-recommendation-2021-2279`

###### 干制路线 PM2.5 空气排放（`dry_route_pm25_air`）

排放至空气的粒径小于 2.5 微米颗粒物 由干燥或干制路线场内燃烧跨越环境边界时，将其作为一项独立基本流交换记录。

- Direction: 输出（`outputs`）
- Flow type: 基本（`elementary`）
- 选定流：Particulate matter below 2.5 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：污染物特定监测质量，或根据已记录源活动量及有文件依据的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 散装干制或半湿制产品产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 数据来源：场址监测、许可、燃料、维护或工程计算记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留监测方法或因子来源、源归属、时间覆盖和重复计算检查。
- 适用条件：条件适用：干燥或燃烧产生的 PM2.5 跨越场址空气边界时纳入。
- 来源：`eu-recommendation-2021-2279`
- 来源键：`eu-recommendation-2021-2279`
### 过程：湿制灌装、封口与热力灭菌（`wet_route_processing`）

#### 输入

##### 产品流



###### 湿制路线加工用已制备配方（`wet_prepared_formula`）

记录转入灌装与灭菌的已制备湿制配方，不重复计算配料负荷。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Prepared wet pet-food formulation
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 灭菌湿制产品净含量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_yield_losses`
- 数据来源：过程间转移和批次产量记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留转移秤校准、水分基准、时间和批次核对。
- 适用条件：声明产品采用湿制加工路线时必须纳入。
- 来源：`fediaf-recipes-processing`
- 来源键：`fediaf-recipes-processing`

###### 湿制路线工艺用水（`wet_route_process_water`）

将湿制路线工艺用水作为一项独立用水投入交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：湿制备料、灌装、灭菌或冷却的计量或批次记录供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 灭菌湿制产品净含量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 数据来源：路线水表和批次加水记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留水表校准、管线边界、批次分配和水源身份。
- 适用条件：条件适用：湿制路线作业消耗工艺水时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### 镀锡钢食品罐（`wet_tinplate_can`）

将 镀锡钢食品罐 作为一项独立包装组件投入记录，不与另一种包装材料合并。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Tin-plated steel food can
- 流属性/单位：Mass / kg
- 数量规则：该单一组件的领用质量，或件数乘以核实的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 灭菌湿制产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 数据来源：包装领用记录、组件件数和核实的组件质量
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留组件规格、单件质量抽样、件数核对和纸制品含水基准。
- 适用条件：条件适用：湿制产品灌装入镀锡钢罐时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### 铝制食品罐盖（`wet_aluminium_lid`）

将 铝制食品罐盖 作为一项独立包装组件投入记录，不与另一种包装材料合并。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Aluminium food-can lid
- 流属性/单位：Mass / kg
- 数量规则：该单一组件的领用质量，或件数乘以核实的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 灭菌湿制产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 数据来源：包装领用记录、组件件数和核实的组件质量
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留组件规格、单件质量抽样、件数核对和纸制品含水基准。
- 适用条件：条件适用：灭菌前使用铝盖时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### 聚丙烯食品托盘（`wet_polypropylene_tray`）

将 聚丙烯食品托盘 作为一项独立包装组件投入记录，不与另一种包装材料合并。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Polypropylene food tray
- 流属性/单位：Mass / kg
- 数量规则：该单一组件的领用质量，或件数乘以核实的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 灭菌湿制产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 数据来源：包装领用记录、组件件数和核实的组件质量
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留组件规格、单件质量抽样、件数核对和纸制品含水基准。
- 适用条件：条件适用：湿制产品灌装入聚丙烯托盘时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### 聚酰胺-聚乙烯蒸煮袋（`wet_retort_pouch`）

将 聚酰胺-聚乙烯蒸煮袋 作为一项独立包装组件投入记录，不与另一种包装材料合并。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Polyamide-polyethylene retort pouch
- 流属性/单位：Mass / kg
- 数量规则：该单一组件的领用质量，或件数乘以核实的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 灭菌湿制产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 数据来源：包装领用记录、组件件数和核实的组件质量
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留组件规格、单件质量抽样、件数核对和纸制品含水基准。
- 适用条件：条件适用：湿制产品灌装入该结构蒸煮袋时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### 湿制包装印刷纸标签（`wet_paper_label`）

将 印刷纸标签 作为一项独立包装组件投入记录，不与另一种包装材料合并。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Printed paper label
- 流属性/单位：Mass / kg
- 数量规则：该单一组件的领用质量，或件数乘以核实的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 灭菌湿制产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 数据来源：包装领用记录、组件件数和核实的组件质量
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留组件规格、单件质量抽样、件数核对和纸制品含水基准。
- 适用条件：条件适用：湿制初级包装使用印刷纸标签时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### 湿制路线电网电力（`wet_route_electricity`）

将制备、灌装、封口、灭菌、冷却和控制消耗的 电网电力 作为一项独立能源或公用工程交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：该电力交换的生产线计量量或场址总表分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 灭菌湿制产品净含量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carriers`
- 数据来源：该载体的生产线计量、场址计量、采购发票和分配记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留计量边界、校准、载体规格、分配因子和换算基准。
- 适用条件：条件适用：仅在制备、灌装、封口、灭菌、冷却和控制消耗 电网电力 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### 湿制路线外购蒸汽（`wet_route_purchased_steam`）

将蒸煮或热力灭菌消耗的 外购蒸汽 作为一项独立能源或公用工程交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：该单一载体的计量、采购或库存领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 灭菌湿制产品净含量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carriers`
- 数据来源：该载体的生产线计量、场址计量、采购发票和分配记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留计量边界、校准、载体规格、分配因子和换算基准。
- 适用条件：条件适用：仅在蒸煮或热力灭菌消耗 外购蒸汽 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### 湿制路线天然气（`wet_route_natural_gas`）

将湿制路线场内燃烧消耗的 天然气 作为一项独立能源或公用工程交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Natural gas
- 流属性/单位：Volume / m3
- 数量规则：该单一载体的计量、采购或库存领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 灭菌湿制产品净含量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carriers`
- 数据来源：该载体的生产线计量、场址计量、采购发票和分配记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留计量边界、校准、载体规格、分配因子和换算基准。
- 适用条件：条件适用：仅在湿制路线场内燃烧消耗 天然气 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### 湿制路线柴油（`wet_route_diesel`）

将湿制路线燃烧器或专用移动设备消耗的 柴油 作为一项独立能源或公用工程交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：该单一载体的计量、采购或库存领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 灭菌湿制产品净含量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carriers`
- 数据来源：该载体的生产线计量、场址计量、采购发票和分配记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留计量边界、校准、载体规格、分配因子和换算基准。
- 适用条件：条件适用：仅在湿制路线燃烧器或专用移动设备消耗 柴油 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### 湿制路线液化石油气（`wet_route_lpg`）

将湿制路线燃烧器消耗的 液化石油气 作为一项独立能源或公用工程交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：该单一载体的计量、采购或库存领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 灭菌湿制产品净含量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carriers`
- 数据来源：该载体的生产线计量、场址计量、采购发票和分配记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留计量边界、校准、载体规格、分配因子和换算基准。
- 适用条件：条件适用：仅在湿制路线燃烧器消耗 液化石油气 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

##### 废物流



##### 基本流



#### 输出

##### 产品流



###### 初级包装内的灭菌湿制宠物食品（`sterilised_wet_pet_food`）

将 初级包装内的湿制犬粮或猫粮 作为一项合格产品输出交换记录。

- Direction: 输出（`outputs`）
- Flow type: 产品（`product`）
- 选定流：Wet dog or cat food in primary packaging
- 流属性/单位：Mass / kg net pet-food content
- 数量规则：将实测合格净含量和单元件数与批次产量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 灭菌湿制产品净含量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_quality_yield`
- 数据来源：批次产量、转移和合格产品记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留秤校准、水分或净含量基准、不合格品和批次核对。
- 适用条件：声明产品采用湿制加工路线时必须纳入。
- 来源：`fediaf-recipes-processing`; `fediaf-nutritional-guidelines-2024`
- 来源键：`fediaf-recipes-processing`; `fediaf-nutritional-guidelines-2024`

##### 废物流



###### 不合格湿制宠物食品（`wet_product_reject`）

将 不合格湿制犬粮或猫粮 作为一项独立废物输出记录，并识别其处理去向。

- Direction: 输出（`outputs`）
- Flow type: 废物（`waste`）
- 选定流：Rejected wet dog or cat food
- 流属性/单位：Mass / kg
- 数量规则：按去向实测数量；内部返工不得计作外部废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 灭菌湿制产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_yield_losses`
- 数据来源：废物称量、批次核对、库存和转运记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留秤校准、组成身份、处理路线、含水基准和返工排除。
- 适用条件：条件适用：湿制产品被拒收且未作为内部返工返回时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`
- 来源键：`fediaf-pet-food-pefcr-2025`

###### 废镀锡钢罐（`wet_tinplate_scrap`）

将 废镀锡钢食品罐 作为一项独立废物输出记录，并识别其处理去向。

- Direction: 输出（`outputs`）
- Flow type: 废物（`waste`）
- 选定流：Waste tin-plated steel food can
- 流属性/单位：Mass / kg
- 数量规则：按去向实测数量；内部返工不得计作外部废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 灭菌湿制产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_yield_losses`
- 数据来源：废物称量、批次核对、库存和转运记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留秤校准、组成身份、处理路线、含水基准和返工排除。
- 适用条件：条件适用：拒收或修边产生的镀锡钢罐离场处理时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`
- 来源键：`fediaf-pet-food-pefcr-2025`

###### 废铝盖（`wet_aluminium_lid_scrap`）

将 废铝制食品罐盖 作为一项独立废物输出记录，并识别其处理去向。

- Direction: 输出（`outputs`）
- Flow type: 废物（`waste`）
- 选定流：Waste aluminium food-can lid
- 流属性/单位：Mass / kg
- 数量规则：按去向实测数量；内部返工不得计作外部废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 灭菌湿制产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_yield_losses`
- 数据来源：废物称量、批次核对、库存和转运记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留秤校准、组成身份、处理路线、含水基准和返工排除。
- 适用条件：条件适用：拒收铝盖离场处理时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`
- 来源键：`fediaf-pet-food-pefcr-2025`

###### 废聚丙烯托盘（`wet_polypropylene_tray_scrap`）

将 废聚丙烯食品托盘 作为一项独立废物输出记录，并识别其处理去向。

- Direction: 输出（`outputs`）
- Flow type: 废物（`waste`）
- 选定流：Waste polypropylene food tray
- 流属性/单位：Mass / kg
- 数量规则：按去向实测数量；内部返工不得计作外部废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 灭菌湿制产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_yield_losses`
- 数据来源：废物称量、批次核对、库存和转运记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留秤校准、组成身份、处理路线、含水基准和返工排除。
- 适用条件：条件适用：拒收聚丙烯托盘离场处理时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`
- 来源键：`fediaf-pet-food-pefcr-2025`

###### 废蒸煮袋（`wet_retort_pouch_scrap`）

将 废聚酰胺-聚乙烯蒸煮袋 作为一项独立废物输出记录，并识别其处理去向。

- Direction: 输出（`outputs`）
- Flow type: 废物（`waste`）
- 选定流：Waste polyamide-polyethylene retort pouch
- 流属性/单位：Mass / kg
- 数量规则：按去向实测数量；内部返工不得计作外部废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 灭菌湿制产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_yield_losses`
- 数据来源：废物称量、批次核对、库存和转运记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留秤校准、组成身份、处理路线、含水基准和返工排除。
- 适用条件：条件适用：拒收或裁切产生的蒸煮袋离场处理时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`
- 来源键：`fediaf-pet-food-pefcr-2025`

###### 废印刷纸标签（`wet_paper_label_scrap`）

将 废印刷纸标签 作为一项独立废物输出记录，并识别其处理去向。

- Direction: 输出（`outputs`）
- Flow type: 废物（`waste`）
- 选定流：Waste printed paper label
- 流属性/单位：Mass / kg
- 数量规则：按去向实测数量；内部返工不得计作外部废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 灭菌湿制产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_yield_losses`
- 数据来源：废物称量、批次核对、库存和转运记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留秤校准、组成身份、处理路线、含水基准和返工排除。
- 适用条件：条件适用：拒收纸标签离场处理时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`
- 来源键：`fediaf-pet-food-pefcr-2025`

##### 基本流



###### 湿制路线化石二氧化碳空气排放（`wet_route_co2_air`）

排放至空气的化石二氧化碳 由湿制路线场内燃烧跨越环境边界时，将其作为一项独立基本流交换记录。

- Direction: 输出（`outputs`）
- Flow type: 基本（`elementary`）
- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：污染物特定监测质量，或根据已记录源活动量及有文件依据的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 灭菌湿制产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 数据来源：场址监测、许可、燃料、维护或工程计算记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留监测方法或因子来源、源归属、时间覆盖和重复计算检查。
- 适用条件：条件适用：场内燃烧化石燃料时纳入，并排除上游燃料供应排放。
- 来源：`eu-recommendation-2021-2279`
- 来源键：`eu-recommendation-2021-2279`

###### 湿制路线氮氧化物空气排放（`wet_route_nox_air`）

排放至空气的氮氧化物 由湿制路线场内燃烧跨越环境边界时，将其作为一项独立基本流交换记录。

- Direction: 输出（`outputs`）
- Flow type: 基本（`elementary`）
- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg
- 数量规则：污染物特定监测质量，或根据已记录源活动量及有文件依据的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 灭菌湿制产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 数据来源：场址监测、许可、燃料、维护或工程计算记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留监测方法或因子来源、源归属、时间覆盖和重复计算检查。
- 适用条件：条件适用：湿制路线场内燃烧排放氮氧化物时纳入。
- 来源：`eu-recommendation-2021-2279`
- 来源键：`eu-recommendation-2021-2279`

###### 湿制路线二氧化硫空气排放（`wet_route_so2_air`）

排放至空气的二氧化硫 由湿制路线场内燃烧跨越环境边界时，将其作为一项独立基本流交换记录。

- Direction: 输出（`outputs`）
- Flow type: 基本（`elementary`）
- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：污染物特定监测质量，或根据已记录源活动量及有文件依据的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 灭菌湿制产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 数据来源：场址监测、许可、燃料、维护或工程计算记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留监测方法或因子来源、源归属、时间覆盖和重复计算检查。
- 适用条件：条件适用：所耗燃料及燃烧条件产生二氧化硫时纳入。
- 来源：`eu-recommendation-2021-2279`
- 来源键：`eu-recommendation-2021-2279`

###### 湿制路线 PM2.5 空气排放（`wet_route_pm25_air`）

排放至空气的粒径小于 2.5 微米颗粒物 由湿制路线燃烧或热加工跨越环境边界时，将其作为一项独立基本流交换记录。

- Direction: 输出（`outputs`）
- Flow type: 基本（`elementary`）
- 选定流：Particulate matter below 2.5 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：污染物特定监测质量，或根据已记录源活动量及有文件依据的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 灭菌湿制产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 数据来源：场址监测、许可、燃料、维护或工程计算记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留监测方法或因子来源、源归属、时间覆盖和重复计算检查。
- 适用条件：条件适用：湿制路线燃烧或热加工产生的 PM2.5 跨越场址空气边界时纳入。
- 来源：`eu-recommendation-2021-2279`
- 来源键：`eu-recommendation-2021-2279`
### 过程：零售与配送包装（`retail_packaging`）

#### 输入

##### 产品流



###### 进入最终包装的散装干制产品（`pack_bulk_dry_product`）

将进入最终包装的散装干制或半湿制产品作为一项路线投入记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Bulk dry or semi-moist dog or cat food
- 流属性/单位：Mass / kg net pet-food content
- 数量规则：实测转移产品净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_quality_yield`
- 数据来源：过程间转移和产品净质量记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留转移秤校准、水分基准和批次核对。
- 适用条件：条件适用：仅在干制或半湿制产品送往最终包装时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`
- 来源键：`fediaf-pet-food-pefcr-2025`

###### 进入最终包装的湿制产品（`pack_wet_product`）

将已在初级包装内、进入最终包装的湿制产品作为一项路线投入记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Wet dog or cat food in primary packaging
- 流属性/单位：Mass / kg net pet-food content
- 数量规则：实测转移产品净质量和单元件数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_quality_yield`
- 数据来源：过程间转移、件数和产品净质量记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留件数核对、净含量检查和批次关联。
- 适用条件：条件适用：仅在湿制产品送往最终包装时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`
- 来源键：`fediaf-pet-food-pefcr-2025`

###### 低密度聚乙烯宠物食品袋（`pack_ldpe_bag`）

将 低密度聚乙烯宠物食品袋 作为一项独立包装组件投入记录，不与另一种包装材料合并。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Low-density polyethylene pet-food bag
- 流属性/单位：Mass / kg
- 数量规则：该单一组件的领用质量，或件数乘以核实的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 数据来源：包装领用记录、组件件数和核实的组件质量
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留组件规格、单件质量抽样、件数核对和纸制品含水基准。
- 适用条件：条件适用：声明包装配置使用 LDPE 袋时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### 印刷纸标签（`pack_paper_label`）

将 印刷纸标签 作为一项独立包装组件投入记录，不与另一种包装材料合并。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Printed paper label
- 流属性/单位：Mass / kg
- 数量规则：该单一组件的领用质量，或件数乘以核实的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 数据来源：包装领用记录、组件件数和核实的组件质量
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留组件规格、单件质量抽样、件数核对和纸制品含水基准。
- 适用条件：条件适用：最终包装使用印刷纸标签时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### 纸板折叠纸盒（`pack_folding_carton`）

将 纸板折叠纸盒 作为一项独立包装组件投入记录，不与另一种包装材料合并。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Paperboard folding carton
- 流属性/单位：Mass / kg
- 数量规则：该单一组件的领用质量，或件数乘以核实的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 数据来源：包装领用记录、组件件数和核实的组件质量
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留组件规格、单件质量抽样、件数核对和纸制品含水基准。
- 适用条件：条件适用：声明包装配置使用折叠纸盒时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### 瓦楞纸板运输箱（`pack_corrugated_shipper`）

将 瓦楞纸板运输箱 作为一项独立包装组件投入记录，不与另一种包装材料合并。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Corrugated paperboard shipping carton
- 流属性/单位：Mass / kg
- 数量规则：该单一组件的领用质量，或件数乘以核实的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 数据来源：包装领用记录、组件件数和核实的组件质量
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留组件规格、单件质量抽样、件数核对和纸制品含水基准。
- 适用条件：条件适用：使用瓦楞运输箱时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### 低密度聚乙烯收缩膜（`pack_ldpe_shrink_film`）

将 低密度聚乙烯收缩膜 作为一项独立包装组件投入记录，不与另一种包装材料合并。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Low-density polyethylene shrink film
- 流属性/单位：Mass / kg
- 数量规则：该单一组件的领用质量，或件数乘以核实的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 数据来源：包装领用记录、组件件数和核实的组件质量
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留组件规格、单件质量抽样、件数核对和纸制品含水基准。
- 适用条件：条件适用：捆扎或托盘固定使用 LDPE 收缩膜时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### 木托盘（`pack_wood_pallet`）

将 木托盘 作为一项独立包装组件投入记录，不与另一种包装材料合并。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Wooden pallet
- 流属性/单位：Mass / kg
- 数量规则：该单一组件的领用质量，或件数乘以核实的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 数据来源：包装领用记录、组件件数和核实的组件质量
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留组件规格、单件质量抽样、件数核对和纸制品含水基准。
- 适用条件：条件适用：声明包装系统消耗木托盘时纳入其分配份额。
- 来源：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### 包装线电网电力（`packaging_electricity`）

将灌装、封口、喷码、装箱、码垛和包装控制消耗的 电网电力 作为一项独立能源或公用工程交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：该电力交换的生产线计量量或场址总表分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carriers`
- 数据来源：该载体的生产线计量、场址计量、采购发票和分配记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留计量边界、校准、载体规格、分配因子和换算基准。
- 适用条件：条件适用：仅在灌装、封口、喷码、装箱、码垛和包装控制消耗 电网电力 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`
- 来源键：`fediaf-pet-food-pefcr-2025`

##### 废物流



##### 基本流



#### 输出

##### 产品流



###### 零售就绪犬粮或猫粮（`retail_ready_pet_food`）

将 零售包装的犬粮或猫粮 作为一项合格产品输出交换记录。

- Direction: 输出（`outputs`）
- Flow type: 产品（`product`）
- 选定流：Dog or cat food, put up for retail sale `a044700b-9c04-49d8-8842-c967c80099d4`
- 流属性/单位：Mass / kg
- 数量规则：实测合格产量归一化后，参考输出固定为 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 数据来源：合格净产出记录和第 3 节已核验参考流身份
- UUID 状态：已核验参考产品流；质量属性和质量单位组继续按第 3 节固定。
- 不确定性：保留净含量校准、合格产量核对和包装质量明确排除记录。
- 适用条件：本 PCR 下每个数据集均必须包含该参考输出。
- 来源：`fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`
- 来源键：`fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`

##### 废物流



###### 废低密度聚乙烯薄膜（`pack_ldpe_scrap`）

将 废低密度聚乙烯薄膜 作为一项独立废物输出记录，并识别其处理去向。

- Direction: 输出（`outputs`）
- Flow type: 废物（`waste`）
- 选定流：Waste low-density polyethylene film
- 流属性/单位：Mass / kg
- 数量规则：按去向实测数量；内部返工不得计作外部废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_yield_losses`
- 数据来源：废物称量、批次核对、库存和转运记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留秤校准、组成身份、处理路线、含水基准和返工排除。
- 适用条件：条件适用：LDPE 袋或收缩膜废料离场处理时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`
- 来源键：`fediaf-pet-food-pefcr-2025`

###### 废印刷纸标签（`pack_paper_label_scrap`）

将 废印刷纸标签 作为一项独立废物输出记录，并识别其处理去向。

- Direction: 输出（`outputs`）
- Flow type: 废物（`waste`）
- 选定流：Waste printed paper label
- 流属性/单位：Mass / kg
- 数量规则：按去向实测数量；内部返工不得计作外部废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_yield_losses`
- 数据来源：废物称量、批次核对、库存和转运记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留秤校准、组成身份、处理路线、含水基准和返工排除。
- 适用条件：条件适用：拒收印刷纸标签离场处理时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`
- 来源键：`fediaf-pet-food-pefcr-2025`

###### 废纸板折叠纸盒（`pack_folding_carton_scrap`）

将 废纸板折叠纸盒 作为一项独立废物输出记录，并识别其处理去向。

- Direction: 输出（`outputs`）
- Flow type: 废物（`waste`）
- 选定流：Waste paperboard folding carton
- 流属性/单位：Mass / kg
- 数量规则：按去向实测数量；内部返工不得计作外部废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_yield_losses`
- 数据来源：废物称量、批次核对、库存和转运记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留秤校准、组成身份、处理路线、含水基准和返工排除。
- 适用条件：条件适用：折叠纸盒废料离场处理时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`
- 来源键：`fediaf-pet-food-pefcr-2025`

###### 废瓦楞纸板（`pack_corrugated_scrap`）

将 废瓦楞纸板 作为一项独立废物输出记录，并识别其处理去向。

- Direction: 输出（`outputs`）
- Flow type: 废物（`waste`）
- 选定流：Waste corrugated paperboard
- 流属性/单位：Mass / kg
- 数量规则：按去向实测数量；内部返工不得计作外部废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_yield_losses`
- 数据来源：废物称量、批次核对、库存和转运记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留秤校准、组成身份、处理路线、含水基准和返工排除。
- 适用条件：条件适用：瓦楞纸板废料离场处理时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`
- 来源键：`fediaf-pet-food-pefcr-2025`

###### 废木质包装（`pack_wood_waste`）

将 废木质包装 作为一项独立废物输出记录，并识别其处理去向。

- Direction: 输出（`outputs`）
- Flow type: 废物（`waste`）
- 选定流：Waste wooden packaging
- 流属性/单位：Mass / kg
- 数量规则：按去向实测数量；内部返工不得计作外部废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_yield_losses`
- 数据来源：废物称量、批次核对、库存和转运记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留秤校准、组成身份、处理路线、含水基准和返工排除。
- 适用条件：条件适用：分配的破损或废弃木质包装离场处理时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`
- 来源键：`fediaf-pet-food-pefcr-2025`

###### 不合格包装宠物食品（`pack_product_reject`）

将 不合格包装犬粮或猫粮 作为一项独立废物输出记录，并识别其处理去向。

- Direction: 输出（`outputs`）
- Flow type: 废物（`waste`）
- 选定流：Rejected packaged dog or cat food
- 流属性/单位：Mass / kg
- 数量规则：按去向实测数量；内部返工不得计作外部废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_yield_losses`
- 数据来源：废物称量、批次核对、库存和转运记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留秤校准、组成身份、处理路线、含水基准和返工排除。
- 适用条件：条件适用：拒收包装单元离场处理且不返工时纳入其宠物食品净含量。
- 来源：`fediaf-pet-food-pefcr-2025`
- 来源键：`fediaf-pet-food-pefcr-2025`

##### 基本流


### 过程：场址支持、卫生与损失管理（`site_support_losses`）

#### 输入

##### 产品流



###### 场址共用电网电力（`site_grid_electricity`）

将制冷、压缩空气制备、通风、照明、水处理和共用控制消耗的 电网电力 作为一项独立能源或公用工程交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：该电力交换的生产线计量量或场址总表分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carriers`
- 数据来源：该载体的生产线计量、场址计量、采购发票和分配记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留计量边界、校准、载体规格、分配因子和换算基准。
- 适用条件：条件适用：仅在制冷、压缩空气制备、通风、照明、水处理和共用控制消耗 电网电力 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016`

###### 场址共用外购蒸汽（`site_purchased_steam`）

将共用锅炉、清洗或热支持消耗的 外购蒸汽 作为一项独立能源或公用工程交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：该单一载体的计量、采购或库存领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carriers`
- 数据来源：该载体的生产线计量、场址计量、采购发票和分配记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留计量边界、校准、载体规格、分配因子和换算基准。
- 适用条件：条件适用：仅在共用锅炉、清洗或热支持消耗 外购蒸汽 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016`

###### 场址共用外购热水（`site_purchased_hot_water`）

将共用清洗或热支持消耗的 外购热水 作为一项独立能源或公用工程交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：该单一载体的计量、采购或库存领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carriers`
- 数据来源：该载体的生产线计量、场址计量、采购发票和分配记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留计量边界、校准、载体规格、分配因子和换算基准。
- 适用条件：条件适用：仅在共用清洗或热支持消耗 外购热水 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016`

###### 场址共用外购冷冻水（`site_purchased_chilled_water`）

将共用工艺或冷库冷却消耗的 外购冷冻水 作为一项独立能源或公用工程交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Purchased chilled water
- 流属性/单位：Energy / MJ
- 数量规则：该单一载体的计量、采购或库存领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carriers`
- 数据来源：该载体的生产线计量、场址计量、采购发票和分配记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留计量边界、校准、载体规格、分配因子和换算基准。
- 适用条件：条件适用：仅在共用工艺或冷库冷却消耗 外购冷冻水 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016`

###### 场址共用天然气（`site_natural_gas`）

将场址共用设施场内燃烧消耗的 天然气 作为一项独立能源或公用工程交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Natural gas
- 流属性/单位：Volume / m3
- 数量规则：该单一载体的计量、采购或库存领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carriers`
- 数据来源：该载体的生产线计量、场址计量、采购发票和分配记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留计量边界、校准、载体规格、分配因子和换算基准。
- 适用条件：条件适用：仅在场址共用设施场内燃烧消耗 天然气 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016`

###### 场址共用柴油（`site_diesel`）

将共用发电机、燃烧器或场址控制的移动设备消耗的 柴油 作为一项独立能源或公用工程交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：该单一载体的计量、采购或库存领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carriers`
- 数据来源：该载体的生产线计量、场址计量、采购发票和分配记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留计量边界、校准、载体规格、分配因子和换算基准。
- 适用条件：条件适用：仅在共用发电机、燃烧器或场址控制的移动设备消耗 柴油 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016`

###### 场址共用液化石油气（`site_lpg`）

将共用燃烧器消耗的 液化石油气 作为一项独立能源或公用工程交换记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：该单一载体的计量、采购或库存领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carriers`
- 数据来源：该载体的生产线计量、场址计量、采购发票和分配记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留计量边界、校准、载体规格、分配因子和换算基准。
- 适用条件：条件适用：仅在共用燃烧器消耗 液化石油气 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016`
- 来源键：`fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016`

###### 制冷剂氨 R-717（`site_refrigerant_r717`）

将场址控制制冷系统充注的氨制冷剂 R-717 作为一项独立产品投入记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Refrigerant ammonia (R-717)
- 流属性/单位：Mass / kg
- 数量规则：分配至产品的实测充注、补充或库存平衡质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carriers`
- 数据来源：制冷剂采购、充注、回收和维护日志
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留钢瓶核对、回收质量、设备归属和报告期库存平衡。
- 适用条件：条件适用：场址控制设备使用氨 R-717 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`
- 来源键：`fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`

###### 制冷剂 R-134a（`site_refrigerant_r134a`）

将场址控制制冷系统充注的制冷剂 R-134a 作为一项独立产品投入记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Refrigerant R-134a
- 流属性/单位：Mass / kg
- 数量规则：分配至产品的实测充注、补充或库存平衡质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carriers`
- 数据来源：制冷剂采购、充注、回收和维护日志
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留钢瓶核对、回收质量、设备归属和报告期库存平衡。
- 适用条件：条件适用：场址控制设备使用制冷剂 R-134a 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`
- 来源键：`fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`

###### 制冷剂 R-404A（`site_refrigerant_r404a`）

将场址控制制冷系统充注的制冷剂 R-404A 作为一项独立产品投入记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Refrigerant R-404A
- 流属性/单位：Mass / kg
- 数量规则：分配至产品的实测充注、补充或库存平衡质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carriers`
- 数据来源：制冷剂采购、充注、回收和维护日志
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留钢瓶核对、回收质量、设备归属和报告期库存平衡。
- 适用条件：条件适用：场址控制设备使用制冷剂 R-404A 时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`
- 来源键：`fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`

###### 卫生工艺用水（`sanitation_water`）

将产品接触面和场址卫生所用工艺水作为一项独立用水投入记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：分配至产品的计量或清洗日志用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_records`
- 数据来源：卫生用水表和清洗日志
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留水表校准、清洗周期数、共用区域分配和水源身份。
- 适用条件：分配至产品的卫生用水必须纳入。
- 来源：`fediaf-pet-food-pefcr-2025`
- 来源键：`fediaf-pet-food-pefcr-2025`

###### 氢氧化钠清洗化学品（`sanitation_sodium_hydroxide`）

将卫生作业使用的氢氧化钠作为一项独立化学品投入记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：根据卫生记录分配的库存领用活性物质质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_records`
- 数据来源：化学品领用记录、浓度证明和清洗日志
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留产品浓度、稀释计算、领用量、退回量和分配。
- 适用条件：条件适用：卫生作业消耗氢氧化钠时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`
- 来源键：`fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`

###### 硝酸清洗化学品（`sanitation_nitric_acid`）

将卫生作业使用的硝酸作为一项独立化学品投入记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Nitric acid
- 流属性/单位：Mass / kg
- 数量规则：根据卫生记录分配的库存领用活性物质质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_records`
- 数据来源：化学品领用记录、浓度证明和清洗日志
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留产品浓度、稀释计算、领用量、退回量和分配。
- 适用条件：条件适用：卫生作业消耗硝酸时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`
- 来源键：`fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`

###### 过氧乙酸消毒剂（`sanitation_peracetic_acid`）

将卫生作业使用的过氧乙酸作为一项独立化学品投入记录。

- Direction: 输入（`inputs`）
- Flow type: 产品（`product`）
- 选定流：Peracetic acid
- 流属性/单位：Mass / kg
- 数量规则：根据卫生记录分配的库存领用活性物质质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_records`
- 数据来源：化学品领用记录、浓度证明和卫生日志
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留产品浓度、稀释计算、领用量、退回量和分配。
- 适用条件：条件适用：消耗过氧乙酸作为消毒剂时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`
- 来源键：`fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`

##### 废物流



##### 基本流



#### 输出

##### 产品流



##### 废物流



###### 制造废水（`manufacturing_wastewater`）

将 制造废水 作为一项独立废物输出记录，并识别其处理去向。

- Direction: 输出（`outputs`）
- Flow type: 废物（`waste`）
- 选定流：Manufacturing wastewater
- 流属性/单位：Volume / m3
- 数量规则：计量排放体积，或分配至有记录处理路线的水量平衡值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_waste`
- 数据来源：排水计量、水量平衡、采样和处理去向记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留仪表校准、排放边界、采样覆盖、处理去向和水量平衡。
- 适用条件：废水离开前景系统进入下水道或处理时必须纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`
- 来源键：`fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`

###### 宠物食品地面清扫物（`site_floor_sweepings`）

将 宠物食品地面清扫物 作为一项独立废物输出记录，并识别其处理去向。

- Direction: 输出（`outputs`）
- Flow type: 废物（`waste`）
- 选定流：Pet-food floor sweepings
- 流属性/单位：Mass / kg
- 数量规则：按去向实测数量；内部返工不得计作外部废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_waste`
- 数据来源：废物称量、批次核对、库存和转运记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留秤校准、组成身份、处理路线、含水基准和返工排除。
- 适用条件：条件适用：地面清扫物离场处理时纳入.
- 来源：`fediaf-pet-food-pefcr-2025`
- 来源键：`fediaf-pet-food-pefcr-2025`

###### 废水处理污泥（`site_wastewater_sludge`）

将 宠物食品制造废水处理污泥 作为一项独立废物输出记录，并识别其处理去向。

- Direction: 输出（`outputs`）
- Flow type: 废物（`waste`）
- 选定流：Pet-food manufacturing wastewater-treatment sludge
- 流属性/单位：Mass / kg
- 数量规则：按去向实测数量；内部返工不得计作外部废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_waste`
- 数据来源：废物称量、批次核对、库存和转运记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留秤校准、组成身份、处理路线、含水基准和返工排除。
- 适用条件：条件适用：废水处理污泥离场处理时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`
- 来源键：`fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`

###### 废聚丙烯清洁擦拭布（`site_used_cleaning_wipes`）

将 废聚丙烯清洁擦拭布 作为一项独立废物输出记录，并识别其处理去向。

- Direction: 输出（`outputs`）
- Flow type: 废物（`waste`）
- 选定流：Used polypropylene cleaning wipes
- 流属性/单位：Mass / kg
- 数量规则：按去向实测数量；内部返工不得计作外部废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_waste`
- 数据来源：废物称量、批次核对、库存和转运记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留秤校准、组成身份、处理路线、含水基准和返工排除。
- 适用条件：条件适用：使用后的聚丙烯清洁擦拭布离场处理时纳入。
- 来源：`fediaf-pet-food-pefcr-2025`
- 来源键：`fediaf-pet-food-pefcr-2025`

##### 基本流



###### 场址共用化石二氧化碳空气排放（`site_co2_air`）

排放至空气的化石二氧化碳 由场址共用设施场内燃烧跨越环境边界时，将其作为一项独立基本流交换记录。

- Direction: 输出（`outputs`）
- Flow type: 基本（`elementary`）
- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：污染物特定监测质量，或根据已记录源活动量及有文件依据的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 数据来源：场址监测、许可、燃料、维护或工程计算记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留监测方法或因子来源、源归属、时间覆盖和重复计算检查。
- 适用条件：条件适用：场址共用设施燃烧化石燃料时纳入，并排除上游燃料供应排放。
- 来源：`eu-recommendation-2021-2279`
- 来源键：`eu-recommendation-2021-2279`

###### 场址共用氮氧化物空气排放（`site_nox_air`）

排放至空气的氮氧化物 由场址共用设施场内燃烧跨越环境边界时，将其作为一项独立基本流交换记录。

- Direction: 输出（`outputs`）
- Flow type: 基本（`elementary`）
- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg
- 数量规则：污染物特定监测质量，或根据已记录源活动量及有文件依据的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 数据来源：场址监测、许可、燃料、维护或工程计算记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留监测方法或因子来源、源归属、时间覆盖和重复计算检查。
- 适用条件：条件适用：场址共用设施场内燃烧排放氮氧化物时纳入。
- 来源：`eu-recommendation-2021-2279`
- 来源键：`eu-recommendation-2021-2279`

###### 场址共用二氧化硫空气排放（`site_so2_air`）

排放至空气的二氧化硫 由场址共用设施场内燃烧跨越环境边界时，将其作为一项独立基本流交换记录。

- Direction: 输出（`outputs`）
- Flow type: 基本（`elementary`）
- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：污染物特定监测质量，或根据已记录源活动量及有文件依据的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 数据来源：场址监测、许可、燃料、维护或工程计算记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留监测方法或因子来源、源归属、时间覆盖和重复计算检查。
- 适用条件：条件适用：场址共用设施所耗燃料及燃烧条件产生二氧化硫时纳入。
- 来源：`eu-recommendation-2021-2279`
- 来源键：`eu-recommendation-2021-2279`

###### 场址共用 PM2.5 空气排放（`site_pm25_air`）

排放至空气的粒径小于 2.5 微米颗粒物 由场址共用设施场内燃烧跨越环境边界时，将其作为一项独立基本流交换记录。

- Direction: 输出（`outputs`）
- Flow type: 基本（`elementary`）
- 选定流：Particulate matter below 2.5 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：污染物特定监测质量，或根据已记录源活动量及有文件依据的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 数据来源：场址监测、许可、燃料、维护或工程计算记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留监测方法或因子来源、源归属、时间覆盖和重复计算检查。
- 适用条件：条件适用：场址共用设施场内燃烧产生的 PM2.5 跨越场址空气边界时纳入。
- 来源：`eu-recommendation-2021-2279`
- 来源键：`eu-recommendation-2021-2279`

###### 氨 R-717 制冷剂空气排放（`site_r717_air`）

排放至空气的氨（R-717） 由场址控制制冷系统跨越环境边界时，将其作为一项独立基本流交换记录。

- Direction: 输出（`outputs`）
- Flow type: 基本（`elementary`）
- 选定流：Ammonia (R-717) to air
- 流属性/单位：Mass / kg
- 数量规则：根据充注、回收和库存平衡计算的该制冷剂未回收损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 数据来源：制冷剂充注、回收、检漏和库存平衡记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留钢瓶核对、回收质量、检漏覆盖、设备归属和库存闭合。
- 适用条件：条件适用：R-717 库存平衡识别出跨越场址空气边界的未回收损失时纳入。
- 来源：`eu-recommendation-2021-2279`
- 来源键：`eu-recommendation-2021-2279`

###### 制冷剂 R-134a 空气排放（`site_r134a_air`）

排放至空气的制冷剂 R-134a 由场址控制制冷系统跨越环境边界时，将其作为一项独立基本流交换记录。

- Direction: 输出（`outputs`）
- Flow type: 基本（`elementary`）
- 选定流：Refrigerant R-134a to air
- 流属性/单位：Mass / kg
- 数量规则：根据充注、回收和库存平衡计算的该制冷剂未回收损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 数据来源：制冷剂充注、回收、检漏和库存平衡记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留钢瓶核对、回收质量、检漏覆盖、设备归属和库存闭合。
- 适用条件：条件适用：R-134a 库存平衡识别出跨越场址空气边界的未回收损失时纳入。
- 来源：`eu-recommendation-2021-2279`
- 来源键：`eu-recommendation-2021-2279`

###### 制冷剂 R-404A 空气排放（`site_r404a_air`）

排放至空气的制冷剂 R-404A 由场址控制制冷系统跨越环境边界时，将其作为一项独立基本流交换记录。

- Direction: 输出（`outputs`）
- Flow type: 基本（`elementary`）
- 选定流：Refrigerant R-404A to air
- 流属性/单位：Mass / kg
- 数量规则：根据充注、回收和库存平衡计算的该制冷剂未回收损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 数据来源：制冷剂充注、回收、检漏和库存平衡记录
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留钢瓶核对、回收质量、检漏覆盖、设备归属和库存闭合。
- 适用条件：条件适用：R-404A 库存平衡识别出跨越场址空气边界的未回收损失时纳入。
- 来源：`eu-recommendation-2021-2279`
- 来源键：`eu-recommendation-2021-2279`

###### 排放至水体的化学需氧量（`site_cod_water`）

排放至水体的化学需氧量 由直接排放的处理后出水跨越环境边界时，将其作为一项独立基本流交换记录。

- Direction: 输出（`outputs`）
- Flow type: 基本（`elementary`）
- 选定流：Chemical oxygen demand to water
- 流属性/单位：Mass / kg
- 数量规则：排放体积乘以具有代表性的实测化学需氧量浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 数据来源：排水流量计和代表性实验室分析
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留采样频率、实验室方法、流量加权、排放边界和处理周期。
- 适用条件：条件适用：仅在处理后出水直接进入环境水体时纳入。
- 来源：`eu-recommendation-2021-2279`
- 来源键：`eu-recommendation-2021-2279`

###### 排放至水体的总氮（`site_total_n_water`）

排放至水体的总氮 由直接排放的处理后出水跨越环境边界时，将其作为一项独立基本流交换记录。

- Direction: 输出（`outputs`）
- Flow type: 基本（`elementary`）
- 选定流：Total nitrogen to water
- 流属性/单位：Mass / kg
- 数量规则：排放体积乘以具有代表性的实测总氮浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 数据来源：排水流量计和代表性实验室分析
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留采样频率、实验室方法、流量加权、排放边界和处理周期。
- 适用条件：条件适用：仅在处理后出水直接进入环境水体时纳入。
- 来源：`eu-recommendation-2021-2279`
- 来源键：`eu-recommendation-2021-2279`

###### 排放至水体的总磷（`site_total_p_water`）

排放至水体的总磷 由直接排放的处理后出水跨越环境边界时，将其作为一项独立基本流交换记录。

- Direction: 输出（`outputs`）
- Flow type: 基本（`elementary`）
- 选定流：Total phosphorus to water
- 流属性/单位：Mass / kg
- 数量规则：排放体积乘以具有代表性的实测总磷浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格宠物食品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 数据来源：排水流量计和代表性实验室分析
- UUID 状态：未解析；本行尚未通过两项规定的语义核验确认精确的公开状态 100 天工身份，因此省略 UUID。
- 不确定性：保留采样频率、实验室方法、流量加权、排放边界和处理周期。
- 适用条件：条件适用：仅在处理后出水直接进入环境水体时纳入。
- 来源：`eu-recommendation-2021-2279`
- 来源键：`eu-recommendation-2021-2279`

## 7. 分配与共产品处理

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 所有共用和多功能过程 | 只要投入、产出、废物或排放能够归属于单一产品或生产线，就应通过过程细分、单独计量、批次记录或直接归属避免分配。 | `eu-recommendation-2021-2279`; `fao-leap-feed-2016` |
| `allocation_route_specific` | 干制、湿制和半湿制生产线 | 保持路线特定加工相互分离。除非有实测共用过程确实同时服务不同路线，不得将干制路线负荷分配给湿制产品，反之亦然。 | `fediaf-pet-food-pefcr-2025` |
| `allocation_shared_utilities` | 共用电力、燃料、水、卫生与支持服务 | 优先使用产品特定仪表或运行记录。无法直接归属时，按相同场址和期间的合格净产出质量分配共用制造公用工程，并披露包含的产品。 | `fediaf-pet-food-pefcr-2025` |
| `allocation_physical_causality` | 不能用产出质量表示的共用过程 | 仅当另一物理参数能够解释共用过程的因果使用关系时使用该参数，并记录参数、期间以及与场址总量的核对。 | `fao-leap-feed-2016` |
| `allocation_economic_fallback` | 无可辩护物理因果关系的多功能产出 | 仅在证明过程细分和物理因果分配均不可行后使用经济分配；披露价格、平均期间、共产品分组，并为比较用途提供敏感性分析。 | `fao-leap-feed-2016` |
| `allocation_rework_and_waste` | 返工料、残余物和废物 | 内部返工料保留已有负荷，不获得新的共产品抵扣。纳入离开系统废物的收集、运输和处理负荷；除非下游研究明确采用兼容的系统扩展规则，不得计入避免负荷抵扣。 | `fao-leap-feed-2016`; `eu-recommendation-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_formula_materials` | `formulation_preparation` | 配料和饲料原料输入 | 批次配方和物料领用记录 | 物料 id；供应商；来源；批号；接收状态质量；可用时的水分或干物质；退回数量 | 核对批准配方、仓库领用、退回和批次记录 | kg | 每批 | 具有代表性的生产期，通常至少连续 12 个月，或有理由的季节性生产期 | 数据集范围内每个场址和生产线 | 按物料汇总净领用质量，并除以合格净产出 | 签署的批次记录；库存核对；供应商规格 |
| `cp_process_water` | `formulation_preparation`; `dry_route_processing`; `wet_route_processing` | 添加水和工艺用水 | 仪表和批次记录 | 仪表 id；起止读数；批次 id；过程；数量；循环量 | 读取经校准仪表或有记录的批次配水系统 | m3 或 kg | 连续或每批 | 与产品产出相同期间 | 每个纳入的场址和工艺线 | 适用时扣除单独计量的循环量，并将净供水归一化到产出 | 仪表校准；配水记录；水量平衡 |
| `cp_energy_carriers` | `dry_route_processing`; `wet_route_processing`; `retail_packaging`; `site_support_losses` | 电力、燃料、蒸汽与场内发电 | 仪表、发票和燃料库存记录 | 载体；仪表；数量；单位；供应商；发电；外送；生产线或场址；期间 | 可用时采集生产线仪表，并与场址发票及库存变化核对 | kWh、MJ、kg 或 m3 | 连续、每月或每次交付 | 与产品产出相同期间并代表正常运行 | 每个纳入场址，区分生产线和场址共用量 | 直接归属生产线仪表；按第 7 节分配核对后的共用余量 | 校准；发票；仪表层级；能源平衡 |
| `cp_packaging_materials` | `wet_route_processing`; `retail_packaging` | 包装投入与损失 | 包装物料清单和领用记录 | 组件 id；材料；包装层级；件数；单件质量；领用质量；退回质量；废料 | 将产品包装规格、领用数量与核实的样品或供应商质量结合 | 件和 kg | 每次包装运行或批次 | 与产品产出相同期间 | 范围内每种包装配置 | 件数换算为质量，扣除核实的退回量，并归一化到产品净产出 | 批准的包装规格；样品称量记录；库存核对 |
| `cp_product_quality_yield` | `dry_route_processing`; `wet_route_processing`; `retail_packaging` | 合格产出与产品限定信息 | 批次产量、实验室和标签记录 | 物种；饲喂用途；生命阶段；路线；产品质量；单元数；净含量；水分；代谢能；放行状态 | 使用有记录的方法采集放行批次质量和质量结果 | kg；水分百分比；kcal ME/kg | 每个放行批次 | 与清单投入相同期间 | 范围内每个产品族、路线和场址 | 汇总合格放行净含量，不将拒收产品计入分母 | 校准秤；实验室报告；批准标签；批次放行记录 |
| `cp_batch_yield_losses` | `formulation_preparation`; `dry_route_processing`; `wet_route_processing`; `retail_packaging` | 转移、返工与制造损失 | 批次物料平衡和废物记录 | 投入质量；转移质量；合格产出；返工投入与产出；损失质量；废物类型；去向 | 核对相邻过程转移，并按去向称量损失 | kg | 每批，并按期间核对 | 与产品产出相同期间 | 每条纳入生产线和场址 | 汇总时不重复计算内部转移或返工，并将外部损失归一化到产出 | 批次核对；秤记录；废物票据；返工台账 |
| `cp_sanitation_records` | `site_support_losses` | 卫生用水和材料 | 清洁计划、配药日志和物料领用 | 区域或设备；清洁事件；水；化学品 id；浓度；领用量；回收量 | 采集自动清洗系统记录，或签署的卫生日志和物料领用记录 | m3 和 kg | 每次清洁事件 | 与产品产出相同期间 | 范围内所有共用和生产线特定卫生作业 | 直接归属生产线事件；按第 7 节分配共用事件 | 配药校准；清洁日志；化学品库存核对 |
| `cp_wastewater_waste` | `site_support_losses` | 废水以及固体或危险废物 | 排放仪表、分析报告和废物装运记录 | 废物 id；数量；水量；污染负荷；处理路线；承运方；目的地 | 采集计量排放和称量装运记录；核对场内处理转移 | m3 和 kg | 连续、每次装运或许可报告间隔 | 与产品产出相同期间 | 每个纳入场址 | 按废物身份和处理路线汇总；防止在产生和处理产出之间重复计算 | 仪表校准；实验室分析；联单；承包商收据 |
| `cp_direct_emissions` | `formulation_preparation`; `dry_route_processing`; `wet_route_processing`; `site_support_losses` | 直接基本流排放 | 监测、许可、燃料、制冷剂和工程记录 | 污染物；环境介质；实测浓度或因子；活动量；计算方法；期间 | 优先直接监测；否则采用与采集活动量相连的有记录物料平衡或工程计算 | kg 污染物 | 监测或报告间隔 | 与产品产出相同期间 | 数据集范围内每个排放源 | 计算污染物质量，与许可报告核对，并且仅对共用排放源进行分配 | 校准；实验室报告；许可申报；计算工作簿 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 期间或批次数量 / 合格宠物食品净产出 | 采集数量；合格净产出质量 | 每 1 kg 参考产品的数量 | `fediaf-pet-food-pefcr-2025` |
| `calc_packaging_mass` | 包装件数记录 | 包装质量 = 领用件数 × 核实的单件质量，再扣除退回的合格组件；结果应与包装库存领用核对 | 件数；单件质量；退回量；领用质量 | 每 1 kg 宠物食品净产出的包装 kg 数 | `fediaf-pet-food-pefcr-2025` |
| `calc_energy_conversion` | 燃料与外购热能 | 载体能量 = 采集的载体数量 × 有记录的低位热值或供应商能量含量；保留原始数量和因子 | 载体数量；换算因子；因子来源 | 按载体的 MJ 和原始载体数量 | `eu-recommendation-2021-2279` |
| `calc_shared_allocation` | 场址共用投入与排放 | 分配数量 = 核对后的共用总量 × 所选物理分配份额；除非另一因果参数有充分理由，默认按合格生产质量分配 | 共用总量；产品产出；分配参数 | 按产品族分配的数量 | `fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016` |
| `calc_mass_balance` | 每个过程和整个制造系统 | 物料平衡残差 = 总物料投入 + 内部转入 − 合格产出 − 内部转出 − 实测返工库存变化 − 实测废物 − 实测直接质量排放 | 配料、水、包装、转移、产出、返工、废物和排放记录 | 披露的残差和核对状态 | `eu-recommendation-2021-2279` |
| `calc_daily_ration_equivalence` | 下游完整宠物食品 PEF 使用 | 一日摄入质量 = 声明的每日代谢能需求 / 实测或经证明的产品代谢能密度 | 每日能量需求；kcal ME/kg；目标物种和体重基准 | 每个声明一日摄入量的产品 kg 数 | `fediaf-pet-food-pefcr-2025`; `fediaf-nutritional-guidelines-2024` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留产品、物种、完整型或补充型状态、生命阶段、路线、水分、代谢能方法、净含量、配方或产品族、包装、场址、地理范围和报告期。 | 批准的规格、标签和批次放行记录 |
| `dq_primary_foreground` | 场址控制过程 | 对制造商控制或直接影响的过程使用场址或供应链特定的一手数据；解释每次使用二手数据替代的原因。 | 仪表、发票、批次记录、工程记录和替代日志 |
| `dq_temporal_representativeness` | 所有前景记录 | 覆盖能代表正常生产的期间，并披露停机、试验、异常损失、季节性生产和排除批次。 | 生产日历和覆盖核对 |
| `dq_completeness` | 物料与能源清单 | 将采购和领用物料、能源、水、产品产出、返工、包装、废物、废水和直接排放与场址总量核对；缺失流是数据缺口，不得记为零。 | 物料、能源、水和废物核对 |
| `dq_route_separation` | 湿制、干制和半湿制产品 | 分离路线特定生产线和仪表，或记录共用过程分配；合并不同路线时必须保留技术份额。 | 生产线映射、仪表层级和分配工作簿 |
| `dq_geography_technology` | 上游连接 | 使用可获得的最具体供应商、地理和技术信息，并披露代理数据集。 | 供应商记录和背景数据集映射 |
| `dq_measurement_quality` | 实测值 | 为每个重要计量或计算保留校准、采样、实验室方法、估算公式和负责记录。 | 校准证书、实验室报告和计算文件 |
| `dq_reviewability` | 数据包 | 保持原始记录、转换、分配参数、排除项和核对结果可从每个归一化清单行追溯到其证据。 | 审计轨迹和评审签署 |

## 9. 校验规则

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `val_reference_output` | 参考流 | 归一化合格产出应等于 1 kg 宠物食品净含量，包装应单独记录，所有清单行均应声明到该参考量的换算。 | `fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009` |
| `val_required_qualifiers` | 产品身份 | 第 3 节所有必需限定信息均应存在，并与产品、批次、标签和工艺路线记录内部一致。 | `eu-regulation-767-2009`; `fediaf-nutritional-guidelines-2024` |
| `val_feeding_purpose` | 完整型和补充型产品声明 | 完整型产品应被识别为足以构成一日摄入量；补充型产品应说明需要配合的其他饲料或饲喂情境，不得单独表示为完整一日摄入量。 | `eu-regulation-767-2009`; `fediaf-nutritional-guidelines-2024` |
| `val_route_processes` | 过程图 | 仅在适用时纳入干制路线过程和湿制路线过程；至少一个声明的路线特定过程应将制备过程连接到零售就绪产出。 | `fediaf-recipes-processing` |
| `val_packaging_reconciliation` | 包装清单 | 按材料与层级记录的包装组件应与声明的零售配置核对；湿制路线初级包装不得在最终包装中重复计算。 | `fediaf-pet-food-pefcr-2025` |
| `val_mass_balance` | 每个过程和整个制造系统 | 报告物料平衡残差，并根据声明的测量不确定性与缺失流审查调查重大残差；不得通过将无法解释的残差归为废物而强制闭合。 | `eu-recommendation-2021-2279` |
| `val_energy_reconciliation` | 能源清单 | 按能源载体和期间，将路线特定能源与分配的共用能源核对到场址总量；场内发电、自用、外送及合同电力凭证应分别披露。 | `fediaf-pet-food-pefcr-2025` |
| `val_rework_no_double_count` | 返工与同类别输入 | 内部返工应作为相连的内部转移记录且不重复上游负荷；外购同类别输入应有单独的上游数据集。 | `eu-recommendation-2021-2279` |
| `val_allocation_disclosure` | 共用过程和共产品 | 每个分配行应标识分配规则、分母、所含产品、期间以及与未分配总量的核对。 | `fao-leap-feed-2016`; `fediaf-pet-food-pefcr-2025` |
| `val_data_source_coverage` | 外部与背景证据 | 每条外部方法规则应引用已列出的来源；每种采购物料或服务应有上游数据集引用或明确的未解决数据缺口。 | `eu-recommendation-2021-2279` |
| `val_daily_ration_use` | 下游 PEF 解释 | 完整餐食比较应使用产品特定代谢能密度及声明的物种/体重每日能量基准，将制造结果换算到一日摄入量；单独的 1 kg 结果不是比较性 PEF 功能单位。 | `fediaf-pet-food-pefcr-2025` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 零售包装犬粮或猫粮的前景制造数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 供应商或场址特定的从摇篮到工厂大门建模；产品系统组装；制造改进；补充所需上游和下游阶段后进行下游 PEF 建模；完整餐食还需换算为一日摄入量功能单位 |
| excluded_use | 单独用于从摇篮到坟墓或比较性环境声明；营养合规认证；宠物食品安全认证；兽医或治疗声明；替代缺失的配料、分销、使用或寿命终止阶段 |
| required_metadata | 第 3 节所有限定信息；场址与地理范围；报告期；产品与路线份额；上游数据集映射；包装物料清单；分配规则；数据覆盖；排除项；物料与能源核对 |
| required_quality_disclosure | 一手与二手数据状态；计量和估算方法；时间、地理与技术代表性；完整性；代理数据集；分配；异常生产；未解决 UUID；缺失范围和上游连接 |
| update_trigger | 配方或配料来源、物种或生命阶段声明、完整型/补充型状态、水分或能量密度、加工路线或设备、场址能源或水系统、包装配置、废物处理、分配基准或数据质量证据发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fediaf-pet-food-pefcr-2025` | 标准（`standard`） | FEDIAF，Prepared Pet Food for Cats and Dogs，更新版 PEFCR，2025，https://europeanpetfood.org/wp-content/uploads/2025/02/PEFCR_PetFood_update.pdf（检索于 2026-07-25） | 产品范围、代表性子类别、下游一日摄入量功能单位、生命周期阶段、必需企业特定数据、前景/背景区分、制造清单、分配、数据质量与包装 |
| `eu-regulation-767-2009` | 标准（`standard`） | Regulation (EC) No 767/2009 on the placing on the market and use of feed，https://eur-lex.europa.eu/eli/reg/2009/767/oj/eng（检索于 2026-07-25） | 完整型、补充型、配合饲料、标签、包装和净含量产品身份 |
| `eu-recommendation-2021-2279` | 官方指南（`official_guidance`） | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods，https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng（检索于 2026-07-25） | 通用 PEF 方法、前景和一手数据规则、生命周期清单完整性、分配层级与直接排放处理 |
| `fediaf-nutritional-guidelines-2024` | 手册（`handbook`） | FEDIAF Nutritional Guidelines for Complete and Complementary Pet Food for Cats and Dogs，2024 年 7 月发布，https://europeanpetfood.org/wp-content/uploads/2024/09/FEDIAF-Nutritional-Guidelines_2024.pdf（检索于 2026-07-25） | 饲喂用途定义、物种和生命阶段限定信息、水分类别、代谢能与营养充分性元数据 |
| `fediaf-recipes-processing` | 技术推广指南（`extension_guidance`） | FEDIAF，Recipes and Processing，https://fediaf.org/prepared-pet-foods/recipes-and-processing.html（检索于 2026-07-25） | 配料计量、研磨与混合、干制蒸煮挤压与后处理、湿制灌装与灭菌的过程分解 |
| `fao-leap-feed-2016` | 官方指南（`official_guidance`） | FAO LEAP Partnership，Environmental performance of animal feeds supply chains: Guidelines for assessment，2016，https://openknowledge.fao.org/server/api/core/bitstreams/040bf0e7-e652-4eda-807c-37172c403671/content（检索于 2026-07-25） | 饲料加工系统边界、过程细分与物理分配层级、经济分配回退、共产品与废物处理 |
