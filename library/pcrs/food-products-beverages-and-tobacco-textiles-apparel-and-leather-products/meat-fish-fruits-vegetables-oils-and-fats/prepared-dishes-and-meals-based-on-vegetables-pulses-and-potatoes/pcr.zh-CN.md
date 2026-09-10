---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.prepared-dishes-and-meals-based-on-vegetables-pulses-and-potatoes
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 以蔬菜、豆类和马铃薯为主的预制菜肴和餐食

## 1. 范围与适用性

本 PCR 适用于以蔬菜、豆类或马铃薯为主要原料，经工厂调味、熟制而成的菜肴或完整餐食。产品可为常温耐储、冷藏或冷冻状态；数据包必须声明准确配方、保藏路线、包装构成和储存条件。前景边界始于制造场址接收门处验收合格的原辅料和包装，止于制造场址门处采用销售包装的净预制餐食。

本 PCR 不包括以肉、鱼、软体动物、甲壳动物、谷物、蒸粗麦粉、馅制面食或比萨为主的餐食，仅经保藏的单一蔬菜或马铃薯产品，餐饮或家庭烹制，以及除所需上游数据集外的农业生产。配方可含少量谷物、乳品、蛋或其他原料，但蔬菜、豆类或马铃薯必须仍是界定产品的主要基础；每种实际原料均须使用单独的原子清单行。

以下清单以马铃薯—鹰嘴豆蔬菜餐食为代表产品，使原子交换明确可见。数据生产者须按实际配方逐种替换或扩充原料卡，不得把多种原料合并成集合行。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| 规范 PCR id（`canonical_pcr_id`） | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.prepared-dishes-and-meals-based-on-vegetables-pulses-and-potatoes |
| 分类引用（`classification_refs`） | CPC 3.0：21391，精确映射语境 |
| 纳入产品（`covered_products`） | 以蔬菜、豆类或马铃薯为主要原料的即用、调味、熟制菜肴或餐食；常温耐储、冷藏或冷冻 |
| 排除产品（`excluded_products`） | 以肉、鱼、谷物、蒸粗麦粉、馅制面食或比萨为主的餐食；仅经保藏的单一原料；餐饮和家庭烹制 |
| 代表产品（`representative_product`） | 包装马铃薯—鹰嘴豆蔬菜餐食 |
| 生产路线（`production_route`） | 原辅料接收；按需清洗、分选、去皮/切分和豆类浸泡；配料与烹煮；灌装与封口；热保藏和/或冷藏/冷冻；场内储存 |
| 市场状态（`market_state`） | 制造场址门处声明为常温耐储、冷藏或冷冻 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 内容 | 提供以蔬菜、豆类或马铃薯为主、经预制调味和熟制、完成声明的最终准备后供食用的菜肴或餐食 |
| 数量 | 制造场址门处 1,000 kg 净预制餐食，不含包装 |
| 性能要求 | 符合声明的配方、主要原料属性、食品安全控制、保藏路线、包装完整性、储存条件和适用产品规范 |
| 时间或周期 | 一个生产报告期；保质期是必需产品限定信息，不扩展参考数量 |
| 参考流链接（`reference_flow_link`） | `reference_product_flow` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 净预制餐食 |
| 参考产品流 | 以蔬菜、豆类或马铃薯为主的预制菜肴或餐食 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际配方及各原料质量分数；主要原料基础；常温/冷藏/冷冻市场状态；即食或复热状态；保藏路线；净质量及包装排除；制造地域与技术；储存温度；声明保质期；报告期 |

构建前景数据包时，`必需限定信息` 中各项须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少任何必需限定信息，均使该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告制造场址门处 1,000 kg 净可食预制餐食；参考数量排除全部包装质量。 |
| `ingredient_mass` | 每种配方原料 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 每种原料按接收状态质量单独记录；当含水率或固形物含量实质影响可比性时予以保留。 |
| `utility_energy` | 电力、蒸汽、外购热力和燃料 | 能量或燃料特定的质量/体积 | kWh、MJ、kg 或 m3 | 保留计费或计量单位；燃料能量换算须说明低位或高位热值，并在记录单位换算后再归一化。 |
| `water_mass_volume` | 工艺水和清洁用水 | 质量或体积 | kg 或 m3 | 区分配方水、预处理水和清洁用水；体积换算质量时记录密度假设。 |
| `packaging_mass` | 每个包装组件 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 初级、次级和三级包装材料逐种单独计量；净产品参考数量不得包含包装。 |
| `emission_load` | 直接空气和水排放 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用同一期间的实测浓度与实测流量计算污染物负荷，或使用有记录的直接质量测量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| 声明的起始条件（`declared_starting_condition`） | 制造场址接收门处验收合格的食品原料、加工助剂、清洁化学品、包装组件和公用工程 |
| 起始条件角色（`starting_condition_role`） | 前景制造入口条件 |
| 产品分类范围（`product_classification_scope`） | 以蔬菜、豆类或马铃薯为界定性主要原料的预制菜肴和餐食 |
| 递归投入规则（`recursive_input_rule`） | 已属于本产品类别的外购预制原料，以一个具体产品投入及其上游数据集记录一次；不得在本前景系统内再次展开其内部制备。 |
| 上游数据集要求（`upstream_dataset_requirement`） | 每种外购原料、包装组件、电力、燃料、制冷剂、化学品和处理服务均须连接地域与技术具有代表性的上游数据集。 |
| 披露要求（`disclosure`） | 声明原料来源和状态、配方、预处理与保藏路线、共享设备处理方式、包装构成、场址门处冷链条件、废物处理去向、排除项及任何同类别递归投入。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | 前景制造 | 纳入原料预处理、配料/烹煮、灌装/封口、适用的保藏和场内冷藏、清洁消毒、场内废物管理及制造场址直接排放。 | `rasines-et-al-2024-precooked-vegetables`; `schmidt-rivera-et-al-2014-convenience-food` |
| `boundary_rule_2` | 上下游阶段 | 前景采集排除农业、原料制造、包装制造、场址门外配送、消费者储存/准备和生命末期；研究边界包含这些阶段时连接有代表性的背景数据集。 | `ec-pef-2021-2279` |
| `boundary_rule_3` | 路线特定操作 | 豆类浸泡、焯烫、杀菌釜/巴氏杀菌、冷藏、冷冻和废水处理仅在实际采用时纳入；缺失的每个原子交换或过程须标为不适用，并保留路线声明。 | `rasines-et-al-2024-precooked-vegetables`; `codex-cxc-1-1969` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `ingredient_preparation` | 原辅料接收与预处理 | required | 所有产品 | 前景原料验收、清洗、分选、去皮、切分及采用时的豆类浸泡 | kg 验收或预处理原料 |
| `formulation_cooking` | 配料与烹煮 | required | 所有产品 | 前景配方投料、混合、烹煮和散装餐食生产 | kg 散装熟制餐食 |
| `filling_packaging` | 灌装、封口与装箱 | required | 所有产品 | 前景初级、次级和三级包装 | kg 包装餐食 |
| `preservation_storage` | 保藏与场内储存 | required | 路线特定保藏和声明的市场状态 | 前景热处理、冷却/冷冻和场内储存 | 场址门处 kg 合格餐食 |
| `sanitation_wastewater` | 清洁消毒、废物与废水管理 | required | 所有产品；处理输出取决于场址路线 | 前景清洁、废物分流及场内废水处理或排放 | 归一化至参考流的生产期记录 |

