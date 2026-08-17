---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-ducks-fresh-or-chilled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 新鲜或冷藏鸭肉

## 1. 范围与适用性

本 PCR 适用于新鲜或冷藏状态离开初级加工环节、以整胴体或已声明分割形态供应、且未经冻结或加工为肉制备品或肉制品的食用鸭肉前景数据包。通常的前景路线始于屠宰设施接收活鸭，止于经过屠宰、整理、检验、清洗、冷却以及适用时的分割和包装后，在加工设施门口形成可销售的新鲜或冷藏鸭肉。

在披露实际技术和市场状态的前提下，本 PCR 覆盖工业化、小型商业化及具备同等卫生控制的屠宰路线。养鸭、孵化、饲料生产以及所声明屠宰场接收点之前的运输，使用上游数据集或单独建模的过程表示。零售、烹饪、消费、下游冷藏配送、冷冻鸭肉、肥肝、作为独立产品销售的可食用内脏、炼制脂肪、机械分离肉以及进一步调制、腌制或加工产品不属于参考产品范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-ducks-fresh-or-chilled |
| classification_refs | CPC 3.0：21122，新鲜或冷藏鸭肉（精确映射语境） |
| covered_products | 新鲜或冷藏、从未冻结的食用鸭胴体和已声明鸭肉分割品，可带骨或去骨、带皮或去皮 |
| excluded_products | 冷冻鸭肉；鸭肥肝；作为独立产品销售的鸭可食用内脏；已炼制或未炼制禽脂；机械分离肉；肉糜、肉制备品、熟制、腌制、熏制、罐装或其他进一步加工的鸭肉产品 |
| representative_product | 初级加工设施门口的冷藏去内脏可销售鸭胴体或已声明鸭肉分割品 |
| production_route | 活鸭接收；宰前控制；致昏和屠宰；放血；烫毛和脱毛；去内脏；宰后检验；清洗；冷却；可选分割和包装 |
| market_state | 新鲜或冷藏；从未冻结；声明包装、分割形态、骨和皮状态、食用产率口径及发运温度 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在初级加工设施门口供应的食用新鲜或冷藏鸭肉 |
| How much | 1 kg 产品净质量 |
| How well | 在适用检验和卫生控制下适合人类食用；从未冻结；已声明胴体或分割形态、骨和皮状态、包装及产品温度 |
| How long or cycle | 一个在设施门口放行的生产批次；不赋予使用阶段持续时间 |
| reference_flow_link | 参考数量为已声明可销售鸭肉产品的实测净质量；运输包装不计入，除非明确纳入并单独报告 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Meat of ducks, fresh or chilled `787f4c92-60eb-4533-8ee0-a0fbeda9d5c8` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 鸭种或商业类型；整胴体或分割品；带骨或去骨；带皮或去皮；包装是否计入；新鲜或冷藏状态；从未冻结确认；发运温度；食用产率口径；设施地理范围；生产期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考鸭肉产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用设施门口放行时经核实的产品净质量。声明骨、皮、初级包装以及吸收或滞留工艺水是否计入；不得用活重作为参考数量。 |
| `cold_product_state` | 参考鸭肉产品 | 温度及产品状态记录 | °C 和类别状态 | 记录放行时的产品温度，并证明产品保持新鲜或冷藏且从未冻结。适用主管辖区规定的限值；适用欧盟法规 (EC) No 853/2004 时，禽肉应尽快冷却至不高于 4 °C。 |
| `normalization_units` | 全部清单行 | 行对应的属性 | kg、m3、kWh、MJ 或已声明可转换为 SI 的单位 | 在源记录中保留实测单位，记录换算因子，将每项数量归一化到 1 kg 参考产品，不得混用质量、体积、能量和浓度量。 |
| `mass_balance_basis` | 活鸭、鸭肉、共产品、废物和滞留物 | 质量 | kg | 在一致湿重口径下，协调接收活重和其他物料投入与可销售鸭肉、单独销售共产品、废物、适用时废水携带固体以及有记录的库存变化。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 活鸭在屠宰设施接收，并声明来源、交付质量、到场死亡或判废状态，以及进场运输是否已嵌入上游数据集 |
| starting_condition_role | 前景屠宰和初级加工系统的上游产品投入 |
| product_classification_scope | 语义上对应 CPC 3.0 代码 21122 的新鲜或冷藏食用鸭肉；分类引用不定义规范 PCR 身份 |
| recursive_input_rule | 进入前景系统的任何新鲜或冷藏鸭肉返工料或外购肉仅作为产品投入记录一次，并带有其自身上游数据集，不得递归再生为参考产品；披露其数量和去向 |
| upstream_dataset_requirement | 对交付活鸭以及电力、燃料、供水、化学品、包装、制冷剂、运输和处理服务使用具有代表性的上游数据集；披露地理、技术、时间以及运输和损耗是否纳入 |
| disclosure | 声明纳入的单元操作、设施门口、分割及食用产率口径、冷却系统、共产品和废水在场内或场外处理、包装边界、分配方法和分配键、排除项、数据期以及用次级数据替代前景数据的情况 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_primary_processing` | 必需前景路线 | 纳入屠宰、去除血液和羽毛、去内脏、检验、清洗、冷却以及生成已声明可销售新鲜或冷藏产品所需的全部资源使用和废物流。在已声明设施门口之前进行分割和包装时一并纳入。 | `fao-leap-poultry-2016`; `eu-sa-bref-2023` |
| `boundary_upstream_live_ducks` | 交付活鸭投入 | 使用上游数据集表示养鸭和饲料生产。除非已证明进场活鸭运输包含在交付活鸭数据集中，否则单独建模。 | `fao-leap-poultry-2016` |
| `boundary_hygiene_and_cold_chain` | 整理、清洗、冷却、分割、储存和发运 | 纳入为防止污染所需的饮用水、清洁消毒、制冷能源、制冷剂损失、温度控制和隔离措施；不得仅因其属于辅助操作而排除。 | `codex-cxc-58-2005`; `eu-regulation-853-2004`; `eu-sa-bref-2023` |
| `boundary_waste_and_treatment` | 不可食用物、判废物、废水、污泥和包装废物 | 纳入场内处理和直接排放。场外处理时，在设施门口记录废物流并连接具有代表性的处理数据集；保留数量和去向证据。 | `fao-leap-poultry-2016`; `eu-sa-bref-2023` |
| `boundary_exclusions` | 下游及非参考产品 | 排除加工门口之后的零售、消费者储存和烹饪、消费及生命末期。除非研究明确增加，否则排除进一步加工和冻结；若增加，应报告为 PCR 参考边界之外的过程。 | `fao-leap-poultry-2016` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `duck_slaughter_dressing` | 鸭接收、屠宰、整理、检验和清洗 | required | 屠宰来源鸭肉始终纳入 | 前景初级加工 | 每 kg 整理后胴体并归一化到 1 kg 参考产品 |
| `duck_chilling_cutting_packaging` | 冷却、可选分割、包装和设施门口放行 | required | 冷却和放行始终纳入；在声明门口之前进行时纳入分割和包装 | 前景调理和产品完成 | 每 kg 可销售新鲜或冷藏鸭肉 |
| `residuals_and_wastewater_management` | 共产品、废物和废水管理 | conditional | 存在场内操作时纳入；否则记录输出流并连接场外处理数据集 | 前景或连接的处理 | 每 kg 参考产品并按处理路线 |

### 过程：鸭接收、屠宰、整理、检验和清洗（`duck_slaughter_dressing`）

#### 输入

##### 产品流

###### 交付活鸭（`live_ducks_received`）

记录跨越屠宰场接收门口的活鸭，包括交付质量以及到场死亡或判废鸭的去向。

- 选定流：活鸭；Tiangong UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：分配给加工批次的实测交付活重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考鸭肉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`
- 来源：`fao-leap-poultry-2016`
- 数量范围：暂定活重筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1
  - 上限：3
  - 单位：kg 交付活鸭/kg 参考产品
  - 基准：在取得鸭类场址产率证据前的宽泛首轮筛选区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 饮用级工艺及消毒用水（`slaughter_process_water`）

