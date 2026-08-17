---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-pigs-fresh-or-chilled
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 鲜或冷藏猪肉

## 1. 范围与适用性

本 PCR 适用于在屠宰场或肉类分割厂大门供应的、来源于家猪的生鲜可食用鲜或冷藏肉。它涵盖胴体、半胴体和分割肉，不论带骨或去骨，但产品不得经过冷冻、盐腌、干制、烟熏、烹煮、罐藏、发酵或其他进一步制备。代表性路线为生猪接收、屠宰与胴体整饰、冷却和冷藏；当声明的市场形态需要时，还包括分割、去骨、修整和包装。

本 PCR 不以生猪、单独销售的可食用内脏、熬炼脂肪、单独销售的皮张、加工或腌制猪肉、冷冻猪肉、零售制备、烹饪、声明工厂大门后的配送及消费者使用为参考产品。上游养猪应由独立的供应商或背景数据集表示，不得在屠宰场前景清单内重复构建。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-pigs-fresh-or-chilled |
| classification_refs | CPC 3.0：21113，鲜或冷藏猪肉（等义范围参考） |
| covered_products | 在声明工厂大门供应的生鲜可食用猪胴体、半胴体和分割肉；带骨或去骨；无包装或有包装 |
| excluded_products | 生猪；作为独立产品的可食用内脏；作为独立产品的猪皮；熬炼脂肪；冷冻猪肉；盐腌、干制、烟熏、腌制、发酵、熟制或罐藏猪肉；零售或餐饮制备 |
| representative_product | 屠宰场大门的冷却整饰猪胴体 |
| production_route | 生猪接收和待宰；屠宰、放血、烫毛/脱毛、去内脏、检验和胴体整饰；冷却和冷藏；条件性分割、去骨、修整和包装 |
| market_state | 生鲜且处于鲜或冷藏状态，并声明产品形态、带骨状态、包装状态、交付大门和产品温度 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在屠宰场或分割厂大门提供声明胴体、半胴体或分割形态的生鲜可食用猪肉 |
| How much | 1,000 kg 产品净质量，不含运输包装和二次包装 |
| How well | 食品级、通过适用检验、未经冷冻或进一步保藏，并满足声明的鲜/冷藏温度规范 |
| How long or cycle | 发运时的一个生产批次；不指定服务持续时间 |
| reference_flow_link | 1,000 kg 声明的鲜或冷藏猪肉产品 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Pig carcass, chilled `452e40cd-9178-4f2e-b248-18c81dd83f43` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品形态（胴体、半胴体或指定分割肉）；带骨或去骨；鲜或冷藏状态；产品温度及测量点；屠宰场或分割厂大门；包装状态及所含包装；地理范围；生产路线；冷藏时长；生产期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在声明大门记录肉或胴体净质量。排除运输包装和二次包装；应说明直接接触产品的初级包装是否被排除或单独计入清单。 |
| `cold_carcass_basis` | 猪胴体产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 当声明产品为胴体时，披露冷胴体定义和被排除的身体部分；不得以活重或热胴体重静默替代。 |
| `temperature_state` | 参考产品状态 | 温度 | 摄氏度 | 记录鲜/冷藏状态、实测产品温度、测量位置和时间。具体数据集必须采用适用法律或客户规范；在欧盟语境下，除非记录了适用的获准例外，其他肉类应冷却至不高于 7 摄氏度。 |
| `energy_conversion` | 外购电力和热能 | 能量 | kWh 或 MJ | 保留实测能量单位和换算轨迹。需要换算时使用 1 kWh = 3.6 MJ；电力和热能可以汇总但必须保留各自能源载体身份。 |
| `water_volume` | 工艺水和废水 | 体积 | m3 | 优先使用计量体积。若由质量换算为体积，应披露密度、温度和换算公式。 |

## 5. 系统边界

