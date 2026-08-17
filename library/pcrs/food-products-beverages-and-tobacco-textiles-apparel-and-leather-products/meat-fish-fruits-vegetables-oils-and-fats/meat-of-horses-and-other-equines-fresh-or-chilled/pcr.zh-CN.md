---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-horses-and-other-equines-fresh-or-chilled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 马和其他马科动物肉，鲜或冷藏
## 1. 范围与适用性

本 PCR 适用于在屠宰场或分割厂工厂门以鲜或冷藏状态供应的马和其他马科动物食用骨骼肌肉，包括未冻结的胴体、半胴体、四分体、带骨肉块和去骨肉块。

冷冻马科动物肉、食用或非食用内脏、炼制脂肪、血制品、原皮、骨、调制或腌制肉、活体动物及非马科动物肉不属于参考产品。实际产生的具体内脏、血、脂、皮和骨仍分别作为共产品或废物记录。

马科动物饲养和入厂运输属于上游，通过活体动物数据集进入。零售、餐饮、消费者烹调与使用和寿命终止属于下游，不在默认边界内。

数据集应声明马科物种、动物来源、屠宰与分割场址、胴体或肉块形态、带骨状态、鲜或冷藏状态、冷却与贮藏技术、包装、肉品净质量、生产期、地理、分配及全部受控过程。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-horses-and-other-equines-fresh-or-chilled |
| classification_refs | CPC 3.0：21118，Meat of horses and other equines, fresh or chilled |
| covered_products | 马和其他马科动物的鲜或冷藏食用骨骼肌肉，包括胴体、半胴体、四分体、带骨或去骨肉块 |
| excluded_products | 冷冻肉；食用和非食用内脏；血制品；炼制脂肪；原皮；骨；调制或腌制肉；活马科动物；非马科动物肉 |
| representative_product | 工厂门状态的鲜或冷藏马科动物骨骼肌肉，具有声明的物种、形态、带骨状态、温度状态和包装 |
| production_route | 活马科动物接收 → 屠宰和胴体整理 → 胴体冷却 → 分割去骨 → 清洗消毒 → 包装和冷藏 |
| market_state | 在屠宰场或分割厂工厂门经检验放行的鲜或冷藏马科动物肉 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 以声明的胴体或肉块形态提供可食用马科动物骨骼肌肉 |
| How much | 1 kg 净鲜或冷藏马科动物肉，不含可移除包装 |
| How well | 按生产者适用的检验、身份、卫生、形态和温度状态控制放行，且从未冻结 |
| How long or cycle | 工厂门的一个生产与冷藏批次；声明保质期但不改变 1 kg 参考量 |
| reference_flow_link | `reference_equine_meat` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Meat of horses and other equines, fresh or chilled `ac93b427-13d9-411d-9521-36baea644bb5` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 马科物种；动物来源；胴体或肉块形态；带骨状态；鲜或冷藏状态；冷却与贮藏技术；包装；屠宰与分割场址；生产期；肉品净质量 |

所有必需限定信息均应存在于数据集元数据、过程说明、参考流备注或等效数据包字段中。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_meat_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅计量合格食用骨骼肌肉；仅在声明带骨产品时包括骨，排除包装、内脏、血、皮和单独去除的脂肪。 |
| `liveweight_measurement` | 活马科动物投入 | Mass | kg | 使用屠宰场边界经校准的批次活重，并保留动物或批次身份。 |
| `water_volume` | 过程用水和废水 | Volume | m3 | 使用经校准计量或有文件支持的过程水平衡，不重复计算内部循环水。 |
| `utility_energy` | 电力、蒸汽、热水和燃料 | Energy | kWh 或 MJ | 保留仪表单位和换算因子，按阶段和载能体分别记录，燃料声明低位热值基准。 |
| `refrigerant_mass` | R-717 补充与释放 | Mass | kg | 对声明制冷系统的充注、回收与库存变化进行核对。 |
| `co_product_waste_mass` | 共产品与废物 | Mass | kg | 分别称量每项指定血液、脏器、脂肪、皮、骨、组织、固体和包装流，并记录去向和适用含水基准。 |

## 5. 系统边界

