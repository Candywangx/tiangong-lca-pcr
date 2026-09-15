---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-ducks-frozen
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 冷冻鸭肉

## 1. 范围与适用性

本 PCR 仅覆盖一条冷冻分割鸭肉出厂路线：北京鸭（Pekin）活鸭进厂，经过屠宰和整理、浸水冷却、带皮带骨机械分割、包装、空气强制冷冻，并在冻库中储存至出厂。参考产品是可销售分割件的合并批次；鸭胸、鸭腿、鸭翅、整鸭、内脏及副产品不得彼此替代为参考产品。

前景边界始于屠宰场接收活鸭，止于包装冷冻分割件离开生产者冻库。养鸭、饲料、包装制造、能源和化学品供应、厂外处理、配送、零售、烹饪与食用均为上游或下游链接过程，而非前景操作。本 PCR 不包括鲜或冷藏鸭肉、冷冻整鸭、纯去骨或纯去皮路线、机械分离肉、食用内脏、肥肝、熟制或调味产品，以及以平板、浸渍或低温冷媒冷冻为主要冷冻技术的路线。

## 2. 产品类别标识

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-ducks-frozen` |
| classification_refs | CPC 3.0 `21142`，Meat of ducks, frozen |
| covered_products | 采用规定路线生产的、经包装冷冻的家养北京鸭带皮带骨分割肉 |
| excluded_products | 鲜或冷藏鸭肉；冷冻整鸭；纯去骨或纯去皮分割件；机械分离肉；食用内脏和肥肝；熟制、调味、熏制或其他制备鸭肉；主要冷冻技术不是空气强制冷冻的产品 |
| representative_product | 一个混合的可销售带皮带骨冷冻鸭分割件生产批次；须报告各具名分割件的质量组成，不得与整鸭或内脏平均 |
| production_route | 活鸭接收 → 击昏和放血 → 浸烫和脱羽 → 掏膛和清洗 → 浸水冷却和沥水 → 机械分割 → 包装 → R717 氨制冷空气强制冷冻 → 冻藏 → 工厂门出库；包括筛分和溶气气浮废水预处理 |
| market_state | 位于生产者冻库出库点的包装冷冻食品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 北京鸭经包装冷冻的带皮带骨分割肉，并披露各具名分割件的质量占比 |
| How much | 1,000 kg 净产品质量，不含包装 |
| How well | 来自锁定路线的合格可售分割件；热稳定后产品热中心不高于 -18 °C；包装及分割件组成符合声明规格 |
| How long or cycle | 一个报告期生产批次，直至冻库出库；冻藏停留时间另以吨·日报告 |
| reference_flow_link | `air_blast_freeze_store` 的工厂门输出 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Meat of ducks, frozen `658e0f63-44f8-4e3e-aeef-ccf1ab20a13f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species/strain: Pekin duck; form: cut-up parts; skin: on; bone: in; freezing technology: air-blast; refrigerant: R717 ammonia; net product mass; named-cut mass composition; package format; product thermal-centre temperature; frozen-storage duration; plant geography; reporting year |