前景边界始于生猪跨越屠宰场大门，止于声明的鲜或冷藏胴体、半胴体或分割肉在声明屠宰场或分割厂大门达到可发运状态。边界包括现场公用工程、清洁消毒、冷却、发运前冷藏、归属于所纳入作业的废水处理，以及屠宰共产品和废物管理。上游养猪、饲料生产和入厂运输由链接的上游数据集表示。下游配送、零售、烹饪、消费和包装报废默认排除；若研究目标明确扩展边界，必须作为独立过程报告。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在屠宰场大门接收的生猪，并声明供应商、来源、活重、头数、运输交接和接收时间 |
| starting_condition_role | 锚定前景屠宰和初级加工数据集的上游产品投入 |
| product_classification_scope | 家猪的生鲜可食用肉，形态为鲜或冷藏胴体、半胴体或分割肉；CPC 3.0 代码 21113 为等义分类参考 |
| recursive_input_rule | 若采购鲜或冷藏猪胴体、半胴体或分割肉进行后续分割或包装，应将其记录为链接的上游产品投入，不得在分割过程中重新构建其屠宰负荷 |
| upstream_dataset_requirement | 使用在地理和时间上有代表性的生猪或鲜/冷藏猪肉供应商数据集，并声明大门、生产系统、质量基准和分配方法 |
| disclosure | 声明起始产品、大门、纳入过程、产品形态、温度状态、冷藏时长、包装、采购同类别投入的处理方式及任何被排除的现场作业 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_required_operations` | slaughter_dress_chill | 纳入可归属于该批次的接收/待宰、屠宰、放血、烫毛和脱毛、去内脏、检验、整饰/劈半、清洗、冷却、发运前冷藏、清洁、公用工程及可归属废水管理。 | `codex-cxc-58-2005`; `eu-853-2004`; `eu-bat-sa-2023` |
| `sb_conditional_cutting` | cut_pack | 当声明参考产品是分割肉或包装产品而非无包装胴体时，纳入分割、去骨、修整、产品搬运、初级包装及其公用工程和废物。 | `unece-porcine-meat-2018`; `eu-853-2004` |
| `sb_upstream_live_pig` | live_pig_supply | 将养猪、饲料生产和入厂运输保留在前景屠宰过程之外，并链接有代表性的上游数据集，不得遗漏其负荷。 | `fao-leap-pig-2018` |
| `sb_same_category_recursion` | purchased_fresh_chilled_pork | 对采购的同类别产品在其采购点停止递归并链接上游数据集；披露采购产品形态和大门。 | `fao-leap-pig-2018` |
| `sb_downstream_exclusions` | post_gate_activities | 从本工厂大门 PCR 中排除下游运输、零售、烹饪和消费；若研究明确增加这些活动，应作为独立过程报告。 | `fao-leap-pig-2018` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `slaughter_dress_chill` | 生猪屠宰、胴体整饰和冷却 | `required` | 从生猪接收到冷却胴体生产时始终纳入 | 前景初级加工 | 条件性进一步分割前的 1,000 kg 冷却整饰胴体产出 |
| `cut_pack` | 胴体分割、去骨和包装 | `conditional` | 当声明产品为半胴体、指定分割肉、去骨肉或包装产品，而非无包装胴体时纳入 | 前景产品形态转换 | 1,000 kg 声明的鲜或冷藏肉产出 |

### 过程：生猪屠宰、胴体整饰和冷却（`slaughter_dress_chill`）

#### 输入

##### 产品流

###### 接收的生猪（`live_pigs`）

生猪在屠宰场接收时跨越前景边界。使用地磅、秤和动物头数记录，并链接有代表性的上游养猪数据集。

- 选定流：Live pigs
- 流属性/单位：质量 / kg
- 数量规则：生产批次接收的实测活重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 冷却整饰胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_pig_receipt`
- 来源：`fao-leap-pig-2018`
- 数量范围：暂定且可替换的活重筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：2000
  - 单位：kg
  - 基准：每 1,000 kg 冷却整饰胴体产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的工艺水（`slaughter_water`）

记录归属于屠宰、胴体整饰和冷却的动物冲洗、烫毛、胴体冲洗、清洁和消毒计量用水。

- 选定流：Process water
- 流属性/单位：体积 / m3
- 数量规则：可归属的实测工艺用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 冷却整饰胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_water`
- 来源：`eu-bat-sa-2023`
- 数量范围：以猪屠宰特定废水排放 BAT-AEPL 作为用水筛选代理，而非允许的投入范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.70
  - 上限：3.50
  - 单位：m3
  - 基准：每 1,000 kg 猪胴体产出，年度平均且仅屠宰基准
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-bat-sa-2023`