默认边界为从摇篮到工厂门。前景控制始于活马科动物跨越屠宰场边界，终于净鲜或冷藏肉在包装及受控冷藏后放行。活体动物上游数据集应包括饲养和入厂运输。零售、使用和寿命终止排除。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 具有声明来源、活重、批次和上游数据集的已识别活马或其他马科动物到达屠宰场 |
| starting_condition_role | 前景屠宰与肉品加工投入 |
| product_classification_scope | CPC 3.0 subclass 21118 鲜或冷藏马科动物骨骼肌肉 |
| recursive_input_rule | 购入后继续分割或包装的鲜或冷藏马科动物肉，以其上游数据集作为产品投入记录一次，不递归重建同一类别 |
| upstream_dataset_requirement | 活马科动物投入覆盖饲养和入厂运输；其他产品、化学品、能源和包装投入需要代表性上游数据集 |
| disclosure | 声明受控场址、过程纳入、温度状态、共产品、废物、排放、包装、分配、时间覆盖和上游代理缺口 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p_animal_reception` | 动物接收与待宰 | `required` | 始终纳入屠宰场接收、身份控制及受控待宰。 | 屠宰前接收和暂养活马科动物。 | 1 kg 转入屠宰的合格活马科动物质量 |
| `p_slaughter_dressing` | 屠宰与胴体整理 | `required` | 始终纳入受控致昏、放血、剥皮、去内脏、劈半和胴体检验。 | 把合格活马科动物转化为胴体及逐项识别的共产品和废物。 | 1 kg 合格净膛马科胴体 |
| `p_carcass_chilling` | 胴体冷却 | `required` | 始终纳入分割或出厂前的受控冷却。 | 在不冻结的条件下冷却胴体并保持批次身份。 | 1 kg 合格冷藏马科胴体 |
| `p_cutting_deboning` | 分割与去骨 | `required` | 纳入声明肉品形态实际采用的标准分割、修整与去骨步骤。 | 把冷藏胴体转化为鲜或冷藏马科动物肉块。 | 1 kg 包装前合格鲜或冷藏马科动物肉 |
| `p_cleaning_sanitation` | 清洗与消毒 | `required` | 始终纳入可归属于声明屠宰、冷却、分割和包装作业的清洗消毒。 | 清洗消毒产品接触设备和受控生产区域。 | 1 kg 合格鲜或冷藏马科动物肉 |
| `p_packaging_cold_storage` | 包装与冷藏 | `required` | 始终纳入实际使用的包装及工厂门前受控冷藏。 | 包装合格肉品、保持鲜或冷藏状态并放行参考产品。 | 1 kg 净鲜或冷藏马科动物肉 |

### 过程：动物接收与待宰（`p_animal_reception`）

#### 输入

##### 产品流

###### 活马科动物投入（`reception_live_equine`）

记录“活马科动物投入”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Live horse for slaughter
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格活马科动物质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reception`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### 接收过程用水（`reception_process_water`）

记录“接收过程用水”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：依据计量仪表或有文件支持的过程平衡取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格活马科动物质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reception`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### 接收阶段用电（`reception_electricity`）

记录“接收阶段用电”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：优先分表计量；否则采用有文件支持的设备时间和负荷计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格活马科动物质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reception`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### 小麦秸秆垫料投入（`reception_straw_bedding`）

记录“小麦秸秆垫料投入”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Wheat straw bedding
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格活马科动物质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reception`
- 来源：`ec-jrc-sa-bref-2024`

##### 废物流

无。

##### 基本流

无。

#### 输出

##### 产品流

###### 合格活马科动物输出（`accepted_live_equine`）

记录“合格活马科动物输出”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Accepted live horse for slaughter
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个接收批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reception`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

##### 废物流

###### 待宰圈粪便（`reception_manure`）

记录“待宰圈粪便”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Equine manure
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格活马科动物质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reception`
- 来源：`ec-jrc-sa-bref-2024`

###### 废垫料（`reception_used_bedding`）

记录“废垫料”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Used wheat straw bedding
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格活马科动物质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reception`
- 来源：`ec-jrc-sa-bref-2024`

###### 接收阶段废水（`reception_wastewater`）

记录“接收阶段废水”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Lairage wash wastewater
- 流属性/单位：Volume / m3
- 数量规则：依据计量仪表或有文件支持的过程平衡取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格活马科动物质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reception`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### 接收阶段判废动物（`reception_condemned_animal`）

记录“接收阶段判废动物”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Condemned equine carcass
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格活马科动物质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reception`
- 来源：`ec-jrc-sa-bref-2024`

##### 基本流

无。


### 过程：屠宰与胴体整理（`p_slaughter_dressing`）

#### 输入

##### 产品流

###### 合格活马科动物投入（`slaughter_live_equine`）

