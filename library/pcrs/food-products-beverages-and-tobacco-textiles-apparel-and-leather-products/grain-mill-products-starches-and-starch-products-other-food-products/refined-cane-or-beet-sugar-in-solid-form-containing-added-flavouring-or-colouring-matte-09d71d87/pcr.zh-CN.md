---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.refined-cane-or-beet-sugar-in-solid-form-containing-added-flavouring-or-colouring-matte-09d71d87
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 含添加香料或着色料的固体精制蔗糖或甜菜糖；枫糖及枫糖浆

## 1. 范围与适用性

每个前景数据包必须且只能声明下列一个产品族：

- 产品族 A：含添加香料或着色料的固体精制蔗糖或甜菜糖。前景边界从购入精制糖开始，包括配料接收、配方、混合或包衣、仅在配方需要时进行的干燥、清洗及包装。
- 产品族 B：枫糖浆或固体枫糖。前景边界从枫树汁接收开始，包括过滤、蒸发浓缩、清洗、包装，以及仅在生产固体枫糖时进行的结晶。

两个产品族不得在同一前景过程系统中混合，也不得默认同时发生。生产者必须声明 `product_family: A` 或 `product_family: B`；产品族 B 还须声明 `maple_product_state: syrup` 或 `maple_product_state: solid_sugar`。精制蔗糖或甜菜糖的上游生产，以及枫树种植、割取和枫树汁采集均在前景边界之外，须连接独立上游数据集。糖果、未进一步配方的无香无色精制糖、人造枫味糖浆、枫糖膏、枫糖太妃及其他枫糖糖果不在本 PCR 范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.refined-cane-or-beet-sugar-in-solid-form-containing-added-flavouring-or-colouring-matte-09d71d87 |
| classification_refs | CPC 3.0: 23530 |
| covered_products | 产品族 A：添加香料或着色料的固体精制蔗糖或甜菜糖；产品族 B：枫糖浆和固体枫糖 |
| excluded_products | 无香无色精制糖、原糖、糖蜜、人造枫味糖浆、枫糖膏、枫糖太妃、枫糖糖果及其他糖果 |
| representative_product | 制造厂门包装枫糖浆；具体数据集必须以其唯一声明产品替换该代表性身份 |
| production_route | 相互排斥的产品族 A 购入精制糖配方路线或产品族 B 接收枫树汁浓缩路线 |
| market_state | 制造厂门包装配方固体糖、包装枫糖或包装枫糖浆 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在制造厂门提供本 PCR 涵盖的一种已声明包装产品 |
| How much | 1 kg 净产品，不含包装 |
| How well | 满足声明的配方、物态、可溶性固形物或水分规格、食品安全放行标准及市场规格 |
| How long or cycle | 一个完整生产批次或生产期，归一化为 1 kg 放行产品 |
| reference_flow_link | 最终质量待检完成后、配送前的单一放行产品净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 枫糖浆 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品族 A 或 B；准确产品名称；产品族 A 的蔗糖、甜菜糖或声明混合比例；产品族 A 的香料与着色状态；产品族 B 的糖浆或固体糖；枫树种或树汁来源；配方代码；是否干燥；过滤技术；是否采用反渗透；蒸发器和供热技术；燃料种类；包装配置；地理范围；报告期 |

