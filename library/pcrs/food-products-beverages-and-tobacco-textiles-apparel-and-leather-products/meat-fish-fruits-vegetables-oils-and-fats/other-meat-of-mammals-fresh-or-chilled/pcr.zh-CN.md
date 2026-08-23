---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-meat-of-mammals-fresh-or-chilled
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 其他哺乳动物肉（鲜或冷藏）

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 子类 21119 中、且不属于牛、水牛、猪、兔或野兔、绵羊、山羊、骆驼或其他骆驼科动物、马或其他马科动物肉的鲜或冷藏哺乳动物肉。每个前景数据包必须声明一种具体哺乳动物物种、解剖部位、带骨状态以及鲜或冷藏状态。“其他哺乳动物肉”不得作为身份未声明的集合原料。

代表性路线为无骨马鹿（`Cervus elaphus`）大块分割肉或零售分割肉，状态为鲜或冷藏且从未冷冻。前景边界从经宰后检验的鹿胴体或鹿大块分割肉由屠宰/野味处理环节移交给分割包装作业时开始，覆盖接收、身份与状态检验、分级、修整与分割、仅在实际实施时的产品清洗、预冷与冷藏、包装、卫生清洁以及厂门交付。养殖、狩猎或捕获、活体运输、宰杀、胴体处理、去内脏、剥皮和宰后检验均排除；其负荷必须由接收胴体或分割肉的上游数据集带入。

冷冻肉、食用杂碎、肉糜、肉制备品、熟制/腌制/烟熏/干燥或其他保藏肉、零售、消费者运输、烹饪、食用及下游报废均不在本 PCR 范围内。其他 CPC 21119 哺乳动物数据集只有在将每项鹿特定产品身份替换为一个明确物种，并保持原子流与路线披露时，才可采用本方法。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-meat-of-mammals-fresh-or-chilled |
| classification_refs | CPC 3.0：21119，其他哺乳动物肉（鲜或冷藏） |
| covered_products | CPC 21119 范围内哺乳动物的鲜或冷藏骨骼肌肉及分割肉；每个数据集声明一种物种和一个部位 |
| excluded_products | CPC 21111-21118 的哺乳动物肉；冷冻肉；食用杂碎；肉糜；肉制备品；保藏或熟制肉；物种未声明的多物种集合肉 |
| representative_product | 无骨马鹿（`Cervus elaphus`）大块分割肉或零售分割肉，鲜或冷藏 |
| production_route | 经检验鹿胴体或大块分割肉移交；接收与分级；修整/分割；条件性清洗；预冷/冷藏；包装；清洁卫生；厂门交付 |
| market_state | 已包装鲜或冷藏肉，从未冷冻，并声明交付温度和包装气氛 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在厂门提供、用于销售或后续食品制备的无骨马鹿肉 |
| How much | 1 kg 净肉质量，不含包装 |
| How well | 经检验并合格，已声明物种和解剖部位，鲜或冷藏且从未冷冻，满足适用的卫生和交付温度规范 |
| How long or cycle | 经过屠宰后分割包装设施的一个生产与交付批次 |
| reference_flow_link | `delivered_deer_meat` 中的净包装肉输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净肉质量 |
| 参考产品流 | 无骨鹿肉（鲜或冷藏） |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 哺乳动物常用名与学名；养殖或野生来源；胴体/大块分割肉输入路线；解剖部位；带骨状态；鲜或冷藏状态；从未冷冻确认；接收和交付温度；司法辖区温度限值；包装形式及组件材料；真空或气调状态；适用时的气调气体组成；净肉质量；设施及报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在厂门报告 1 kg 可食净肉；包装质量单独列入清单，不得计入参考质量。 |
| `wet_mass_basis` | 肉、骨、脂肪、修整物、不合格品和污泥 | 质量 | kg | 使用称量时湿质量，并保留称量日期、秤具身份、去皮程序以及会影响解释的水分状态。 |
| `utility_basis` | 电、水、冰、蒸汽、燃料、气体和制冷剂 | 与原子流相适应的能量、质量或体积 | kWh、MJ、kg 或 m3 | 保留计量或发票单位，记录换算因子和热值基准，再归一化至 1 kg 净参考产品。 |
| `temperature_basis` | 接收、分割、预冷、冷藏和交付 | 温度和经过时间 | 摄氏度和 h | 保留产品温度、测量位置、时间戳、仪器及适用法定或客户限值；除非适用规则明确允许，不得以室温替代产品温度。 |
| `no_empirical_range_without_two_sources` | 所有清单数量范围 | 与底层流相同 | 与底层流相同 | 不得从单一案例或单点发布经验范围；至少两项独立、已核验且边界、单位和基准相容的原始来源支持综合前，应省略范围。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 经宰后检验的鲜或冷藏马鹿胴体或马鹿大块分割肉，已按物种和部位识别，并在分割包装设施移交 |
| starting_condition_role | 上游产品投入；承载养殖或野生捕获、活体运输、宰杀、胴体处理、去内脏、剥皮和检验的全部负荷 |
| product_classification_scope | 仅 CPC 3.0 子类 21119；每个数据包声明一种哺乳动物物种和一个部位 |
| recursive_input_rule | 同类别外购鲜/冷藏肉在其物理移交状态只记录一次并连接一个上游数据集；不得在本前景包中重新展开已排除的养殖、狩猎或屠宰阶段。 |
| upstream_dataset_requirement | 合格胴体或大块分割肉投入需要一个在地理、时间、技术、物种、来源和部位方面具代表性的上游数据集，覆盖至宰后检验及移交。 |
| disclosure | 声明物种、学名、养殖/野生来源、部位、带骨状态、输入路线、进料温度、检验/合格状态、包装路线、冷却制度、设施、期间及任何排除或共享作业。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_start_handover` | 前景边界 | 从经宰后检验的胴体或大块分割肉物理移交时开始；排除养殖/狩猎和屠宰，同时要求进料数据集携带这些负荷。 | `unsd-cpc-3-21119`; `codex-cxc-58-2005` |
| `boundary_required_operations` | 前景过程覆盖 | 纳入接收、检验/分级、修整/分割、预冷/冷藏、包装、清洁卫生和厂门交付；仅在实际实施时纳入肉品清洗。 | `codex-cxc-58-2005`; `fao-meat-cutting-guidelines`; `rotz-et-al-2019` |
| `boundary_cold_chain` | 肉品温度控制 | 在分割、包装、冷藏和交付全过程保持并记录已声明的鲜/冷藏状态。代表性欧盟大型野味鹿路线受 Regulation (EC) No 853/2004 管辖时采用 7 摄氏度产品限值；其他路线记录并采用主管司法辖区限值。 | `eu-853-2004-consolidated`; `codex-cxc-58-2005` |
| `boundary_complete_inventory` | 前景交换 | 盘查所有已知物质和能量投入、产品、共产品、废物、直接排放及制冷剂泄漏；不得把实际流隐藏在集合能源、材料、包装或废物流中。 | `eu-pef-2021-2279`; `eu-bat-2023-2749` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p01_receiving` | 接收、身份检验与分级 | `required` | 始终 | 前景生产 | kg 合格鹿胴体或大块分割肉进料 |
| `p02_cutting` | 修整、去骨与分割 | `required` | 始终 | 前景生产 | kg 鹿分割肉输出 |
| `p03_washing` | 产品清洗与冰接触 | `conditional` | 仅已声明产品路线实际清洗肉品或直接接触冰时纳入 | 前景调理 | kg 清洗后鹿肉输出 |
| `p04_chilling` | 预冷与冷藏 | `required` | 始终 | 前景调理与储存 | kg 冷藏鹿肉输出及储存小时 |
| `p05_packaging` | 真空或气调包装 | `required` | 始终；实例化实际包装路线 | 前景生产 | kg 包装鹿肉输出 |
| `p06_sanitation` | 设施与设备清洁卫生 | `required` | 始终；仅记录实际使用的化学品和燃料 | 共享前景支持 | 所支持的 kg 净参考产品 |
| `p07_dispatch` | 成品冷藏暂存与厂门交付 | `required` | 始终 | 前景交付 | kg 已交付净参考产品 |