## 4. 测量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及所有物料产品输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准的秤；报告不含包装的冷冻产品净质量并归一化到 1,000 kg。 |
| `live_and_output_mass` | 活鸭、胴体、分割件、内脏、血液、羽毛、边角料、不合格品和处理固体 | Mass | kg | 在各流跨越过程边界处记录湿质量；不得用通用禽类比例推断鸭专属产率。 |
| `water_and_wastewater` | 工艺水和废水 | Volume，且在可得时记录 Mass | m3 和 kg | 计量体积；质量换算使用实测密度，或披露水密度假设，并使浓度记录采用相同体积基准。 |
| `energy` | 外购电力和蒸汽 | Energy；蒸汽质量和状态 | kWh；MJ；kg | 尽可能使用分表计量。蒸汽须记录交付质量、压力/温度或焓、冷凝水回流，并一致计算净能量。 |
| `temperature` | 冷却、空气强制冷冻和冻藏 | Temperature 和 time | °C；h | 使用经校准的产品中心及库房传感器。只有在热稳定后热中心达到不高于 -18 °C 时才判定速冻完成。 |
| `storage_service` | 冻藏 | Mass × time | tonne-day | 每日平均净产品储量乘以停留日数；冻藏用电与冷冻用电分开报告。 |
| `packaging_mass` | 聚合物袋和瓦楞纸箱 | Mass | kg | 记录包装领用量减经核实的未用退回量；产品接触膜与瓦楞纸板分别报告。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在屠宰场接收点交付的、农场饲养的北京鸭活鸭 |
| starting_condition_role | 前景系统的外购产品投入 |
| product_classification_scope | 仅参考输出采用 CPC 3.0 `21142`；活鸭及其他外购产品保留各自分类 |
| recursive_input_rule | 本路线禁止投入同类别冷冻鸭肉。同批次返工须记录为内部回路而不重复上游负担；外购冷冻鸭肉不在适用范围。 |
| upstream_dataset_requirement | 活鸭、包装、电力、蒸汽、水、氯化铁、制冷剂补充及厂外处理须链接到独立记录的上游数据集；不得用另一个 CPC 21142 过程替代。 |
| disclosure | 报告品系、活重基准、分割规格和质量占比、冷冻设备、制冷剂、储存温度和吨·日、废水去向、地理、年份、分配结果及所有路线偏离。 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_route_lock` | 声明路线 | 仅建模所声明的北京鸭、浸水冷却、带皮带骨分割、空气强制冷冻路线；不得把整鸭、单个分割件、内脏或其他冷冻技术平均进参考产品。 | `unsd-cpc-3-2025`; `fao-slaughterhouses-poultry` |
| `sb_foreground_extent` | 前景系统 | 包括从接收到冻库出库及厂内筛分、溶气气浮预处理；养殖、外购物料和能源、厂外处理、配送、零售及使用作为链接过程。 | `fao-slaughterhouses-poultry`; `ec-pef-2021` |
| `sb_upstream_link` | 外购投入 | 每项外购产品投入均须链接非递归上游数据集，并披露地理、技术和时间代表性。 | `ec-pef-2021` |
| `sb_atomic_utilities` | 全部前景交换 | 电力、蒸汽、工艺水、各包装材料、处理化学品、废水、各固体残余及制冷剂排放须作为独立原子流记录；禁止集合型公用工程、废物或排放占位符。 | `fao-slaughterhouses-poultry`; `ec-pef-2021` |
| `sb_temperature` | 冷却、冷冻和储存 | 浸水冷却、空气强制冷冻和冻藏须分开，并保留各自用水、能源、温度和时间证据。 | `fao-who-cxc-8-1976` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `slaughter_dress_chill` | 屠宰、整理、清洗和浸水冷却 | `required` | Always | 将接收活鸭转为沥水冷却净膛胴体及已分流残余 | kg 沥水冷却净膛胴体 |
| `cut_pack` | 机械分割和包装 | `required` | Always | 生产声明的可售分割组合及包装 | kg 包装未冻分割件 |
| `air_blast_freeze_store` | 空气强制冷冻和冻藏 | `required` | Always | 冷冻包装分割组合、储存并提供参考流 | 1,000 kg 冷冻鸭分割肉净质量 |
| `wastewater_pretreatment` | 筛分和溶气气浮预处理 | `required` | Always for this route | 在厂外处理或许可排放前预处理路线合并废水 | m3 原废水处理量 |

### 过程：屠宰、整理、清洗和浸水冷却（`slaughter_dress_chill`）

#### 输入

##### 产品流

###### 北京鸭活鸭（`live_ducks`）

接收的北京鸭活鸭是锁定路线唯一的动物投入。

- 要求：必需（`required`）
- 选定流：Live Pekin ducks ``
- 流属性/单位：Mass / kg live weight
- 数量规则：在工厂接收处称量合格禽只，扣除运输笼具及到厂死亡禽只
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_mass`
- 来源：`fao-slaughterhouses-poultry`
- 数量范围：暂定活鸭投入筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1500
  - 上限：2200
  - 单位：kg live weight
  - 基准：每 1,000 kg 参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 屠宰和冷却外购电力（`slaughter_electricity`）

接收、屠宰、脱羽、掏膛、泵送、清洗和冷却的电力须单独记录。

- 要求：必需（`required`）
- 选定流：Purchased grid electricity ``
- 流属性/单位：Energy / kWh
- 数量规则：本过程分表计量值，共享负荷须有合理分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 沥水冷却净膛胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：

###### 浸烫和卫生用外购蒸汽（`slaughter_steam`）

跨越厂界、用于浸烫及工艺卫生的外购蒸汽作为独立能源载体记录。