具体前景数据包必须为其声明产品使用一个准确产品流。由于作者化期间未解析到准确 Tiangong UUID，`枫糖浆` 仅作为代表性身份；该 UUID 缺口已登记在 manifest 中，须在评审或发布前关闭。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有交换归一化为 1 kg 净放行产品；包装质量不计入参考数量并须单独记录。 |
| `route_specific_denominator` | 全部清单行 | 各行规定的质量或能量 | kg、kWh 或 MJ | 分母只使用选定产品族和产品状态路线；不得平均产品族 A 与 B，也不得平均糖浆与固体枫糖。 |
| `wet_dry_mass_disclosure` | 糖及枫产品质量 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 声明各质量为接收态、湿基、干基或净包装质量，并保留相应水分或可溶性固形物检验记录。 |
| `fuel_energy_conversion` | 每种现场燃料 | 能量 | MJ | 保留购入质量或体积、必要时的密度及低位热值；每种燃料分别计算，不得合并燃料台账。 |
| `electricity_and_heat_separation` | 电力、蒸汽和热 | 能量 | kWh 或 MJ | 购入电力、购入蒸汽、购入热及内部产生的热或蒸汽须分别记录，并说明所有换算因子。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 产品族 A：配方场址验收的购入精制蔗糖或甜菜糖。产品族 B：糖舍或加工场址验收的枫树汁。 |
| starting_condition_role | 前景门输入；上游生产由供应商或背景数据集表示。 |
| product_classification_scope | CPC 3.0 子类 23530 中的一种声明产品；该子类包含两个方法学不同的产品族。 |
| recursive_input_rule | 同类别中间产品跨越边界时，只记录一次其准确产品身份和供应商数据集，并排除该数据集已经代表的上游过程；不得递归重用本 PCR。 |
| upstream_dataset_requirement | 产品族 A 需要精制蔗糖、精制甜菜糖、配料、公用工程、燃料和包装的上游数据集；产品族 B 需要枫树汁、过滤材料、公用工程、燃料和包装的上游数据集。 |
| disclosure | 声明选定产品族和状态、起始条件、纳入子步骤、干燥/结晶/反渗透状态、热源与燃料、包装物料清单、场址、期间及任何排除或共享操作。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_route_exclusivity` | 前景系统 | 只能建模产品族 A 或产品族 B 之一；不得纳入未选产品族过程，也不得假设两族同时发生。 | `unsd-cpc-3-0-structure-2024` |
| `sb_family_a_start` | 产品族 A | 从购入精制糖接收开始，纳入配方、混合或包衣、条件性干燥、清洗和包装，直至产品放行。 | `unsd-cpc-3-0-structure-2024`; `eu-pef-method-2021` |
| `sb_family_b_start` | 产品族 B | 从枫树汁接收开始，纳入过滤、蒸发浓缩、清洗、包装，并仅为固体枫糖纳入结晶。 | `cornell-maple-beginners-notebook-2019`; `penn-state-maple-syrup-production` |
| `sb_complete_foreground` | 选定路线 | 记录所纳入前景操作的全部已知材料、水、能源、产品、废物、废水、污泥和直接基本流。 | `eu-pef-method-2021` |
| `sb_stationary_combustion` | 现场供热 | 每种燃烧燃料须单独记录并计算直接二氧化碳、甲烷和氧化亚氮；化石与生物源二氧化碳须区分。 | `ipcc-2006-stationary-combustion`; `checkoway-et-al-maple-footprint-2024` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `route_a_formulation` | 产品族 A 配方、混合/包衣及条件性干燥 | conditional | 仅在 `product_family: A` 时纳入；干燥行仅在实际干燥时适用。 | 将购入精制糖转化为配方糖的前景过程 | 离开该操作的配方糖 kg |
| `route_b_maple_processing` | 产品族 B 树汁过滤、蒸发及条件性结晶 | conditional | 仅在 `product_family: B` 时纳入；结晶产出仅适用于固体枫糖。 | 将接收枫树汁转化为枫产品的前景过程 | 离开该操作的枫糖浆或枫糖 kg |
| `onsite_heat_generation` | 现场固定供热或产汽 | conditional | 选定路线任一操作在现场燃烧燃料时纳入。 | 支持能源生产与直接排放 | 输送的有用热 MJ 或蒸汽 kg |
| `equipment_cleaning` | 设备清洗与消毒 | required | 纳入归属于选定路线和报告期的清洗。 | 共享前景支持过程 | 放行选定路线产品 kg |
| `packaging` | 路线特定最终包装 | required | 只纳入单一声明产品实际使用的包装。 | 最终前景包装与放行 | 1 kg 净放行产品 |

### 过程：产品族 A 配方、混合/包衣及条件性干燥（`route_a_formulation`）

#### 输入

##### 产品流

###### 购入精制蔗糖（`a_refined_cane_sugar`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：精制蔗糖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量验收质量；只使用甜菜糖时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 配方糖产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_a_bom`

###### 购入精制甜菜糖（`a_refined_beet_sugar`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：精制甜菜糖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量验收质量；只使用蔗糖时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 配方糖产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_a_bom`

###### 添加香料（`a_flavouring`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：食品用香料制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按准确商业配料计量配方加入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 配方糖产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_a_bom`

###### 添加色素（`a_colour`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：食品着色剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按准确色素物质或制剂计量配方加入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 配方糖产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_a_bom`

###### 抗结剂（`a_anticaking_silica`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：食品级二氧化硅
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量配方加入量；未使用时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 配方糖产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_a_bom`

###### 香料或色素载体（`a_carrier_maltodextrin`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：麦芽糊精
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量载体加入量；购入制剂无需另加载体时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 配方糖产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_a_bom`