记录“合格活马科动物投入”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Accepted live horse for slaughter
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净膛胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### 屠宰过程用水（`slaughter_process_water`）

记录“屠宰过程用水”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：依据计量仪表或有文件支持的过程平衡取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净膛胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### 屠宰阶段用电（`slaughter_electricity`）

记录“屠宰阶段用电”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：优先分表计量；否则采用有文件支持的设备时间和负荷计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净膛胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### 屠宰用蒸汽（`slaughter_steam`）

记录“屠宰用蒸汽”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：依据计量仪表或有文件支持的过程平衡取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净膛胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### 屠宰用热水（`slaughter_hot_water`）

记录“屠宰用热水”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：依据计量仪表或有文件支持的过程平衡取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净膛胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### 屠宰用天然气（`slaughter_natural_gas`）

记录“屠宰用天然气”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：依据计量仪表或有文件支持的过程平衡取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净膛胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### 屠宰用液化石油气（`slaughter_lpg`）

记录“屠宰用液化石油气”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：依据对应采集协议的批次、仪表、称量或计算记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净膛胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

##### 废物流

无。

##### 基本流

无。

#### 输出

##### 产品流

###### 净膛马科胴体输出（`dressed_equine_carcass`）

记录“净膛马科胴体输出”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Dressed equine carcass
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个屠宰批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### 食用马科动物血共产品（`edible_equine_blood`）

记录“食用马科动物血共产品”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Edible equine blood
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净膛胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter`
- 来源：`ec-jrc-sa-bref-2024`

###### 食用马科动物肝共产品（`edible_equine_liver`）

记录“食用马科动物肝共产品”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Edible equine liver
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净膛胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter`
- 来源：`ec-jrc-sa-bref-2024`

###### 食用马科动物心共产品（`edible_equine_heart`）

记录“食用马科动物心共产品”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Edible equine heart
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净膛胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter`
- 来源：`ec-jrc-sa-bref-2024`

###### 马科动物原皮共产品（`equine_hide`）

记录“马科动物原皮共产品”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Raw equine hide
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净膛胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter`
- 来源：`ec-jrc-sa-bref-2024`

###### 马科动物炼制脂肪共产品（`equine_rendering_fat`）

记录“马科动物炼制脂肪共产品”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Raw equine adipose tissue for rendering
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净膛胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter`
- 来源：`ec-jrc-sa-bref-2024`

##### 废物流

###### 非食用马科动物血废物（`non_edible_equine_blood`）

记录“非食用马科动物血废物”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Non-edible equine blood
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净膛胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter`
- 来源：`ec-jrc-sa-bref-2024`

###### 胃肠内容物（`gastrointestinal_contents`）

记录“胃肠内容物”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Equine gastrointestinal contents
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净膛胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter`
- 来源：`ec-jrc-sa-bref-2024`

###### 判废内脏（`condemned_viscera`）

记录“判废内脏”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Condemned equine viscera
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净膛胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter`
- 来源：`ec-jrc-sa-bref-2024`

###### 屠宰废水（`slaughter_wastewater`）

记录“屠宰废水”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Slaughterhouse wastewater
- 流属性/单位：Volume / m3
- 数量规则：依据计量仪表或有文件支持的过程平衡取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净膛胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

##### 基本流

###### 屠宰化石二氧化碳排放（`slaughter_fossil_co2`）

记录“屠宰化石二氧化碳排放”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据前景记录与有文件支持的单项因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净膛胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter`
- 来源：`ec-pef-method-2021-2279`

###### 屠宰氮氧化物排放（`slaughter_nox`）

记录“屠宰氮氧化物排放”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据前景记录与有文件支持的单项因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净膛胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter`
- 来源：`ec-pef-method-2021-2279`


### 过程：胴体冷却（`p_carcass_chilling`）

#### 输入

##### 产品流

###### 净膛胴体投入（`chilling_dressed_carcass`）

记录“净膛胴体投入”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Dressed equine carcass
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格冷藏胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### 胴体冷却用电（`chilling_electricity`）

记录“胴体冷却用电”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：优先分表计量；否则采用有文件支持的设备时间和负荷计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格冷藏胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### 胴体冷却制冷剂投入（`chilling_refrigerant_r717`）

记录“胴体冷却制冷剂投入”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Refrigerant ammonia (R-717)
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据领用、回收和库存变化记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格冷藏胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

##### 废物流

无。

##### 基本流

无。

#### 输出

##### 产品流

###### 冷藏马科胴体输出（`chilled_equine_carcass`）