- 要求：必需（`required`）
- 选定流：Purchased steam ``
- 流属性/单位：Mass and energy / kg and MJ
- 数量规则：计量交付蒸汽，并由实测状态和冷凝水回流计算净能量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 沥水冷却净膛胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_steam`
- 来源：

###### 浸烫、清洗和冷却用饮用工艺水（`slaughter_process_water`）

供浸烫、胴体清洗、设备清洁和浸水冷却使用的饮用工艺水作为产品投入计量。

- 要求：必需（`required`）
- 选定流：Potable process water ``
- 流属性/单位：Volume / m3
- 数量规则：计量分配到本过程的净工艺取水，排除生活和办公用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 沥水冷却净膛胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_steam`
- 来源：`fao-slaughterhouses-poultry`
- 数量范围：暂定工艺用水筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1
  - 上限：10
  - 单位：m3
  - 基准：每 1,000 kg 参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 沥水冷却净膛鸭胴体（`chilled_dressed_carcasses`）

转入分割的沥水冷却净膛胴体在分割前称量，且不是参考产品。

- 要求：必需（`required`）
- 选定流：Chilled dressed Pekin duck carcasses ``
- 流属性/单位：Mass / kg
- 数量规则：浸水冷却并按标准时间沥水后、分割前称量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 沥水冷却净膛胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：`fao-slaughterhouses-poultry`

###### 分流食用鸭内脏（`edible_offal`）

供销售的鸭心、鸭肝、鸭胗或其他声明食用器官作为独立副产品记录，绝不计入冷冻分割件质量。

- 要求：必需（`required`）
- 选定流：Edible duck offal ``
- 流属性/单位：Mass / kg
- 数量规则：称量每项上市食用内脏流；仅有生产证据时可记零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 沥水冷却净膛胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：`fao-slaughterhouses-poultry`

###### 回收鸭血（`recovered_blood`）

为炼制或其他有益用途而有意收集的血液是独立副产品；送去处理的血液不得改标为本流。

- 要求：必需（`required`）
- 选定流：Recovered duck blood ``
- 流属性/单位：Mass / kg
- 数量规则：称量，或由罐液位和实测密度计算收集量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 沥水冷却净膛胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_output_mass`
- 来源：`mozhiarasi-natarajan-2022`

###### 回收鸭羽毛（`recovered_feathers`）

为炼制或材料回收而分流的羽毛与其他屠宰固体分开记录。

- 要求：必需（`required`）
- 选定流：Recovered duck feathers ``
- 流属性/单位：Mass / kg wet feathers
- 数量规则：出厂时称量湿羽毛，并在可得时记录水分基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 沥水冷却净膛胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：`mozhiarasi-natarajan-2022`

##### 废物流

###### 不可食屠宰固体（`inedible_slaughter_solids`）

鸭头、鸭掌、不可食内脏、判废物料及其他未回收屠宰固体作为一个明确废物流计量，并排除已分流血液和羽毛。

- 要求：必需（`required`）
- 选定流：Inedible duck slaughter solids ``
- 流属性/单位：Mass / kg wet waste
- 数量规则：按去向称量外运废物并扣除容器皮重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 沥水冷却净膛胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`fao-slaughterhouses-poultry`; `mozhiarasi-natarajan-2022`

###### 屠宰和冷却原废水（`slaughter_wastewater`）

浸烫、胴体清洗、设备清洁和浸水冷却的合并排水须在与分割或冷冻区废水混合前计量。

- 要求：必需（`required`）
- 选定流：Raw slaughter and chilling wastewater ``
- 流属性/单位：Volume / m3
- 数量规则：计量转入废水预处理的体积，并保留流量比例样品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 沥水冷却净膛胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`
- 来源：`fao-slaughterhouses-poultry`; `mozhiarasi-natarajan-2022`

### 过程：机械分割和包装（`cut_pack`）

#### 输入

##### 产品流

###### 分割用冷却净膛鸭胴体（`cutting_carcasses`）

屠宰过程实测胴体输出是分割过程唯一动物物料投入。

- 要求：必需（`required`）
- 选定流：Chilled dressed Pekin duck carcasses ``
- 流属性/单位：Mass / kg
- 数量规则：等于转入的 `chilled_dressed_carcasses` 质量，并记录转运损失或增量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 包装未冻分割件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：