### 过程：接收、身份检验与分级（`p01_receiving`）

#### 输入

##### 产品流

###### 鲜或冷藏马鹿胴体进料（`incoming_deer_carcass`）

仅在经检验马鹿胴体跨越前景边界时使用本路线特定投入。

- 选定流：鲜或冷藏马鹿胴体
- 流属性/单位：质量 / kg
- 数量规则：按批次称量合格与不合格胴体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_mass_identity`
- 来源：`unsd-cpc-3-21119`; `codex-cxc-58-2005`

###### 鲜或冷藏马鹿大块分割肉进料（`incoming_deer_primal_cut`）

仅在经检验马鹿大块分割肉而非胴体跨越前景边界时使用本路线特定投入。

- 选定流：鲜或冷藏马鹿大块分割肉
- 流属性/单位：质量 / kg
- 数量规则：按批次称量合格与不合格大块分割肉质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_mass_identity`
- 来源：`unsd-cpc-3-21119`; `codex-cxc-58-2005`

###### 接收与分级用电（`receiving_electricity`）

记录接收输送、秤具、检验照明和分级设备的计量电量。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：分表电量；无分表时采用有记录的总表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：`eu-bat-2023-2749`; `rotz-et-al-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格马鹿胴体（`accepted_deer_carcass`）

胴体输入路线适用时，记录移交分割的合格胴体质量。

- 选定流：合格鲜或冷藏马鹿胴体
- 流属性/单位：质量 / kg
- 数量规则：按批次称量合格胴体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_mass_identity`
- 来源：`codex-cxc-58-2005`

###### 合格马鹿大块分割肉（`accepted_deer_primal_cut`）

大块分割肉输入路线适用时，记录移交分割的合格分割肉质量。

- 选定流：合格鲜或冷藏马鹿大块分割肉
- 流属性/单位：质量 / kg
- 数量规则：按批次称量合格大块分割肉质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_mass_identity`
- 来源：`codex-cxc-58-2005`

##### 废物流

###### 接收环节不合格鹿肉（`receiving_reject`）

记录因身份、状态、卫生、温度或规格不合格而拒收的肉。

- 选定流：不合格马鹿肉
- 流属性/单位：质量 / kg
- 数量规则：按原因和去向称量不合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_rejects`
- 来源：`codex-cxc-58-2005`

##### 基本流

### 过程：修整、去骨与分割（`p02_cutting`）

#### 输入

##### 产品流

###### 用于分割的合格马鹿胴体（`cutting_carcass_input`）

本内部移交流用于胴体输入路线。

- 选定流：合格鲜或冷藏马鹿胴体
- 流属性/单位：质量 / kg
- 数量规则：从 `accepted_deer_carcass` 转入的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_yield`
- 来源：`codex-cxc-58-2005`

###### 用于分割的合格马鹿大块分割肉（`cutting_primal_input`）

本内部移交流用于大块分割肉输入路线。

- 选定流：合格鲜或冷藏马鹿大块分割肉
- 流属性/单位：质量 / kg
- 数量规则：从 `accepted_deer_primal_cut` 转入的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_yield`
- 来源：`codex-cxc-58-2005`

###### 修整、去骨与分割用电（`cutting_electricity`）

记录锯、刀具、输送、分份及局部抽排的可归属电量。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：分表电量，或设备功率与运行小时的有记录分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：`fao-meat-cutting-guidelines`; `rotz-et-al-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 马鹿分割肉（`cut_deer_meat`）

记录移交清洗或直接移交预冷的鲜分割肉。

- 选定流：鲜马鹿分割肉
- 流属性/单位：质量 / kg
- 数量规则：按声明解剖部位和批次称量分割肉质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_yield`
- 来源：`codex-cxc-58-2005`; `rotz-et-al-2019`

###### 送往回收的马鹿骨（`deer_bone_recovery`）

仅在洁净骨送往有记录的回收用途时作为共产品记录。

- 选定流：回收用马鹿骨
- 流属性/单位：质量 / kg
- 数量规则：按去向称量骨质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_yield`
- 来源：`eu-pef-2021-2279`; `rotz-et-al-2019`

###### 送往回收的马鹿脂肪（`deer_fat_recovery`）

仅在分离脂肪送往有记录的回收用途时作为共产品记录。

- 选定流：回收用马鹿脂肪
- 流属性/单位：质量 / kg
- 数量规则：按去向称量脂肪质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_yield`
- 来源：`eu-pef-2021-2279`; `rotz-et-al-2019`

###### 送往回收的马鹿肉修整物（`deer_trimming_recovery`）

仅在可食或可回收修整物存在有记录用途时作为共产品记录。

- 选定流：回收用马鹿肉修整物
- 流属性/单位：质量 / kg
- 数量规则：按去向称量修整物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_yield`
- 来源：`eu-pef-2021-2279`; `rotz-et-al-2019`

##### 废物流

###### 废弃马鹿骨（`discarded_deer_bone`）

记录送往废物处理而非回收的骨。

- 选定流：废马鹿骨
- 流属性/单位：质量 / kg
- 数量规则：按处理去向称量废弃骨质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_rejects`
- 来源：`codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 废弃马鹿脂肪（`discarded_deer_fat`）

记录送往废物处理而非回收的脂肪。

- 选定流：废马鹿脂肪
- 流属性/单位：质量 / kg
- 数量规则：按处理去向称量废弃脂肪质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_rejects`
- 来源：`codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 废弃马鹿肉修整物（`discarded_deer_trimmings`）

记录送往废物处理而非回收的修整物。

- 选定流：废马鹿肉修整物
- 流属性/单位：质量 / kg
- 数量规则：按处理去向称量废弃修整物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_rejects`
- 来源：`codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 分割环节含血排水（`blood_contaminated_drainage`）

单独记录含血滴液和排水，不得与产品清洗废水合并。

- 选定流：肉品分割含血排水
- 流属性/单位：质量 / kg
- 数量规则：计量体积按记录密度换算，或直接称量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_streams`
- 来源：`eu-bat-2023-2749`; `rotz-et-al-2019`