### 过程：原辅料接收与预处理 (`ingredient_preparation`)

#### 输入

##### 产品流

###### 生马铃薯 (`raw_potato`)

生马铃薯作为单独称量的配方原料进入制备工序。

- 选定流： 生马铃薯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：收货记录和批次记录中的净接收质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_ingredient_mass`
- 来源： `un-cpc-3-0`; `rasines-et-al-2024-precooked-vegetables`

###### 生胡萝卜 (`raw_carrot`)

生胡萝卜作为单独称量的配方原料进入制备工序。

- 选定流： 生胡萝卜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：收货记录和批次记录中的净接收质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_ingredient_mass`
- 来源： `rasines-et-al-2024-precooked-vegetables`

###### 生洋葱 (`raw_onion`)

生洋葱作为单独称量的配方原料进入制备工序。

- 选定流： 生洋葱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：收货记录和批次记录中的净接收质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_ingredient_mass`
- 来源： `rasines-et-al-2024-precooked-vegetables`

###### 干鹰嘴豆 (`dry_chickpea`)

干鹰嘴豆作为单独称量的原料进入代表性豆类水合路线。

- 选定流： 干鹰嘴豆
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：收货记录和批次记录中的净接收干质量；未使用鹰嘴豆时不适用
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_ingredient_mass`
- 来源： `un-cpc-3-0`

###### 制备用水 (`preparation_water`)

洗涤、辅助去皮和豆类水合用水与配方水、清洁用水分别计量。

- 选定流： 工艺水
- 流属性/单位： 体积 / m3
- 数量规则：制备区域水表读数减去单独计量的清洁用水
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_water_balance`
- 来源： `eu-fdm-bat-2019`; `rasines-et-al-2024-precooked-vegetables`

###### 制备用电 (`preparation_electricity`)

分选、切割、去皮、泵送和制备设备使用的电力。

- 选定流： 中压电
- 流属性/单位： 能量 / kWh
- 数量规则：分表计量的制备用电，或有记录的共用电表分配量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy_records`
- 来源： `eu-fdm-bat-2019`; `rasines-et-al-2024-precooked-vegetables`

###### 蔬菜消毒用次氯酸钠 (`sodium_hypochlorite`)

仅在用于接收蔬菜消毒时记录次氯酸钠。

- 选定流： 次氯酸钠
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：制备线领用的有效产品质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_chemical_records`
- 来源： `rasines-et-al-2024-precooked-vegetables`; `codex-cxc-1-1969`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 备烹马铃薯 (`prepared_potato`)

经洗涤、按需去皮和切割的马铃薯离开制备工序进入烹调。

- 选定流： 备烹马铃薯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测转移质量，或输入质量减去单独计量的马铃薯损失
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准：每 kg 备烹马铃薯产出
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_preparation_mass_balance`
- 来源： `rasines-et-al-2024-precooked-vegetables`

###### 备烹胡萝卜 (`prepared_carrot`)

经洗涤和切割的胡萝卜离开制备工序进入烹调。

- 选定流： 备烹胡萝卜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测转移质量，或输入质量减去单独计量的胡萝卜损失
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准：每 kg 备烹胡萝卜产出
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_preparation_mass_balance`
- 来源： `rasines-et-al-2024-precooked-vegetables`

###### 备烹洋葱 (`prepared_onion`)

经去皮和切割的洋葱离开制备工序进入烹调。

- 选定流： 备烹洋葱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测转移质量，或输入质量减去单独计量的洋葱损失
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准：每 kg 备烹洋葱产出
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_preparation_mass_balance`
- 来源： `rasines-et-al-2024-precooked-vegetables`

###### 水合鹰嘴豆 (`hydrated_chickpea`)

采用干豆水合路线时，水合鹰嘴豆离开制备工序进入烹调。

- 选定流： 浸泡鹰嘴豆
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：水合后实测的沥干质量；使用预煮鹰嘴豆或未使用鹰嘴豆时不适用
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准：每 kg 水合鹰嘴豆产出
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_preparation_mass_balance`
- 来源： `un-cpc-3-0`

##### 废物流

###### 马铃薯皮废物 (`potato_peel_waste`)

场内去除的马铃薯皮作为独立的可生物降解废物流称量。

- 选定流： 马铃薯皮废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：送往声明处理去向的实测质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`
- 来源： `eu-fdm-bat-2019`; `rasines-et-al-2024-precooked-vegetables`

###### 不合格蔬菜物料 (`rejected_vegetable_waste`)

马铃薯皮以外被剔除的可食和不可食蔬菜物料与其他固体废物分开记录。

- 选定流： 不合格蔬菜物料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按去向和处理路线计量的质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`
- 来源： `eu-fdm-bat-2019`; `rasines-et-al-2024-precooked-vegetables`

###### 制备废水 (`preparation_wastewater`)

在可行情况下，洗涤和制备废水应在与场内其他废水混合前计量。

- 选定流： 蔬菜预处理废水
- 流属性/单位： 体积 / m3
- 数量规则：送往场内或场外处理的实测体积或水量平衡推导体积
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_water_balance`
- 来源： `eu-fdm-bat-2019`; `rasines-et-al-2024-precooked-vegetables`