###### 配方用水（`a_process_water`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：过程水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：液体包衣或配方中计量或称量加入的水；全干混合时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 配方糖产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_a_operations`

###### 电力（`a_electricity`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量配料、混合、包衣、输送、通风和适用时干燥的用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 配方糖产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_a_operations`

###### 购入蒸汽（`a_purchased_steam`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：计量用于包衣或干燥的购入蒸汽；未使用时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 配方糖产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_a_operations`

###### 购入热（`a_purchased_heat`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：热能
- 流属性/单位：能量 / MJ
- 数量规则：计量用于包衣或干燥的购入热；未使用时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 配方糖产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_a_operations`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 待包装配方精制糖（`a_bulk_product`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：配方精制糖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：混合/包衣后以及适用时干燥后的计量合格产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每批次或生产期
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_a_operations`

##### 废物流

###### 产品族 A 产品损失（`a_product_loss`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：不合格配方糖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量作为该单一废物流离开的洒落糖、设备滞留粉末、包衣过喷、拒收品及未回收开停机糖
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 配方糖产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_release`

##### 基本流

### 过程：产品族 B 树汁过滤、蒸发及条件性结晶（`route_b_maple_processing`）

#### 输入

##### 产品流

###### 接收枫树汁（`b_maple_sap`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：枫树汁
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：前景门验收的计量树汁质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 枫产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_b_operations`
- 来源：`cornell-maple-beginners-notebook-2019`

###### 助滤剂（`b_filter_aid`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：食品级硅藻土
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量助滤剂加入量；未用助滤剂时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 枫产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_b_operations`
- 来源：`cornell-maple-beginners-notebook-2019`

###### 一次性过滤介质（`b_filter_paper`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：纤维素滤纸
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量消耗滤纸质量；未使用时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 枫产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_b_operations`
- 来源：`penn-state-maple-syrup-production`

###### 可重复过滤介质补充（`b_filter_cloth`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：聚酯滤布
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量补充质量并按记录使用寿命分摊；未使用时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 枫产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_route_b_operations`
- 来源：`penn-state-maple-syrup-production`

###### 过程用水（`b_process_water`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：过程水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量滤器准备、反冲或产品接触加工用水，不含单列清洗水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 枫产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_b_operations`

###### 电力（`b_electricity`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量泵送、过滤、可选反渗透、蒸发辅助及适用时结晶用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 枫产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_b_operations`
- 来源：`checkoway-et-al-maple-footprint-2024`

###### 购入蒸汽（`b_purchased_steam`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：计量蒸发或结晶用购入蒸汽；未使用时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 枫产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_b_operations`

###### 购入热（`b_purchased_heat`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：热能
- 流属性/单位：能量 / MJ
- 数量规则：计量蒸发或结晶用购入热；未使用时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 枫产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_b_operations`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 散装枫糖浆（`b_bulk_maple_syrup`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：枫糖浆
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：浓缩和最终过滤后的计量合格糖浆；完全继续转为固体枫糖时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每批次或生产期
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_b_operations`
- 来源：`cornell-maple-beginners-notebook-2019`

###### 散装颗粒枫糖（`b_bulk_maple_sugar`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：颗粒枫糖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：糖浆浓缩、结晶、搅拌和筛分后的计量合格糖；仅适用于固体枫糖
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每批次或生产期
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_b_operations`
- 来源：`cornell-maple-beginners-notebook-2019`

##### 废物流

###### 过滤残渣（`b_filtration_residue`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：混有废硅藻土的糖砂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量糖浆过滤去除的湿残渣；实际废物不含助滤剂时改用独立糖砂行
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 枫产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_release`
- 来源：`penn-state-maple-syrup-production`

###### 废滤纸（`b_spent_filter_paper`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：废纤维素滤纸
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量弃置滤纸质量；未产生时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 枫产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_release`

###### 废聚酯滤布（`b_spent_filter_cloth`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：废聚酯滤布
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量弃置滤布并分摊至记录服务量；未产生时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 枫产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_release`

###### 枫加工废水（`b_wastewater`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：枫加工废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或质量平衡得到的过程废水，不含单列清洗废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 枫产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_release`

###### 产品族 B 糖浆产品损失（`b_syrup_product_loss`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：不合格枫糖浆
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量不合格枫糖浆；仅在产品族 B 生产糖浆时适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 枫产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_release`

###### 产品族 B 固体糖产品损失（`b_sugar_product_loss`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：不合格枫糖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量不合格固体枫糖；仅在产品族 B 包含结晶和固体糖整理时适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 枫产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_release`