###### 聚合物产品接触袋（`polymer_bags`）

接触鸭分割件的初级聚合物袋或内衬与瓦楞纸箱分开计量。

- 要求：必需（`required`）
- 选定流：Polymer packaging film ``
- 流属性/单位：Mass / kg
- 数量规则：包装领用量减经核实的未用退回量，并与包装件数核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装未冻分割件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：

###### 瓦楞运输纸箱（`corrugated_cartons`）

用于冷冻产品出库的瓦楞纸箱作为独立包装投入记录。

- 要求：必需（`required`）
- 选定流：Corrugated board cartons ``
- 流属性/单位：Mass / kg
- 数量规则：纸箱领用量减未用退回量，再乘实测或供应商声明单箱质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装未冻分割件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：

###### 分割和包装外购电力（`cut_pack_electricity`）

输送、锯切、分割、称量、封口及局部制冷的电力须对分割包装过程计量。

- 要求：必需（`required`）
- 选定流：Purchased grid electricity ``
- 流属性/单位：Energy / kWh
- 数量规则：本过程分表计量值，共享负荷须有合理分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装未冻分割件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：

###### 分割和冷冻装载区卫生用饮用水（`cut_pack_process_water`）

分割设备、食品接触面及相邻冷冻装载区的清洗用饮用水须与屠宰和冷却用水分开计量。

- 要求：必需（`required`）
- 选定流：Potable process water ``
- 流属性/单位：Volume / m3
- 数量规则：计量分配到分割、包装和冷冻装载区的净清洗取水，排除生活和办公用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装未冻分割件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_steam`
- 来源：

#### 输出

##### 产品流

###### 包装未冻带皮带骨鸭分割件（`packed_unfrozen_cuts`）

完整的声明可售分割组合在包装后、冷冻前称量，各具名分割件质量占比保留在批次记录中。

- 要求：必需（`required`）
- 选定流：Packed unfrozen skin-on bone-in duck cuts ``
- 流属性/单位：Mass / kg net product
- 数量规则：汇总各包装单元产品净质量，并与具名分割件批次总量核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装未冻分割件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_output_mass`
- 来源：

###### 回收鸭分割边角料和骨（`recovered_cut_trimmings`）

为食品、饲料或炼制而有意回收的边角料和骨是独立副产品，不计入可售分割件质量。

- 要求：必需（`required`）
- 选定流：Recovered duck cut trimmings and bones ``
- 流属性/单位：Mass / kg
- 数量规则：在转移或出厂时称量各回收流并记录预定去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装未冻分割件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：

##### 废物流

###### 分割包装废料（`packaging_scrap`）

包装期间产生的废膜、废袋、废内衬和废纸箱按材料及去向称量。

- 要求：必需（`required`）
- 选定流：Duck-meat packaging scrap ``
- 流属性/单位：Mass / kg
- 数量规则：聚合物和瓦楞纸分别称量；仅在保留材料字段后才可汇总
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装未冻分割件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：

###### 分割和卫生原废水（`cut_pack_wastewater`）

分割设备、食品接触面、包装区清洗及冷冻装载区冲洗的排水须在并入屠宰废水前计量。

- 要求：必需（`required`）
- 选定流：Raw cut-up and sanitation wastewater ``
- 流属性/单位：Volume / m3
- 数量规则：计量转入合并废水预处理的体积，并保留流量比例样品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装未冻分割件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`
- 来源：

### 过程：空气强制冷冻和冻藏（`air_blast_freeze_store`）

#### 输入

##### 产品流

###### 冷冻用包装未冻鸭分割件（`freezing_feed`）

声明分割批次的包装未冻分割件是空气强制冷冻机唯一产品进料。

- 要求：必需（`required`）
- 选定流：Packed unfrozen skin-on bone-in duck cuts ``
- 流属性/单位：Mass / kg net product
- 数量规则：等于转入的 `packed_unfrozen_cuts` 净质量，并记录转运差异
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：

###### 空气强制冷冻外购电力（`freezing_electricity`）

空气强制冷冻机、蒸发器风机、泵及可归属压缩机的电力须与冻藏电力分开。

- 要求：必需（`required`）
- 选定流：Purchased grid electricity ``
- 流属性/单位：Energy / kWh
- 数量规则：从装载开始至产品热稳定，分表计量本次冷冻运行
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`fao-who-cxc-8-1976`

###### 冻藏外购电力（`storage_electricity`）

冻库电力须单独记录，并关联实际质量—时间储存服务。

- 要求：必需（`required`）
- 选定流：Purchased grid electricity ``
- 流属性/单位：Energy / kWh
- 数量规则：分表计量冻库；多产品共库时按每日吨·日分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每吨·日参考产品储存
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_meters`
- 来源：`fao-who-cxc-8-1976`