记录本过程中用于烫毛、胴体清洗、设备清洁和消毒的计量用水。

- 选定流：饮用水；Tiangong UUID 未解析
- 流属性/单位：体积 / m3
- 数量规则：分配给屠宰整理的计量用水，扣除单独计量的循环用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考鸭肉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater`
- 来源：`codex-cxc-58-2005`; `fao-leap-poultry-2016`; `eu-sa-bref-2023`
- 数量范围：暂定用水筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.001
  - 上限：0.1
  - 单位：m3/kg 参考产品
  - 基准：宽泛首轮筛选区间，不是允许性能范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 屠宰和整理能源（`slaughter_energy`）

按载能体记录致昏、烫毛、脱毛、生产线运行、通风、热水和清洁的电力及燃料；在记录能量换算前不得合并载能体。

- 选定流：电力和热能载能体；Tiangong UUID 未解析
- 流属性/单位：能量 / 按载能体使用 kWh 和 MJ
- 数量规则：分配给本过程的计量或发票协调设施能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考鸭肉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`fao-leap-poultry-2016`; `eu-sa-bref-2023`
- 数量范围：暂定综合能源筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.05
  - 上限：20
  - 单位：MJ/kg 参考产品
  - 基准：全部载能体有记录地换算为 MJ 后的宽泛首轮筛选区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洁和消毒剂（`cleaning_agents`）

按产品记录购买和消耗的清洁消毒配方，并在可得时记录活性成分浓度。

- 选定流：清洁和消毒剂；Tiangong UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：分配到生产期并经库存变化调整的消耗量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考鸭肉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_records`
- 来源：`codex-cxc-58-2005`; `fao-leap-poultry-2016`
- 数量范围：暂定清洁剂筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.2
  - 单位：kg 配方/kg 参考产品
  - 基准：取得设施化学品记录前的宽泛首轮筛选区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