##### 基本流

###### 蒸发过程水（`b_water_vapour`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：排入空气的水蒸气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由计量树汁、产品、液体废物和留存水的质量平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 枫产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_route_b_operations`

### 过程：现场固定供热或产汽（`onsite_heat_generation`）

#### 输入

##### 产品流

###### 天然气（`heat_natural_gas`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：天然气
- 流属性/单位：能量 / MJ
- 数量规则：计量数量按有记录的低位热值换算；未使用时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 MJ 输送有用热或每 kg 输送蒸汽
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fuel_and_heat`

###### 液化石油气（`heat_lpg`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：液化石油气
- 流属性/单位：能量 / MJ
- 数量规则：计量数量按有记录的低位热值换算；未使用时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 MJ 输送有用热或每 kg 输送蒸汽
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fuel_and_heat`

###### 燃料油（`heat_fuel_oil`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：馏分燃料油
- 流属性/单位：能量 / MJ
- 数量规则：计量数量按有记录的低位热值换算；未使用时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 MJ 输送有用热或每 kg 输送蒸汽
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fuel_and_heat`
- 来源：`checkoway-et-al-maple-footprint-2024`

###### 燃料木材（`heat_fuelwood`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：燃料木材
- 流属性/单位：能量 / MJ
- 数量规则：计量干基或入炉质量并按有记录的水分和低位热值换算；未使用时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 MJ 输送有用热或每 kg 输送蒸汽
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fuel_and_heat`
- 来源：`checkoway-et-al-maple-footprint-2024`

###### 锅炉给水（`heat_boiler_water`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：锅炉给水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量进入现场产汽的补水；直接干热时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 输送蒸汽
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_and_heat`

###### 供热用电（`heat_electricity`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量燃烧器、风机、泵、给料和控制用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 MJ 输送有用热或每 kg 输送蒸汽
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_and_heat`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 内部产生蒸汽（`heat_steam_output`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：现场锅炉蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：计量输送蒸汽能量；只产生直接热时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每报告期
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_and_heat`

###### 内部产生热能（`heat_output`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：现场燃烧产生的热能
- 流属性/单位：能量 / MJ
- 数量规则：计量或按效率计算输送有用热；只转移计量蒸汽时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每报告期
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fuel_and_heat`

##### 废物流

###### 木材燃烧灰（`heat_wood_ash`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：锅炉木灰
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量送往声明处理去向的灰；不使用燃料木材时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 MJ 输送有用热或每 kg 输送蒸汽
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_release`

##### 基本流

###### 化石二氧化碳（`heat_co2_fossil`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：排入空气的化石二氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按每种化石燃料能量输入和适用排放因子分别计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 MJ 输送有用热或每 kg 输送蒸汽
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：方法公式（`method_formula`）
- 来源：`ipcc-2006-stationary-combustion`

###### 生物源二氧化碳（`heat_co2_biogenic`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：排入空气的生物源二氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按燃料木材能量和适用排放因子单独计算；不使用木材时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 MJ 输送有用热或每 kg 输送蒸汽
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：方法公式（`method_formula`）
- 来源：`ipcc-2006-stationary-combustion`

###### 甲烷（`heat_ch4`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：排入空气的甲烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：汇总由各燃烧燃料和技术因子分别计算的甲烷排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 MJ 输送有用热或每 kg 输送蒸汽
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：方法公式（`method_formula`）
- 来源：`ipcc-2006-stationary-combustion`

###### 氧化亚氮（`heat_n2o`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：排入空气的氧化亚氮
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：汇总由各燃烧燃料和技术因子分别计算的氧化亚氮排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 MJ 输送有用热或每 kg 输送蒸汽
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：方法公式（`method_formula`）
- 来源：`ipcc-2006-stationary-combustion`

### 过程：设备清洗与消毒（`equipment_cleaning`）

#### 输入

##### 产品流

###### 清洗水（`cleaning_water`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：过程水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量归属于选定路线的清洗消毒用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning`

###### 碱性清洗剂（`cleaning_naoh`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：氢氧化钠溶液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量配制产品质量和浓度；未使用时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning`

###### 消毒剂（`cleaning_peracetic_acid`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：过氧乙酸溶液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量配制产品质量和浓度；未使用时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning`