###### 不合格马鹿分割肉（`cutting_reject`）

分开记录修整、去骨或分割中不合格的肉，不与可回收修整物合并。

- 选定流：不合格马鹿分割肉
- 流属性/单位：质量 / kg
- 数量规则：按原因和处理去向称量不合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_rejects`
- 来源：`codex-cxc-58-2005`

##### 基本流

### 过程：产品清洗与冰接触（`p03_washing`）

#### 输入

##### 产品流

###### 待清洗马鹿分割肉（`washing_meat_input`）

仅在实际实施产品清洗时纳入此移交流。

- 选定流：鲜马鹿分割肉
- 流属性/单位：质量 / kg
- 数量规则：从 `cut_deer_meat` 转入清洗路线的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_product_washing`
- 来源：`codex-cxc-58-2005`

###### 产品清洗用饮用水（`washing_water`）

仅在实施该清洗步骤时记录接触肉品的水。

- 选定流：饮用水
- 流属性/单位：体积 / m3
- 数量规则：计量输送至产品清洗设备的用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_washing`
- 来源：`codex-cxc-58-2005`; `eu-bat-2023-2749`

###### 接触肉品的饮用水制冰（`washing_ice`）

仅在冰直接接触肉或清洗水时记录。

- 选定流：饮用水制冰
- 流属性/单位：质量 / kg
- 数量规则：称量清洗路线供应的冰
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_washing`
- 来源：`codex-cxc-58-2005`

###### 产品清洗用电（`washing_electricity`）

记录清洗泵、输送和冰处理用电。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：分表电量，或设备功率乘记录运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：`eu-bat-2023-2749`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 清洗后马鹿肉（`washed_deer_meat`）

记录移交预冷的清洗后肉质量。

- 选定流：清洗后鲜马鹿肉
- 流属性/单位：质量 / kg
- 数量规则：按批次称量清洗后肉质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_washing`
- 来源：`codex-cxc-58-2005`

##### 废物流

###### 肉品清洗废水（`meat_washing_wastewater`）

将产品清洗废水与清洁卫生废水及分割含血排水分开记录。

- 选定流：肉品清洗废水
- 流属性/单位：体积 / m3
- 数量规则：清洗过程出口的分流废水计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_streams`
- 来源：`eu-bat-2023-2749`; `codex-cxc-58-2005`

##### 基本流

### 过程：预冷与冷藏（`p04_chilling`）

#### 输入

##### 产品流

###### 待预冷的未清洗马鹿分割肉（`chilling_unwashed_meat_input`）

未实施产品清洗时使用本内部移交流。

- 选定流：鲜马鹿分割肉
- 流属性/单位：质量 / kg
- 数量规则：从 `cut_deer_meat` 直接转入预冷的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigeration`
- 来源：`codex-cxc-58-2005`

###### 待预冷的清洗后马鹿肉（`chilling_washed_meat_input`）

实施产品清洗时使用本内部移交流。

- 选定流：清洗后鲜马鹿肉
- 流属性/单位：质量 / kg
- 数量规则：从 `washed_deer_meat` 转入的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigeration`
- 来源：`codex-cxc-58-2005`

###### 预冷与冷藏用电（`chilling_electricity`）

记录压缩机、冷凝器、蒸发器风机、除霜、冷库照明及控制用电。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：制冷分表读数；共享设备按计量产品质量-时间分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigeration`
- 来源：`eu-bat-2023-2749`; `fao-cold-store-1991`; `rotz-et-al-2019`

###### 氨 R717 制冷剂补充（`refrigerant_r717_makeup`）

仅在制冷系统含 R717 时记录。

- 选定流：氨制冷剂 R717
- 流属性/单位：质量 / kg
- 数量规则：采购与充注补充质量同库存、回收和维修记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigeration`
- 来源：`eu-bat-2023-2749`

###### 二氧化碳 R744 制冷剂补充（`refrigerant_r744_makeup`）

仅在制冷系统含 R744 时记录。

- 选定流：二氧化碳制冷剂 R744
- 流属性/单位：质量 / kg
- 数量规则：采购与充注补充质量同库存、回收和维修记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigeration`
- 来源：`eu-bat-2023-2749`

###### HFC-134a 制冷剂补充（`refrigerant_r134a_makeup`）

仅在制冷系统含 R134a 时记录。

- 选定流：1,1,1,2-四氟乙烷制冷剂 R134a
- 流属性/单位：质量 / kg
- 数量规则：采购与充注补充质量同库存、回收和维修记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigeration`
- 来源：`eu-bat-2023-2749`; `rotz-et-al-2019`

###### R404A 制冷剂补充（`refrigerant_r404a_makeup`）

仅在制冷系统含 R404A 时记录，并保持混合物身份。

- 选定流：R404A 制冷剂混合物
- 流属性/单位：质量 / kg
- 数量规则：采购与充注补充质量同库存、回收和维修记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigeration`
- 来源：`eu-bat-2023-2749`; `rotz-et-al-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷藏马鹿肉（`chilled_deer_meat`）

记录移交包装的冷藏肉及其产品温度和保持时间。

- 选定流：冷藏马鹿肉
- 流属性/单位：质量 / kg
- 数量规则：按批次称量冷藏肉质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigeration`
- 来源：`eu-853-2004-consolidated`; `codex-cxc-58-2005`

##### 废物流

##### 基本流

###### 排放到空气的氨 R717（`refrigerant_r717_emission`）

仅在使用 R717 时计算泄漏。

- 选定流：排放到空气的氨
- 流属性/单位：质量 / kg
- 数量规则：R717 补充量加有记录的库存减少量，减去回收或转移量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigeration`
- 来源：`eu-bat-2023-2749`

###### 排放到空气的二氧化碳 R744（`refrigerant_r744_emission`）

仅在使用 R744 时计算泄漏。

- 选定流：制冷剂来源二氧化碳排放到空气
- 流属性/单位：质量 / kg
- 数量规则：R744 补充量加有记录的库存减少量，减去回收或转移量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigeration`
- 来源：`eu-bat-2023-2749`

###### 排放到空气的 HFC-134a（`refrigerant_r134a_emission`）

仅在使用 R134a 时计算泄漏。

- 选定流：排放到空气的 1,1,1,2-四氟乙烷
- 流属性/单位：质量 / kg
- 数量规则：R134a 补充量加有记录的库存减少量，减去回收或转移量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigeration`
- 来源：`eu-bat-2023-2749`; `rotz-et-al-2019`