记录“冷藏马科胴体输出”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Chilled equine carcass
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个冷却批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

##### 废物流

###### 冷却间冷凝水（`chilling_condensate`）

记录“冷却间冷凝水”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Carcass chiller condensate wastewater
- 流属性/单位：Volume / m3
- 数量规则：依据计量仪表或有文件支持的过程平衡取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格冷藏胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling`
- 来源：`ec-jrc-sa-bref-2024`

###### 冷却后判废胴体（`chilling_rejected_carcass`）

记录“冷却后判废胴体”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Rejected chilled equine carcass
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格冷藏胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling`
- 来源：`ec-jrc-sa-bref-2024`

##### 基本流

###### R-717 向空气排放（`chilling_ammonia_air`）

记录“R-717 向空气排放”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Ammonia (R-717) to air
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据领用、回收和库存变化记录取得
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格冷藏胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_chilling`
- 来源：`ec-pef-method-2021-2279`


### 过程：分割与去骨（`p_cutting_deboning`）

#### 输入

##### 产品流

###### 冷藏胴体投入（`cutting_chilled_carcass`）

记录“冷藏胴体投入”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Chilled equine carcass
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装前合格肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### 分割过程用水（`cutting_process_water`）

记录“分割过程用水”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：依据计量仪表或有文件支持的过程平衡取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装前合格肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### 分割阶段用电（`cutting_electricity`）

记录“分割阶段用电”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：优先分表计量；否则采用有文件支持的设备时间和负荷计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装前合格肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

##### 废物流

无。

##### 基本流

无。

#### 输出

##### 产品流

###### 未包装鲜或冷藏马科动物肉输出（`fresh_chilled_equine_meat_unpacked`）

记录“未包装鲜或冷藏马科动物肉输出”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Equine meat, fresh or chilled, unpacked
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个分割批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### 马科动物骨共产品（`equine_bones`）

记录“马科动物骨共产品”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Raw equine bones
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装前合格肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting`
- 来源：`ec-jrc-sa-bref-2024`

###### 马科动物脂肪修整物共产品（`equine_fat_trimmings`）

记录“马科动物脂肪修整物共产品”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Raw equine fat trimmings
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装前合格肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting`
- 来源：`ec-jrc-sa-bref-2024`

##### 废物流

###### 分割判废组织（`cutting_condemned_tissue`）

记录“分割判废组织”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Condemned equine tissue
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装前合格肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting`
- 来源：`ec-jrc-sa-bref-2024`

###### 分割废水（`cutting_wastewater`）

记录“分割废水”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Meat cutting wastewater
- 流属性/单位：Volume / m3
- 数量规则：依据计量仪表或有文件支持的过程平衡取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装前合格肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

##### 基本流

无。


### 过程：清洗与消毒（`p_cleaning_sanitation`）

#### 输入

##### 产品流

###### 清洗消毒用水（`sanitation_process_water`）

记录“清洗消毒用水”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：依据计量仪表或有文件支持的过程平衡取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### 清洗消毒用电（`sanitation_electricity`）

记录“清洗消毒用电”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：优先分表计量；否则采用有文件支持的设备时间和负荷计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### 清洗消毒用蒸汽（`sanitation_steam`）

记录“清洗消毒用蒸汽”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：依据计量仪表或有文件支持的过程平衡取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### 清洗消毒用热水（`sanitation_hot_water`）

记录“清洗消毒用热水”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：依据计量仪表或有文件支持的过程平衡取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### 清洗消毒锅炉天然气（`sanitation_natural_gas`）

记录“清洗消毒锅炉天然气”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：依据计量仪表或有文件支持的过程平衡取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### 氢氧化钠清洁剂投入（`sanitation_sodium_hydroxide`）

记录“氢氧化钠清洁剂投入”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据前景记录与有文件支持的单项因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### 过氧乙酸消毒剂投入（`sanitation_peracetic_acid`）

记录“过氧乙酸消毒剂投入”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Peracetic acid
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据前景记录与有文件支持的单项因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

##### 废物流

无。

##### 基本流

无。

#### 输出

##### 产品流

无。

##### 废物流

###### 清洗消毒废水（`sanitation_wastewater`）

记录“清洗消毒废水”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Slaughterhouse sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：依据计量仪表或有文件支持的过程平衡取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### 废水筛渣（`wastewater_screenings`）