#### 输出

##### 产品流

###### 工厂门冷冻鸭分割肉（`frozen_duck_cuts`）

本流是参考产品，即声明包装分割组合经过空气强制冷冻和冻藏后的产品。

- 要求：必需（`required`）
- 选定流：冷冻鸭肉 `658e0f63-44f8-4e3e-aeef-ccf1ab20a13f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定参考量 1,000 kg 冷冻产品净质量，不含包装
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：标识引用（`identity_reference`）
- 采集协议：`cp_output_mass`
- 来源：`unsd-cpc-3-2025`; `fao-who-cxc-8-1976`

##### 废物流

###### 不合格冷冻鸭产品（`rejected_frozen_product`）

冷冻或冻藏后判废的包装产品须与可售输出分开计量，并赋予实际去向。

- 要求：必需（`required`）
- 选定流：Rejected frozen duck product ``
- 流属性/单位：Mass / kg
- 数量规则：按原因和去向称量不合格产品净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：

##### 基本流

###### 排放到空气的 R717 氨制冷剂（`refrigerant_to_air`）

须把冷冻机及冻库的 R717 无水氨逸散作为对空气排放报告；只有完成充注量核对后才可记零。

- 要求：必需（`required`）
- 选定流：Ammonia, anhydrous, to air ``
- 流属性/单位：Mass / kg NH3
- 数量规则：期初充注量加补充量减期末充注量和有记录回收量，并按设备充注量或泄漏证据在冷冻和冻藏间分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant`
- 来源：

### 过程：筛分和溶气气浮预处理（`wastewater_pretreatment`）

#### 输入

##### 废物流

###### 路线合并原废水（`combined_raw_wastewater`）

进入厂内预处理的屠宰、冷却、分割、清洁及冷冻区实测废水是处理进料。

- 要求：必需（`required`）
- 选定流：Combined raw duck-processing wastewater ``
- 流属性/单位：Volume / m3
- 数量规则：计量总进水并与各源过程废水体积核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 预处理废水输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`
- 来源：`mozhiarasi-natarajan-2022`

##### 产品流

###### 废水预处理外购电力（`pretreatment_electricity`）

筛网、泵、空气饱和、气浮及污泥处理的电力与生产电力分别记录。

- 要求：必需（`required`）
- 选定流：Purchased grid electricity ``
- 流属性/单位：Energy / kWh
- 数量规则：分表计量预处理设备，或由配电盘数据、运行时数及核实负荷进行分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 预处理废水输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_meters`
- 来源：

###### 氯化铁混凝剂（`ferric_chloride`）

声明溶气气浮系统投加的氯化铁作为具名化学品投入记录；改用其他混凝剂须修订路线。

- 要求：必需（`required`）
- 选定流：Ferric chloride ``
- 流属性/单位：Mass / kg as supplied and kg active substance
- 数量规则：由储罐或采购平衡核算，并报告溶液浓度和活性物质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 m3 预处理废水输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_treatment_chemical`
- 来源：

#### 输出

##### 废物流

###### 送厂外处理的预处理废水（`pretreated_wastewater`）

溶气气浮出水在转交厂外处理或声明许可排放点计量。

- 要求：必需（`required`）
- 选定流：Pretreated duck-processing wastewater ``
- 流属性/单位：Volume / m3
- 数量规则：计量出水体积，并报告流量加权 COD、BOD5、总悬浮物、总氮和总磷浓度及负荷
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 预处理废水输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`
- 来源：`mozhiarasi-natarajan-2022`

###### 废水筛除固体（`screened_solids`）

筛分去除的粗羽毛、组织、脂肪及其他固体作为独立湿废物流称量。

- 要求：必需（`required`）
- 选定流：Screened duck-processing solids ``
- 流属性/单位：Mass / kg wet waste
- 数量规则：按去向称量容器化筛除固体并扣皮重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 预处理废水输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`mozhiarasi-natarajan-2022`