通常不需要废物投入。若有返回返工料或外来残余物，必须作为独立投入声明其来源和预定处理方式。

##### 基本流

当直接取水或场内燃料燃烧投入跨越环境边界时单独记录；否则使用产品流供应数据集。

#### 输出

##### 产品流

###### 经检验的整理后鸭胴体（`dressed_duck_carcass`）

按照设施声明的食用产率口径，记录脱毛、去内脏、检验和清洗后送入冷却的质量。

- 选定流：整理后鸭胴体；Tiangong UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：送入冷却的实测整理后胴体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 本过程输出并与参考产品协调
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`
- 来源：`fao-leap-poultry-2016`
- 数量范围：暂定整理产率筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.3
  - 上限：0.9
  - 单位：kg 整理后胴体/kg 交付活鸭
  - 基准：取得鸭类场址证据前的宽泛质量平衡筛选
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 分离的食用和可销售共产品（`slaughter_coproducts`）

按独立产品和去向记录可食用内脏及其他单独销售物料；这些输出不计入参考鸭肉质量。

- 选定流：已声明鸭屠宰共产品；Tiangong UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：按共产品流及去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 交付活鸭以及每 1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_and_waste_records`
- 来源：`fao-leap-poultry-2016`
- 数量范围：暂定共产品质量平衡筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.7
  - 单位：kg/kg 交付活鸭
  - 基准：所有分离共产品合计的宽泛筛选
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 判废和不可食用屠宰物料（`slaughter_waste`）

根据实际法规和商业去向，将判废鸭或部位、羽毛、血液、内脏和其他不可食用物料记录为独立废物或残余物流。

- 选定流：鸭屠宰残余物和废物；Tiangong UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：按流和去向实测质量，废物与可销售共产品状态分别保留
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考鸭肉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_and_waste_records`
- 来源：`fao-leap-poultry-2016`; `eu-sa-bref-2023`
- 数量范围：暂定固体残余物筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg 参考产品
  - 基准：取得分流鸭设施记录前的宽泛筛选
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 屠宰和清洁废水（`slaughter_wastewater`）

记录场内或场外处理前的废水体积，以及可得时的污染物浓度或负荷。

- 选定流：屠宰场废水；Tiangong UUID 未解析
- 流属性/单位：体积 / m3，污染物浓度使用 kg/m3 或 mg/L
- 数量规则：按报告期计量排放体积和采样浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考鸭肉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater`
- 来源：`fao-leap-poultry-2016`; `eu-sa-bref-2023`
- 数量范围：暂定废水体积筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.001
  - 上限：0.1
  - 单位：m3/kg 参考产品
  - 基准：宽泛首轮筛选；污染负荷须使用实测体积和浓度
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

场内燃烧或非受控释放产生的直接大气、水或土壤排放在发生时逐项记录；不得重复计算已包含在所连接供应或处理数据集中的排放。

### 过程：冷却、可选分割、包装和设施门口放行（`duck_chilling_cutting_packaging`）

#### 输入

##### 产品流

###### 经检验整理后鸭胴体投入（`dressed_carcass_input`）

从前一过程转移实测整理后胴体质量，不得再次增加上游负荷。