##### 基本流

### 过程：配料与烹煮 (`formulation_cooking`)

#### 输入

##### 产品流

###### 备烹马铃薯投入 (`prepared_potato_input`)

备烹马铃薯转入配方调制。

- 选定流： 备烹马铃薯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测批次投料量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_recipe_batch`
- 来源： `rasines-et-al-2024-precooked-vegetables`

###### 备烹胡萝卜投入 (`prepared_carrot_input`)

备烹胡萝卜转入配方调制。

- 选定流： 备烹胡萝卜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测批次投料量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_recipe_batch`
- 来源： `rasines-et-al-2024-precooked-vegetables`

###### 备烹洋葱投入 (`prepared_onion_input`)

备烹洋葱转入配方调制。

- 选定流： 备烹洋葱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测批次投料量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_recipe_batch`
- 来源： `rasines-et-al-2024-precooked-vegetables`

###### 水合鹰嘴豆投入 (`hydrated_chickpea_input`)

水合鹰嘴豆单独加入代表性配方。

- 选定流： 浸泡鹰嘴豆
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测批次投料量；未使用鹰嘴豆时不适用
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_recipe_batch`
- 来源： `un-cpc-3-0`

###### 番茄泥 (`tomato_puree`)

番茄泥作为单独称量的酱料原料。

- 选定流： 番茄泥
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测批次投料量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_recipe_batch`
- 来源： `schmidt-rivera-et-al-2014-convenience-food`

###### 葵花籽油 (`sunflower_oil`)

葵花籽油作为单独称量的配方原料。

- 选定流： 葵花籽油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测批次投料量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_recipe_batch`
- 来源： `schmidt-rivera-et-al-2014-convenience-food`

###### 食盐 (`salt`)

食盐作为单独称量的配方原料。

- 选定流： 氯化钠
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测批次投料量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_recipe_batch`
- 来源： `schmidt-rivera-et-al-2014-convenience-food`

###### 配方水 (`recipe_water`)

进入餐食产品的水与制备用水和清洁用水分别记录。

- 选定流： 饮用水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量或按批次投加并进入产品的质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_recipe_batch`
- 来源： `schmidt-rivera-et-al-2014-convenience-food`

###### 烹调用电 (`cooking_electricity`)

混合机、泵、电热烹调设备和控制系统用电实行分表计量。

- 选定流： 中压电
- 流属性/单位： 能量 / kWh
- 数量规则：分表计量的调制和烹调用电
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy_records`
- 来源： `eu-fdm-bat-2019`; `schmidt-rivera-et-al-2014-convenience-food`

###### 烹调蒸汽 (`cooking_steam`)

输送至烹调设备的外购或场内自产蒸汽按蒸汽记录。

- 选定流： 蒸汽
- 流属性/单位： 能量 / MJ
- 数量规则：烹调线蒸汽表读数，或基于质量和焓的计算量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_energy_records`
- 来源： `eu-fdm-bat-2019`; `schmidt-rivera-et-al-2014-convenience-food`

###### 外购热量 (`purchased_heat`)

外购热水或区域供热跨越场址边界时单独记录。

- 选定流： 区域或工业热力
- 流属性/单位： 能量 / MJ
- 数量规则：可归属于烹调的供应商仪表或发票数量；未外购热量时不适用
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy_records`
- 来源： `eu-fdm-bat-2019`

###### 天然气 (`natural_gas`)

锅炉或直接加热设备在场内燃烧的天然气单独记录。

- 选定流： 天然气
- 流属性/单位： 体积 / m3
- 数量规则：可归属于本产品和报告期的燃料表读数
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_fuel_records`
- 来源： `eu-fdm-bat-2019`

###### 液化石油气 (`liquefied_petroleum_gas`)

仅对实际使用液化石油气的设备记录该燃料。

- 选定流： 液化石油气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：可归属于本产品的储罐领用量或发票数量；未使用时不适用
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_fuel_records`
- 来源： `eu-fdm-bat-2019`

###### 轻质燃料油 (`light_fuel_oil`)

锅炉或备用热力设备使用轻质燃料油时，应单独记录。

- 选定流： 轻质燃料油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：可归属于本产品的储罐领用量或发票数量；未使用时不适用
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_fuel_records`
- 来源： `schmidt-rivera-et-al-2014-convenience-food`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 散装熟制餐食 (`bulk_cooked_meal`)

完成烹调和调制的餐食在一次包装前离开烹调设备。

- 选定流： 蔬菜鹰嘴豆预制餐食（散装）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测散装熟制品产出，扣除退回或留置物料
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准：每 kg 散装熟制餐食
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_product_output`
- 来源： `rasines-et-al-2024-precooked-vegetables`; `schmidt-rivera-et-al-2014-convenience-food`

##### 废物流

###### 不合格熟制食品 (`offspec_cooked_food`)

包装前剔除的熟制物料与制备残余物分开称量。

- 选定流： 不合格熟制食品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按处理去向实测的质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`
- 来源： `eu-fdm-bat-2019`; `schmidt-rivera-et-al-2014-convenience-food`

##### 基本流

###### 化石二氧化碳（排放到空气） (`fossil_carbon_dioxide`)

场内燃烧产生的化石二氧化碳作为直接空气排放报告。