记录“废水筛渣”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Slaughterhouse wastewater screenings
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation`
- 来源：`ec-jrc-sa-bref-2024`

###### 废水处理污泥（`wastewater_sludge`）

记录“废水处理污泥”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Slaughterhouse wastewater-treatment sludge
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation`
- 来源：`ec-jrc-sa-bref-2024`

##### 基本流

###### 清洗消毒化石二氧化碳排放（`sanitation_fossil_co2`）

记录“清洗消毒化石二氧化碳排放”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据前景记录与有文件支持的单项因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation`
- 来源：`ec-pef-method-2021-2279`

###### 清洗消毒氮氧化物排放（`sanitation_nox`）

记录“清洗消毒氮氧化物排放”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据前景记录与有文件支持的单项因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation`
- 来源：`ec-pef-method-2021-2279`


### 过程：包装与冷藏（`p_packaging_cold_storage`）

#### 输入

##### 产品流

###### 未包装鲜或冷藏肉投入（`packaging_unpacked_meat`）

记录“未包装鲜或冷藏肉投入”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Equine meat, fresh or chilled, unpacked
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### PA/PE 真空包装膜投入（`packaging_pa_pe_film`）

记录“PA/PE 真空包装膜投入”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Polyamide-polyethylene vacuum packaging film
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据领用、回收和库存变化记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage`
- 来源：`ec-pef-method-2021-2279`

###### PET 肉托盘投入（`packaging_pet_tray`）

记录“PET 肉托盘投入”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Polyethylene terephthalate meat tray
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage`
- 来源：`ec-pef-method-2021-2279`

###### 纤维素吸水垫投入（`packaging_absorbent_pad`）

记录“纤维素吸水垫投入”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Cellulose absorbent meat pad
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage`
- 来源：`ec-pef-method-2021-2279`

###### 纸质标签投入（`packaging_label`）

记录“纸质标签投入”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Printed paper meat label
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage`
- 来源：`ec-pef-method-2021-2279`

###### 瓦楞运输箱投入（`packaging_corrugated_carton`）

记录“瓦楞运输箱投入”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Corrugated paperboard meat shipping carton
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage`
- 来源：`ec-pef-method-2021-2279`

###### 包装阶段用电（`packaging_electricity`）

记录“包装阶段用电”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：优先分表计量；否则采用有文件支持的设备时间和负荷计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### 冷藏库用电（`cold_storage_electricity`）

记录“冷藏库用电”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：优先分表计量；否则采用有文件支持的设备时间和负荷计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### 冷藏库制冷剂投入（`cold_storage_refrigerant_r717`）

记录“冷藏库制冷剂投入”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Refrigerant ammonia (R-717)
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据领用、回收和库存变化记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### 应急发电柴油（`backup_diesel`）

记录“应急发电柴油”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Diesel fuel
- 流属性/单位：Energy / MJ
- 数量规则：依据计量仪表或有文件支持的过程平衡取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

##### 废物流

无。

##### 基本流

无。

#### 输出

##### 产品流

###### 参考鲜或冷藏马科动物肉输出（`reference_equine_meat`）

记录“参考鲜或冷藏马科动物肉输出”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Meat of horses and other equines, fresh or chilled `ac93b427-13d9-411d-9521-36baea644bb5`
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个包装冷藏批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage`
- 来源：`ec-pef-method-2021-2279`

##### 废物流

###### 包装膜废物（`packaging_film_waste`）

记录“包装膜废物”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Waste polyamide-polyethylene film
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage`
- 来源：`ec-pef-method-2021-2279`

###### 纸板包装废物（`packaging_paperboard_waste`）

记录“纸板包装废物”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Waste corrugated paperboard
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage`
- 来源：`ec-pef-method-2021-2279`

###### 包装后判废肉（`packaging_rejected_meat`）

记录“包装后判废肉”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Rejected fresh or chilled equine meat
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据经校准称量、批次转移或处置记录取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage`
- 来源：`ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

##### 基本流

###### 冷藏库 R-717 排放（`cold_storage_ammonia_air`）

记录“冷藏库 R-717 排放”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Ammonia (R-717) to air
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据领用、回收和库存变化记录取得
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage`
- 来源：`ec-pef-method-2021-2279`

###### 备用柴油化石二氧化碳排放（`backup_diesel_co2`）

记录“备用柴油化石二氧化碳排放”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据前景记录与有文件支持的单项因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage`
- 来源：`ec-pef-method-2021-2279`

###### 备用柴油氮氧化物排放（`backup_diesel_nox`）