- 选定流：整理后鸭胴体；Tiangong UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：等于 `dressed_duck_carcass` 转移输出，仅对有记录的储存转移差异调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考鸭肉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_batch_mass_balance`
- 来源：`fao-leap-poultry-2016`

###### 制冷和分割电力（`chilling_electricity`）

记录冷却、放行前冷藏、分割、包装、泵、风机和相关控制的计量电力。

- 选定流：电力；Tiangong UUID 未解析
- 流属性/单位：能量 / kWh
- 数量规则：分表计量使用量，或使用有记录的方法从设施电力记录分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考鸭肉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`fao-leap-poultry-2016`; `eu-sa-bref-2023`
- 数量范围：暂定制冷电力筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.01
  - 上限：5
  - 单位：kWh/kg 参考产品
  - 基准：对技术、气候、储存时间和分割形态敏感的宽泛首轮筛选
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制冷剂补充量（`refrigerant_makeup`）

记录服务于已声明前景边界的系统的制冷剂采购和库存变化。

- 选定流：按化学物质声明的制冷剂；Tiangong UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：年补充质量分配给所服务系统，并协调期初和期末库存
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考鸭肉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`fao-leap-poultry-2016`; `eu-sa-bref-2023`
- 数量范围：暂定制冷剂损失筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.01
  - 单位：kg 制冷剂/kg 参考产品
  - 基准：取得系统特定维护和泄漏记录前的刻意宽泛筛选
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级和次级包装（`packaging_materials`）

记录随产品发出的或在设施门口前消耗的每种包装材料；披露其质量是否排除在 1 kg 参考产品之外。

- 选定流：按聚合物、纸、纸板、金属或其他材料分类的包装；Tiangong UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：采购量减库存变化和单独测量的包装废物
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考鸭肉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_records`
- 来源：`fao-leap-poultry-2016`
- 数量范围：暂定包装筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.2
  - 单位：kg 包装/kg 参考产品
  - 基准：宽泛首轮筛选；无包装输出可为零
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

通常不需要废物投入；若退回包装或产品返工料跨越本过程边界，必须单独记录。

##### 基本流

除设施记录中已表示的直接取水或场内能源资源外，不规定其他基本流投入。

#### 输出

##### 产品流

###### 新鲜或冷藏鸭肉参考产品（`reference_duck_meat_output`）

记录设施门口放行的实测净质量，并与全部已声明参考流限定信息一致。

- 选定流：Meat of ducks, fresh or chilled `787f4c92-60eb-4533-8ee0-a0fbeda9d5c8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测净质量归一化后的 1 kg 参考输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考鸭肉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_batch_mass_balance`
- 来源：`fao-leap-poultry-2016`; `eu-regulation-853-2004`
- 数量范围：参考流质量恒等式
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 参考产品
  - 基准：固定归一化参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`fao-leap-poultry-2016`

##### 废物流

###### 包装和修整废物（`finishing_waste`）

按材料和实际去向记录包装边角料、不可销售修整物和拒收产品。

- 选定流：按材料分类的包装和完成工序废物；Tiangong UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：按流和去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考鸭肉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_and_waste_records`
- 来源：`fao-leap-poultry-2016`
- 数量范围：暂定完成工序废物筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 参考产品
  - 基准：取得产品形态和设施记录前的宽泛筛选
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排放至大气的制冷剂（`refrigerant_to_air`）

当所连接制冷服务数据集尚未包含泄漏时，按化学物质记录制冷剂泄漏。

- 选定流：按化学物质分类的制冷剂大气排放；Tiangong UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：协调补充量减有记录回收量和库存变化，并分配给所服务系统
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考鸭肉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`fao-leap-poultry-2016`; `eu-sa-bref-2023`
- 数量范围：暂定制冷剂排放筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.01
  - 单位：kg 制冷剂/kg 参考产品
  - 基准：取得维护和回收记录前的宽泛筛选
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：共产品、废物和废水管理（`residuals_and_wastewater_management`）

#### 输入

##### 产品流

###### 处理能源和化学品（`treatment_inputs`）

场内处理时，按载能体或材料分别记录电力、燃料、处理化学品及任何补充用水。

- 选定流：按载能体或材料分类的处理投入；Tiangong UUID 未解析
- 流属性/单位：能量或质量 / kWh、MJ 或 kg
- 数量规则：分配给处理操作的计量或库存协调使用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考鸭肉输出，以及每 m3 或 kg 被处理物流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_records`
- 来源：`fao-leap-poultry-2016`; `eu-sa-bref-2023`
- 数量范围：暂定处理投入筛选
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：MJ 当量/kg 参考产品
  - 基准：宽泛综合能源筛选；化学品仍按质量单独报告
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 接受处理的废水和残余物（`streams_to_treatment`）

从产生过程转移每股废水、污泥、判废物和不可食用残余物流，除有记录的储存变化外不得改变记录质量或体积。