###### 外购电力（`slaughter_electricity`）

记录屠宰设备、泵、通风、制冷、冷藏、清洁和可归属废水处理所用电力。

- 选定流：Purchased electricity
- 流属性/单位：能量 / kWh
- 数量规则：计量或与发票核对后分配给纳入过程的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 冷却整饰胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_energy`
- 来源：`eu-bat-sa-2023`
- 数量范围：猪屠宰净能耗 BAT-AEPL 总热能加电力筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：65
  - 上限：370
  - 单位：kWh
  - 基准：每 1,000 kg 猪胴体产出，年度平均且仅屠宰基准；应比较合并净能耗而非仅电力
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-bat-sa-2023`

###### 燃料和外购热能（`slaughter_thermal_energy`）

分别记录热水、烫毛、消毒和其他纳入用途的每一种燃料和外购热载体。

- 选定流：场址特定燃料或外购热能
- 流属性/单位：能量 / kWh 或 MJ
- 数量规则：使用有记录因子的实测燃料量，或计量的外购热量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 冷却整饰胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_energy`
- 来源：`eu-bat-sa-2023`
- 数量范围：暂定且可替换的热能筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1200
  - 单位：kWh
  - 基准：每 1,000 kg 冷却整饰胴体产出；获得场址证据前的宽泛作者筛选值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洁和消毒材料（`slaughter_cleaning_materials`）

记录跨越过程边界的洗涤剂、消毒剂和其他工艺化学品，并保留产品身份和浓度。

- 选定流：场址特定清洁或消毒产品
- 流属性/单位：质量 / kg
- 数量规则：与生产期核对的领料、采购和投加记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 冷却整饰胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_materials`
- 来源：`codex-cxc-58-2005`; `eu-bat-sa-2023`

##### 废物流

默认不要求废物投入。只有退回或返工材料跨越声明的前景边界时才记录。

##### 基本流

只有在直接取水未由供应水产品数据集表示时，才将其记录为基本流输入，以避免重复计量。

#### 输出

##### 产品流

###### 冷却整饰猪胴体（`chilled_carcass`）

这是屠宰和胴体整饰的代表性参考产品。测量发运质量或冷胴体质量，并保留声明的胴体定义和温度状态。

- 选定流：Pig carcass, chilled `452e40cd-9178-4f2e-b248-18c81dd83f43`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：将实测合格产出归一化为恰好 1,000 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_product_output`
- 来源：`unece-porcine-meat-2018`; `eu-853-2004`; `mass-balance-identity`
- 数量范围：参考流归一化恒等式
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1000
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 声明参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 分离的屠宰共产品（`slaughter_coproducts`）

分别记录每种可销售或内部使用的共产品，包括适用时的可食用内脏、血液、脂肪、骨和皮；不得把产品与废物汇总。

- 选定流：场址特定的分离猪屠宰共产品
- 流属性/单位：质量 / kg
- 数量规则：按共产品和去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 冷却整饰胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_coproducts`
- 来源：`fao-leap-pig-2018`; `eu-bat-sa-2023`
- 数量范围：暂定且可替换的共产品质量平衡筛选值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 冷却整饰胴体产出的分离共产品总量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 送往废物处理的屠宰残余物（`slaughter_residues`）

按处理路线记录非产品动物材料和其他固体残余物。出售或作为共产品利用的材料必须改记在产品流组中。