记录“备用柴油氮氧化物排放”作为跨越本过程边界的单一具体交换，并按批次、场址或技术适用性取得数量。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据前景记录与有文件支持的单项因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考肉品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage`
- 来源：`ec-pef-method-2021-2279`


## 7. 分配与共产品处理

- `allocation_avoid_subdivision`：首先通过动物和批次谱系、独立称量、分表计量、过程细分及按去向区分的共产品记录避免分配。来源：`ec-pef-method-2021-2279`。
- `allocation_record_gross_outputs`：在分配前记录肉、食用血、食用脏器、原皮、脂肪和骨的实测总输出，不得将其数量与废物或投入净抵。来源：`ec-jrc-sa-bref-2024`；`ec-pef-method-2021-2279`。
- `allocation_physical_relationship`：对不可分的多输出屠宰过程，仅在物理关系代表因果资源关系时采用，并披露属性、单位和受影响交换。来源：`ec-pef-method-2021-2279`。
- `allocation_other_basis`：不存在代表性物理关系时，遵循适用 PEF 分配层级，披露基准、价格或其他参数、参考期和敏感性；本 PCR 不给出默认份额。来源：`ec-pef-method-2021-2279`。
- `allocation_waste_boundary`：依据有文件支持的法律与运营去向把流分类为共产品或废物；外部废物处理保持显式输出，不得静默计入信用。来源：`ec-jrc-sa-bref-2024`；`ec-pef-method-2021-2279`。
- `allocation_shared_utilities`：按最接近的实测驱动因素分配共享电力、热、制冷和清洗消毒，如设备时间与负荷、计量能量、占用冷藏质量时间、清洁面积时间或过程水。来源：`ec-jrc-sa-bref-2024`；`ec-pef-method-2021-2279`。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reception` | `p_animal_reception` | 活体动物、水、电力、合格动物及接收废物 | 动物登记、地磅、仪表、垫料和废物记录 | animal_or_lot_id; species; origin; liveweight; arrival; acceptance; water; electricity; bedding; manure; wastewater; rejected mass | 经校准活重、仪表、库存领用和废物称量，并链接批次身份 | kg; m3; kWh | 每批次 | 代表性生产期，通常连续 12 个月或完整较短活动 | 所有受控接收与待宰区 | 每个原子交换求和并按合格活重归一化 | 身份记录；秤校准；仪表；库存和废物票据 |
| `cp_slaughter` | `p_slaughter_dressing` | 动物、水、阶段能源、胴体、具体共产品、废物和燃烧排放 | 屠宰批次、仪表、称量、检验和去向记录 | lot_id; liveweight; water; electricity; steam; hot_water; gas; LPG; carcass_mass; each co-product; each waste; destination; factor | 经校准秤、分表、产品检验记录、去向票据和排放计算 | kg; m3; kWh; MJ | 每批次与仪表期 | 与参考生产相同期间 | 所有受控屠宰和胴体整理线 | 按合格胴体质量归一化并保留总输出 | 校准；批次谱系；仪表；检验；去向和因子记录 |
| `cp_chilling` | `p_carcass_chilling` | 胴体、电力、R-717、冷藏输出、冷凝水、不合格品和释放 | 批次转移、制冷仪表和维护记录 | lot_id; input_mass; output_mass; temperature_state; electricity; refrigerant_issue; recovery; stock_change; condensate; reject_mass | 校准称量、分表、制冷日志和制冷剂平衡 | kg; kWh; m3 | 每批次和维护事件 | 与参考生产相同期间 | 所有受控胴体冷却间 | 按合格冷藏胴体质量归一化 | 批次；仪表；维护和制冷剂核对记录 |
| `cp_cutting` | `p_cutting_deboning` | 冷藏胴体、水、电力、肉、骨、脂肪、判废组织和废水 | 分割批次、仪表、称量和去向记录 | lot_id; presentation; bone_status; input_mass; water; electricity; accepted_meat; bones; fat; condemned_tissue; wastewater | 经校准批次称量、仪表和去向记录 | kg; m3; kWh | 每分割批次 | 与参考生产相同期间 | 所有受控分割去骨间 | 按包装前合格肉质量归一化并核对指定输出 | 批次谱系；校准；仪表；检验和去向记录 |
| `cp_sanitation` | `p_cleaning_sanitation` | 水、能源、活性化学品、废水、筛渣、污泥和排放 | 清洗计划、配方、库存、仪表和处理记录 | area; duration; water; electricity; steam; hot_water; gas; formulation_mass; active_concentration; wastewater; screenings; sludge; factors | 仪表、经核实浓度、库存核对、废物称量和排放计算 | kg; m3; kWh; MJ | 每个清洗周期和处理期 | 与参考生产相同期间 | 所有受控加工区和场内废水处理 | 按清洁面积时间或实测驱动因素分配并按合格肉归一化 | 计划；SDS；配方；仪表；校准；处理和因子记录 |
| `cp_packaging_storage` | `p_packaging_cold_storage` | 肉、各包装、阶段用电、R-717、柴油、参考输出、废物和排放 | 包装 BoM、计数、称量、仪表、贮藏和维护记录 | lot_id; net_meat; package_SKU; count; unit_mass; packaging_electricity; storage_electricity; mass_time; refrigerant; diesel; rejects; waste | 经批准 BoM、净重称量、组件抽样、分表和维护平衡 | kg; count; kWh; MJ | 每批次、贮藏期和维护事件 | 与参考生产相同期间 | 所有受控包装和冷藏区 | 按净放行肉归一化，共享冷藏按占用质量时间分配 | BoM；抽样质量；秤和仪表校准；冷藏与维护日志 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | 参考肉 | 合格产品质量减可移除包装皮重；仅声明带骨产品时包括骨 | 包装后总质量；包装皮重；带骨状态 | kg 净鲜或冷藏马科动物肉 | `ec-pef-method-2021-2279` |
| `calc_material_balance` | 屠宰和分割 | 活体或胴体投入 = 实测肉和指定共产品 + 指定废物 + 不确定度内库存或水分变化 | 全部指定输入输出质量 | 核对 kg 和残差 | `ec-jrc-sa-bref-2024`；`ec-pef-method-2021-2279` |
| `calc_active_chemical` | 氢氧化钠和过氧乙酸 | 配方产品质量 × 经核实活性浓度 | 配方领用质量；浓度 | kg 指定活性物质 | `ec-pef-method-2021-2279` |
| `calc_refrigerant_release` | R-717 制冷 | 补充制冷剂 − 回收制冷剂 − 系统正库存变化 | 领用；回收；充注和库存记录 | kg 氨向空气排放 | `ec-pef-method-2021-2279` |
| `calc_combustion_emission` | 天然气、LPG 和柴油 | 各燃料前景记录乘以每项排放的燃料与设备特定因子 | 燃料能量；因子和单位 | kg 指定基本流 | `ec-pef-method-2021-2279` |
| `calc_component_packaging_mass` | 计件包装 | 数量 × 同一包装 SKU 和期间的实测平均空包装单件质量 | 数量；抽样单件质量 | kg 指定包装组件 | `ec-pef-method-2021-2279` |
| `calc_cold_storage_allocation` | 共享冷藏 | 冷藏库计量电力 × 声明产品占用质量时间 ÷ 总占用质量时间 | 仪表；产品质量；贮藏时间；总质量时间 | 归属于产品批次的 kWh | `ec-pef-method-2021-2279` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_scope_identity` | 参考产品 | 确认为鲜或冷藏且从未冻结的马科动物骨骼肌肉；内脏和其他共产品不计入参考质量。 | CPC、产品规范、检验和温度记录 |
| `dq_company_specific` | 受控前景 | 对全部受控作业使用公司特定过程、BoM、公用工程、共产品、废物和直接排放数据。 | 批次、仪表、发票、去向记录及 `ec-pef-method-2021-2279` |
| `dq_traceability` | 动物至肉品谱系 | 保持从活马科动物经胴体、分割、包装至放行的批次链接。 | 动物登记、屠宰分割批次和包装批次 |
| `dq_completeness` | LCI | 覆盖已知原材料、能源、产品、共产品、废物及向空气、水和土壤排放，不使用集合流占位。 | 过程核查、BoM、仪表、废物和排放核对 |
| `dq_mass_balance` | 接收、屠宰和分割 | 核对全部指定质量并披露残差、水分变化和测量不确定度。 | 签署平衡表和校准称量 |
| `dq_temperature_state` | 冷却与贮藏 | 证明参考肉保持鲜或冷藏且未冻结，声明监测基准与偏差。 | 冷却间和冷藏库记录 |
| `dq_sanitation` | 清洗消毒 | 各活性化学品按配方身份和浓度分别记录，并核对水、废水和处理固体。 | SDS、配方、库存、仪表和处理记录 |
| `dq_allocation` | 肉及共产品 | 披露总输出、分类、去向、分配层级、驱动因素、参考期和敏感性。 | 分配工作表和去向证据 |
| `dq_packaging` | 包装 | 各包装组件分别记录，可移除包装排除在参考肉质量之外。 | 包装 BoM 和单件质量抽样 |
| `dq_unresolved_uuid` | 非参考行 | 精确 hybrid 和 state-100 直读一致前 UUID 留空，并保留逐行 manifest 缺口。 | manifest 未解析清单行 |

## 9. 校验规则

- `validate_reference_identity`：确认 Product flow UUID `ac93b427-13d9-411d-9521-36baea644bb5`、精确名称、CPC 21118、state 100、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 及 kg。来源：`unsd-cpc-3-21118`。
- `validate_scope`：拒绝冷冻马科动物肉、仅内脏产品、调制肉、活体动物和非马科动物肉；要求鲜或冷藏骨骼肌肉。来源：`unsd-cpc-3-21118`。
- `validate_boundary`：确认饲养和入厂运输属于上游，零售、使用和寿命终止属于下游。
- `validate_process_map`：要求接收、屠宰整理、冷却、适用分割、清洗消毒、包装及受控冷藏。来源：`ec-jrc-sa-bref-2024`。
- `validate_reference_mass`：确认 1 kg 净合格肉，声明带骨状态并排除可移除包装。来源：`ec-pef-method-2021-2279`。
- `validate_atomic_flows`：拒绝合并材料、公用工程、燃料、化学品、包装、共产品、废物或排放。
- `validate_uuid_gate`：除非精确 hybrid 和 state-100 直读确认，否则所有非参考 UUID 留空并匹配 manifest 行。
- `validate_lci_completeness`：核对公司特定原材料、能源、产品、共产品、废物和向空气、水、土壤排放。来源：`ec-pef-method-2021-2279`。
- `validate_mass_balance`：检查活重、胴体、肉、指定共产品、废物、库存或水分变化并调查残差。来源：`ec-jrc-sa-bref-2024`；`ec-pef-method-2021-2279`。
- `validate_refrigerant`：适用 R-717 制冷时，要求补充、回收、库存变化及独立氨释放记录。
- `validate_combustion`：适用天然气、LPG 或柴油时，分别要求每种燃料及各适用直接排放。
- `validate_bilingual_alignment`：确认 process id、row id、选定流、受控 token、UUID、rule id、protocol id、calculation id、quality id 与 source id 顺序一致。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 工厂门鲜或冷藏马科动物肉生产前景数据包 |
| downstream_use | `secondary_dataset`；`background_dataset` |
| allowed_use | 与声明产品、路线、地理和时期匹配的产品 LCA、环境足迹、供应商数据集及下游 process 或 lifecyclemodel 构建 |
| excluded_use | 冷冻肉、内脏产品、调制肉、非马科动物肉、未披露温度状态、缺少谱系或未报告共产品分配 |
| required_metadata | PCR id；CPC；参考 UUID；物种；来源；场址；形态；带骨状态；鲜/冷藏状态；制冷；包装；净质量；时期；地理；谱系；分配；共产品去向；过程纳入；未解析身份 |
| required_quality_disclosure | 前景覆盖；仪表和计算；质量平衡残差；温度偏差；代表性；上游代理；分配敏感性；化学品、制冷剂、废物和排放缺口；审查状态 |
| update_trigger | 供应商或动物来源、过程、产品、包装、制冷、清洗消毒或燃料变化；新场址或时期；分配或去向变化；UUID 解析；新证据或方法修订 |

## 11. 数据源

| 来源 id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-21118` | official_guidance | 联合国统计司，Central Product Classification Version 3.0，subclass 21118“Meat of horses and other equines, fresh or chilled”，https://unstats.un.org/unsd/classifications/Econ/CPC；仓库官方 raw CSV CPC_Ver_3.0_Structure_30Jun2025.csv | 产品身份；鲜/冷藏纳入；冷冻与内脏排除 |
| `ec-jrc-sa-bref-2024` | official_guidance | 欧盟委员会联合研究中心，Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and Edible Co-products Industries，JRC135916，DOI 10.2760/18199 | 动物接收、屠宰、胴体整理、分割、冷却、清洗消毒、公用工程、废水及具体血、脂、皮、骨流 |
| `ec-pef-method-2021-2279` | official_guidance | 欧盟委员会，Commission Recommendation (EU) 2021/2279，环境足迹方法合并正文，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 产品特定数据、公司特定制造、完整 LCI、分配、透明度、数据质量和验证 |