- 选定流： 二氧化碳（化石源，排放到空气）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测烟气排放质量，或依据所采集燃料记录进行燃料特定计算
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 燃料清单 (`fuel_inventory`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_air_emissions`
- 来源： `eu-fdm-bat-2019`

###### 一氧化碳（排放到空气） (`carbon_monoxide`)

场内燃烧产生的一氧化碳单独报告。

- 选定流： 一氧化碳（排放到空气）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：生产期内实测的烟气排放负荷
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 燃料清单 (`fuel_inventory`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_air_emissions`
- 来源： `eu-fdm-bat-2019`

###### 氮氧化物（排放到空气） (`nitrogen_oxides`)

场内燃烧产生的氮氧化物按工厂声明的计量基准以 NOx 报告。

- 选定流： 氮氧化物（排放到空气）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：生产期内实测的烟气排放负荷
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 燃料清单 (`fuel_inventory`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_air_emissions`
- 来源： `eu-fdm-bat-2019`

###### 二氧化硫（排放到空气） (`sulfur_dioxide`)

场内燃烧含硫燃料时单独报告二氧化硫。

- 选定流： 二氧化硫（排放到空气）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测烟气负荷或硫质量平衡计算量；不存在时不适用
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 燃料清单 (`fuel_inventory`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_air_emissions`
- 来源： `eu-fdm-bat-2019`

###### 颗粒物（排放到空气） (`particulate_matter`)

存在有组织燃烧源颗粒物时单独报告。

- 选定流： 颗粒物（排放到空气）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：生产期内实测的烟气负荷；没有有组织颗粒物源时不适用
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 燃料清单 (`fuel_inventory`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_air_emissions`
- 来源： `eu-fdm-bat-2019`

### 过程：灌装、封口与装箱 (`filling_packaging`)

#### 输入

##### 产品流

###### 散装熟制餐食投入 (`bulk_cooked_meal_input`)

散装熟制餐食转移至灌装设备。

- 选定流： 蔬菜鹰嘴豆预制餐食（散装）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测灌装机进料质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_packaging_records`
- 来源： `rasines-et-al-2024-precooked-vegetables`

###### 聚对苯二甲酸乙二醇酯（PET）托盘 (`pet_tray`)

每个 PET 一次托盘按材料质量记录。

- 选定流： 聚对苯二甲酸乙二醇酯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：产品领用的购入质量减去经核实的未使用退料
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_packaging_records`
- 来源： `schmidt-rivera-et-al-2014-convenience-food`

###### 聚乙烯封口膜 (`polyethylene_lidding_film`)

聚乙烯封口膜与刚性托盘分开记录。

- 选定流： 聚乙烯薄膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：可归属于合格和不合格包装的卷材消耗量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_packaging_records`
- 来源： `schmidt-rivera-et-al-2014-convenience-food`

###### 纸标签 (`paper_label`)

纸标签作为独立的一次包装组件记录。

- 选定流： 纸标签
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：数量乘以实测单件质量，包括不合格标签
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_packaging_records`
- 来源： `rasines-et-al-2024-precooked-vegetables`

###### 瓦楞纸箱 (`corrugated_carton`)

用于运输包装的瓦楞纸箱单独记录。

- 选定流： 瓦楞纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：纸箱数量乘以经核实的单件质量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_packaging_records`
- 来源： `rasines-et-al-2024-precooked-vegetables`; `schmidt-rivera-et-al-2014-convenience-food`

###### 木托盘 (`wooden_pallet`)

记录一次性托盘质量，或可归属的可重复使用托盘损耗。

- 选定流： 木托盘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：一次性托盘质量加上可重复使用托盘的实测补充质量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_packaging_records`
- 来源： `schmidt-rivera-et-al-2014-convenience-food`

###### 托盘缠绕膜 (`stretch_film`)

托盘缠绕膜与一次封口膜分开记录。

- 选定流： 低密度聚乙烯薄膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：可归属于托盘化产品的卷材消耗量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_packaging_records`
- 来源： `rasines-et-al-2024-precooked-vegetables`

###### 包装用电 (`packaging_electricity`)

记录灌装、封口、贴标、输送和托盘缠绕用电。

- 选定流： 中压电
- 流属性/单位： 能量 / kWh
- 数量规则：包装线分表读数，或有记录的共用电表分配量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy_records`
- 来源： `eu-fdm-bat-2019`; `rasines-et-al-2024-precooked-vegetables`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装预制餐食 (`packaged_meal`)

密封餐食单元在最终保藏或储存前离开包装线。

- 选定流： 包装蔬菜鹰嘴豆预制餐食
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：合格密封单元的食品净质量；包装质量单独保留
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准：每 kg 包装餐食净含量
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_product_output`
- 来源： `rasines-et-al-2024-precooked-vegetables`

##### 废物流

###### 废聚对苯二甲酸乙二醇酯包装 (`pet_packaging_scrap`)

不合格 PET 托盘和边角料按去向分别称量。

- 选定流： 废聚对苯二甲酸乙二醇酯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按回收或处置路线实测的废料质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`
- 来源： `rasines-et-al-2024-precooked-vegetables`

###### 废聚乙烯包装 (`polyethylene_packaging_scrap`)

不合格封口膜和缠绕膜与刚性塑料分开称量。

- 选定流： 废聚乙烯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按回收或处置路线实测的废料质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`
- 来源： `rasines-et-al-2024-precooked-vegetables`

###### 废纸板包装 (`paperboard_packaging_scrap`)

不合格纸箱和标签作为纤维包装废物流称量。

- 选定流： 废纸板
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按回收或处置路线实测的废料质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`
- 来源： `rasines-et-al-2024-precooked-vegetables`

##### 基本流

### 过程：保藏与场内储存 (`preservation_storage`)

#### 输入

##### 产品流

###### 包装餐食投入 (`packaged_meal_input`)

合格密封餐食单元进入声明的保藏和储存路线。

- 选定流： 包装蔬菜鹰嘴豆预制餐食
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：进入保藏和储存的食品净质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_product_output`
- 来源： `rasines-et-al-2024-precooked-vegetables`

###### 温控储存用电 (`cold_storage_electricity`)

冷却、冷冻和场内温控储存用电单独记录。

- 选定流： 中压电
- 流属性/单位： 能量 / kWh
- 数量规则：依据实测占用量、质量和储存时间分配的分表计量能源
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 路线特定 (`route_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 储存时长 (`storage_duration`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_cold_storage`
- 来源： `schmidt-rivera-et-al-2014-convenience-food`; `rasines-et-al-2024-precooked-vegetables`

###### 制冷剂氨 (`ammonia_refrigerant`)

使用氨时，制冷设备的氨充注量单独记录。

- 选定流： 氨
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：购入量加期初库存，减去期末库存、回收量和转移量；不存在时不适用
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 储存时长 (`storage_duration`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_refrigerant_balance`
- 来源： `eu-fdm-bat-2019`; `schmidt-rivera-et-al-2014-convenience-food`

###### 制冷剂级二氧化碳 (`carbon_dioxide_refrigerant`)

使用二氧化碳时，制冷设备的二氧化碳充注量单独记录。

- 选定流： 制冷剂级二氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：购入量加期初库存，减去期末库存、回收量和转移量；不存在时不适用
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 储存时长 (`storage_duration`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_refrigerant_balance`
- 来源： `eu-fdm-bat-2019`

###### 制冷剂 R134a (`r134a_refrigerant`)

仅当既有设备使用 R134a 时才单独记录。

- 选定流： 1,1,1,2-四氟乙烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：购入量加期初库存，减去期末库存、回收量和转移量；不存在时不适用
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 储存时长 (`storage_duration`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_refrigerant_balance`
- 来源： `schmidt-rivera-et-al-2014-convenience-food`; `eu-fdm-bat-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 最终预制餐食 (`final_prepared_meal`)

可销售餐食以声明的常温、冷藏或冷冻状态离开场址。

- 选定流： 以蔬菜、豆类或马铃薯为主的预制菜肴或餐食
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：制造场址门口放行的可销售产品净质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准：1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_product_output`
- 来源： `un-cpc-3-0`; `rasines-et-al-2024-precooked-vegetables`

##### 废物流

###### 不合格包装餐食 (`offspec_packaged_meal`)

保藏或储存后剔除的包装单元须称量，并在记录中区分包装部分和食品部分。

- 选定流： 不合格包装预制餐食
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测不合格食品净质量；包装在相应材料废料行中报告
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`
- 来源： `schmidt-rivera-et-al-2014-convenience-food`

##### 基本流

###### 氨（排放到空气） (`ammonia_to_air`)

制冷系统损失的氨作为直接空气排放报告。

- 选定流： 氨（排放到空气）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据制冷剂质量平衡归属于产品的损失
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 储存时长 (`storage_duration`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_refrigerant_balance`
- 来源： `schmidt-rivera-et-al-2014-convenience-food`

###### 制冷剂二氧化碳（排放到空气） (`carbon_dioxide_refrigerant_to_air`)

制冷系统损失的制冷级二氧化碳单独报告。

- 选定流： 制冷剂二氧化碳（排放到空气）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据制冷剂质量平衡归属于产品的损失
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 储存时长 (`storage_duration`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_refrigerant_balance`
- 来源： `eu-fdm-bat-2019`

###### R134a（排放到空气） (`r134a_to_air`)

既有制冷设备损失的 R134a 作为独立的直接空气排放报告。

- 选定流： 1,1,1,2-四氟乙烷（排放到空气）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据制冷剂质量平衡归属于产品的损失；未使用 R134a 时不适用
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 储存时长 (`storage_duration`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_refrigerant_balance`
- 来源： `schmidt-rivera-et-al-2014-convenience-food`; `eu-fdm-bat-2019`

### 过程：清洁消毒、废物与废水管理 (`sanitation_wastewater`)

#### 输入

##### 产品流

###### 清洁消毒用水 (`sanitation_water`)

设备和区域清洁用水与制备用水、配方水分别计量。

- 选定流： 工艺水
- 流属性/单位： 体积 / m3
- 数量规则：清洁水分表读数或有记录的水量平衡
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_water_balance`
- 来源： `eu-fdm-bat-2019`; `codex-cxc-1-1969`

###### 清洁与废水处理用电 (`sanitation_electricity`)

原位清洗泵和场内废水处理用电单独记录。

- 选定流： 中压电
- 流属性/单位： 能量 / kWh
- 数量规则：清洁和处理分表读数，或有记录的共用电表分配量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy_records`
- 来源： `eu-fdm-bat-2019`

###### 氢氧化钠清洗剂 (`sodium_hydroxide`)

碱性清洗使用的氢氧化钠作为一种独立化学品记录。

- 选定流： 氢氧化钠
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：领用的化学品产品质量，并在记录中保留浓度
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_chemical_records`
- 来源： `eu-fdm-bat-2019`; `codex-cxc-1-1969`

###### 硝酸清洗剂 (`nitric_acid`)

酸性清洗使用的硝酸与碱性清洗剂分开记录。

- 选定流： 硝酸
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：领用的化学品产品质量，并在记录中保留浓度
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_chemical_records`
- 来源： `eu-fdm-bat-2019`; `codex-cxc-1-1969`

###### 过氧乙酸消毒剂 (`peracetic_acid`)

设备消毒使用的过氧乙酸作为一种独立化学品记录。

- 选定流： 过氧乙酸
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：领用的化学品产品质量，并在记录中保留有效成分浓度
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_chemical_records`
- 来源： `eu-fdm-bat-2019`; `codex-cxc-1-1969`

###### 清洁消毒用次氯酸钠 (`sanitation_sodium_hypochlorite`)

清洁消毒用次氯酸钠与蔬菜消毒用量分开记录。

- 选定流： 次氯酸钠
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：清洁作业领用的化学品产品质量，并在记录中保留有效成分浓度
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_chemical_records`
- 来源： `eu-fdm-bat-2019`; `codex-cxc-1-1969`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 工厂废水 (`factory_wastewater`)

送往场外处理的工厂混合废水作为废物流报告；直接排放污染物在下方分别报告。

- 选定流： 食品制造废水
- 流属性/单位： 体积 / m3
- 数量规则：生产期内经校准的排放流量计读数
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_wastewater_monitoring`
- 来源： `eu-fdm-bat-2019`

###### 废水处理污泥 (`wastewater_sludge`)

离开场内废水处理系统的污泥按处理去向称量。

- 选定流： 食品工业废水处理污泥
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每次外运实测的湿质量和干固体分数
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`
- 来源： `eu-fdm-bat-2019`

###### 混合固体废物 (`mixed_solid_waste`)

未由更具体食品或包装行表示的非危险混合固体废物单独称量。

- 选定流： 混合城市固体废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按处置去向实测的质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`
- 来源： `eu-fdm-bat-2019`

###### 食品加工残余物 (`food_processing_residue`)

源头分离并送往动物饲料、厌氧消化、堆肥或其他声明路线的可生物降解食品残余物单独记录。

- 选定流： 食品加工残余物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按去向和法律状态实测的外运质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`
- 来源： `eu-fdm-bat-2019`; `rasines-et-al-2024-precooked-vegetables`

##### 基本流

###### 化学需氧量（排放到水体） (`cod_to_water`)

经处理出水离开场址进入受纳水体时，COD 作为独立的直接水排放负荷报告。

- 选定流： 化学需氧量（排放到水体）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：流量比例浓度乘以匹配的排放体积；全部送往场外处理时不适用
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_wastewater_monitoring`
- 来源： `eu-fdm-bat-2019`

###### 生化需氧量（排放到水体） (`bod_to_water`)

直接排放并开展监测时，BOD 与 COD 分开报告。

- 选定流： 生化需氧量（排放到水体）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：流量比例浓度乘以匹配的排放体积；全部送往场外处理时不适用
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_wastewater_monitoring`
- 来源： `eu-fdm-bat-2019`

###### 总氮（排放到水体） (`total_nitrogen_to_water`)

总氮作为独立的直接水排放负荷报告。

- 选定流： 总氮（排放到水体）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：流量比例浓度乘以匹配的排放体积；全部送往场外处理时不适用
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_wastewater_monitoring`
- 来源： `eu-fdm-bat-2019`

###### 总磷（排放到水体） (`total_phosphorus_to_water`)

总磷作为独立的直接水排放负荷报告。

- 选定流： 总磷（排放到水体）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：流量比例浓度乘以匹配的排放体积；全部送往场外处理时不适用
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_wastewater_monitoring`
- 来源： `eu-fdm-bat-2019`

###### 悬浮物（排放到水体） (`suspended_solids_to_water`)

总悬浮固体作为独立的直接水排放负荷报告。

- 选定流： 悬浮物（排放到水体）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：流量比例浓度乘以匹配的排放体积；全部送往场外处理时不适用
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_wastewater_monitoring`
- 来源： `eu-fdm-bat-2019`

###### 氯化物（排放到水体） (`chloride_to_water`)

与直接排放相关时，氯化物单独报告。

- 选定流： 氯化物（排放到水体）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：流量比例浓度乘以匹配的排放体积；全部送往场外处理时不适用
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 净预制餐食
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_wastewater_monitoring`
- 来源： `eu-fdm-bat-2019`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | 共用工序和设备 | 凡能隔离产品特定输入与输出，应通过分表计量、批次记录或工序细分避免分配。 | `ec-pef-2021-2279`; `eu-fdm-bat-2019` |
| `allocation_rule_2` | 共用公用工程和储存 | 无法细分时，采用具有因果相关性的物理驱动因子分配共用公用工程，例如实测设备运行时间与功率、蒸汽热负荷、冷藏占用的体积—质量—时间或处理的废水负荷；记录驱动因子并与全厂总量核对。 | `ec-pef-2021-2279`; `schmidt-rivera-et-al-2014-convenience-food` |
| `allocation_rule_3` | 共用物料处理工序 | 仅当质量通量能够证明是相关物理关系时使用质量分配；不得把质量分配自动用于强度明显不同的加热、冷却或处理工序。 | `ec-pef-2021-2279`; `rasines-et-al-2024-precooked-vegetables` |
| `allocation_rule_4` | 食品残余物和回收材料 | 首先依据适用辖区规则判定并披露每项输出是废物还是共产品。共产品应先采用细分或系统扩展，再考虑物理分配；替代收益只能属于明确声明的扩展系统研究，不得暗中嵌入厂门到厂门数据集。 | `ec-pef-2021-2279`; `eu-fdm-bat-2019` |
| `allocation_rule_5` | 经济分配 | 仅当细分、系统扩展和相关物理关系均不可行时采用经济分配；使用同期净价值，披露取值期间和敏感性，并保留分配前的全厂总量。 | `ec-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_ingredient_mass` | `ingredient_preparation` | 单项接收原料 | 收货和批次记录 | 原料身份、供应商批次、毛质量、皮重、接收质量，以及相关时的水分/固形物 | 经校准收货秤并与批次领料核对 | kg | 每批来料和生产批次 | 代表性生产期，通常至少连续 12 个月 | 每个制造场址 | 按原料和产品汇总接收质量后归一化 | 校准、批次可追溯性、配方核对 |
| `cp_preparation_mass_balance` | `ingredient_preparation` | 备妥原料和制备损失 | 批次质量平衡 | 输入质量、备妥转移质量、果皮、剔除物、留存的在制品 | 经校准生产线秤和库存核对 | kg | 每批次 | 与参考产品产出相同期间 | 每条制备线 | 输入等于转移量、实测损失与库存变化之和 | 秤校准、签署的批次记录、闭合结果 |
| `cp_recipe_batch` | `formulation_cooking` | 单项配方原料 | 配方和投料记录 | 配方版本、原料 id、投料量、退回量、批次产出 | 经校准投料设备或经核实的人工称量单 | kg | 每批次 | 与参考产品产出相同期间 | 每条烹调线 | 按原料和配方版本汇总净投料量 | 配方批准、校准、批次可追溯性 |
| `cp_energy_records` | all | 电力、蒸汽和外购热量 | 仪表、发票和运行日志 | 仪表 id、起止读数、蒸汽质量/压力、热量、运行时间、产品通量 | 优先使用经校准分表；否则采用有记录的物理分配 | kWh、MJ、kg 蒸汽 | 连续或每个账单周期 | 完整报告期 | 场址和相关生产线 | 将工序总量与场址购入/自产量核对并归一化 | 仪表校准、发票、核对记录 |
| `cp_fuel_records` | `formulation_cooking` | 每种场内燃料 | 储罐、仪表和发票记录 | 燃料身份、数量、密度、热值基准、期初/期末库存、设备 | 经校准仪表或库存平衡 | kg 或 m3 | 每次交付和报告周期 | 完整报告期 | 每台燃烧装置 | 按装置核对接收量、库存变化和消耗量 | 发票、储罐校准、燃料证书 |
| `cp_water_balance` | `ingredient_preparation`; `sanitation_wastewater` | 制备、配方、清洁和排放水 | 仪表和水量平衡记录 | 仪表 id、读数、配方加水、排放、蒸发估算、产品含水、损失 | 经校准分表和场址水量平衡 | m3 和 kg | 连续或每日 | 完整报告期 | 每个用水区和排放点 | 将取水量与产品、排放、蒸发和库存变化核对 | 仪表校准、平衡闭合、维护日志 |
| `cp_packaging_records` | `filling_packaging` | 每个包装组件 | 采购、领用、计数和废料记录 | 材料、规格、单件质量、领用数量/质量、未使用退料、废料 | 经核实的材料清单以及生产线领用量和废料称量 | kg | 每个生产订单 | 完整报告期 | 每条包装线 | 领用减退料等于合格包装加废料 | 供应商规格、单件质量检查、核对记录 |
| `cp_product_output` | all | 中间产品和最终产品 | 生产和放行记录 | 批次 id、毛/净质量、包装皮重、留置/返工/剔除、市场状态 | 经校准检重秤和放行记录 | kg | 每批次 | 完整报告期 | 每条生产线和场址 | 汇总放行净质量；不含包装和未决留置品 | 检重秤校准、放行批准、质量平衡 |
| `cp_waste_records` | all | 每项固体或液体废物流 | 容器称重和转移联单 | 废物身份、法律状态、湿质量、相关时的干固体、去向、处理 | 经校准地磅/秤和转移单据 | kg 或 m3 | 每次外运 | 完整报告期 | 每个场址 | 按原子废物身份和去向汇总；不得与收益抵销 | 转移联单、磅单、去向证据 |
| `cp_chemical_records` | `ingredient_preparation`; `sanitation_wastewater` | 每种加工或清洁化学品 | 领用和浓度记录 | 化学品身份、产品质量、有效成分浓度、退回/再利用、工艺区域 | 库存领用记录和投加系统累积计 | kg | 每批次或清洗周期 | 完整报告期 | 每个投加系统 | 分别计算有效成分和配制产品数量，不合并化学品 | 安全数据表、浓度证书、投加校准 |
| `cp_cold_storage` | `preservation_storage` | 储存用电 | 分表和占用日志 | 电力、产品质量、占用体积、进出时间、温度、路线 | 与仓库管理记录关联的经校准仪表 | kWh、kg、h | 连续 | 包含季节变化的完整报告期 | 每个冷藏室或冷冻库 | 采用合理的质量—体积—时间驱动因子分配并与仪表核对 | 仪表校准、温度日志、占用记录 |
| `cp_refrigerant_balance` | `preservation_storage` | 每种制冷剂及其直接泄漏 | 制冷剂库存和维修记录 | 制冷剂身份、期初库存、购入、补充、回收、转移、期末库存、设备 | 由维修记录支持的年度设备级质量平衡 | kg | 每次维修和年度结算 | 完整报告期 | 每套制冷系统 | 分别计算氨、二氧化碳和 R134a 损失；采用有记录的储存驱动因子分配 | 技术人员记录、钢瓶称量、库存核对 |
| `cp_air_emissions` | `formulation_cooking` | 每种直接燃烧排放 | 烟气测量和燃料记录 | 排放源、运行小时、烟气流量、污染物浓度、氧含量/基准条件、燃料用量 | 代表性烟气测试或连续监测；同期间负荷计算 | kg | 许可证或风险设定频率以及每次重大变化 | 报告期内的代表性运行 | 每个排放源 | 浓度乘以匹配的流量和时间，再与燃料运行记录核对 | 实验室认可、仪器校准、采样报告 |
| `cp_wastewater_monitoring` | `sanitation_wastewater` | 废水体积和每种直接污染物 | 流量计和实验室结果 | 体积、采样时间、pH、温度、COD、BOD、TN、TP、TSS、氯化物、处理路线 | 适用时采用流量比例混合采样并匹配排放计量 | m3、mg/L、kg | 场址许可证或 BAT 频率以及每次重大变化 | 含代表性采样的完整报告期 | 每个最终排放点 | 浓度乘以匹配体积；场外处理废水作为废物而非直接排放报告 | 认可分析、仪表校准、监管链记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalization` | 每个清单行 | 归一化数量＝报告期该行数量÷放行产品净质量×1,000 kg | 原子行总量；放行产品净质量 | 每 1,000 kg 净预制餐食的数量 | `ec-pef-2021-2279` |
| `calc_mass_balance` | 原料制备、烹调和包装 | 输入质量＋期初在制品＝输出质量＋单独识别的废物＋期末在制品；放行前调查重大不平衡 | 经校准的批次记录和库存记录 | 经核对的工序质量平衡 | `eu-fdm-bat-2019` |
| `calc_energy_allocation` | 共用能源 | 产品能源＝共用仪表能源×有记录的因果驱动因子份额；所有份额之和必须等于共用仪表总量 | 仪表总量；设备时间/功率、热负荷或储存驱动因子 | 归属于产品的能源 | `ec-pef-2021-2279` |
| `calc_refrigerant_loss` | 每种制冷剂 | 损失＝期初库存＋购入量＋接收补充量－期末库存－回收量－转出量；负值或无法解释的结果必须纠正 | 设备级制冷剂记录 | 各制冷剂的直接损失 | `eu-fdm-bat-2019` |
| `calc_emission_load` | 每种直接空气或水污染物 | 负荷＝代表性浓度×同一运行或排放时段内积分的匹配流量，并记录单位换算 | 浓度、流量、时长、基准条件 | 污染物质量 | `eu-fdm-bat-2019` |
| `calc_packaging_balance` | 每个包装组件 | 购入/领用质量－未使用退料＝合格包装所含质量＋单独计量的废料＋库存变化 | 组件领用、退料、产品数量、单件质量、废料 | 组件质量和废料 | `rasines-et-al-2024-precooked-vegetables` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 产品和每个原子流 | 保留配方版本、供应商或设备身份、物态、市场状态、处理去向，以及解析后获得的每个天工 UUID。 | 配方、规格、批次记录、服务记录和转移单据 |
| `dq_temporal` | 全部前景记录 | 使用同一代表性报告期，通常至少连续 12 个月；解释较短的生产周期，并覆盖季节或保藏路线变化。 | 有明确日期边界的数据摘录和生产日历 |
| `dq_completeness` | 全部工序 | 将原料、水、能源、包装、产品、废物和排放总量与工厂控制总量核对；披露排除项和未闭合平衡。 | 经签署的核对记录和差异调查 |
| `dq_measurement` | 仪表、秤和分析 | 使用经校准的仪器及经认可或以其他方式证明适用的实验室方法；保留检出限和基准条件。 | 校准证书、实验室认可范围、采样报告 |
| `dq_technology` | 烹调、保藏、制冷和处理 | 记录设备类型、燃料、热源、保藏温度/时间控制、制冷剂、储存温度和废水路线。 | 设备台账、HACCP 记录、运行日志 |
| `dq_supplier_background` | 购入输入和服务 | 选择与原料产地、技术、电力地域、燃料、包装树脂/纤维、制冷剂和废物去向匹配的背景数据集；记录每个代理。 | 数据集选择日志和供应商证据 |
| `dq_no_unsupported_ranges` | 全部重要流 | 在核验至少两份独立且边界、单位和基准兼容的原始来源之前，不得发布定量范围；控制性规范明确规定区间的除外。 | 范围证据审查或未解决范围条目 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | PCR 身份和参考流 | 若产品不是以蔬菜、豆类或马铃薯为主，市场/保藏状态未声明，或参考数量包含包装，则拒绝该数据包。 | `un-cpc-3-0` |
| `validation_rule_2` | 配方与清单原子性 | 配方中的每种原料、每项公用工程、每种燃料、每种制冷剂、每个包装组件、每种废物和每种直接排放均须单独成行；拒绝集合标签和合并能源载体。 | `eu-fdm-bat-2019` |
| `validation_rule_3` | 工序完整性 | 每个适用的制备、烹调、包装、保藏/储存、清洁、废物和处理工序都须有输入和输出；缺少路线依赖行时必须明确说明不适用。 | `rasines-et-al-2024-precooked-vegetables`; `codex-cxc-1-1969` |
| `validation_rule_4` | 质量和公用工程核对 | 要求工序质量平衡，并在有记录的验收准则内将电力、热、燃料、水、包装、制冷剂和废物记录与全厂总量核对。 | `eu-fdm-bat-2019` |
| `validation_rule_5` | 直接排放 | 每项排放负荷都须采用匹配的浓度、流量、时间和基准条件；不得把厂外废水处理作为直接水排放报告。 | `eu-fdm-bat-2019` |
| `validation_rule_6` | 分配 | 须有证据表明分配前已尝试细分、物理驱动因子具有因果相关性且分配因子合计为一；拒绝未披露的经济分配或内嵌替代收益。 | `ec-pef-2021-2279` |
| `validation_rule_7` | 食品安全路线证据 | 声明的保藏和储存条件须由经验证的控制措施及受监控的批次记录支持；本 PCR 不规定通用的时间—温度程序。 | `codex-cxc-1-1969` |
| `validation_rule_8` | 未解决证据 | 天工身份或重要流范围证据尚未解决时，不具备发布就绪性；候选数据集仅可在明确披露缺口且不虚构 UUID 或范围的情况下继续。 | `ec-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| 数据集角色（`dataset_role`） | 已声明的蔬菜、豆类或马铃薯类预制餐食前景制造数据集 |
| 下游用途（`downstream_use`） | `secondary_dataset`; `background_dataset` |
| 允许用途（`allowed_use`） | 当配方、市场状态、保藏路线、地域、技术、分配和系统边界相容时，用于产品特定 LCA 和生命周期模型 |
| 排除用途（`excluded_use`） | 营养等价声明；对肉类、鱼类、谷物、披萨或单一原料保藏产品的通用替代；数据集未建模的使用阶段或寿命终结声明 |
| 必需元数据（`required_metadata`） | PCR id 和版本状态；产品名称与配方；原料质量分数；参考净质量；市场状态；保藏路线；包装组件；场址地域和技术；报告期；分配；储存条件；保质期；数据源和未解决身份 |
| 必需质量披露（`required_quality_disclosure`） | 初级数据占比；仪表和质量平衡覆盖率；时间和地域代表性；背景代理；排除流；分配因子；废水路线；制冷剂平衡；未解决 UUID 和范围 |
| 更新触发条件（`update_trigger`） | 配方或主导原料变化；保藏或包装重新设计；燃料、电力、制冷剂、储存或废水路线变化；场址/技术变化；分配变化；重大产量变化；新增已核验天工身份或相容的范围证据 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0` | standard | United Nations Statistics Division. Central Product Classification Version 3.0, structure and classification resources. https://unstats.un.org/unsd/classifications/Econ/CPC.cshtml（访问于 2026-08-24）。 | 类别名称、分类语境和基于产品的适用范围 |
| `eu-fdm-bat-2019` | official_guidance | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries. https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj/eng（访问于 2026-08-24）。 | 工厂清单，能源、水和原材料监测，清洁化学品、制冷、废物、废水和直接排放数据规则 |
| `ec-pef-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, Annex I. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（访问于 2026-08-24）。 | 功能单位、系统边界、前景/背景区分、分配层级、数据质量和校验 |
| `codex-cxc-1-1969` | standard | FAO and WHO. 2023. General Principles of Food Hygiene. Codex Alimentarius Code of Practice CXC 1-1969, revised 2022. https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/（访问于 2026-08-24）。 | 工艺描述、卫生设计与清洁、危害控制验证、监控、文件记录和储存路线披露 |
| `rasines-et-al-2024-precooked-vegetables` | literature | Rasines, L.; Morera, S.; San Miguel, G.; et al. Exploring the total cost of whole fresh, fresh-cut and pre-cooked vegetables. International Journal of Life Cycle Assessment 29, 967–982 (2024). https://doi.org/10.1007/s11367-024-02292-z | 蔬菜制备、洗涤/消毒、切割/去皮、漂烫/沥水、酱料投加、热处理、包装、冷藏、废物和前景数据结构 |
| `schmidt-rivera-et-al-2014-convenience-food` | literature | Schmidt Rivera, X. C.; Espinoza Orias, N.; Azapagic, A. Life cycle environmental impacts of convenience food: comparison of ready and home-made meals. Journal of Cleaner Production 73, 294–309 (2014). https://doi.org/10.1016/j.jclepro.2014.01.008 | 方便餐制造、原料烹调和混合、包装、制冷、公用工程、制冷剂泄漏、废物和质量分配证据 |