###### 溶气气浮污泥（`daf_sludge`）

溶气气浮去除的浮渣污泥须与筛除固体及液态出水分开记录。

- 要求：必需（`required`）
- 选定流：Duck-processing dissolved-air-flotation sludge ``
- 流属性/单位：Mass / kg wet sludge and kg dry matter
- 数量规则：称量湿污泥，测定代表性固含量，并按报告期计算干物质
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 m3 预处理废水输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_mass`
- 来源：`mozhiarasi-natarajan-2022`

## 7. 分配与副产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_avoid` | 全部前景过程 | 首先通过分开计量过程阶段、按去向记录残余处理、区分冷冻和冻藏、使用产品特定分割批次来避免分配。 | `ec-pef-2021` |
| `al_subdivide` | 可分离输出与操作 | 在分配共享负担前，将专用于生产或处理食用内脏、回收血液、羽毛、边角料、包装废料、不合格品或废水的操作直接归属相应流。 | `ec-pef-2021` |
| `al_residual_economic` | 不可细分的共享屠宰和分割负荷 | 对仍不可细分的屠宰和分割负担，在参考分割批次与具有正收入及预定有益用途的副产品间，按同期工厂门经济价值分配；价格来源、币种、平均期和分配因子均为必填。不得把 PEF 哺乳动物默认因子迁移到鸭。 | `ec-pef-2021` |
| `al_mass_sensitivity` | 承担共享负荷的共产品 | 对每项接受剩余共享负担的副产品，另以分流点实测湿质量报告分配敏感性，并披露水分基准。 | `ec-pef-2021` |
| `al_waste` | 废物输出 | 没有预定有益用途或正收入的残余是废物，不接受副产品分配，并从产生点承担收集、厂内处理、运输及厂外处理负担。 | `ec-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_live_mass` | `slaughter_dress_chill` | live ducks | weighbridge/slaughter log | gross mass, crate tare, accepted birds, dead-on-arrival mass, time | calibrated receiving scale | kg | each lot | representative 12 consecutive months | route plant | accepted net live mass summed | calibration and lot reconciliation |
| `cp_utility_meters` | all processes | electricity | meter/energy log | meter id, opening/closing reading, interval, downtime, shared load | dedicated meter or verified engineering allocation | kWh | shift or batch | representative 12 consecutive months | route equipment | sum by process; storage by tonne-day | meter calibration and panel map |
| `cp_water_steam` | `slaughter_dress_chill` | water and steam | meter log | water volume, steam mass, state, condensate return, interval | calibrated flow meter | m3; kg; MJ | shift or batch | representative 12 consecutive months | route process | net use by batch | calibration and mass/energy reconciliation |
| `cp_output_mass` | production processes | products and co-products | scale/production log | flow identity, gross, tare, net, cut name, moisture basis, destination | calibrated scales and batch reconciliation | kg | each batch/dispatch | representative 12 consecutive months | route plant | sum net mass by atomic flow | scale calibration and signed batch record |
| `cp_packaging` | `cut_pack` | packaging inputs | issue/return and specification record | material, units issued, returns, unit mass, supplier spec | inventory reconciliation plus sample weighing | kg | batch | representative 12 consecutive months | packed route | issued minus returned mass | purchase and sample-weight records |
| `cp_waste_mass` | all processes | solid wastes and rejects | waste manifest/scale log | waste identity, gross, tare, wet mass, dry matter if relevant, destination | calibrated scale | kg | each dispatch | representative 12 consecutive months | route plant | sum by atomic waste and destination | manifests, tickets, sampling record |
| `cp_wastewater` | `slaughter_dress_chill`; `wastewater_pretreatment` | wastewater | flow meter and laboratory record | volume, sample time, COD, BOD5, TSS, TN, TP, sampling basis | continuous flow meter and flow-proportional composite sample | m3; mg/L; kg | continuous flow; at least monthly composite | representative 12 consecutive months | route drains and pretreatment | volume sum; concentration × matched volume | meter calibration, laboratory method and chain of custody |
| `cp_temperature` | `slaughter_dress_chill`; `air_blast_freeze_store` | product and room temperature | logger record | sensor id, location, time, product-core temperature, room temperature, batch | calibrated continuous logger plus representative core probes | °C; h | continuous per batch/store | all reported batches | chill tank, freezer and store | retain extrema and time-temperature profile | calibration and alarm/deviation log |
| `cp_refrigerant` | `air_blast_freeze_store` | refrigerant emission | service/charge log | refrigerant identity, opening charge, additions, closing charge, recovered mass, equipment | annual charge reconciliation | kg | each service and annual close | same 12-month period | freezer and frozen store | mass balance by named refrigerant | invoices, service sheets and recovery records |
| `cp_treatment_chemical` | `wastewater_pretreatment` | ferric chloride | tank/purchase log | delivered solution mass, inventory change, concentration, active mass, treated volume | inventory reconciliation | kg solution; kg active | batch/month | representative 12 consecutive months | DAF unit | consumption divided by matched influent | invoices, tank readings and concentration certificate |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_normalize` | all inventory rows | reporting-period flow ÷ saleable reference-product mass × 1,000 kg | matched-period flow and `frozen_duck_cuts` net mass | flow per reference amount |  |
| `cr_mass_balance` | slaughter and cut-up | inputs − outputs − inventory change; report absolute and percentage closure without forcing balance | all atomic wet-mass flows and inventory change | unexplained mass and closure percentage |  |
| `cr_storage_energy` | frozen storage | matched storage kWh × product tonne-days ÷ total room tonne-days | daily inventory, residence time, room electricity | kWh per reference-product tonne-day | `fao-who-cxc-8-1976` |
| `cr_refrigerant` | refrigerant emission | opening charge + additions − closing charge − recovered mass | charge and service records | kg named refrigerant to air, floored at zero only after investigation |  |
| `cr_allocation` | shared slaughter/cut burdens | shared burden × recipient plant-gate revenue ÷ total eligible revenue; repeat by split-point wet mass for sensitivity | eligible product masses, prices, revenues, shared burden | economic allocation result and wet-mass sensitivity | `ec-pef-2021` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | reference product | 每个代表产品系列均须证明品种/品系、带皮带骨形式、具名分割件占比、空气强制冷冻技术和包装规格 | product specification, labels, batch and equipment records |
| `dq_time` | foreground data | 使用一个有代表性的连续 12 个月；披露停产、季节缺口及任何较短期间 | dated raw records and coverage calculation |
| `dq_measurement` | measured flows | 使用校准仪表/秤并保留仪表到过程的映射；仅在无专表时允许工程分配，且须披露不确定性 | calibration certificates, meter maps, allocation workbook |
| `dq_completeness` | all atomic flows | 纳入行须覆盖至少 95% 的实测投入质量和 95% 的计量能源；逐项列示并解释排除项 | mass/energy completeness reconciliation |
| `dq_sources` | external datasets | 记录每个链接数据集的地理、年份、技术、提供者、版本和变换 | dataset provenance register |
| `dq_estimates` | provisional ranges | 发布前景量不得取自 `reasoned_estimate` 范围；须以采集/计算证据替换，否则将数据集披露为不完整 | estimate replacement log and review record |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_identity` | 参考流与产品身份 | 参考流 UUID、Mass 属性 UUID、1,000 kg 数量、CPC 标识、北京鸭限定、带皮带骨分割形式、空气强制冷冻技术及 R717 氨制冷剂须匹配本 PCR。 | `unsd-cpc-3-2025` |
| `val_route` | 必需工艺路线 | 四个必需过程须按顺序存在；不得把整鸭、其他分割形式、以内脏为参考产品或非空气强制冷冻路线平均进数据集。 | `unsd-cpc-3-2025`; `fao-slaughterhouses-poultry` |
| `val_mass_balance` | 屠宰与分割质量平衡 | 须报告屠宰及分割湿质量平衡；无法解释差额超过投入 5% 时须纠正或提供经评审的流特定说明。 | `fao-slaughterhouses-poultry` |
| `val_atomic` | 全部前景交换 | 电力、蒸汽、水、聚合物膜、纸箱、氯化铁、每项产品/副产品、每项废物、废水及具名制冷剂排放须保持独立原子行。 | `fao-slaughterhouses-poultry`; `ec-pef-2021` |
| `val_temperature` | 冷冻与冻藏 | 批次证据须证明冷冻热稳定后产品热中心不高于 -18 °C，且冻藏维持 -18 °C 或更低；偏差须披露。 | `fao-who-cxc-8-1976` |
| `val_allocation` | 共享负荷与共产品 | 细分、合格副产品状态、工厂门经济因子和湿质量敏感性须齐全；废物不得接受副产品分配。 | `ec-pef-2021` |
| `val_completeness` | 完成的前景数据包 | 前景记录须覆盖声明期间并通过 95% 质量和能源完整性测试；暂定推理范围不得代替实测量。 | `ec-pef-2021` |
| `val_uuid` | 全部 UUID 字段 | 非参考流 UUID 和 Mass 单位组 UUID 的空缺须保持明确未解决，严禁通过语义猜测填入。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 锁定冷冻分割鸭路线的产品特定前景单元过程包及汇总工厂门结果 |
| downstream_use | `secondary_dataset`；只有接收研究匹配声明路线和限定条件时才可作为 `background_dataset` |
| allowed_use | 在地理、时间、技术、分割组成和分配兼容时，用于包装冷冻带皮带骨北京鸭分割肉的比较型或归因型 LCA |
| excluded_use | 代表冷冻整鸭、未经组成调整的单个分割件、鲜/冷藏肉、去骨/去皮产品、内脏、制备鸭肉、其他冷冻技术、鸭养殖、配送、零售、烹饪或食用 |
| required_metadata | 工厂地理和年份；品种/品系；分割件名称和质量占比；皮/骨状态；屠宰和冷却配置；冷冻技术和制冷剂；包装清单；储存温度和吨·日；废水路线；上游数据集版本；分配因子 |
| required_quality_disclosure | 覆盖期；缺失或经分配仪表；校准状态；质量和能源完整性；质量平衡闭合；废水采样；温度偏差；制冷剂核对；数据源代表性；推理估算；未解决 UUID |
| update_trigger | 品种/品系、分割组成、皮/骨形式、屠宰/冷却线、主要冷冻技术、制冷剂、包装、废水处理、储存制度、分配状态、工厂地理变化，或数据超过三年 |