###### 清洗用电（`cleaning_electricity`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量原位清洗泵及消毒设备用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning`

###### 清洗蒸汽（`cleaning_steam`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：计量消毒用蒸汽；未使用时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 清洗废水（`cleaning_wastewater`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：设备清洗废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量排放或按进水质量平衡计算，与枫加工废水分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning`

###### 废水处理污泥（`cleaning_sludge`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：现场废水处理污泥
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量湿质量并记录固形物和处理去向；场外处理且无污泥离开前景时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_release`

##### 基本流

### 过程：路线特定最终包装（`packaging`）

#### 输入

##### 产品流

###### 产品族 A 散装产品（`pack_in_a_product`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：配方精制糖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量转入包装质量；仅适用于产品族 A
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`

###### 散装枫糖浆（`pack_in_maple_syrup`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：枫糖浆
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量转入包装质量；仅适用于产品族 B 糖浆
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`

###### 散装枫糖（`pack_in_maple_sugar`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：颗粒枫糖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量转入包装质量；仅适用于产品族 B 固体糖
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`

###### 玻璃初级容器（`pack_glass_container`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：食品用玻璃容器
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量购入质量并分摊至放行单位；未使用时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`

###### PET 初级容器（`pack_pet_container`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：聚对苯二甲酸乙二醇酯瓶
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量购入质量并分摊至放行单位；未使用时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`

###### HDPE 初级容器（`pack_hdpe_container`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：高密度聚乙烯瓶
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量购入质量并分摊至放行单位；未使用时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`

###### 钢制初级容器（`pack_steel_can`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：镀锡钢食品罐
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量购入质量并分摊至放行单位；未使用时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`

###### 纸制初级袋（`pack_paper_bag`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：食品用牛皮纸袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量购入质量并分摊至放行单位；未使用时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`

###### LDPE 初级袋（`pack_ldpe_pouch`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：低密度聚乙烯食品袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量购入质量并分摊至放行单位；未使用时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`

###### 金属封盖（`pack_metal_closure`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：镀锡钢封盖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：封盖计数乘核验单件质量；未使用时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`

###### 塑料封盖（`pack_pp_closure`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：聚丙烯封盖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：封盖计数乘核验单件质量；未使用时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`

###### 纸标签（`pack_paper_label`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：纸标签
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：标签计数乘核验单件质量；未使用时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`

###### 瓦楞运输箱（`pack_corrugated_case`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：瓦楞纸板箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：购入纸箱质量按包装放行单位分摊；未使用时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`

###### 托盘缠绕膜（`pack_stretch_film`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：低密度聚乙烯缠绕膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量薄膜质量并按托盘放行产品分摊；未使用时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`

###### 木托盘（`pack_wood_pallet`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：木托盘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：购入或池化托盘质量按有记录周转次数和放行产品分摊；未使用时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`

###### 包装用电（`pack_electricity`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量灌装、封口、贴标和码垛用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装配方精制糖（`packaged_formulated_sugar`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：包装配方精制糖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量净放行产品；仅适用于产品族 A
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：参考数量 1 kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_release`

###### 包装枫糖浆（`packaged_maple_syrup`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：枫糖浆
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量净放行产品；仅适用于产品族 B 糖浆
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：参考数量 1 kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_release`
- 来源：`cornell-maple-beginners-notebook-2019`

###### 包装枫糖（`packaged_maple_sugar`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：包装颗粒枫糖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量净放行产品；仅适用于产品族 B 固体糖
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：参考数量 1 kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_release`
- 来源：`cornell-maple-beginners-notebook-2019`

##### 废物流

###### 配方糖包装损失（`pack_formulated_sugar_loss`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：包装过程中损失的配方精制糖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量灌装、封口、检验和换线时未回收的产品族 A 产品损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_release`

###### 枫糖浆包装损失（`pack_maple_syrup_loss`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：包装过程中损失的枫糖浆
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量灌装、封口、检验和换线时未回收的枫糖浆损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_release`

###### 枫糖包装损失（`pack_maple_sugar_loss`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：包装过程中损失的枫糖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量灌装、封口、检验和换线时未回收的固体枫糖损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_release`

###### 废玻璃包装（`pack_waste_glass`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：废食品用玻璃容器
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量送往声明去向的拒用或破损玻璃包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_release`

###### 废 PET 包装（`pack_waste_pet`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：废聚对苯二甲酸乙二醇酯包装
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量送往声明去向的拒用 PET 包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_release`