###### 排放到空气的 R404A 制冷剂（`refrigerant_r404a_emission`）

仅在使用 R404A 时计算泄漏，并保持背景方法所需的混合物身份。

- 选定流：排放到空气的 R404A 制冷剂混合物
- 流属性/单位：质量 / kg
- 数量规则：R404A 补充量加有记录的库存减少量，减去回收或转移量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigeration`
- 来源：`eu-bat-2023-2749`; `rotz-et-al-2019`

### 过程：真空或气调包装（`p05_packaging`）

#### 输入

##### 产品流

###### 待包装冷藏马鹿肉（`packaging_meat_input`）

记录进入已声明包装路线的冷藏肉质量。

- 选定流：冷藏马鹿肉
- 流属性/单位：质量 / kg
- 数量规则：从 `chilled_deer_meat` 转入的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_components`
- 来源：`codex-cxc-58-2005`; `rotz-et-al-2019`

###### 包装用电（`packaging_electricity`）

记录封口机、真空泵、混气机、贴标机和包装输送机用电。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：分表电量，或设备功率乘记录运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：`rotz-et-al-2019`

###### 聚酰胺/聚乙烯真空袋（`vacuum_bag_pa_pe`）

仅在真空包装路线记录。

- 选定流：聚酰胺/聚乙烯多层真空袋
- 流属性/单位：质量 / kg
- 数量规则：领用袋质量减退回可用库存，并与包装件数核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：`codex-cxc-58-2005`; `rotz-et-al-2019`

###### PET 托盘（`pet_tray`）

仅在使用 PET 托盘时记录。

- 选定流：聚对苯二甲酸乙二醇酯托盘
- 流属性/单位：质量 / kg
- 数量规则：领用托盘质量减退回可用库存，并与包装件数核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：`codex-cxc-58-2005`; `rotz-et-al-2019`

###### 聚乙烯封口膜（`polyethylene_lidding_film`）

仅在使用聚乙烯封口膜时记录。

- 选定流：聚乙烯封口膜
- 流属性/单位：质量 / kg
- 数量规则：领用薄膜质量减退回可用库存，并与包装件数核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：`rotz-et-al-2019`

###### 纤维素吸水垫（`cellulose_absorbent_pad`）

仅在包装内放置吸水垫时记录。

- 选定流：纤维素肉品吸水垫
- 流属性/单位：质量 / kg
- 数量规则：领用吸水垫质量减退回可用库存，并与包装件数核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：`codex-cxc-58-2005`; `rotz-et-al-2019`

###### 瓦楞纸箱（`corrugated_cardboard_case`）

记录交付使用的每个瓦楞运输箱。

- 选定流：瓦楞纸箱
- 流属性/单位：质量 / kg
- 数量规则：领用纸箱质量减退回可用库存，并与交付箱数核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：`codex-cxc-58-2005`; `rotz-et-al-2019`

###### 纸质包装标签（`paper_label`）

纸质标签与薄膜和托盘分开记录。

- 选定流：纸质包装标签
- 流属性/单位：质量 / kg
- 数量规则：领用标签质量减退回可用库存，并与包装件数核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：`codex-cxc-58-2005`; `rotz-et-al-2019`

###### 气调包装用二氧化碳（`map_carbon_dioxide`）

仅在包装气氛注入二氧化碳时记录。

- 选定流：食品级二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：气瓶或散装表计领用量分配至合格气调包装件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_gases`
- 来源：`codex-cxc-58-2005`; `rotz-et-al-2019`

###### 气调包装用氮气（`map_nitrogen`）

仅在包装气氛注入氮气时记录。

- 选定流：食品级氮气
- 流属性/单位：质量 / kg
- 数量规则：气瓶或散装表计领用量分配至合格气调包装件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_gases`
- 来源：`codex-cxc-58-2005`

###### 气调包装用氧气（`map_oxygen`）

仅在包装气氛注入氧气时记录。

- 选定流：食品级氧气
- 流属性/单位：质量 / kg
- 数量规则：气瓶或散装表计领用量分配至合格气调包装件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_gases`
- 来源：`codex-cxc-58-2005`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装冷藏马鹿肉（`packaged_deer_meat`）

记录移交成品冷藏暂存的净肉质量。

- 选定流：包装无骨冷藏马鹿肉
- 流属性/单位：质量 / kg
- 数量规则：不含所有包装组件的秤量净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：`codex-cxc-58-2005`; `rotz-et-al-2019`

##### 废物流

###### 不合格包装马鹿肉（`packaging_reject`）

包装环节不合格肉与包装边角料分开记录。

- 选定流：不合格包装马鹿肉
- 流属性/单位：质量 / kg
- 数量规则：按原因和去向记录不合格净肉质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_rejects`
- 来源：`codex-cxc-58-2005`

###### 废聚酰胺/聚乙烯真空袋（`waste_vacuum_bag_pa_pe`）

记录未使用、破损和工艺边角真空袋。

- 选定流：废聚酰胺/聚乙烯多层膜
- 流属性/单位：质量 / kg
- 数量规则：按去向称量废真空袋材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`eu-pef-2021-2279`; `rotz-et-al-2019`

###### 废 PET 托盘（`waste_pet_tray`）

记录破损或未使用的 PET 托盘。

- 选定流：废聚对苯二甲酸乙二醇酯托盘
- 流属性/单位：质量 / kg
- 数量规则：按去向称量废 PET 托盘材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`eu-pef-2021-2279`; `rotz-et-al-2019`

###### 废聚乙烯封口膜（`waste_polyethylene_lidding_film`）

记录封口膜切边和不合格薄膜。

- 选定流：废聚乙烯薄膜
- 流属性/单位：质量 / kg
- 数量规则：按去向称量废聚乙烯薄膜
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`eu-pef-2021-2279`; `rotz-et-al-2019`

###### 废纤维素吸水垫（`waste_cellulose_absorbent_pad`）

记录未使用或不合格吸水垫；被肉污染的吸水垫仍保持这一独立废物身份。

- 选定流：废纤维素肉品吸水垫
- 流属性/单位：质量 / kg
- 数量规则：按去向称量废吸水垫材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`eu-pef-2021-2279`; `rotz-et-al-2019`

###### 废瓦楞纸板（`waste_corrugated_cardboard`）

瓦楞纸箱废物与纸标签分开记录。

- 选定流：废瓦楞纸板
- 流属性/单位：质量 / kg
- 数量规则：按回收或处理去向称量废瓦楞纸板
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`eu-pef-2021-2279`; `rotz-et-al-2019`

###### 废纸标签（`waste_paper_label`）