- 选定流：场址特定屠宰残余物
- 流属性/单位：质量 / kg
- 数量规则：按残余物类别和处理去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 冷却整饰胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_coproducts`
- 来源：`eu-bat-sa-2023`
- 数量范围：暂定且可替换的废物质量筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg
  - 基准：每 1,000 kg 冷却整饰胴体产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 屠宰场废水（`slaughter_wastewater`）

在声明的处理前或处理后边界记录纳入作业排出的废水，不得在两个边界点重复记录同一股水流。

- 选定流：Slaughterhouse wastewater
- 流属性/单位：体积 / m3
- 数量规则：归属于纳入过程的实测排放量，并声明处理边界
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 冷却整饰胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_wastewater`
- 来源：`eu-bat-sa-2023`
- 数量范围：猪屠宰特定废水排放 BAT-AEPL
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.70
  - 上限：3.50
  - 单位：m3
  - 基准：每 1,000 kg 猪胴体产出，年度平均且仅屠宰基准
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-bat-sa-2023`

##### 基本流

###### 制冷剂向空气损失（`refrigerant_loss`）

按制冷剂身份记录可归属于冷却和冷藏系统泄漏的补充量。使用直接维护记录或有记录的库存平衡计算。

- 选定流：制冷剂特定空气排放
- 流属性/单位：质量 / kg
- 数量规则：实测补充量或计算的年度制冷剂库存损失，并归属于纳入生产
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 冷却整饰胴体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-bat-sa-2023`
- 数量范围：暂定且可替换的制冷剂损失筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1,000 kg 冷却整饰胴体产出；在获得设备特定记录前使用的宽泛筛选值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：胴体分割、去骨和包装（`cut_pack`）

#### 输入

##### 产品流

###### 冷却胴体或半胴体投入（`cutting_meat_input`）

进一步分割或包装被纳入时，记录冷却猪胴体、半胴体或原始分割投入。链接其上游屠宰数据集，不得重复构建屠宰负荷。

- 选定流：冷却猪胴体、半胴体或分割肉投入
- 流属性/单位：质量 / kg
- 数量规则：按产品形态实测投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 声明的鲜或冷藏肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_input_output`
- 来源：`unece-porcine-meat-2018`
- 数量范围：暂定且可替换的分割产率筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：2000
  - 单位：kg
  - 基准：每 1,000 kg 声明肉产出的冷却胴体或半胴体投入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 分割和制冷用电（`cutting_electricity`）

记录屠宰阶段产出后可归属于分割、去骨、通风、制冷和冷藏的电力。

- 选定流：Purchased electricity
- 流属性/单位：能量 / kWh
- 数量规则：计量或可辩护分配给纳入分割期的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明的鲜或冷藏肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_energy_water`
- 来源：`eu-bat-sa-2023`
- 数量范围：暂定且可替换的分割用电筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：kWh
  - 基准：每 1,000 kg 声明的鲜或冷藏肉产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 分割和清洁用水（`cutting_water`）

记录纳入的分割、设备清洗和消毒活动的计量用水。

- 选定流：Process water
- 流属性/单位：体积 / m3
- 数量规则：可归属的实测用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明的鲜或冷藏肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_energy_water`
- 来源：`codex-cxc-58-2005`
- 数量范围：暂定且可替换的分割用水筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：m3
  - 基准：每 1,000 kg 声明的鲜或冷藏肉产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级包装材料（`primary_packaging`）

声明产品在工厂大门已包装时，记录托盘、薄膜、袋、吸水垫、标签及其他初级包装。

- 选定流：按材料和形式区分的包装材料
- 流属性/单位：质量 / kg
- 数量规则：与包装产品产出核对的物料清单数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 包装鲜或冷藏肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_packaging`
- 来源：`unece-porcine-meat-2018`
- 数量范围：暂定且可替换的包装质量筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg
  - 基准：每 1,000 kg 包装鲜或冷藏肉产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

默认不要求废物投入。

##### 基本流

只有在直接取水未由供应水产品数据集表示时才记录。

#### 输出

##### 产品流

###### 声明的鲜或冷藏猪肉产品（`fresh_chilled_pork_output`）

记录指定半胴体、具名分割肉或去骨肉产出及其温度、带骨状态和包装状态。

- 选定流：产品特定的鲜或冷藏猪肉流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：将实测合格产出归一化为恰好 1,000 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_input_output`
- 来源：`unece-porcine-meat-2018`; `mass-balance-identity`
- 数量范围：参考流归一化恒等式
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1000
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 声明参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 分割共产品（`cutting_coproducts`）

按产品身份和去向分别记录骨、脂肪、修整料和其他可销售产出。

- 选定流：场址特定分割共产品
- 流属性/单位：质量 / kg
- 数量规则：按共产品和去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 声明的鲜或冷藏肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_input_output`
- 来源：`fao-leap-pig-2018`; `unece-porcine-meat-2018`
- 数量范围：暂定且可替换的分割共产品筛选值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 声明的鲜或冷藏肉产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 分割和包装废物（`cutting_packaging_waste`）