- 选定流：已声明废物和废水流；Tiangong UUID 未解析
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：等于产生过程连接输出，并按有记录储存变化调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考鸭肉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_treatment_records`
- 来源：`fao-leap-poultry-2016`; `eu-sa-bref-2023`

##### 基本流

除跨越环境边界且未作为供应产品流表示的直接取水或资源外，不规定基本流投入。

#### 输出

##### 产品流

###### 回收或炼制产品（`recovered_products`）

将任何可销售的炼制物、回收脂肪、肉骨粉或能源作为独立产品记录实测数量、去向和收入证据。

- 选定流：按实际身份分类的回收产品；Tiangong UUID 未解析
- 流属性/单位：质量或能量 / kg、kWh 或 MJ
- 数量规则：按产品和去向实测输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考鸭肉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_and_waste_records`
- 来源：`fao-leap-poultry-2016`; `eu-sa-bref-2023`

##### 废物流

###### 处理污泥和最终废物（`treatment_residues`）

按干重或湿重口径、含水率约定和去向记录污泥及最终残余物。

- 选定流：处理污泥和最终废物；Tiangong UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：按流和去向实测输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考鸭肉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_records`
- 来源：`fao-leap-poultry-2016`; `eu-sa-bref-2023`
- 数量范围：暂定处理残余物筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 湿残余物/kg 参考产品
  - 基准：取得处理技术和含水率口径记录前的宽泛筛选
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 处理后废水排放（`treated_wastewater_discharge`）

记录场内处理后的排放体积和实测污染负荷；设施输出未处理废水时改用所连接的场外处理数据集。

- 选定流：处理后废水及已报告水体排放；Tiangong UUID 未解析
- 流属性/单位：体积和质量 / m3 和 kg 污染物
- 数量规则：对各污染物使用排放体积乘代表性浓度，并保留采样口径
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考鸭肉输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_wastewater`
- 来源：`fao-leap-poultry-2016`; `eu-sa-bref-2023`
- 数量范围：暂定处理后水量筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：m3/kg 参考产品
  - 基准：宽泛筛选；污染负荷须使用实测浓度，不得由该体积范围估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 屠宰、分割、炼制、制冷和处理操作 | 首先细分系统；在技术可行时，将实测投入、输出和排放直接归属于引起它们的过程或产品。 | `fao-leap-poultry-2016` |