单独记录不合格或未使用纸标签。

- 选定流：废纸标签
- 流属性/单位：质量 / kg
- 数量规则：按去向称量废纸标签材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`eu-pef-2021-2279`; `rotz-et-al-2019`

##### 基本流

### 过程：设施与设备清洁卫生（`p06_sanitation`）

#### 输入

##### 产品流

###### 清洁卫生用饮用水（`sanitation_water`）

记录前景设施内设备、表面、房间、周转箱和人员卫生清洗用水。

- 选定流：饮用水
- 流属性/单位：体积 / m3
- 数量规则：计量清洁卫生用水，并与产品清洗用水分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_inputs_outputs`
- 来源：`codex-cxc-58-2005`; `fao-cold-store-1991`; `eu-bat-2023-2749`

###### 清洁卫生用电（`sanitation_electricity`）

记录泵、高压清洗机、化学品计量及清洁设备用电。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：分表电量或有记录的设备-时间计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：`eu-bat-2023-2749`; `rotz-et-al-2019`

###### 清洁卫生用外购蒸汽（`sanitation_steam`）

仅在蒸汽跨越场址边界时记录；现场锅炉燃料另列。

- 选定流：外购蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：按记录压力、温度和凝结水返回基准计量外购蒸汽能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_inputs_outputs`
- 来源：`fao-meat-cutting-guidelines`; `eu-bat-2023-2749`

###### 现场清洁卫生供热用天然气（`sanitation_natural_gas`）

仅在现场燃烧供热水、蒸汽或清洁热时记录天然气。

- 选定流：天然气
- 流属性/单位：能量 / MJ 低位热值
- 数量规则：计量燃料体积并按供应商组分和低位热值换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_and_combustion`
- 来源：`eu-bat-2023-2749`; `ipcc-2006-stationary-combustion`; `rotz-et-al-2019`

###### 现场清洁卫生供热用液化石油气（`sanitation_lpg`）

仅在现场燃烧 LPG 时记录。

- 选定流：液化石油气
- 流属性/单位：质量 / kg
- 数量规则：计量或发票 LPG 质量并调整库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_and_combustion`
- 来源：`ipcc-2006-stationary-combustion`

###### 现场清洁卫生供热用柴油（`sanitation_diesel`）

仅在固定式现场加热器或锅炉中燃烧柴油时记录；车辆燃料不在本行。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量或发票柴油质量并调整库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_and_combustion`
- 来源：`ipcc-2006-stationary-combustion`

###### 氢氧化钠清洗剂（`sanitation_sodium_hydroxide`）

使用该碱性清洗剂时记录配制产品质量和有效氢氧化钠浓度。

- 选定流：氢氧化钠
- 流属性/单位：质量 / kg 有效物质
- 数量规则：化学品领用质量乘经核验有效浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_inputs_outputs`
- 来源：`codex-cxc-58-2005`; `eu-bat-2023-2749`

###### 硝酸清洗剂（`sanitation_nitric_acid`）

使用该酸性清洗剂时记录配制产品质量和有效硝酸浓度。

- 选定流：硝酸
- 流属性/单位：质量 / kg 有效物质
- 数量规则：化学品领用质量乘经核验有效浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_inputs_outputs`
- 来源：`codex-cxc-58-2005`; `eu-bat-2023-2749`

###### 次氯酸钠消毒剂（`sanitation_sodium_hypochlorite`）

使用该消毒剂时记录配制产品质量和有效次氯酸钠浓度。

- 选定流：次氯酸钠
- 流属性/单位：质量 / kg 有效物质
- 数量规则：化学品领用质量乘经核验有效浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_inputs_outputs`
- 来源：`fao-cold-store-1991`; `codex-cxc-58-2005`

###### 过氧乙酸消毒剂（`sanitation_peracetic_acid`）

使用该消毒剂时记录配制产品质量和有效过氧乙酸浓度。

- 选定流：过氧乙酸
- 流属性/单位：质量 / kg 有效物质
- 数量规则：化学品领用质量乘经核验有效浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_inputs_outputs`
- 来源：`codex-cxc-58-2005`; `eu-bat-2023-2749`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 清洁卫生废水（`sanitation_wastewater`）

清洁卫生废水与产品清洗废水及分割含血排水分开记录。

- 选定流：肉品设施清洁卫生废水
- 流属性/单位：体积 / m3
- 数量规则：按处理去向计量分流清洁卫生废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_streams`
- 来源：`eu-bat-2023-2749`; `rotz-et-al-2019`

###### 废水处理污泥（`wastewater_sludge`）

仅在服务前景作业的现场处理产生污泥时记录。

- 选定流：肉品加工废水处理污泥
- 流属性/单位：质量 / kg 湿污泥
- 数量规则：称量湿污泥，并记录干固体比例和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_inputs_outputs`
- 来源：`eu-bat-2023-2749`; `rotz-et-al-2019`

##### 基本流

###### 现场燃料燃烧化石二氧化碳（`combustion_carbon_dioxide`）

对每种现场燃料计算直接化石二氧化碳，保留燃料级计算后再求和。

- 选定流：排放到空气的化石二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：各燃料活动量乘经核验的司法辖区、燃料和技术特定 CO2 因子之和；仅在无更优因子时采用 IPCC 默认值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fuel_and_combustion`
- 来源：`ipcc-2006-stationary-combustion`

###### 现场燃料燃烧甲烷（`combustion_methane`）

对每种现场燃料和燃烧技术计算直接甲烷。

- 选定流：排放到空气的化石甲烷
- 流属性/单位：质量 / kg
- 数量规则：各燃料活动量乘经核验的司法辖区、燃料和技术特定 CH4 因子之和；仅在无更优因子时采用 IPCC 默认值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fuel_and_combustion`
- 来源：`ipcc-2006-stationary-combustion`

###### 现场燃料燃烧氧化亚氮（`combustion_nitrous_oxide`）

对每种现场燃料和燃烧技术计算直接氧化亚氮。

- 选定流：排放到空气的氧化亚氮
- 流属性/单位：质量 / kg
- 数量规则：各燃料活动量乘经核验的司法辖区、燃料和技术特定 N2O 因子之和；仅在无更优因子时采用 IPCC 默认值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fuel_and_combustion`
- 来源：`ipcc-2006-stationary-combustion`

### 过程：成品冷藏暂存与厂门交付（`p07_dispatch`）

#### 输入

##### 产品流

###### 待交付包装冷藏马鹿肉（`dispatch_meat_input`）

记录进入成品冷藏暂存的净肉质量。