按材料和处理路线记录非产品修整料和废弃包装；不得把可销售共产品归为废物。

- 选定流：场址特定分割或包装废物
- 流属性/单位：质量 / kg
- 数量规则：按材料和去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明的鲜或冷藏肉产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_input_output`
- 来源：`eu-bat-sa-2023`
- 数量范围：暂定且可替换的分割废物筛选值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：kg
  - 基准：每 1,000 kg 声明的鲜或冷藏肉产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

记录可归属且未在 `slaughter_dress_chill` 中计入的分割和冷藏系统制冷剂损失及其他直接排放。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_avoid` | all_multifunctional_operations | 首先通过分别计量和细分可独立运行的活动来避免分配；只有在直接且可证明的替代能够与研究目标一致建模时才采用系统扩展。 | `eu-pef-2021-2279` |
| `alloc_physical` | inseparable_slaughter_and_cutting_burdens | 无法细分或进行有依据的系统扩展时，使用能够反映过程负荷与共产品关系的、已记录的相关物理关系分配共同负荷；不得默认质量必然是相关关系。 | `eu-pef-2021-2279` |
| `alloc_other_relationship` | residual_multifunctionality | 若无法证明相关物理关系，使用另一种有记录的关系（例如经济价值），并保留产品数量、价格、价格期、币种和计算因子供审查。 | `eu-pef-2021-2279`; `fao-leap-pig-2018` |
| `alloc_waste_boundary` | wastes_and_coproducts | 被归为废物的材料不得获得共产品抵扣，除非有记录的下游用途以及所选分配或替代方法能够证明；处理负荷应通过声明的废物边界记录。 | `eu-pef-2021-2279`; `eu-bat-sa-2023` |
| `alloc_disclosure` | dataset_reporting | 报告采用的层级步骤、每个产品和共产品的因子、被排除的产出、价格或物理数据期、可食用和不可食用产出的处理，以及当选择对参考产品有重大影响时的敏感性结果。 | `eu-pef-2021-2279`; `fao-leap-pig-2018` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_live_pig_receipt` | `slaughter_dress_chill` | 生猪 | 地磅和牲畜接收记录 | 供应商；来源；批次 id；动物头数；毛重、皮重和净活重；接收时间 | 与接收记录核对的校准秤或地磅 | kg；头 | 每批 | 代表性连续 12 个月或声明的生产期 | 纳入生产线的全部生猪 | 按批次汇总接收活重，排除未加工的拒收动物 | 校准记录；接收核对；拒收日志 |
| `cp_slaughter_water` | `slaughter_dress_chill` | 工艺水 | 水表和公用工程记录 | 水表 id；起止读数；分表边界；运行天数；共用量分配 | 优先直接计量；无分表时从设施总表进行有记录的分配 | m3 | 每日或每班读数，按月汇总 | 代表性连续 12 个月 | 纳入的屠宰、清洁和冷却作业 | 扣除无关用途，将可归属体积归一化到产品产出 | 水表校准；公用工程发票核对；分配工作表 |
| `cp_slaughter_energy` | `slaughter_dress_chill` | 电力、燃料和热 | 仪表、发票和燃料库存记录 | 能源载体；仪表或发票数量；换算因子；期初和期末燃料库存；纳入设备 | 按载体直接计量或进行发票/库存平衡核对 | kWh；MJ；载体单位 | 每月，并与生产期匹配 | 代表性连续 12 个月 | 纳入的屠宰、冷却、冷藏和可归属处理 | 按载体计算外购净能量，单独保留回收能量，再归一化 | 仪表检查；发票；换算因子来源；核对记录 |
| `cp_slaughter_materials` | `slaughter_dress_chill` | 清洁和消毒材料 | 采购、库存和投加记录 | 产品 id；浓度；期初和期末库存；采购量和领用量；投加日志 | 与投加记录核对的库存平衡 | kg | 每月 | 代表性连续 12 个月 | 纳入的屠宰和消毒区域 | 净领用量 = 期初 + 采购 - 期末 - 无关用途 | 库存盘点；发票；投加设备校准 |
| `cp_slaughter_product_output` | `slaughter_dress_chill` | 冷却胴体产出 | 秤重、检验和发运记录 | 批次 id；热重或冷重标志；冷胴体定义；产出质量；温度；检验状态；发运时间 | 带温度记录的校准胴体秤或发运秤 | kg；摄氏度 | 每批 | 与投入相同的期间 | 纳入的屠宰生产线和发运前冷库 | 只汇总合格产出，并将所有流归一化到 1,000 kg | 秤校准；检验放行；温度日志；质量核对 |
| `cp_slaughter_coproducts` | `slaughter_dress_chill` | 共产品和固体残余物 | 秤、容器、销售和废物转移记录 | 材料 id；产品/废物状态；质量；去向；出售时的价格和币种；处理路线 | 优先直接称量；无法称量时才用容器数乘经核验的单位质量 | kg；币种/kg | 每批或每次发运 | 与参考产出相同期间 | 纳入屠宰生产线产生的全部共产品和固体残余物 | 按材料和去向分别汇总；不得用废物抵减产品 | 秤校准；销售发票；废物转移单；去向证明 |
| `cp_slaughter_wastewater` | `slaughter_dress_chill` | 废水 | 出水计量和处理记录 | 流量；边界点；处理状态；pH；温度；监测污染物参数 | 在声明边界连续或定期计量 | m3；参数特定单位 | 可行时连续，按月汇总 | 代表性连续 12 个月 | 纳入的屠宰生产线和声明的废水处理边界 | 避免重复计算处理前和处理后体积；归一化声明排放 | 仪表检查；采样计划；实验室报告；处理日志 |
| `cp_refrigerant_records` | `slaughter_dress_chill` | 制冷剂损失 | 制冷剂库存和维护记录 | 制冷剂 id；系统 id；期初库存；采购；回收；期末库存；补充；处置 | 由服务记录支持的年度库存平衡 | kg | 每次维护事件及年度核对 | 代表性连续 12 个月 | 服务于纳入冷却和冷藏作业的制冷系统 | 损失 = 期初 + 采购 - 期末 - 回收 - 处置，并分配纳入冷负荷的份额 | 服务证书；钢瓶记录；库存核对 |
| `cp_cutting_input_output` | `cut_pack` | 肉类投入、产品、共产品和废物 | 生产线秤、产率表、包装和发运记录 | 投入产品 id 和质量；产出分割肉 id 和质量；带骨状态；温度；共产品质量；废物质量；去向 | 按生产批次核对的校准生产线秤和发运秤 | kg；摄氏度 | 每批 | 代表性连续 12 个月或声明的生产期 | 全部纳入的分割、去骨和包装生产线 | 每批进行质量平衡，再汇总相同产品规格并归一化到 1,000 kg 产出 | 秤校准；批次产率报告；放行记录；质量平衡审查 |
| `cp_cutting_energy_water` | `cut_pack` | 分割用电和用水 | 分表、发票和运行小时记录 | 仪表读数；生产线小时；生产质量；共用服务驱动因子 | 优先直接分表；共用时采用有记录的工程分配 | kWh；m3 | 每日或每月 | 与分割产出相同期间 | 纳入的分割、制冷、清洁和包装作业 | 扣除无关用途，将可归属数量归一化到产出 | 仪表检查；发票核对；分配工作表 |
| `cp_primary_packaging` | `cut_pack` | 初级包装 | 物料清单和库存记录 | 包装材料；单位质量；领用件数；废品；退回库存 | 物料清单数量与库存领用和包装件数核对 | kg；件 | 每次包装运行 | 与包装产出相同期间 | 声明产出中的全部包装产品规格 | 包装质量 = 经核验单位质量乘净使用件数，按材料分别计算 | 供应商规范；单位质量检查；库存核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_1000kg` | all inventory rows | 归一化数量 = 期间可归属数量 / 合格参考产品质量 x 1,000 kg | 可归属流数量；合格产品产出质量 | 每 1,000 kg 参考产品的数量 | `mass-balance-identity` |
| `calc_energy_total` | slaughter energy QA | 使用有记录的因子把每种载体换算为 kWh，汇总外购热和电，只扣除实测回收能量，并在来源规定的年度平均基准上与 BAT-AEPL 比较 | 电力；燃料；外购热；回收能量；胴体产出 | 每 1,000 kg 胴体产出的净 kWh | `eu-bat-sa-2023` |
| `calc_refrigerant_loss` | refrigerant loss | 年损失 = 期初库存 + 采购 - 期末库存 - 回收量 - 有记录处置量；只分配服务于纳入制冷负荷的份额 | 库存和维护事件字段 | 每 1,000 kg 产品的制冷剂损失 kg | `eu-bat-sa-2023` |
| `calc_mass_balance` | slaughter and cutting batches | 比较实测动物或肉类投入与参考产品、共产品、废物、可测的废水携带固体、库存变化和有记录损失；调查未解释差异，不得强制闭合 | 全部实测质量投入和产出；库存变化 | 质量平衡残差及解释 | `mass-balance-identity` |
| `calc_allocation_factors` | shared burdens | 只有在应用分配层级后才推导因子；每个共同负荷池内所有纳入产品的因子之和必须为 1 | 细分数据；物理关系数据；数量；采用经济关系时的价格和价格期 | 按产出和负荷池区分的分配因子 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and same-category inputs | 产品形态、带骨状态、鲜/冷藏状态、温度、大门、包装和 Tiangong 流身份必须与声明数据集一致；胴体流不得静默代表加工或冷冻产品。 | 产品规范；发运记录；温度日志；流 UUID 检查 |
| `dq_temporal` | foreground inventory | 在季节性运行允许时使用代表性连续 12 个月；否则披露生产期日期、产量占比及其代表性理由。 | 带日期的仪表、生产和发运记录 |
| `dq_measurement` | mass, water and energy | 可行时使用经校准的直接测量，并保留共用服务分配驱动因子和换算因子。 | 校准证书；仪表日志；发票；分配工作表 |
| `dq_completeness` | included operations | 覆盖生猪投入、合格产品、全部重要共产品和废物、水、废水、电力、热能、清洁材料和制冷剂损失；对任何遗漏的相关流给出理由。 | 签署的完整性清单；工艺流程图；质量和公用工程核对 |
| `dq_mass_balance` | each production stage | 调查并披露物料残差；不得使用分配因子或虚构损失掩盖未解释的不平衡。 | 批次和期间质量平衡工作表；纠正措施记录 |
| `dq_allocation` | multifunctional outputs | 保留所选层级步骤和全部因子输入的证据；价格数据必须注明币种、地理范围、时期和平均方法。 | 分配工作簿；数量记录；价格证据；敏感性结果 |
| `dq_temperature` | fresh/chilled claim | 保留产品温度测量值以及声明测量点适用的法律或客户限值。 | 校准温度日志；规范；放行记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | reference flow | 若产品 UUID、质量属性、单位组、参考单位或必需产品限定信息缺失，或与鲜或冷藏猪肉不一致，则失败。 | `unstats-cpc-3-0-2025`; `unece-porcine-meat-2018` |
| `val_boundary` | process coverage | 当起始条件为生猪时遗漏屠宰/整饰/冷却，或声明产品形态要求分割/包装却遗漏其负荷，则失败。 | `codex-cxc-58-2005`; `eu-853-2004` |
| `val_upstream` | upstream supply | 若生猪或采购同类别投入的负荷既未链接有代表性的上游数据集，也未明确报告为未解决覆盖缺口，则失败。 | `fao-leap-pig-2018` |
| `val_temperature` | market state | 若冷藏产品缺少温度规范和测量证据，则失败；超出适用规范的值应标记审查。 | `eu-853-2004` |
| `val_mass_balance` | slaughter and cutting inventory | 若参考产出、共产品和废物未分别量化，则失败；未解释物料不平衡应标记纠正。 | `mass-balance-identity`; `fao-leap-pig-2018` |
| `val_energy_water` | utility QA | 只有在可比的“仅屠宰”基准上，才把年化净能耗和废水排放与来源支持的猪屠宰 BAT-AEPL 范围比较；离群值是审查发现，不得自动用默认值替换。 | `eu-bat-sa-2023` |
| `val_allocation` | co-product handling | 若分配共同负荷时未披露层级步骤、因子基准和因子，或一个负荷池的因子之和不为 1，则失败。 | `eu-pef-2021-2279` |
| `val_reasoned_estimates` | provisional ranges | 将每个 `reasoned_estimate` 范围视为临时、可替换 QA 筛选值；若其被用作强制允许范围或替代采集的前景数据，则出版就绪性失败。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明屠宰场或分割厂大门鲜或冷藏猪肉的前景产品与单元过程数据包 |
| downstream_use | `secondary_dataset`；在代表性、分配、完整性和来源覆盖通过审查后可作为 `background_dataset` |
| allowed_use | 产品形态、鲜/冷藏状态、地理、技术、大门和时期与本数据集兼容的产品 LCA 和供应链模型 |
| excluded_use | 冷冻或进一步加工猪肉；以可食用内脏为参考产品；仅养猪过程；未经方法和代表性审查的公开比较声明；把暂定推理估算直接当作场址数据 |
| required_metadata | 出版时的 PCR id 和版本；产品形态和带骨状态；流 UUID；大门；地理；参考期；温度状态；包装；纳入过程；上游数据集链接；分配方法和因子；数据所有权及审查状态 |
| required_quality_disclosure | 计量和估算占比；时间和地理代表性；质量平衡残差；遗漏流；共产品处理；BAT-AEPL 比较基准；仍存在的暂定范围；不确定性和审查发现 |
| update_trigger | 产品形态、屠宰或分割技术、制冷系统、公用工程结构、共产品市场或分配、法定温度规范、供应商系统、地理发生重大变化，或前景数据超过项目接受的代表性期限 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unstats-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division，Central Product Classification Version 3.0 structure and explanatory notes，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/CPC（检索于 2026-08-10） | 分类身份和鲜或冷藏猪肉范围 |
| `unece-porcine-meat-2018` | `standard` | UNECE，ECE/TRADE/369/Rev.3，UNECE Standard: Porcine Meat - Carcases and Cuts，2018，https://unece.org/trade/documents/2024/02/session-documents/unece-standard-porcine-meat-carcases-and-cuts（检索于 2026-08-10） | 生鲜猪胴体/分割肉身份、处理状态、产品形态和包装限定信息 |
| `fao-leap-pig-2018` | `official_guidance` | FAO LEAP Partnership，Environmental performance of pig supply chains: Guidelines for assessment，Version 1，2018，https://openknowledge.fao.org/handle/20.500.14283/i8686en（检索于 2026-08-10） | 从摇篮到初级加工边界、猪供应链数据要求和屠宰共产品 |
| `codex-cxc-58-2005` | `standard` | Codex Alimentarius，CXC 58-2005，Code of Hygienic Practice for Meat，2005，https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/（检索于 2026-08-10） | 屠宰、胴体整饰、卫生处理、冷却和消毒过程要求 |
| `eu-853-2004` | `standard` | Regulation (EC) No 853/2004 laying down specific hygiene rules for food of animal origin，consolidated text，https://eur-lex.europa.eu/eli/reg/2004/853/oj/eng（检索于 2026-08-10） | 猪屠宰/整饰卫生、冷却、分割和产品温度规则 |
| `eu-bat-sa-2023` | `official_guidance` | Commission Implementing Decision (EU) 2023/2749 establishing BAT conclusions for slaughterhouses, animal by-products and/or edible co-products industries，https://eur-lex.europa.eu/eli/dec_impl/2023/2749/2023-12-18/eng（检索于 2026-08-10） | 年度水、能量、废水和制冷剂监测；猪屠宰能耗和废水 QA 范围；过程和废物控制 |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods，https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng（检索于 2026-08-10） | 多功能层级、物理分配、其他关系分配和披露 |
| `mass-balance-identity` | `method_factor` | 本 PCR 定义的质量守恒和参考流归一化恒等式 | 1,000 kg 归一化、产品产出恒等式和质量平衡校验 |