###### 废 HDPE 包装（`pack_waste_hdpe`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：废高密度聚乙烯包装
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量送往声明去向的拒用 HDPE 包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_release`

###### 废钢包装（`pack_waste_steel`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：废镀锡钢包装
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量送往声明去向的拒用罐和封盖
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_release`

###### 废牛皮纸袋（`pack_waste_paper_bag`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：废食品用牛皮纸袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量送往声明去向的拒用食品用牛皮纸袋
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_release`

###### 废纸标签（`pack_waste_paper_label`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：废纸标签
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量送往声明去向的拒用纸标签
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_release`

###### 废瓦楞纸箱（`pack_waste_corrugated_case`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：废瓦楞纸板箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量送往声明去向的拒用瓦楞纸板箱
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_release`

###### 废 LDPE 包装（`pack_waste_ldpe`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：废低密度聚乙烯薄膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量送往声明去向的拒用袋和缠绕膜
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_release`

###### 废木托盘（`pack_waste_wood_pallet`）

本卡记录规定路线条件下该项具名原子交换。

- 选定流：废木托盘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量离开复用池送处理的托盘并分摊至选定产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_release`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivide_routes` | 全部前景操作 | 优先利用计量表、批记录和生产时间细分产品族 A、产品族 B、糖浆、固体糖及包装线；不得默认在两个产品族之间分配负荷。 | `eu-pef-method-2021` |
| `alloc_internal_heat` | 现场供热 | 将计量蒸汽或有用热直接归属使用路线；只有未计量余量才可按输送能量等有记录物理驱动量分配。 | `eu-pef-method-2021` |
| `alloc_shared_cleaning` | 设备清洗 | 配方或生产期特定清洗直接归属；否则按记录清洗时间、容器体积或产品接触面积分配，并披露物理驱动量。 | `eu-pef-method-2021` |
| `alloc_recovered_material` | 回收产品、过滤残渣、灰和包装废物 | 只有具有有记录有益用途及经济或功能价值时才作为共产品，否则作为废物及其处理建模；避免负荷或回收替代仅在独立声明情景中报告。 | `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_route_a_bom` | `route_a_formulation` | 产品族 A 各配料 | 配方和收货记录 | 配料身份、供应商、批号、验收质量、加入质量、配方代码 | 核对受控配方、秤单和库存领用 | kg | 每批 | 完整声明报告期 | 各配方场址和产品 | 各配料分别汇总后除以合格配方产出 | 校准秤记录、配方批准、供应商规格、库存核对 |
| `cp_route_a_operations` | `route_a_formulation` | 水、电、蒸汽、热和产出 | 计量及批记录 | 表计起止、批号、干燥状态、进出质量、水分、拒收品 | 分表计量或按有记录物理驱动量分配 | kg、kWh、MJ | 每批或计量区间 | 完整声明报告期 | 各配方线 | 只汇总同一声明产品和路线批次 | 表计校准、批记录、水分检验、分配工作表 |
| `cp_route_b_operations` | `route_b_maple_processing` | 树汁、过滤材料、公用工程和枫产品 | 秤、表计和过程记录 | 树汁质量、初末可溶性固形物、RO 状态、过滤介质、蒸发产出、结晶状态、糖浆/糖质量 | 适用时直接计量并使用密度计/折光仪和设备日志 | kg、kWh、MJ | 每次熬煮或每批 | 完整声明枫糖生产期 | 各糖舍和技术路线 | 只汇总等效糖浆或固体糖路线 | 仪器校准、熬煮记录、过滤记录、产品放行记录 |
| `cp_fuel_and_heat` | `onsite_heat_generation` | 各燃料和输送热/蒸汽 | 发票、储罐、秤、水分和表计记录 | 燃料身份、质量或体积、密度、水分、低位热值、蒸汽/热输送 | 核对购入量和库存变化；各燃料分别换算 | kg、m3、MJ、kWh | 每次交付和报告区间 | 完整声明报告期 | 各燃烧装置 | 各燃料能量分别计算后才汇总输送能量 | 发票、罐/秤校准、热值来源、锅炉表计、效率证据 |
| `cp_cleaning` | `equipment_cleaning` | 水、清洗剂、能源和废水 | 原位清洗和消毒日志 | 服务路线、水、化学品、浓度、电、蒸汽、排放 | 计量、称量或采用经验证投加记录 | kg、kWh、MJ | 每次清洗 | 完整声明报告期 | 各共享或专用清洗系统 | 优先直接归属，否则使用声明物理分配量 | 清洗日志、投加校准、化学品规格、排放表计 |
| `cp_packaging` | `packaging` | 各包装组件和包装用电 | 采购、规格、计数和产线记录 | 材料身份、单件质量、使用件数、拒用量、复用次数、电力 | 核验组件质量并核对采购、库存和包装单位 | kg、件、kWh | 每包装批及报告区间 | 完整声明报告期 | 各包装线和产品 | 各组件分别计算至每 kg 净放行产品 | 供应商规格、抽样称重、库存核对、产线表计 |
| `cp_waste_and_release` | all | 产品、损失、残渣、废水、污泥、灰和包装废物 | 秤量、排放、处理和放行记录 | 流身份、湿质量、适用时干固体、去向、放行产品质量 | 分别称量或计量各流并进行质量平衡核对 | kg | 每批或每次废物转移 | 完整声明报告期 | 各场址和产品 | 按物理身份和去向保持分流 | 秤/表计校准、废物转移单、产品放行、质量平衡表 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 全部交换 | 归一化交换量 = 路线归属交换量 / 单一声明产品净放行质量 | 交换量、放行产品质量 | 每 1 kg 参考产品的量 | `eu-pef-method-2021` |
| `calc_fuel_energy` | 每种燃料 | 燃料能量 = 计量燃料量 × 必要时的密度 × 有记录低位热值；各燃料分别计算 | 燃料质量或体积、密度、水分、低位热值 | 各燃料 MJ | `ipcc-2006-stationary-combustion` |
| `calc_combustion_emissions` | CO2、CH4 和 N2O | 各气体各燃料排放 = 燃料能量 × 适用燃料/技术排放因子；保留燃料分项后才汇总 | 各燃料 MJ、各气体各燃料排放因子 | kg 化石 CO2、kg 生物源 CO2、kg CH4、kg N2O | `ipcc-2006-stationary-combustion` |
| `calc_mass_balance` | 各选定路线 | 质量平衡差 = 总计量质量投入 - 产品 - 分别计量废物 - 废水 - 已计蒸发水或留存水；调查未解释差值 | 配料或树汁、水、产品、废物、废水、水蒸气 | 路线质量平衡残差 |  |
| `calc_packaging_mass` | 各包装组件 | 组件质量 = 核验单件质量 × 使用件数，适用时按有记录复用次数调整 | 单件质量、使用件数、复用次数、放行产品 | 每 1 kg 产品的组件 kg | `eu-pef-method-2021` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_route_identity` | 数据集 | 准确声明一个产品族、一个最终产品状态、一条配方或枫加工路线及纳入条件步骤。 | 产品主数据、过程流程图、批次/生产期记录 |
| `dq_completeness` | 前景清单 | 核对全部已知投入产出，包括公用工程、每种实际燃料、每项配料、每个包装组件、损失、过滤残渣、废水、污泥、灰和直接排放。 | 已核对台账、表计、废物转移记录、质量平衡 |
| `dq_representativeness` | 活动数据 | 使用代表声明场址、技术、地理、产品和期间的记录，并说明排除、替代、停机及异常生产期。 | 数据质量评估和保留原始记录 |
| `dq_atomic_identity` | 流 | 评审或发布前为每个具体交换确认一个 Tiangong 流 UUID；任何本 PCR 未列出的实际配料、燃料、清洗化学品、包装组件、废物或排放须新增独立行。 | 直读流记录和身份评审 |
| `dq_range_evidence` | 数量范围 | 不得由单个案例生成范围，也不得把单值复制为相等上下限；后续经验范围至少需要两项边界、单位和基准相容的独立原文。 | 来源比较及范围推断说明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_one_family` | 数据集 | 只有恰好选择产品族 A 或 B 之一且不存在未选产品族交换时才通过。 | `unsd-cpc-3-0-structure-2024` |
| `val_product_state` | 产品族 B | 只有声明 syrup 或 solid_sugar 时才通过；solid_sugar 必须结晶，糖浆不得默认结晶。 | `cornell-maple-beginners-notebook-2019` |
| `val_family_a_steps` | 产品族 A | 必须包括购入精制糖、每种实际香料/色素/抗结剂/载体、混合或包衣、条件性干燥披露、产品损失、清洗和包装。 | `eu-pef-method-2021` |
| `val_family_b_steps` | 产品族 B | 必须包括树汁接收、过滤介质、过滤残渣、蒸发浓缩、产品损失、废水、清洗、包装和条件性结晶披露。 | `cornell-maple-beginners-notebook-2019`; `penn-state-maple-syrup-production` |
| `val_fuels_and_emissions` | 现场燃烧 | 每种实际燃料须有独立投入，并按燃料计算化石 CO2、使用生物质时的生物源 CO2、CH4 和 N2O。 | `ipcc-2006-stationary-combustion` |
| `val_packaging_atomicity` | 包装 | 每种实际初级容器、封盖、标签、二级、三级和可复用包装组件须为独立材料流，每个物理独立包装废物流须为独立产出。 | `eu-pef-method-2021` |
| `val_reference_mass` | 参考产品 | 必须使用第 3 节规定的质量和质量单位 UUID，以 1 kg 净放行产品为参考；包装不得计入参考质量。 |  |
| `val_mass_balance` | 各路线 | 必须解释路线质量平衡残差，不得把产品损失、过滤残渣、废水、污泥、包装废物或蒸发隐藏在未分类差值中。 | `eu-pef-method-2021` |
| `val_range_provenance` | 范围 | 拒绝从单值复制的相等上下限；拒绝没有至少两项独立且相容原文的外推经验范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种声明产品和路线的前景制造数据集 |
| downstream_use | 完成评审、UUID 补全及情境代表性评估后可作 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 用于声明场址、技术、地理、期间、产品族、产品状态和包装配置的产品特定 LCI、LCA、EPD、足迹、process 与 lifecyclemodel 工作 |
| excluded_use | 平均产品族 A 与 B；代表上游糖生产或枫树种植/割取；代表糖果或人造枫味糖浆；未经等效边界和评审的比较声明 |
| required_metadata | PCR id、产品族与状态、准确产品身份、配方或树汁来源、纳入步骤、干燥/RO/过滤/蒸发/结晶/供热与燃料技术、包装 BOM、场址、地理、期间、分配、流 UUID、来源和数据质量引用 |
| required_quality_disclosure | 初级数据占比、计量方法、校准、时间/地理/技术代表性、分配、质量平衡残差、缺失 UUID、代理、排除、不确定性、未解决范围证据 |
| update_trigger | 产品族或状态、配方、树汁来源、过滤/RO/蒸发/结晶技术、燃料或电力供应、包装、分配、场址、报告期、产品规格、流 UUID 或重要来源证据变化 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2024` | official_guidance | 联合国统计司，《Central Product Classification, Version 3.0》结构草案，子类 23530，https://unstats.un.org/UNSDWebsite/statcom/session_55/documents/BG-4e-draft-CPC-structure-E.pdf（检索于 2026-08-24） | 正式类别标题及该子类包含配方精制糖族与枫糖/枫糖浆族的依据 |
| `cornell-maple-beginners-notebook-2019` | extension_guidance | Cornell Maple Program, Maple Syrup Production: Beginner's Notebook, 1st ed., https://mapleresearch.org/wp-content/uploads/Beginner-Notebook-1st-Edition.pdf（检索于 2026-08-24） | 枫树汁加工、过滤、蒸发、颗粒枫糖结晶/搅拌/筛分和气密包装的过程分解 |
| `penn-state-maple-syrup-production` | extension_guidance | Penn State Extension, Maple Syrup Production, https://extension.psu.edu/maple-syrup-production（检索于 2026-08-24） | 煮制前树汁过滤、蒸发设备与热源、糖砂过滤、过滤介质和容器灌装 |
| `checkoway-et-al-maple-footprint-2024` | literature | Checkoway, Lewis, and Keoleian, Carbon and Energy Footprinting across Archetypes for U.S. Maple Syrup Production, Environmental Science & Technology 58(49), DOI: 10.1021/acs.est.4c03067；OpenAlex: W4403183730 | 证明枫加工路线随 RO、电力、燃料油、燃料木材、规模和设备变化；支撑路线特定能源燃料采集而非默认范围 |
| `eu-pef-method-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索于 2026-08-24） | 公司特定物料清单和制造投入产出、数据质量、包装、细分、物理分配及透明报告 |
| `ipcc-2006-stationary-combustion` | method_factor | IPCC, 2006 Guidelines for National Greenhouse Gas Inventories, Volume 2 Energy, Chapter 2 Stationary Combustion, https://archive.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_2_Ch2_Stationary_Combustion.pdf（检索于 2026-08-24） | 燃料特定能量活动数据及直接 CO2、CH4 和 N2O 计算方法 |