- 选定流：包装无骨冷藏马鹿肉
- 流属性/单位：质量 / kg
- 数量规则：从 `packaged_deer_meat` 转入的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_dispatch`
- 来源：`codex-cxc-58-2005`

###### 成品暂存与装货用电（`dispatch_electricity`）

记录厂门移交前可归属于参考产品的交付冷藏、月台设备和装货用电。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：分表电量按成品暂存净肉质量-时间分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：`fao-cold-store-1991`; `eu-bat-2023-2749`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 厂门交付无骨鹿肉（`delivered_deer_meat`）

这是参考产品输出，为一种已声明鹿种和部位的包装鲜或冷藏肉，且从未冷冻。

- 选定流：无骨鹿肉（鲜或冷藏）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：不含包装的交付净肉质量；数据集精确归一化至 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：精确 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_dispatch`
- 来源：`unsd-cpc-3-21119`; `codex-cxc-58-2005`

##### 废物流

###### 交付环节不合格肉（`dispatch_reject`）

记录最终温度、标签、封口或状态检查中不合格的包装肉。

- 选定流：交付环节不合格冷藏马鹿肉
- 流属性/单位：质量 / kg
- 数量规则：按原因和处理去向记录不合格净肉质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_rejects`
- 来源：`codex-cxc-58-2005`; `eu-853-2004-consolidated`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_preserve_upstream` | 胴体或大块分割肉进料 | 不在本门到门 PCR 内重新分配上游养殖、狩猎或屠宰负荷；采用合格进料产品数据集已经携带的负荷并披露其分配方法。 | `eu-pef-2021-2279` |
| `allocation_subdivision_first` | 共享前景设备和公用工程 | 分配前优先采用分表、批记录、设备时间、质量-时间或其他因果细分。 | `eu-pef-2021-2279`; `eu-bat-2023-2749` |
| `allocation_joint_cutting` | 肉、回收骨、脂肪和修整物 | 若分割不能细分，以实测湿输出质量分配剩余共享负荷，因为质量是直接观测的物理关系；披露全部质量份额，并在共产品价值可能改变结论时测试经济分配敏感性。 | `eu-pef-2021-2279`; `rotz-et-al-2019` |
| `allocation_waste` | 废弃物料、废水、污泥和包装废物 | 不给废物分配共产品抵扣；将分流和现场处理负荷归给废物产生过程，并按声明去向建模下游处理。 | `eu-pef-2021-2279` |
| `allocation_no_double_count` | 内部产品移交 | 必需过程之间的内部移交不增加新的上游负荷；在过程质量平衡中只核对一次，发布清单仅计数跨越前景系统边界的交换。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_mass_identity` | `p01_receiving` | 鹿肉进料与合格肉 | 批次接收、检验和秤量记录 | 物种；学名；来源；胴体/大块路线；部位；带骨状态；鲜/冷藏；进料温度；毛重；皮重；净重；合格；不合格 | 校准秤具连接追溯与检验记录 | kg；摄氏度 | 每批 | 完整报告期 | 所有接收点 | 按声明路线汇总合格与不合格净质量并保留批次关联 | 秤具校准；供应商文件；检验处置；温度记录 |
| `cp_process_electricity` | `p01_receiving`-`p07_dispatch` | 过程用电 | 电表与运行时间记录 | 电表起止；设备；额定功率；运行小时；共享负荷动因；产品质量 | 优先直接分表；否则采用有记录的设备-时间或因果分配 | kWh | 每批或计量间隔 | 完整报告期 | 所有纳入过程 | 按过程汇总；以披露的因果动因分配共享负荷 | 电表校准；发票核对；分配工作表 |
| `cp_cutting_yield` | `p02_cutting` | 分割肉、骨、脂肪与修整物 | 批次质量平衡记录 | 输入路线；输入质量；部位身份；肉；回收骨；回收脂肪；回收修整物；废弃部分；不合格品；滴液 | 输入和各输出去向使用校准秤具 | kg 湿质量 | 每批或有覆盖证明的代表性活动 | 报告年内代表性运行期 | 所有分割线 | 汇总每项原子输出并计算无法解释的质量差 | 秤具校准；去向票据；批次核对 |
| `cp_product_washing` | `p03_washing` | 条件性肉品清洗 | 路线标志、水表、冰领用、产品秤量和电力记录 | 是否清洗；肉进/出；水；冰；电；起止；废水 | 专用计量与批记录 | kg；m3；kWh | 每个清洗批次 | 报告期全部清洗事件 | 所有清洗设备 | 仅汇总适用批次；仅有路线证据时可为零 | 计量检查；清洁 SOP；批记录 |
| `cp_refrigeration` | `p04_chilling` | 预冷、冷藏、制冷剂补充与泄漏 | 温度记录仪、电表、制冷剂库存/维修记录 | 肉进/出；产品温度与时间；储存小时；电；制冷剂身份；期初/期末库存；采购；充注；回收；转移 | 连续温度和电力记录加制冷剂质量核对 | kg；kWh；摄氏度；h | 温度连续；每次制冷剂维护事件 | 完整报告期 | 服务纳入肉品的全部系统 | 能源按产品质量-时间分配；各制冷剂单独计算 | 校准记录仪；分表；维修发票；气瓶称量；泄漏报警记录 |
| `cp_packaging_components` | `p05_packaging` | 肉和每个包装组件 | 物料清单、库存领用、计数和秤量记录 | 肉进/出；包装路线；组件材料；件数；单件质量；期初/期末库存；采购；退回 | 已核验 BOM 与库存和包装件数核对 | kg；件 | 每个包装批次 | 完整报告期 | 所有包装线 | 分别计算每个组件质量；包装合计不得替代组件 | 供应商规格；秤量检查；库存核对 |
| `cp_packaging_gases` | `p05_packaging` | 每种气调气体 | 气表或气瓶核对 | 气体身份；纯度；期初/期末库存；采购；压温换算；合格气调包装件 | 优先质量表计；否则气瓶库存核对 | kg | 每批或每次换瓶 | 报告期全部气调生产 | 所有气调包装线 | 各气体分别分配至合格气调产品 | 仪表校准；气瓶发票；气体组成检查 |
| `cp_packaging_waste` | `p05_packaging` | 每种包装废物 | 废物秤量与去向记录 | 材料身份；质量；污染状态；去向；日期 | 按材料分流称量 | kg | 每次收集 | 完整报告期 | 所有包装线 | 按材料和去向分别汇总 | 称重单；回收商或处理收据 |
| `cp_sanitation_inputs_outputs` | `p06_sanitation` | 水、蒸汽、化学品、废水和污泥 | 仪表、库存、配方及废物记录 | 水；蒸汽；化学品；有效浓度；领用质量；电；废水；污泥湿质量；干固体；去向 | 专用计量与库存核对；有效质量计算 | m3；MJ；kWh；kg | 每个清洁周期或计量间隔 | 完整报告期 | 所有纳入房间与设备 | 汇总每项原子化学品和输出；共享清洁按清洁面积-时间或生产质量分配并披露 | 仪表校准；SDS/产品规格；库存记录；处理票据 |
| `cp_fuel_and_combustion` | `p06_sanitation` | 每种现场燃料及 CO2、CH4、N2O | 燃料计量/发票、库存、热值和排放因子记录 | 燃料身份；数量；期初/期末库存；低位热值；燃烧技术；因子来源；CO2；CH4；N2O | 核对每种燃料，再采用经核验的燃料与技术特定因子 | kg；MJ；kg 排放 | 每个计量间隔；年度核对 | 完整报告期 | 服务前景作业的全部固定燃烧 | 同一基本流求和前按燃料计算每种气体 | 发票；计量检查；供应商热值；因子版本；计算表 |
| `cp_wastewater_streams` | `p02_cutting`; `p03_washing`; `p06_sanitation` | 含血排水、清洗废水和清洁卫生废水 | 分流流量计与采样记录 | 流身份；流量；质量换算密度；COD；总氮；总磷；处理去向 | 分开计量或经验证水量平衡；代表性采样 | m3；kg | 连续或每个排放批次 | 完整报告期 | 每个分流排水及处理路线 | 按流汇总；合并前必须保留来源数据 | 仪表校准；采样监管链；处理发票 |
| `cp_waste_and_rejects` | `p01_receiving`; `p02_cutting`; `p05_packaging`; `p07_dispatch` | 不合格品和动物物料废物 | 秤量与处置记录 | 行身份；质量；原因；可食/共产品/废物状态；去向；日期 | 分流称量与处置日志 | kg | 每次事件 | 完整报告期 | 所有纳入过程 | 按原子行和去向汇总 | 秤量检查；不合格记录；去向收据 |
| `cp_dispatch` | `p07_dispatch` | 参考产品交付 | 最终秤量、温度、标签、封口和发运记录 | 物种；学名；部位；带骨状态；净肉质量；包装；气氛；产品温度；时间；批次；客户/司法限值 | 校准终秤与产品温度测量 | kg；摄氏度 | 每个交付批次 | 完整报告期 | 所有厂门交付 | 汇总合格净肉质量；所有交换归一化至 1 kg | 秤具校准；温度校准；放行记录；标签复核 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalization` | 每项前景交换 | 归一化数量 = 报告期交换数量 / 报告期厂门合格净肉质量 | 原子交换总量；`delivered_deer_meat` 总量 | 每 1 kg 净参考产品数量 | `eu-pef-2021-2279` |
| `calc_process_mass_balance` | 接收、分割、清洗、包装和交付 | 输入湿质量 = 产品输出 + 共产品输出 + 废物输出 + 实测液体转移 + 库存变化 + 无法解释差异；报告差异，不得强制配平 | 校准进出质量；库存；液体记录 | 过程平衡与无法解释质量差 | `eu-bat-2023-2749`; `eu-pef-2021-2279` |
| `calc_refrigerant_leakage` | 每种制冷剂 | 排放质量 = 补充充注量 + 系统期初库存 - 系统期末库存 - 回收量 - 转移量；R717、R744、R134a、R404A 及其他实际制冷剂分别计算 | 库存、采购、充注、回收、转移和维修记录 | 每种制冷剂排放到空气的 kg | `eu-bat-2023-2749` |
| `calc_combustion_emissions` | 天然气、LPG 和固定式柴油 | 各气体排放 = 与因子热值基准一致的燃料活动量 × 经核验因子；汇总前保留按燃料的 CO2、CH4、N2O 计算 | 每种燃料量；低位热值；燃烧技术；因子 | kg 化石 CO2、kg CH4、kg N2O | `ipcc-2006-stationary-combustion` |
| `calc_active_chemical` | 氢氧化钠、硝酸、次氯酸钠和过氧乙酸 | 有效物质质量 = 配制产品质量 × 经核验有效质量分数 | 产品领用质量；供应商浓度 | kg 有效化学品 | `eu-bat-2023-2749` |
| `calc_packaging_component` | 每个包装组件 | 组件质量 = 经核验单件质量 × 使用件数，并同“期初库存 + 采购 - 期末库存 - 退回可用库存 - 实测废物”核对 | BOM；计数；库存；废物 | 各组件进入产品和成为废物的 kg | `eu-pef-2021-2279`; `rotz-et-al-2019` |
| `calc_allocation` | 不可分的共享分割或支持过程 | 优先采用实测因果细分；联合分割确实无法细分时按实测湿输出质量分配，并在重要时披露经济敏感性 | 分表或因果动因；输出质量；敏感性所需价值证据 | 各输出分配的前景负荷 | `eu-pef-2021-2279`; `rotz-et-al-2019` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 肉类投入和参考产品 | 每批保持一种已声明哺乳动物物种、学名、来源、解剖部位、带骨状态和鲜/冷藏状态的追溯；拒绝未声明集合肉。 | 供应商记录；检验记录；批次关联；产品标签 |
| `dq_temperature` | 接收至交付 | 使用校准产品温度与时间记录，足以证明适用冷藏肉限值和连续低温控制。 | 校准证书；记录仪导出；放行记录；适用法规或规格 |
| `dq_completeness` | 所有过程与流 | 纳入所有必需过程，以及每项实际原子材料、能源、制冷剂、包装组件、废物、废水和直接排放；实际存在但未列举的制冷剂、燃料、化学品、包装组件、废物或排放必须新增独立行。 | 签署完整性清单；采购-清单核对；过程流程图 |
| `dq_representativeness` | 前景活动数据 | 可行时覆盖完整年度；否则披露季节、运行模式、物种/部位组合、产量及较短代表性活动充分性的理由。 | 报告期记录；生产计划；活动说明 |
| `dq_metering` | 质量、公用工程、温度、气体和废水记录 | 保留校准或核验状态，并在适用时将分表总量同发票或总表核对。 | 校准记录；发票；核对工作表 |
| `dq_waste_destination` | 动物物料、包装废物、废水和污泥 | 逐项记录共产品或废物状态、处理或回收去向及质量；不得从通用废物合同推断去向。 | 称重单；转移单；处理或回收收据 |
| `dq_range_evidence` | 数量范围 | 不得以单篇论文、单一设施数值或重复端点作为经验范围；在两项相容原文支持综合前，保留前景记录要求及 manifest 未解决范围条目。 | 来源审查记录或明确未解决条目 |
| `dq_uuid_resolution` | 参考流和清单流 | 本作者候选稿可留空 UUID，但每个具名原子流在进入 active 审查或发布前必须解析并直接核验。 | manifest 未解决清单；未来 Tiangong 直读证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 数据集身份 | 缺少哺乳动物物种、学名、解剖部位、带骨状态或鲜/冷藏状态，或使用未声明多物种“其他哺乳动物肉”集合时失败。 | `unsd-cpc-3-21119` |
| `validation_boundary` | 系统边界 | 养殖、狩猎或屠宰负荷未由进料产品数据集携带，或又在前景边界中加入造成重复计数时失败。 | `codex-cxc-58-2005`; `eu-pef-2021-2279` |
| `validation_process_coverage` | 过程图 | 任一必需过程无详细清单时失败；产品清洗及每种条件性包装气体、制冷剂、燃料、化学品或包装组件均需不适用证据。 | `codex-cxc-58-2005`; `eu-bat-2023-2749` |
| `validation_temperature` | 冷链 | 产品温度/时间证据不足以证明接收、适用的分割、预冷、冷藏和交付环节满足已声明适用限值时失败。 | `eu-853-2004-consolidated`; `codex-cxc-58-2005` |
| `validation_atomic_flows` | 清单 | 电力、蒸汽、燃料、制冷剂、化学品、气体、包装组件、动物残余物、废水流、废物或排放被组合成选择器或集合行时失败。 | `eu-pef-2021-2279`; `eu-bat-2023-2749` |
| `validation_mass_balance` | 过程数量 | 标记任何无法解释质量差；进料、产品、共产品、废物、液体转移和库存变化记录不足以复现过程平衡时失败。 | `eu-bat-2023-2749`; `eu-pef-2021-2279` |
| `validation_refrigerant` | 制冷 | 实际制冷剂缺少单独补充与泄漏计算，或库存、维修、回收与转移记录未核对时失败。 | `eu-bat-2023-2749` |
| `validation_combustion` | 现场燃料 | 使用天然气、LPG 或固定式柴油却无独立活动记录，以及采用有记录因子基准的直接化石 CO2、CH4、N2O 计算时失败。 | `ipcc-2006-stationary-combustion` |
| `validation_reference_mass` | 参考流 | 输出未精确归一化至不含包装的 1 kg 无骨净肉，或 `delivered_deer_meat` 未连接参考流时失败。 | `eu-pef-2021-2279` |
| `validation_ranges` | 范围 | 任何仅由单一案例、单点、重复端点、摘要或不相容边界支持的经验范围均失败。缺少范围仍是候选稿未解决证据缺口，不是虚构估算的许可。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种已声明 CPC 21119 哺乳动物肉产品的屠宰后分割、预冷、包装和交付门到门 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 在物种和路线相容的上游胴体或大块分割肉数据集之后连接至 `process` 或 `lifecyclemodel`；用于厂门鲜/冷藏肉研究 |
| allowed_use | 与已声明物种、来源、部位、输入路线、包装路线、制冷技术、司法辖区、设施规模和报告期相匹配的产品系统 |
| excluded_use | 未声明集合其他哺乳动物肉；牛/水牛/猪/兔/野兔/绵羊/山羊/骆驼科/马科类别；冷冻/杂碎/肉糜/制备/保藏肉；独立屠宰；零售或消费者阶段；上游分配与质量不等价的比较声明 |
| required_metadata | PCR id 和版本；物种常用名/学名；养殖/野生来源；部位；带骨状态；鲜/冷藏和从未冷冻声明；输入路线；上游数据集；设施地理与规模；报告期；温度限值与记录；包装组件与气氛；制冷剂和燃料身份；分配；截断；数据质量；未解决 UUID |
| required_quality_disclosure | 一手数据占比；计量与秤量覆盖；时间、地理和技术代表性；质量平衡差；共享作业分配；制冷剂核对；废物去向；来源与因子版本；偏差；缺失范围证据 |
| update_trigger | 物种/部位范围、输入路线、包装系统或混气、制冷剂、燃料或供热、清洁化学品、冷链限值、分配方法、废物去向、设施技术、报告期代表性、来源规则或已解析 Tiangong 身份发生变化 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-21119` | `official_guidance` | 联合国统计司，CPC 3.0 分类明细，子类 21119“其他哺乳动物肉（鲜或冷藏）”。https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/1073/21119（检索于 2026-08-24） | 正式类别纳入/排除和产品身份 |
| `codex-cxc-58-2005` | `standard` | Codex Alimentarius，Code of Hygienic Practice for Meat，CXC 58-2005。https://workspace.fao.org/sites/codex/Standards/CXC%2058-2005/CXC_058e.pdf（检索于 2026-08-24） | 宰后边界、分割、冷却、包装分隔、清洁卫生、检验、不合格物料和温度监测 |
| `eu-853-2004-consolidated` | `standard` | Regulation (EC) No 853/2004，2022-12-08 合并文本，Annex III 分割/去骨及大型野味条款。https://eur-lex.europa.eu/eli/reg/2004/853/2022-12-08（检索于 2026-08-24） | 代表性鹿路线的分割卫生、产品温度、预冷和交付符合性 |
| `fao-meat-cutting-guidelines` | `official_guidance` | FAO，Guidelines for slaughtering, meat cutting and further processing，设施卫生与制冷章节。https://www.fao.org/4/t0279e/T0279E02.htm（检索于 2026-08-24） | 过程分解、分割间制冷、热水/蒸汽、清洗与清洁卫生 |
| `fao-cold-store-1991` | `official_guidance` | Cano-Munoz, G.，Manual on Meat Cold Store Operation and Management，FAO Animal Production and Health Paper 92，1991，ISBN 92-5-102788-9。https://www.fao.org/4/t0098e/t0098e00.htm（检索于 2026-08-24） | 预冷/冷藏、制冷设备、库房卫生、清洗水与消毒剂、交付处理 |
| `eu-bat-2023-2749` | `standard` | Commission Implementing Decision (EU) 2023/2749，屠宰场及动物副产品/食用共产品行业 BAT 结论。https://eur-lex.europa.eu/eli/dec_impl/2023/2749/oj（检索于 2026-08-24） | 投入产出清单、能源和水管理、废水分流、化学品管理、制冷用能、制冷剂身份与损失监测 |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279，环境足迹方法合并文本。https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索于 2026-08-24） | 功能/参考流、完整企业特定清单、截断披露、分配层级、质量平衡和数据质量规则 |
| `ipcc-2006-stationary-combustion` | `method_factor` | IPCC，2006 Guidelines for National Greenhouse Gas Inventories，Volume 2 Energy，Chapter 2 Stationary Combustion。https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_2_Ch2_Stationary_Combustion.pdf（检索于 2026-08-24） | 燃料特定活动量和 CO2、CH4、N2O 计算方法；仅在无更优核验因子时采用默认因子 |
| `rotz-et-al-2019` | `literature` | Rotz, C.A. 等，A life cycle assessment of the environmental impacts of a beef system in the USA，International Journal of Life Cycle Assessment 24，441-455（2019）。https://doi.org/10.1007/s11367-018-1464-6（检索于 2026-08-24） | 已直接打开的同行评议全文，支持 case-ready 分割、包装组件、能耗、水、清洗化学品、废物、废水、分配和制冷剂清单；不作数值范围证据 |