| `allocation_joint_products` | 联合生成的食用肉与不可食用或单独销售共产品 | 无法细分且没有可辩护物理因果关系时，按分离点各产品组年度净收入的相对比例分配剩余联合负荷。使用设施和期间特定的质量及收入记录；不得把来源中的鸡肉示例因子作为鸭肉默认值。 | `fao-leap-poultry-2016` |
| `allocation_residuals_and_waste` | 残余物料和废物 | 零负荷截断仅适用于在边界处有后续用途且既无正经济价值也无负经济价值的残余物。若设施支付处理或处置费用，应将其分类为废物，并在前景系统或所连接处理数据集中纳入处理负荷。 | `fao-leap-poultry-2016` |
| `allocation_internal_energy_recovery` | 场内废物回收能源 | 对场内使用的回收能源，仅在有记录设施平衡中通过扣减被替代购入能源计入收益。对外售能源，披露并论证系统扩展或与研究目标一致的替代分配。 | `fao-leap-poultry-2016` |
| `allocation_disclosure` | 全部已分配前景结果 | 报告产品分组、分离点、收入期间和货币口径、可食用内脏、脂肪、羽毛、血液、骨、判废物的处理，以及分配选择显著改变结果时对替代质量或经济分配的敏感性。 | `fao-leap-poultry-2016` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_mass_balance` | `duck_slaughter_dressing`; `duck_chilling_cutting_packaging` | 活体投入、整理后胴体、可销售肉、返工、损失和库存变化 | 地磅、校准秤、批次及生产记录 | lot_id; duck_type; live_mass; dead_or_condemned_mass; dressed_mass; saleable_mass; rework_mass; stock_change; cut_form; bone_skin_status | 将批次秤与日生产总量协调并调查未匹配质量 | kg | 每批，按日和月汇总 | 可行时至少连续 12 个代表性月份 | 每个纳入设施和生产线 | 汇总口径一致的湿重字段；保留批次可追溯性；仅在月度协调后归一化 | 校准记录、批次日志、协调签核以及含水率或滴水损失约定 |
| `cp_water_and_wastewater` | `duck_slaughter_dressing`; `residuals_and_wastewater_management` | 供水、回用水、废水体积和污染负荷 | 仪表、发票、流量计及代表性实验室样品 | meter_start; meter_end; source; reuse_volume; discharge_volume; sample_time; COD; BOD; TSS; nitrogen; phosphorus; other_regulated_parameters | 按一致间隔读表，并将流量加权或有依据的代表性浓度与排放体积匹配 | m3 和 mg/L 或 kg/m3 | 连续或每日计量；按许可和过程变异性采样 | 至少 12 个代表性月份 | 每个设施；可得时对主要操作分表计量 | 购入或取用水减有记录的非工艺用水；污染负荷 = 体积 × 浓度并换算单位 | 仪表校准、发票协调、实验室认可或经验证方法、采样计划 |
| `cp_energy_records` | `duck_slaughter_dressing`; `duck_chilling_cutting_packaging`; `residuals_and_wastewater_management` | 按过程分类的电力和燃料 | 分表、公用事业发票、燃料收据、罐存和库存记录 | carrier; meter_start; meter_end; purchase; opening_stock; closing_stock; process_share; heating_value; conversion_factor | 优先使用分表；否则以设备、运行时间或工程证据记录设施总量分配 | 按载能体使用 kWh、MJ、kg、L 或 m3 | 每月，并保留可得的间隔数据 | 至少 12 个代表性月份 | 每个设施和主要能源系统 | 协调采购和库存；保留载能体分别总量；始终使用有记录的低位或高位热值换算 | 仪表和发票协调、燃料规格、分配工作表、能量平衡审查 |
| `cp_material_records` | `duck_slaughter_dressing`; `duck_chilling_cutting_packaging` | 清洁剂和包装 | 采购、配方、库存及废物记录 | material_id; formulation; active_concentration; purchase_mass; opening_stock; closing_stock; returned_mass; waste_mass; product_assignment | 按声明配方和包装材料进行库存变化调整的物料平衡 | kg | 每月 | 至少 12 个代表性月份 | 每个设施和产品系列 | 消耗量 = 采购 + 期初库存 - 期末库存 - 退货；协调包装产品输出和废物 | 发票、盘点、物料清单、包装规格、化学品安全数据表 |
| `cp_temperature_records` | `duck_chilling_cutting_packaging` | 冷却和设施门口产品状态 | 校准探针、连续记录器及放行记录 | lot_id; timestamp; location; product_temperature; room_temperature; corrective_action; release_status; never_frozen_confirmation | 根据适用食品安全计划测量代表性产品点并保留时间温度历程 | °C | 连续监控库温并逐批放行测量 | 完整报告期 | 每个冷却、分割、储存和发运区域 | 保留原始值；报告批次最大值和异常，不得以平均值掩盖不符合 | 探针校准、记录器记录、HACCP 验证、放行授权、纠正措施记录 |
| `cp_coproduct_and_waste_records` | `duck_slaughter_dressing`; `duck_chilling_cutting_packaging`; `residuals_and_wastewater_management` | 共产品、残余物、判废物和废物 | 秤、转移单、发票、处置记录和去向确认 | stream_id; status; mass; moisture_basis; destination; revenue; treatment_cost; currency; date; transport_inclusion | 可行时称量每股物料，并保留区分产品、残余物和废物状态的证据 | kg 和货币 | 每次发运，按月汇总 | 与主要生产数据相同期间 | 每个设施和外部去向 | 按流和状态汇总；分配使用一致净收入期间；与质量平衡协调 | 秤记录、发票、废物联单、去向收据、法规分类、分配审查 |
| `cp_refrigerant_records` | `duck_chilling_cutting_packaging` | 制冷剂库存、补充、回收和泄漏 | 维护日志、钢瓶记录、检漏和设备清单 | refrigerant; charge; opening_stock; purchases; recovered; closing_stock; system_served; leak_event | 按每种化学物和系统协调；存在维护记录时不得用通用因子推断泄漏 | kg | 每次维护事件及年度协调 | 至少 12 个代表性月份 | 服务于前景边界的每个制冷系统 | 估算释放 = 采购 + 期初库存 - 期末库存 - 回收 - 有记录转移，并进行非负协调 | 认证维护记录、钢瓶收据、检漏结果、设备清单 |
| `cp_treatment_records` | `residuals_and_wastewater_management` | 场内处理投入和输出 | 处理仪表、操作日志、实验室结果和转移记录 | treatment_route; input_mass_or_volume; energy; chemicals; recovered_product; sludge; discharge; operating_time | 将每条处理路线与接受的物流和实测输出协调 | kg、m3、kWh 和 MJ | 每日或每批，按月汇总 | 与生产数据相同期间 | 每个场内处理单元 | 按处理路线汇总；干湿基准和污染负荷分别计算 | 操作日志、仪表校准、实验室结果、处理性能审查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项清单数量 | 归一化数量 = 分配给产品的期间数量 / 期间合格参考鸭肉净质量 | 已分配流数量；合格参考产品质量 | 每 1 kg 参考产品的流数量 | `fao-leap-poultry-2016` |
| `calc_product_yield` | 屠宰和完成工序质量平衡 | 产品产率 = 参考鸭肉净质量 / 交付活鸭质量；分别报告整理后胴体和食用产品口径 | 交付活重；整理后质量；可销售参考产品质量 | 无量纲产率和 kg/kg 活鸭 | `fao-leap-poultry-2016` |
| `calc_material_consumption` | 清洁剂、包装、燃料和制冷剂 | 消耗量 = 采购 + 期初库存 - 期末库存 - 退货或有记录转移；保留化学物或载能体身份 | 采购和库存记录 | 按材料分类的消耗质量或能量 | `fao-leap-poultry-2016`; `eu-sa-bref-2023` |
| `calc_wastewater_load` | 废水污染物行 | 污染负荷 = 代表性排放体积 × 浓度，并明确换算浓度和体积单位；数据支持时使用流量加权平均 | 排放体积；浓度；采样口径 | 每期间和每 kg 参考产品的 kg 污染物 | `fao-leap-poultry-2016`; `eu-sa-bref-2023` |
| `calc_joint_economic_allocation` | 剩余不可细分联合负荷 | 产品组 i 的分配比例 = 产品组 i 净收入 / 同一设施和期间全部被分配产品组正净收入总和 | 产品数量；同期价格或收入；可分离负荷 | 按产品组分配的前景负荷 | `fao-leap-poultry-2016` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和投入 | 产品身份、鸭类型、分割形态、骨和皮状态、包装口径、新鲜或冷藏状态、设施地理范围和生产期必须明确。 | 产品规格、批次及放行记录和精确参考流 UUID 核验 |
| `dq_temporal` | 前景活动数据 | 可行时至少使用连续 12 个代表性月份，以覆盖季节性、停机、清洁和制冷负荷；论证较短活动期并披露外推。 | 带日期原始记录、覆盖率计算和代表性说明 |
| `dq_measurement` | 质量、水、能源、温度和排放 | 使用经校准或核实的测量系统；保留原始读数和换算因子；不得用本 PCR 暂定范围替代可测前景数量。 | 校准证书、仪表日志、发票、实验室方法及协调记录 |
| `dq_completeness` | 过程和物料平衡 | 覆盖全部必需过程；使用 FAO LEAP 方法时，每个已报告影响类别至少覆盖 95% 的评估影响；已知小流仍保留在清单中或估算并披露，不得静默遗漏。 | 完整性检查表、截断登记、范围筛选分析和质量/能量平衡 |
| `dq_allocation` | 共产品、残余物和废物 | 分配状态、分离点、设施期间数量、净收入、处理成本和替代方法敏感性必须可审查。 | 分配工作表、发票、去向记录和敏感性计算 |
| `dq_hygiene_temperature` | 与食品安全相关的运行状态 | 保留证明检验、消毒、冷却和放行温度符合适用主管辖区要求的记录。 | HACCP 或等效记录、检验处置、消毒日志、校准温度日志 |
| `dq_secondary_data` | 上游和场外数据集 | 选择代表地理、技术、时间和处理路线的数据；披露不匹配，避免运输、处理或制冷剂排放重复计算。 | 数据集元数据、选择理由和边界协调 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 产品流 UUID 必须精确解析为状态获准、CPC 21122、参考属性为 Mass 的 Meat of ducks, fresh or chilled Product flow；PCR 中存储的引用不得含数据集版本。 |  |
| `validate_reference_qualifiers` | 数据集元数据和参考交换 | 缺失分割或胴体形态、骨状态、皮状态、包装是否计入、新鲜或冷藏状态、从未冻结确认、放行温度、食用产率口径、地理范围或生产期的数据包，应拒绝或标记为不完整。 | `fao-leap-poultry-2016`; `eu-regulation-853-2004` |
| `validate_process_coverage` | 前景过程图 | 确认屠宰整理、冷却和设施门口放行、工艺水、清洁、能源、制冷、共产品、废物和废水已纳入，或明确论证不适用或由所连接数据集表示。 | `fao-leap-poultry-2016`; `codex-cxc-58-2005`; `eu-sa-bref-2023` |
| `validate_mass_balance` | 活鸭到产品及残余物流 | 使用一致湿重和库存变化约定协调质量。调查并披露无法解释的差异；不得通过改变固定 1 kg 参考输出来强制平衡。 | `fao-leap-poultry-2016` |
| `validate_temperature_state` | 冷却、储存和放行 | 按适用主管辖区规则核实经校准批次温度证据和从未冻结状态。适用欧盟法规 (EC) No 853/2004 时，确认尽快冷却至不高于 4 °C。 | `eu-regulation-853-2004`; `codex-cxc-58-2005` |
| `validate_allocation` | 共产品处理 | 确认先细分后分配、产品分组一致、剩余联合负荷使用同期设施净收入分配键、纳入废物处理，以及分配选择重要时披露敏感性。 | `fao-leap-poultry-2016` |
| `validate_provisional_ranges` | 全部推理估算范围 | 暂定范围仅作为筛选信号。数值超出范围需要调查，落在范围内不证明质量；出版关键默认值需要经审查的来源证据。 |  |
| `validate_data_coverage` | 前景数据包 | 报告接受的输入、执行的检查、跳过的检查、发现和完整性。缺少必需原始记录、单位未解析或分配无支持时，校验应为无法下结论而不是静默通过。 | `fao-leap-poultry-2016`; `eu-sa-bref-2023` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 初级加工设施门口新鲜或冷藏鸭肉前景生产数据集 |
| downstream_use | 完成方法学和数据审查后，可作为 `secondary_dataset` 或 `background_dataset` 使用 |
| allowed_use | 当所声明产品形态、设施门口、地理、技术、数据期、分配和温度状态与研究匹配时，用于产品碳足迹或 LCA 建模 |
| excluded_use | 冷冻鸭肉；活鸭农场门口生产；以可食用内脏、脂肪或肥肝为参考产品；进一步加工鸭肉；未限定的全球或行业平均；缺少必要审查的公开比较声明 |
| required_metadata | 发布后的 PCR id 和版本；产品流 UUID；产品限定信息；设施地理范围；生产期；过程覆盖；上游数据集身份；分配方法和分配键；包装口径；放行温度；数据所有者和审查状态 |
| required_quality_disclosure | 前景覆盖；测量和校准证据；时间代表性；质量和能量协调；截断；次级数据替代；未解析 UUID；暂定范围使用；分配敏感性；跳过的校验检查 |
| update_trigger | 产品形态、屠宰或冷却技术、设施地理、能源或水系统、制冷剂、包装、处理路线、分配经济性、适用卫生规则发生重大变化；数据超过预期代表期；或暂定证据和 UUID 缺口得到解决 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `codex-cxc-58-2005` | standard | Codex Alimentarius Commission. CXC 58-2005, Code of Hygienic Practice for Meat. FAO/WHO Codex 官方 PDF：https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B58-2005%252FCXC_058e.pdf（检索日期 2026-08-11）。 | 屠宰整理卫生、饮用水清洗、清洁消毒、冷却设施、防污染、检验和过程控制记录 |
| `eu-regulation-853-2004` | standard | European Parliament and Council. Regulation (EC) No 853/2004 laying down specific hygiene rules for food of animal origin，2026-05-07 合并文本，Annex III Section II。https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02004R0853-20260507（检索日期 2026-08-11）。 | 当前禽类屠宰、分割、冷却、储存和温度状态要求；适用时的 4 °C 条件规则 |
| `eu-sa-bref-2023` | official_guidance | European Commission Joint Research Centre. Best Available Techniques Reference Document for Slaughterhouses, Animal By-products and/or Edible Co-products Industries, 2023. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2024-02/SA%20BREF.pdf（检索日期 2026-08-11）。 | 屠宰场边界、投入产出清单、水和能源管理、制冷、废物、共产品和废水处理 |
| `fao-leap-poultry-2016` | official_guidance | FAO. 2016. Greenhouse gas emissions and fossil energy use from poultry supply chains: Guidelines for assessment. Livestock Environmental Assessment and Performance Partnership. ISBN 978-92-5-109496-9。官方记录：https://openknowledge.fao.org/handle/20.500.14283/i6421en（检索日期 2026-08-11）。 | 产品质量参考流、初级加工过程图、物料平衡、前景采集、系统边界、共产品分配、截断披露和数据质量规则 |