## 11. 数据源

总调度已用一组鸭肉加工路线检索式和一组论文精确标题检索完成 OpenAlex 发现，共筛查 18 条结果记录。检索未发现鸭肉专属加工 LCI 来源；精确标题检索确认了 `mozhiarasi-natarajan-2022`，该文只因其 PMC 原始全文已经独立核验而保留。宽泛的禽类养殖、营养、烹饪、微生物及仅元数据结果均被拒绝，任何摘要或搜索摘要都未用于支撑规则或数值。

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | 联合国统计司，*CPC Version 3.0 Explanatory Notes*（2025），[官方 PDF](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | 核验 CPC 21142 冷冻鸭肉的纳入范围及其与鲜/冷藏肉、食用内脏的排除关系 |
| `fao-slaughterhouses-poultry` | official_guidance | FAO，*Slaughterhouses—Poultry slaughter*（访问日期 2026-08-20），[官方页面](https://www.fao.org/4/X6114E/x6114e04.htm) | 核验禽类工序顺序、浸水冷却、工艺用水节点以及血液、羽毛、内脏、废水和固体残余的分别记录；不把通用禽类百分比用作鸭专属数量 |
| `fao-who-cxc-8-1976` | standard | 食品法典委员会，*Code of Practice for the Processing and Handling of Quick Frozen Foods, CXC 8-1976*（访问日期 2026-08-20），[官方 PDF](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/zh/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B8-1976%252FCXC_008e.pdf) | 速冻完成、-18 °C 热中心和储存条件及温度记录 |
| `ec-pef-2021` | official_guidance | 欧盟委员会，*Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods*（访问日期 2026-08-20），[EUR-Lex 官方 PDF](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A32021H2279) | 全文核验屠宰场对直接可归属流先细分、剩余流按经济价值分配的规则及公司特定数据要求；不把哺乳动物默认因子迁移到鸭 |
| `mozhiarasi-natarajan-2022` | literature | Mozhiarasi V., Natarajan T.S., “Slaughterhouse and poultry wastes: management practices, feedstocks for renewable energy production, and recovery of value added products,” *Biomass Conversion and Biorefinery*（2022），[doi:10.1007/s13399-022-02352-0](https://doi.org/10.1007/s13399-022-02352-0)，[PMC 全文](https://pmc.ncbi.nlm.nih.gov/articles/PMC8830992/) | 全文核验血液、羽毛、内脏、废水、筛除固体及处理污泥的分类和源头分流；不把鸡的百分比迁移到鸭 |
