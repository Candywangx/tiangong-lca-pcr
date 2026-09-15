---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-buffalo-fresh-chilled-or-frozen
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 水牛可食用内脏，鲜、冷藏或冷冻

## 1. 范围与适用性

本 PCR 适用于以恰好一种声明状态供人食用而放行的水牛可食器官：鲜、冷藏或冷冻。覆盖器官特定产品，例如肝、心、肾、舌、脑、肚、小肠、大肠、肺和脾。每个前景数据集须声明一个精确器官身份；若采用本 PCR 未列举但市场认可的水牛可食器官，须在放行前的每个适用过程中为其增加独立原子行，绝不得以 “other offal” 集合流表示。

前景边界始于屠宰场接收的验收合格活水牛，止于经过器官回收、分离、修整、清洗、恰好一个状态调理分支、包装、卫生作业和适用场内废水处理后，在工厂门口放行的 1 kg 净合格可食用内脏。水牛养殖和入厂运输属于上游。配送、零售、烹调、食用和寿命终止属于下游。

水牛骨骼肉、不可食器官、混合物种内脏、非水牛动物内脏，以及不属于鲜、冷藏或冷冻状态的熟制、腌制、熏制、干制、盐渍或其他进一步保藏内脏均不属于参考产品。为保证完整性和分配可审计，具体胴体产品、血液、原皮、头架、角、蹄、脂肪、尾、不合格器官、废水、处理残余物和直接排放仍以原子交换呈现。所引来源支持分类范围、过程结构、初级数据采集、分配、透明度、质量和验证；本 PCR 不从中导入默认数量、因子或范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-buffalo-fresh-chilled-or-frozen |
| classification_refs | CPC 3.0：21152，精确 |
| covered_products | 以鲜、冷藏或冷冻状态供人食用而放行的一个已声明水牛可食器官 |
| excluded_products | 水牛骨骼肉；水牛不可食器官；混合物种内脏；非水牛内脏；熟制、腌制、熏制、干制、盐渍或其他进一步保藏内脏 |
| representative_product | 净合格水牛肝、心、肾、舌、脑、肚、小肠、大肠、肺、脾或其他已精确命名水牛可食器官 |
| production_route | 活水牛接收；屠宰；放血；去内脏；器官回收；器官分离；修整；清洗；一个互斥状态分支；包装；卫生作业；条件性场内废水处理 |
| market_state | 鲜、冷藏或冷冻三者恰好之一，并声明器官身份、放行温度、包装、场址和批次 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一个已精确识别且供人食用的水牛可食器官 |
| How much | 1 kg 净合格产品，包装质量不计入 |
| How well | 声明器官符合场址和适用法规的可食用要求，并保持一个明确的鲜、冷藏或冷冻状态 |
| How long or cycle | 一个器官批次从验收活水牛直至工厂门口放行；声明状态调理和储存时长 |
| reference_flow_link | ed9e2fcf-3bf3-4b09-a893-dc5250a65f5c |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净合格水牛可食用内脏，包装质量不计入 |
| 参考产品流 | 新鲜、冷藏或冷冻的水牛食用内脏 `ed9e2fcf-3bf3-4b09-a893-dc5250a65f5c` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 精确器官身份；水牛物种或声明分类单元；供人食用可食状态；恰好一个市场状态；鲜品操作时长或冷藏温度或冻藏温度；修整和清洁规格；整器官或声明分割形态；包装或散装配置；不含包装的产品净质量；场址；批次；报告期；排除骨骼肉的证据；排除不可食内脏的证据；排除非水牛物种的证据 |

以上每项限定信息均须出现在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中。器官身份缺失或市场状态超过一个的数据包不合规。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将唯一参考产出设为恰好 1 kg 净合格水牛可食器官，并排除包装质量。 |
| `organ_identity` | 每个器官投入、中间体、不合格品和产出 | Mass | kg | 每个已命名器官须占一个独立行，并在屠宰、整理、状态调理和包装过程中保持身份。 |
| `state_identity` | 参考批次和状态调理中间体 | Mass | kg | 每个参考批次恰好指定鲜、冷藏或冷冻之一；不得在一个参考数量中汇总状态。 |
| `net_edible_mass` | 可食器官、副产品、不合格品和固体残余物 | Mass | kg | 使用校准的毛重和皮重测量，保留批次链接，并且每项物理质量只报告一次。 |
| `electricity_energy` | 每项过程特定电力投入 | Energy | kWh | 分别记录接收、屠宰、整理、鲜品操作、冷却、冻结、包装、卫生作业和废水处理电力。 |
| `thermal_energy` | 外购蒸汽和外购热水 | Energy | MJ | 分别计量每种外购热载体，并防止与场内产热燃料重复计算。 |
| `fuel_quantity` | 天然气、柴油和液化石油气 | Volume or Mass | m3 or kg | 分别记录每种燃料并说明所有密度或能量换算。 |
| `water_volume` | 每个水流或废水流 | Volume | m3 | 可行时在混合前分别测量每个已命名流，并核对取水、转移、处理和排放。 |
| `refrigerant_mass` | R-717、R-134a 和 R-744 | Mass | kg | 对场址实际存在的每种制冷剂保持物质特定平衡，并将补充量与排放量分开。 |
| `pollutant_mass` | 每项空气或水释放 | Mass | kg | 使用匹配的前景记录，每行只报告一种污染物和一个环境介质。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 屠宰场接收的验收合格活水牛，并记录批次身份和活体净质量 |
| starting_condition_role | 前景进入条件；养殖和入厂运输保留为上游数据集 |
| product_classification_scope | CPC 21152 处于一个鲜、冷藏或冷冻状态的水牛可食用内脏；排除骨骼肉、不可食器官、非水牛内脏和进一步保藏产品 |
| recursive_input_rule | CPC 21152 产品重新进入前景操作时，将精确命名的器官和状态作为产品投入记录一次并关联上游数据集，不复制先前生产 |
| upstream_dataset_requirement | 研究范围包含相关负荷时，对养殖、饲料、兽医投入、入厂运输、外购公用工程、化学品、包装、制冷剂和场外废物处理使用透明上游数据集 |
| disclosure | 声明器官身份、水牛分类单元、可食状态、状态分支、时间和温度、修整、包装、场址、期间、分配、副产品去向、制冷剂、废水路线和排除项 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_classification` | 参考产品 | 将参考产品限定为鲜、冷藏或冷冻的 CPC 21152 水牛可食用内脏；排除骨骼肉和相邻内脏类别。 | `unsd-cpc-3-21152` |
| `boundary_foreground_stages` | 前景系统 | 纳入接收、屠宰、放血、去内脏、器官回收、器官整理、一个状态分支、包装、卫生作业和适用场内废水处理。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `boundary_state_exclusivity` | 状态调理路线 | 每个参考批次恰好纳入鲜品调理、冷却或冻结之一，并分别保留分支特定公用工程、制冷剂、不合格品和废水。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `boundary_exact_organ` | 器官清单 | 每个选定流只使用一个精确器官；生产另一个可食器官时增加器官特定行，不得使用集合或选择器。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `boundary_upstream_downstream` | 研究边界 | 将水牛养殖和入厂运输作为上游，将配送、零售、烹调、食用和寿命终止作为下游，除非明确披露研究扩展。 | `eu-pef-2021-2279` |
| `boundary_wastewater` | 场内废水处理 | 仅在至少一个已命名前景废水于场内处理时纳入处理过程；否则保留各自的场外转移边界。 | `ec-jrc-sa-bref-jrc135916` |
| `boundary_uuid_completeness` | 清单完整性 | 即使非参考天工 UUID 未解决，也保留具体物料、能源、水、制冷剂、废物、废水或排放行。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `buffalo_receipt_and_holding` | 水牛接收与暂养 | `required` | 所有从活水牛开始的屠宰场数据集均须纳入。 | 建立屠宰前验收活水牛质量、暂养公用工程、死亡、粪便和冲洗废水记录。 | 与声明的 1 kg 内脏参考产出关联的验收活水牛质量。 |
| `slaughter_bleeding_and_organ_recovery` | 屠宰、放血与器官回收 | `required` | 所有由验收活水牛生产可食用内脏的数据集均须纳入。 | 开展屠宰和去内脏，分别回收每个候选可食器官，并记录共享胴体产品、残余物、废水、公用工程和燃烧释放。 | 与声明的 1 kg 内脏参考产出关联的原始器官质量和共享屠宰清单。 |
| `offal_separation_trimming_and_washing` | 内脏分离、修整与清洗 | `required` | 每个声明的可食器官在状态特定调理前均须纳入。 | 逐个器官身份分离，去除器官特定不合格物，清洗器官，并保留器官特定清洗废水和热量记录。 | 与声明的 1 kg 参考产出关联的清洁合格器官质量。 |
| `fresh_offal_conditioning` | 鲜内脏调理 | `conditional` | 仅在参考批次以鲜品放行时纳入；该批次排除冷藏和冷冻分支。 | 在短时受控操作中保持鲜品状态，并分别记录每个器官产出和器官特定不合格物。 | 与声明的 1 kg 鲜品参考产出关联的鲜器官质量。 |
| `chilling_and_chilled_storage` | 冷却与冷藏 | `conditional` | 仅在参考批次以冷藏品放行时纳入；该批次排除鲜品和冷冻分支。 | 冷却每个合格器官并按声明冷藏温度储存，分别跟踪制冷剂物质、水、冰、不合格品、废水和压缩机油。 | 与声明的 1 kg 冷藏参考产出关联的冷藏器官质量。 |
| `freezing_and_frozen_storage` | 冻结与冻藏 | `conditional` | 仅在参考批次以冷冻品放行时纳入；该批次排除鲜品和冷藏分支。 | 冻结每个合格器官并按声明冻藏温度储存，独立跟踪挂冰用水、制冷剂、不合格品、融霜水和压缩机油。 | 与声明的 1 kg 冷冻参考产出关联的冷冻器官质量。 |
| `packaging_and_release` | 包装与产品放行 | `required` | 每个参考批次在恰好一个已声明状态分支后纳入；仅记录实际使用的包装组件和气体。 | 接收器官特定的鲜、冷藏或冷冻物料，记录每个包装组件，并以明确器官和状态限定信息放行唯一的 CPC 21152 通用参考流。 | 恰好 1 kg 处于一个声明状态的净合格水牛可食用内脏，包装质量不计入。 |
| `cleaning_and_disinfection` | 清洗与消毒 | `required` | 纳入场址卫生作业，每种化学品或热载体仅在实际使用时保留。 | 记录水、电力、每种热载体、每种燃料、每种清洗化学品、每种化学品特定废水、固体清扫物和单项燃烧污染物。 | 分配至声明的 1 kg 参考产出的卫生作业。 |
| `onsite_wastewater_treatment` | 场内废水处理 | `conditional` | 仅在至少一个已命名前景废水流于排放或转移前在场内处理时纳入。 | 分别接收每个已命名废水，记录每种处理耗材，分离残余物，并将每项最终水或空气释放作为单一交换报告。 | 与声明的 1 kg 参考产出关联的处理作业和排放。 |

### 过程：水牛接收与暂养（`buffalo_receipt_and_holding`）

#### 输入

##### 产品流

###### 接收的活水牛（`receipt_live_buffalo`）

Live buffalo 作为接收的活水牛进入“水牛接收与暂养”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Live buffalo
- 流属性/单位：Mass / kg
- 数量规则：使用校准牲畜秤或地磅测量活体净质量，并扣除有记录的车辆或容器皮重。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_live_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 暂养饮用水（`receipt_holding_water`）

Potable water 作为暂养饮用水进入“水牛接收与暂养”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：饮用水
- 流属性/单位：Volume / m3
- 数量规则：从专用校准水表读取该项用水；若使用共享水表，须根据经核对总量记录因果分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 暂养区电力（`receipt_holding_electricity`）

Electricity, medium voltage 作为暂养区电力进入“水牛接收与暂养”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：从分表读取该已命名阶段的电力；共享电表须按有记录的运行时间、负荷或吞吐量驱动因素分配并核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格活水牛（`receipt_accepted_buffalo`）

Accepted live buffalo 作为验收合格活水牛离开“水牛接收与暂养”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Accepted live buffalo
- 流属性/单位：Mass / kg
- 数量规则：使用校准牲畜秤或地磅测量活体净质量，并扣除有记录的车辆或容器皮重。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_live_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

###### 到厂死亡水牛胴体（`receipt_doa_buffalo`）

Dead-on-arrival buffalo carcass 作为到厂死亡水牛胴体离开“水牛接收与暂养”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Dead-on-arrival buffalo carcass
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛粪便（`receipt_buffalo_manure`）

Buffalo manure 作为水牛粪便离开“水牛接收与暂养”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo manure
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 暂养区冲洗废水（`receipt_holding_washwater`）

Buffalo holding-area washwater 作为暂养区冲洗废水离开“水牛接收与暂养”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo holding-area washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 基本流

### 过程：屠宰、放血与器官回收（`slaughter_bleeding_and_organ_recovery`）

#### 输入

##### 产品流

###### 验收活水牛投入（`slaughter_accepted_buffalo`）

Accepted live buffalo 作为验收活水牛投入进入“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Accepted live buffalo
- 流属性/单位：Mass / kg
- 数量规则：使用校准牲畜秤或地磅测量活体净质量，并扣除有记录的车辆或容器皮重。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_live_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 屠宰工艺水（`slaughter_process_water`）

Process water 作为屠宰工艺水进入“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：从专用校准水表读取该项用水；若使用共享水表，须根据经核对总量记录因果分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 屠宰电力（`slaughter_electricity`）

Electricity, medium voltage 作为屠宰电力进入“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：从分表读取该已命名阶段的电力；共享电表须按有记录的运行时间、负荷或吞吐量驱动因素分配并核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 外购屠宰蒸汽（`slaughter_purchased_steam`）

Steam, purchased 作为外购屠宰蒸汽进入“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：根据热量表或供应商记录采集跨越场址边界的外购蒸汽，不得重复计入已由燃料表示的场内产热。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 外购屠宰热水（`slaughter_purchased_hot_water`）

Hot water, purchased 作为外购屠宰热水进入“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：外购热水
- 流属性/单位：Energy / MJ
- 数量规则：根据实测流量和温度或供应商热量表采集外购热水热量，不得重复计入已由燃料表示的场内产热。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 屠宰天然气（`slaughter_natural_gas`）

Natural gas 作为屠宰天然气进入“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：天然气
- 流属性/单位：Volume / m3
- 数量规则：根据校准燃气表或经核对的发票分配采集该阶段天然气消耗量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 屠宰柴油（`slaughter_diesel`）

Diesel fuel 作为屠宰柴油进入“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：柴油燃料
- 流属性/单位：Mass / kg
- 数量规则：根据储罐、采购和期末库存记录核对该阶段柴油领用量；需要时使用有记录的密度换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 屠宰液化石油气（`slaughter_lpg`）

Liquefied petroleum gas 作为屠宰液化石油气进入“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：液化石油气
- 流属性/单位：Mass / kg
- 数量规则：根据该阶段钢瓶或储罐领用、采购、退回和库存记录核对液化石油气使用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 去内脏水牛胴体（`slaughter_eviscerated_carcass`）

Eviscerated buffalo carcass 作为去内脏水牛胴体离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Eviscerated buffalo carcass
- 流属性/单位：Mass / kg
- 数量规则：测量单独回收质量并保留声明的有益去向；同一质量只能分类一次为产品或废物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_products`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 回收的水牛肝原料（`slaughter_raw_liver`）

Buffalo liver, raw 作为回收的水牛肝原料离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo liver, raw
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_products`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 回收的水牛心原料（`slaughter_raw_heart`）

Buffalo heart, raw 作为回收的水牛心原料离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo heart, raw
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_products`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 回收的水牛肾原料（`slaughter_raw_kidney`）

Buffalo kidney, raw 作为回收的水牛肾原料离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo kidney, raw
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_products`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 回收的水牛舌原料（`slaughter_raw_tongue`）

Buffalo tongue, raw 作为回收的水牛舌原料离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo tongue, raw
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_products`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 回收的水牛脑原料（`slaughter_raw_brain`）

Buffalo brain, raw 作为回收的水牛脑原料离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo brain, raw
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_products`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 回收的水牛肚原料（`slaughter_raw_tripe`）

Buffalo tripe, raw 作为回收的水牛肚原料离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo tripe, raw
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_products`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 回收的水牛小肠原料（`slaughter_raw_small_intestine`）

Buffalo small intestine, raw 作为回收的水牛小肠原料离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo small intestine, raw
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_products`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 回收的水牛大肠原料（`slaughter_raw_large_intestine`）

Buffalo large intestine, raw 作为回收的水牛大肠原料离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo large intestine, raw
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_products`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 回收的水牛肺原料（`slaughter_raw_lung`）

Buffalo lung, raw 作为回收的水牛肺原料离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo lung, raw
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_products`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 回收的水牛脾原料（`slaughter_raw_spleen`）

Buffalo spleen, raw 作为回收的水牛脾原料离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo spleen, raw
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_products`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 回收的水牛血液（`slaughter_recovered_blood`）

Recovered buffalo blood 作为回收的水牛血液离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Recovered buffalo blood
- 流属性/单位：Mass / kg
- 数量规则：测量单独回收质量并保留声明的有益去向；同一质量只能分类一次为产品或废物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_coproducts`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛原皮（`slaughter_raw_hide`）

Raw buffalo hide 作为水牛原皮离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Raw buffalo hide
- 流属性/单位：Mass / kg
- 数量规则：测量单独回收质量并保留声明的有益去向；同一质量只能分类一次为产品或废物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_coproducts`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛头架（`slaughter_head_frame`）

Buffalo head frame 作为水牛头架离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo head frame
- 流属性/单位：Mass / kg
- 数量规则：测量单独回收质量并保留声明的有益去向；同一质量只能分类一次为产品或废物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_coproducts`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛角（`slaughter_horn`）

Buffalo horn 作为水牛角离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo horn
- 流属性/单位：Mass / kg
- 数量规则：测量单独回收质量并保留声明的有益去向；同一质量只能分类一次为产品或废物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_coproducts`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛蹄（`slaughter_hoof`）

Buffalo hoof 作为水牛蹄离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo hoof
- 流属性/单位：Mass / kg
- 数量规则：测量单独回收质量并保留声明的有益去向；同一质量只能分类一次为产品或废物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_coproducts`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 回收的水牛脂肪（`slaughter_recovered_fat`）

Recovered buffalo fat 作为回收的水牛脂肪离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Recovered buffalo fat
- 流属性/单位：Mass / kg
- 数量规则：测量单独回收质量并保留声明的有益去向；同一质量只能分类一次为产品或废物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_coproducts`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛尾（`slaughter_tail`）

Buffalo tail 作为水牛尾离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo tail
- 流属性/单位：Mass / kg
- 数量规则：测量单独回收质量并保留声明的有益去向；同一质量只能分类一次为产品或废物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_coproducts`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

###### 废弃水牛血液（`slaughter_discarded_blood`）

Discarded buffalo blood 作为废弃水牛血液离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Discarded buffalo blood
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废弃水牛原皮（`slaughter_discarded_hide`）

Discarded raw buffalo hide 作为废弃水牛原皮离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Discarded raw buffalo hide
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废弃水牛头架（`slaughter_discarded_head_frame`）

Discarded buffalo head frame 作为废弃水牛头架离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Discarded buffalo head frame
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废弃水牛角（`slaughter_discarded_horn`）

Discarded buffalo horn 作为废弃水牛角离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Discarded buffalo horn
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废弃水牛蹄（`slaughter_discarded_hoof`）

Discarded buffalo hoof 作为废弃水牛蹄离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Discarded buffalo hoof
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废弃水牛脂肪（`slaughter_discarded_fat`）

Discarded buffalo fat 作为废弃水牛脂肪离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Discarded buffalo fat
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废弃水牛尾（`slaughter_discarded_tail`）

Discarded buffalo tail 作为废弃水牛尾离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Discarded buffalo tail
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛胃内容物（`slaughter_stomach_contents`）

Buffalo stomach contents 作为水牛胃内容物离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo stomach contents
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛肠内容物（`slaughter_intestinal_contents`）

Buffalo intestinal contents 作为水牛肠内容物离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo intestinal contents
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 判废水牛胴体（`slaughter_condemned_carcass`）

Condemned buffalo carcass 作为判废水牛胴体离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Condemned buffalo carcass
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 高负荷屠宰废水（`slaughter_high_load_wastewater`）

High-organic-load buffalo slaughter wastewater 作为高负荷屠宰废水离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：High-organic-load buffalo slaughter wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_wastewater`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 基本流

###### 屠宰化石二氧化碳释放（`slaughter_fossil_co2_air`）

Carbon dioxide, fossil, to air 作为屠宰化石二氧化碳释放离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据匹配的阶段燃料记录与有记录的场址因子或直接烟道测量计算这一单项空气污染物；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 屠宰氮氧化物释放（`slaughter_nox_air`）

Nitrogen oxides, to air 作为屠宰氮氧化物释放离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据匹配的阶段燃料记录与有记录的场址因子或直接烟道测量计算这一单项空气污染物；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 屠宰硫氧化物释放（`slaughter_sox_air`）

Sulfur oxides, to air 作为屠宰硫氧化物释放离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：硫氧化物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据匹配的阶段燃料记录与有记录的场址因子或直接烟道测量计算这一单项空气污染物；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 屠宰细颗粒物释放（`slaughter_pm25_air`）

Particulate matter, < 2.5 µm, to air 作为屠宰细颗粒物释放离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Particulate matter, < 2.5 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：根据匹配的阶段燃料记录与有记录的场址因子或直接烟道测量计算这一单项空气污染物；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 屠宰粗颗粒物释放（`slaughter_pm_coarse_air`）

Particulate matter, 2.5-10 µm, to air 作为屠宰粗颗粒物释放离开“屠宰、放血与器官回收”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：颗粒物（2.5–10微米），排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据匹配的阶段燃料记录与有记录的场址因子或直接烟道测量计算这一单项空气污染物；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

### 过程：内脏分离、修整与清洗（`offal_separation_trimming_and_washing`）

#### 输入

##### 产品流

###### 水牛肝原料投入（`prep_raw_liver`）

Buffalo liver, raw 作为水牛肝原料投入进入“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo liver, raw
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛心原料投入（`prep_raw_heart`）

Buffalo heart, raw 作为水牛心原料投入进入“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo heart, raw
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛肾原料投入（`prep_raw_kidney`）

Buffalo kidney, raw 作为水牛肾原料投入进入“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo kidney, raw
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛舌原料投入（`prep_raw_tongue`）

Buffalo tongue, raw 作为水牛舌原料投入进入“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo tongue, raw
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛脑原料投入（`prep_raw_brain`）

Buffalo brain, raw 作为水牛脑原料投入进入“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo brain, raw
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛肚原料投入（`prep_raw_tripe`）

Buffalo tripe, raw 作为水牛肚原料投入进入“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo tripe, raw
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛小肠原料投入（`prep_raw_small_intestine`）

Buffalo small intestine, raw 作为水牛小肠原料投入进入“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo small intestine, raw
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛大肠原料投入（`prep_raw_large_intestine`）

Buffalo large intestine, raw 作为水牛大肠原料投入进入“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo large intestine, raw
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛肺原料投入（`prep_raw_lung`）

Buffalo lung, raw 作为水牛肺原料投入进入“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo lung, raw
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛脾原料投入（`prep_raw_spleen`）

Buffalo spleen, raw 作为水牛脾原料投入进入“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo spleen, raw
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 内脏清洗工艺水（`prep_process_water`）

Process water 作为内脏清洗工艺水进入“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：从专用校准水表读取该项用水；若使用共享水表，须根据经核对总量记录因果分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 内脏整理电力（`prep_electricity`）

Electricity, medium voltage 作为内脏整理电力进入“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：从分表读取该已命名阶段的电力；共享电表须按有记录的运行时间、负荷或吞吐量驱动因素分配并核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 外购内脏整理蒸汽（`prep_purchased_steam`）

Steam, purchased 作为外购内脏整理蒸汽进入“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：根据热量表或供应商记录采集跨越场址边界的外购蒸汽，不得重复计入已由燃料表示的场内产热。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 外购内脏整理热水（`prep_purchased_hot_water`）

Hot water, purchased 作为外购内脏整理热水进入“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：外购热水
- 流属性/单位：Energy / MJ
- 数量规则：根据实测流量和温度或供应商热量表采集外购热水热量，不得重复计入已由燃料表示的场内产热。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 内脏整理天然气（`prep_natural_gas`）

Natural gas 作为内脏整理天然气进入“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：天然气
- 流属性/单位：Volume / m3
- 数量规则：根据校准燃气表或经核对的发票分配采集该阶段天然气消耗量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 内脏整理柴油（`prep_diesel`）

Diesel fuel 作为内脏整理柴油进入“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：柴油燃料
- 流属性/单位：Mass / kg
- 数量规则：根据储罐、采购和期末库存记录核对该阶段柴油领用量；需要时使用有记录的密度换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 内脏整理液化石油气（`prep_lpg`）

Liquefied petroleum gas 作为内脏整理液化石油气进入“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：液化石油气
- 流属性/单位：Mass / kg
- 数量规则：根据该阶段钢瓶或储罐领用、采购、退回和库存记录核对液化石油气使用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 清洁水牛肝产出（`prep_cleaned_liver`）

Buffalo liver, cleaned 作为清洁水牛肝产出离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo liver, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 清洁水牛心产出（`prep_cleaned_heart`）

Buffalo heart, cleaned 作为清洁水牛心产出离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo heart, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 清洁水牛肾产出（`prep_cleaned_kidney`）

Buffalo kidney, cleaned 作为清洁水牛肾产出离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo kidney, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 清洁水牛舌产出（`prep_cleaned_tongue`）

Buffalo tongue, cleaned 作为清洁水牛舌产出离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo tongue, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 清洁水牛脑产出（`prep_cleaned_brain`）

Buffalo brain, cleaned 作为清洁水牛脑产出离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo brain, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 清洁水牛肚产出（`prep_cleaned_tripe`）

Buffalo tripe, cleaned 作为清洁水牛肚产出离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo tripe, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 清洁水牛小肠产出（`prep_cleaned_small_intestine`）

Buffalo small intestine, cleaned 作为清洁水牛小肠产出离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo small intestine, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 清洁水牛大肠产出（`prep_cleaned_large_intestine`）

Buffalo large intestine, cleaned 作为清洁水牛大肠产出离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo large intestine, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 清洁水牛肺产出（`prep_cleaned_lung`）

Buffalo lung, cleaned 作为清洁水牛肺产出离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo lung, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 清洁水牛脾产出（`prep_cleaned_spleen`）

Buffalo spleen, cleaned 作为清洁水牛脾产出离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo spleen, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

###### 水牛肝修整废物（`prep_liver_trimming_waste`）

Buffalo liver trimming waste 作为水牛肝修整废物离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo liver trimming waste
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_solid_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛心修整废物（`prep_heart_trimming_waste`）

Buffalo heart trimming waste 作为水牛心修整废物离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo heart trimming waste
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_solid_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛肾修整废物（`prep_kidney_trimming_waste`）

Buffalo kidney trimming waste 作为水牛肾修整废物离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo kidney trimming waste
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_solid_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛舌修整废物（`prep_tongue_trimming_waste`）

Buffalo tongue trimming waste 作为水牛舌修整废物离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo tongue trimming waste
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_solid_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛脑修整废物（`prep_brain_trimming_waste`）

Buffalo brain trimming waste 作为水牛脑修整废物离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo brain trimming waste
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_solid_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛肚修整废物（`prep_tripe_trimming_waste`）

Buffalo tripe trimming waste 作为水牛肚修整废物离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo tripe trimming waste
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_solid_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛小肠修整废物（`prep_small_intestine_trimming_waste`）

Buffalo small-intestine trimming waste 作为水牛小肠修整废物离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo small-intestine trimming waste
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_solid_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛大肠修整废物（`prep_large_intestine_trimming_waste`）

Buffalo large-intestine trimming waste 作为水牛大肠修整废物离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo large-intestine trimming waste
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_solid_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛肺修整废物（`prep_lung_trimming_waste`）

Buffalo lung trimming waste 作为水牛肺修整废物离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo lung trimming waste
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_solid_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛脾修整废物（`prep_spleen_trimming_waste`）

Buffalo spleen trimming waste 作为水牛脾修整废物离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo spleen trimming waste
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_solid_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛肝清洗废水（`prep_liver_washwater`）

Buffalo liver washwater 作为水牛肝清洗废水离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo liver washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_washwater`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛心清洗废水（`prep_heart_washwater`）

Buffalo heart washwater 作为水牛心清洗废水离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo heart washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_washwater`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛肾清洗废水（`prep_kidney_washwater`）

Buffalo kidney washwater 作为水牛肾清洗废水离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo kidney washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_washwater`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛舌清洗废水（`prep_tongue_washwater`）

Buffalo tongue washwater 作为水牛舌清洗废水离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo tongue washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_washwater`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛脑清洗废水（`prep_brain_washwater`）

Buffalo brain washwater 作为水牛脑清洗废水离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo brain washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_washwater`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛肚清洗废水（`prep_tripe_washwater`）

Buffalo tripe washwater 作为水牛肚清洗废水离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo tripe washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_washwater`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛小肠清洗废水（`prep_small_intestine_washwater`）

Buffalo small-intestine washwater 作为水牛小肠清洗废水离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo small-intestine washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_washwater`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛大肠清洗废水（`prep_large_intestine_washwater`）

Buffalo large-intestine washwater 作为水牛大肠清洗废水离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo large-intestine washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_washwater`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛肺清洗废水（`prep_lung_washwater`）

Buffalo lung washwater 作为水牛肺清洗废水离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo lung washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_washwater`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛脾清洗废水（`prep_spleen_washwater`）

Buffalo spleen washwater 作为水牛脾清洗废水离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo spleen washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_washwater`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 基本流

###### 内脏整理化石二氧化碳释放（`prep_fossil_co2_air`）

Carbon dioxide, fossil, to air 作为内脏整理化石二氧化碳释放离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据匹配的阶段燃料记录与有记录的场址因子或直接烟道测量计算这一单项空气污染物；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_prep_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 内脏整理氮氧化物释放（`prep_nox_air`）

Nitrogen oxides, to air 作为内脏整理氮氧化物释放离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据匹配的阶段燃料记录与有记录的场址因子或直接烟道测量计算这一单项空气污染物；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_prep_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 内脏整理硫氧化物释放（`prep_sox_air`）

Sulfur oxides, to air 作为内脏整理硫氧化物释放离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：硫氧化物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据匹配的阶段燃料记录与有记录的场址因子或直接烟道测量计算这一单项空气污染物；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_prep_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 内脏整理细颗粒物释放（`prep_pm25_air`）

Particulate matter, < 2.5 µm, to air 作为内脏整理细颗粒物释放离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Particulate matter, < 2.5 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：根据匹配的阶段燃料记录与有记录的场址因子或直接烟道测量计算这一单项空气污染物；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_prep_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 内脏整理粗颗粒物释放（`prep_pm_coarse_air`）

Particulate matter, 2.5-10 µm, to air 作为内脏整理粗颗粒物释放离开“内脏分离、修整与清洗”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：颗粒物（2.5–10微米），排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据匹配的阶段燃料记录与有记录的场址因子或直接烟道测量计算这一单项空气污染物；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_prep_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

### 过程：鲜内脏调理（`fresh_offal_conditioning`）

#### 输入

##### 产品流

###### 鲜品路线清洁水牛肝投入（`fresh_cleaned_liver_input`）

Buffalo liver, cleaned 作为鲜品路线清洁水牛肝投入进入“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo liver, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 鲜品路线清洁水牛心投入（`fresh_cleaned_heart_input`）

Buffalo heart, cleaned 作为鲜品路线清洁水牛心投入进入“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo heart, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 鲜品路线清洁水牛肾投入（`fresh_cleaned_kidney_input`）

Buffalo kidney, cleaned 作为鲜品路线清洁水牛肾投入进入“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo kidney, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 鲜品路线清洁水牛舌投入（`fresh_cleaned_tongue_input`）

Buffalo tongue, cleaned 作为鲜品路线清洁水牛舌投入进入“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo tongue, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 鲜品路线清洁水牛脑投入（`fresh_cleaned_brain_input`）

Buffalo brain, cleaned 作为鲜品路线清洁水牛脑投入进入“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo brain, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 鲜品路线清洁水牛肚投入（`fresh_cleaned_tripe_input`）

Buffalo tripe, cleaned 作为鲜品路线清洁水牛肚投入进入“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo tripe, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 鲜品路线清洁水牛小肠投入（`fresh_cleaned_small_intestine_input`）

Buffalo small intestine, cleaned 作为鲜品路线清洁水牛小肠投入进入“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo small intestine, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 鲜品路线清洁水牛大肠投入（`fresh_cleaned_large_intestine_input`）

Buffalo large intestine, cleaned 作为鲜品路线清洁水牛大肠投入进入“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo large intestine, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 鲜品路线清洁水牛肺投入（`fresh_cleaned_lung_input`）

Buffalo lung, cleaned 作为鲜品路线清洁水牛肺投入进入“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo lung, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 鲜品路线清洁水牛脾投入（`fresh_cleaned_spleen_input`）

Buffalo spleen, cleaned 作为鲜品路线清洁水牛脾投入进入“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo spleen, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 鲜品路线操作电力（`fresh_handling_electricity`）

Electricity, medium voltage 作为鲜品路线操作电力进入“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：从分表读取该已命名阶段的电力；共享电表须按有记录的运行时间、负荷或吞吐量驱动因素分配并核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 鲜水牛肝产出（`fresh_liver_output`）

Fresh buffalo liver 作为鲜水牛肝产出离开“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Fresh buffalo liver
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 鲜水牛心产出（`fresh_heart_output`）

Fresh buffalo heart 作为鲜水牛心产出离开“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Fresh buffalo heart
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 鲜水牛肾产出（`fresh_kidney_output`）

Fresh buffalo kidney 作为鲜水牛肾产出离开“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Fresh buffalo kidney
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 鲜水牛舌产出（`fresh_tongue_output`）

Fresh buffalo tongue 作为鲜水牛舌产出离开“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Fresh buffalo tongue
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 鲜水牛脑产出（`fresh_brain_output`）

Fresh buffalo brain 作为鲜水牛脑产出离开“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Fresh buffalo brain
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 鲜水牛肚产出（`fresh_tripe_output`）

Fresh buffalo tripe 作为鲜水牛肚产出离开“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Fresh buffalo tripe
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 鲜水牛小肠产出（`fresh_small_intestine_output`）

Fresh buffalo small intestine 作为鲜水牛小肠产出离开“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Fresh buffalo small intestine
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 鲜水牛大肠产出（`fresh_large_intestine_output`）

Fresh buffalo large intestine 作为鲜水牛大肠产出离开“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Fresh buffalo large intestine
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 鲜水牛肺产出（`fresh_lung_output`）

Fresh buffalo lung 作为鲜水牛肺产出离开“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Fresh buffalo lung
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 鲜水牛脾产出（`fresh_spleen_output`）

Fresh buffalo spleen 作为鲜水牛脾产出离开“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Fresh buffalo spleen
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

###### 不合格鲜水牛肝（`fresh_liver_reject`）

Rejected fresh buffalo liver 作为不合格鲜水牛肝离开“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected fresh buffalo liver
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_rejects`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格鲜水牛心（`fresh_heart_reject`）

Rejected fresh buffalo heart 作为不合格鲜水牛心离开“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected fresh buffalo heart
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_rejects`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格鲜水牛肾（`fresh_kidney_reject`）

Rejected fresh buffalo kidney 作为不合格鲜水牛肾离开“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected fresh buffalo kidney
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_rejects`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格鲜水牛舌（`fresh_tongue_reject`）

Rejected fresh buffalo tongue 作为不合格鲜水牛舌离开“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected fresh buffalo tongue
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_rejects`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格鲜水牛脑（`fresh_brain_reject`）

Rejected fresh buffalo brain 作为不合格鲜水牛脑离开“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected fresh buffalo brain
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_rejects`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格鲜水牛肚（`fresh_tripe_reject`）

Rejected fresh buffalo tripe 作为不合格鲜水牛肚离开“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected fresh buffalo tripe
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_rejects`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格鲜水牛小肠（`fresh_small_intestine_reject`）

Rejected fresh buffalo small intestine 作为不合格鲜水牛小肠离开“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected fresh buffalo small intestine
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_rejects`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格鲜水牛大肠（`fresh_large_intestine_reject`）

Rejected fresh buffalo large intestine 作为不合格鲜水牛大肠离开“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected fresh buffalo large intestine
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_rejects`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格鲜水牛肺（`fresh_lung_reject`）

Rejected fresh buffalo lung 作为不合格鲜水牛肺离开“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected fresh buffalo lung
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_rejects`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格鲜水牛脾（`fresh_spleen_reject`）

Rejected fresh buffalo spleen 作为不合格鲜水牛脾离开“鲜内脏调理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected fresh buffalo spleen
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_rejects`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 基本流

### 过程：冷却与冷藏（`chilling_and_chilled_storage`）

#### 输入

##### 产品流

###### 冷藏路线清洁水牛肝投入（`chill_cleaned_liver_input`）

Buffalo liver, cleaned 作为冷藏路线清洁水牛肝投入进入“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo liver, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏路线清洁水牛心投入（`chill_cleaned_heart_input`）

Buffalo heart, cleaned 作为冷藏路线清洁水牛心投入进入“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo heart, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏路线清洁水牛肾投入（`chill_cleaned_kidney_input`）

Buffalo kidney, cleaned 作为冷藏路线清洁水牛肾投入进入“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo kidney, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏路线清洁水牛舌投入（`chill_cleaned_tongue_input`）

Buffalo tongue, cleaned 作为冷藏路线清洁水牛舌投入进入“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo tongue, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏路线清洁水牛脑投入（`chill_cleaned_brain_input`）

Buffalo brain, cleaned 作为冷藏路线清洁水牛脑投入进入“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo brain, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏路线清洁水牛肚投入（`chill_cleaned_tripe_input`）

Buffalo tripe, cleaned 作为冷藏路线清洁水牛肚投入进入“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo tripe, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏路线清洁水牛小肠投入（`chill_cleaned_small_intestine_input`）

Buffalo small intestine, cleaned 作为冷藏路线清洁水牛小肠投入进入“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo small intestine, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏路线清洁水牛大肠投入（`chill_cleaned_large_intestine_input`）

Buffalo large intestine, cleaned 作为冷藏路线清洁水牛大肠投入进入“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo large intestine, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏路线清洁水牛肺投入（`chill_cleaned_lung_input`）

Buffalo lung, cleaned 作为冷藏路线清洁水牛肺投入进入“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo lung, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏路线清洁水牛脾投入（`chill_cleaned_spleen_input`）

Buffalo spleen, cleaned 作为冷藏路线清洁水牛脾投入进入“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo spleen, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷却工艺水（`chill_process_water`）

Process water 作为冷却工艺水进入“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：从专用校准水表读取该项用水；若使用共享水表，须根据经核对总量记录因果分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷却用冰（`chill_ice`）

Ice 作为冷却用冰进入“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Ice
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷却电力（`chill_electricity`）

Electricity, medium voltage 作为冷却电力进入“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：从分表读取该已命名阶段的电力；共享电表须按有记录的运行时间、负荷或吞吐量驱动因素分配并核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### R-717 制冷剂补充（`chill_r717_makeup`）

Ammonia refrigerant R-717 作为R-717 制冷剂补充进入“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Ammonia refrigerant R-717
- 流属性/单位：Mass / kg
- 数量规则：根据钢瓶称量测量该制冷剂物质的补充量，并核对采购、回收、转移、库存和维修记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_refrigerants`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### R-134a 制冷剂补充（`chill_r134a_makeup`）

1,1,1,2-Tetrafluoroethane refrigerant R-134a 作为R-134a 制冷剂补充进入“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：1,1,1,2-Tetrafluoroethane refrigerant R-134a
- 流属性/单位：Mass / kg
- 数量规则：根据钢瓶称量测量该制冷剂物质的补充量，并核对采购、回收、转移、库存和维修记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_refrigerants`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### R-744 制冷剂补充（`chill_r744_makeup`）

Carbon dioxide refrigerant R-744 作为R-744 制冷剂补充进入“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Carbon dioxide refrigerant R-744
- 流属性/单位：Mass / kg
- 数量规则：根据钢瓶称量测量该制冷剂物质的补充量，并核对采购、回收、转移、库存和维修记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_refrigerants`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷藏水牛肝产出（`chill_liver_output`）

Chilled buffalo liver 作为冷藏水牛肝产出离开“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Chilled buffalo liver
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏水牛心产出（`chill_heart_output`）

Chilled buffalo heart 作为冷藏水牛心产出离开“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Chilled buffalo heart
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏水牛肾产出（`chill_kidney_output`）

Chilled buffalo kidney 作为冷藏水牛肾产出离开“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Chilled buffalo kidney
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏水牛舌产出（`chill_tongue_output`）

Chilled buffalo tongue 作为冷藏水牛舌产出离开“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Chilled buffalo tongue
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏水牛脑产出（`chill_brain_output`）

Chilled buffalo brain 作为冷藏水牛脑产出离开“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Chilled buffalo brain
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏水牛肚产出（`chill_tripe_output`）

Chilled buffalo tripe 作为冷藏水牛肚产出离开“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Chilled buffalo tripe
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏水牛小肠产出（`chill_small_intestine_output`）

Chilled buffalo small intestine 作为冷藏水牛小肠产出离开“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Chilled buffalo small intestine
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏水牛大肠产出（`chill_large_intestine_output`）

Chilled buffalo large intestine 作为冷藏水牛大肠产出离开“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Chilled buffalo large intestine
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏水牛肺产出（`chill_lung_output`）

Chilled buffalo lung 作为冷藏水牛肺产出离开“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Chilled buffalo lung
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏水牛脾产出（`chill_spleen_output`）

Chilled buffalo spleen 作为冷藏水牛脾产出离开“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Chilled buffalo spleen
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

###### 不合格冷藏水牛肝（`chill_liver_reject`）

Rejected chilled buffalo liver 作为不合格冷藏水牛肝离开“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected chilled buffalo liver
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格冷藏水牛心（`chill_heart_reject`）

Rejected chilled buffalo heart 作为不合格冷藏水牛心离开“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected chilled buffalo heart
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格冷藏水牛肾（`chill_kidney_reject`）

Rejected chilled buffalo kidney 作为不合格冷藏水牛肾离开“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected chilled buffalo kidney
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格冷藏水牛舌（`chill_tongue_reject`）

Rejected chilled buffalo tongue 作为不合格冷藏水牛舌离开“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected chilled buffalo tongue
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格冷藏水牛脑（`chill_brain_reject`）

Rejected chilled buffalo brain 作为不合格冷藏水牛脑离开“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected chilled buffalo brain
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格冷藏水牛肚（`chill_tripe_reject`）

Rejected chilled buffalo tripe 作为不合格冷藏水牛肚离开“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected chilled buffalo tripe
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格冷藏水牛小肠（`chill_small_intestine_reject`）

Rejected chilled buffalo small intestine 作为不合格冷藏水牛小肠离开“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected chilled buffalo small intestine
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格冷藏水牛大肠（`chill_large_intestine_reject`）

Rejected chilled buffalo large intestine 作为不合格冷藏水牛大肠离开“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected chilled buffalo large intestine
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格冷藏水牛肺（`chill_lung_reject`）

Rejected chilled buffalo lung 作为不合格冷藏水牛肺离开“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected chilled buffalo lung
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格冷藏水牛脾（`chill_spleen_reject`）

Rejected chilled buffalo spleen 作为不合格冷藏水牛脾离开“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected chilled buffalo spleen
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷却废水（`chill_process_wastewater`）

Buffalo-offal chilling wastewater 作为冷却废水离开“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo-offal chilling wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏库融霜废水（`chill_defrost_wastewater`）

Chilled-storage defrost wastewater 作为冷藏库融霜废水离开“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Chilled-storage defrost wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废冷却压缩机油（`chill_compressor_oil`）

Waste refrigeration compressor oil 作为废冷却压缩机油离开“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Waste refrigeration compressor oil
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 基本流

###### R-717 氨释放（`chill_ammonia_air`）

Ammonia, to air 作为R-717 氨释放离开“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：氨，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据物质特定库存平衡并结合回收和维修记录，计算这一种制冷剂物质的损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_chill_refrigerants`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### R-134a 释放（`chill_r134a_air`）

1,1,1,2-Tetrafluoroethane, to air 作为R-134a 释放离开“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：1,1,1,2-四氟乙烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据物质特定库存平衡并结合回收和维修记录，计算这一种制冷剂物质的损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_chill_refrigerants`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 化石来源 R-744 二氧化碳释放（`chill_r744_fossil_air`）

Carbon dioxide, fossil, to air 作为化石来源 R-744 二氧化碳释放离开“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据物质特定库存平衡并结合回收和维修记录，计算这一种制冷剂物质的损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_chill_refrigerants`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 生物源 R-744 二氧化碳释放（`chill_r744_biogenic_air`）

Carbon dioxide, biogenic, to air 作为生物源 R-744 二氧化碳释放离开“冷却与冷藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：生物源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据物质特定库存平衡并结合回收和维修记录，计算这一种制冷剂物质的损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_chill_refrigerants`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

### 过程：冻结与冻藏（`freezing_and_frozen_storage`）

#### 输入

##### 产品流

###### 冷冻路线清洁水牛肝投入（`freeze_cleaned_liver_input`）

Buffalo liver, cleaned 作为冷冻路线清洁水牛肝投入进入“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo liver, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻路线清洁水牛心投入（`freeze_cleaned_heart_input`）

Buffalo heart, cleaned 作为冷冻路线清洁水牛心投入进入“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo heart, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻路线清洁水牛肾投入（`freeze_cleaned_kidney_input`）

Buffalo kidney, cleaned 作为冷冻路线清洁水牛肾投入进入“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo kidney, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻路线清洁水牛舌投入（`freeze_cleaned_tongue_input`）

Buffalo tongue, cleaned 作为冷冻路线清洁水牛舌投入进入“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo tongue, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻路线清洁水牛脑投入（`freeze_cleaned_brain_input`）

Buffalo brain, cleaned 作为冷冻路线清洁水牛脑投入进入“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo brain, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻路线清洁水牛肚投入（`freeze_cleaned_tripe_input`）

Buffalo tripe, cleaned 作为冷冻路线清洁水牛肚投入进入“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo tripe, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻路线清洁水牛小肠投入（`freeze_cleaned_small_intestine_input`）

Buffalo small intestine, cleaned 作为冷冻路线清洁水牛小肠投入进入“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo small intestine, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻路线清洁水牛大肠投入（`freeze_cleaned_large_intestine_input`）

Buffalo large intestine, cleaned 作为冷冻路线清洁水牛大肠投入进入“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo large intestine, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻路线清洁水牛肺投入（`freeze_cleaned_lung_input`）

Buffalo lung, cleaned 作为冷冻路线清洁水牛肺投入进入“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo lung, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻路线清洁水牛脾投入（`freeze_cleaned_spleen_input`）

Buffalo spleen, cleaned 作为冷冻路线清洁水牛脾投入进入“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo spleen, cleaned
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻挂冰用水（`freeze_glazing_water`）

Process water 作为冷冻挂冰用水进入“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：从专用校准水表读取该项用水；若使用共享水表，须根据经核对总量记录因果分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冻结电力（`freeze_electricity`）

Electricity, medium voltage 作为冻结电力进入“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：从分表读取该已命名阶段的电力；共享电表须按有记录的运行时间、负荷或吞吐量驱动因素分配并核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### R-717 制冷剂补充（`freeze_r717_makeup`）

Ammonia refrigerant R-717 作为R-717 制冷剂补充进入“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Ammonia refrigerant R-717
- 流属性/单位：Mass / kg
- 数量规则：根据钢瓶称量测量该制冷剂物质的补充量，并核对采购、回收、转移、库存和维修记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_refrigerants`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### R-134a 制冷剂补充（`freeze_r134a_makeup`）

1,1,1,2-Tetrafluoroethane refrigerant R-134a 作为R-134a 制冷剂补充进入“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：1,1,1,2-Tetrafluoroethane refrigerant R-134a
- 流属性/单位：Mass / kg
- 数量规则：根据钢瓶称量测量该制冷剂物质的补充量，并核对采购、回收、转移、库存和维修记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_refrigerants`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### R-744 制冷剂补充（`freeze_r744_makeup`）

Carbon dioxide refrigerant R-744 作为R-744 制冷剂补充进入“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Carbon dioxide refrigerant R-744
- 流属性/单位：Mass / kg
- 数量规则：根据钢瓶称量测量该制冷剂物质的补充量，并核对采购、回收、转移、库存和维修记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_refrigerants`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷冻水牛肝产出（`freeze_liver_output`）

Frozen buffalo liver 作为冷冻水牛肝产出离开“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Frozen buffalo liver
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻水牛心产出（`freeze_heart_output`）

Frozen buffalo heart 作为冷冻水牛心产出离开“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Frozen buffalo heart
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻水牛肾产出（`freeze_kidney_output`）

Frozen buffalo kidney 作为冷冻水牛肾产出离开“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Frozen buffalo kidney
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻水牛舌产出（`freeze_tongue_output`）

Frozen buffalo tongue 作为冷冻水牛舌产出离开“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Frozen buffalo tongue
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻水牛脑产出（`freeze_brain_output`）

Frozen buffalo brain 作为冷冻水牛脑产出离开“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Frozen buffalo brain
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻水牛肚产出（`freeze_tripe_output`）

Frozen buffalo tripe 作为冷冻水牛肚产出离开“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Frozen buffalo tripe
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻水牛小肠产出（`freeze_small_intestine_output`）

Frozen buffalo small intestine 作为冷冻水牛小肠产出离开“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Frozen buffalo small intestine
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻水牛大肠产出（`freeze_large_intestine_output`）

Frozen buffalo large intestine 作为冷冻水牛大肠产出离开“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Frozen buffalo large intestine
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻水牛肺产出（`freeze_lung_output`）

Frozen buffalo lung 作为冷冻水牛肺产出离开“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Frozen buffalo lung
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻水牛脾产出（`freeze_spleen_output`）

Frozen buffalo spleen 作为冷冻水牛脾产出离开“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Frozen buffalo spleen
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

###### 不合格冷冻水牛肝（`freeze_liver_reject`）

Rejected frozen buffalo liver 作为不合格冷冻水牛肝离开“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected frozen buffalo liver
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格冷冻水牛心（`freeze_heart_reject`）

Rejected frozen buffalo heart 作为不合格冷冻水牛心离开“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected frozen buffalo heart
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格冷冻水牛肾（`freeze_kidney_reject`）

Rejected frozen buffalo kidney 作为不合格冷冻水牛肾离开“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected frozen buffalo kidney
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格冷冻水牛舌（`freeze_tongue_reject`）

Rejected frozen buffalo tongue 作为不合格冷冻水牛舌离开“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected frozen buffalo tongue
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格冷冻水牛脑（`freeze_brain_reject`）

Rejected frozen buffalo brain 作为不合格冷冻水牛脑离开“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected frozen buffalo brain
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格冷冻水牛肚（`freeze_tripe_reject`）

Rejected frozen buffalo tripe 作为不合格冷冻水牛肚离开“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected frozen buffalo tripe
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格冷冻水牛小肠（`freeze_small_intestine_reject`）

Rejected frozen buffalo small intestine 作为不合格冷冻水牛小肠离开“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected frozen buffalo small intestine
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格冷冻水牛大肠（`freeze_large_intestine_reject`）

Rejected frozen buffalo large intestine 作为不合格冷冻水牛大肠离开“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected frozen buffalo large intestine
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格冷冻水牛肺（`freeze_lung_reject`）

Rejected frozen buffalo lung 作为不合格冷冻水牛肺离开“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected frozen buffalo lung
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格冷冻水牛脾（`freeze_spleen_reject`）

Rejected frozen buffalo spleen 作为不合格冷冻水牛脾离开“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Rejected frozen buffalo spleen
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 挂冰废水（`freeze_glaze_wastewater`）

Buffalo-offal glazing wastewater 作为挂冰废水离开“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo-offal glazing wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冻藏库融霜废水（`freeze_defrost_wastewater`）

Frozen-storage defrost wastewater 作为冻藏库融霜废水离开“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Frozen-storage defrost wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废冻结压缩机油（`freeze_compressor_oil`）

Waste refrigeration compressor oil 作为废冻结压缩机油离开“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Waste refrigeration compressor oil
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freeze_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 基本流

###### R-717 氨释放（`freeze_ammonia_air`）

Ammonia, to air 作为R-717 氨释放离开“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：氨，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据物质特定库存平衡并结合回收和维修记录，计算这一种制冷剂物质的损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_freeze_refrigerants`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### R-134a 释放（`freeze_r134a_air`）

1,1,1,2-Tetrafluoroethane, to air 作为R-134a 释放离开“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：1,1,1,2-四氟乙烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据物质特定库存平衡并结合回收和维修记录，计算这一种制冷剂物质的损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_freeze_refrigerants`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 化石来源 R-744 二氧化碳释放（`freeze_r744_fossil_air`）

Carbon dioxide, fossil, to air 作为化石来源 R-744 二氧化碳释放离开“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据物质特定库存平衡并结合回收和维修记录，计算这一种制冷剂物质的损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_freeze_refrigerants`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 生物源 R-744 二氧化碳释放（`freeze_r744_biogenic_air`）

Carbon dioxide, biogenic, to air 作为生物源 R-744 二氧化碳释放离开“冻结与冻藏”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：生物源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据物质特定库存平衡并结合回收和维修记录，计算这一种制冷剂物质的损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_freeze_refrigerants`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

### 过程：包装与产品放行（`packaging_and_release`）

#### 输入

##### 产品流

###### 鲜水牛肝包装投入（`pack_fresh_liver_input`）

Fresh buffalo liver 作为鲜水牛肝包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Fresh buffalo liver
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 鲜水牛心包装投入（`pack_fresh_heart_input`）

Fresh buffalo heart 作为鲜水牛心包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Fresh buffalo heart
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 鲜水牛肾包装投入（`pack_fresh_kidney_input`）

Fresh buffalo kidney 作为鲜水牛肾包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Fresh buffalo kidney
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 鲜水牛舌包装投入（`pack_fresh_tongue_input`）

Fresh buffalo tongue 作为鲜水牛舌包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Fresh buffalo tongue
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 鲜水牛脑包装投入（`pack_fresh_brain_input`）

Fresh buffalo brain 作为鲜水牛脑包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Fresh buffalo brain
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 鲜水牛肚包装投入（`pack_fresh_tripe_input`）

Fresh buffalo tripe 作为鲜水牛肚包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Fresh buffalo tripe
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 鲜水牛小肠包装投入（`pack_fresh_small_intestine_input`）

Fresh buffalo small intestine 作为鲜水牛小肠包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Fresh buffalo small intestine
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 鲜水牛大肠包装投入（`pack_fresh_large_intestine_input`）

Fresh buffalo large intestine 作为鲜水牛大肠包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Fresh buffalo large intestine
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 鲜水牛肺包装投入（`pack_fresh_lung_input`）

Fresh buffalo lung 作为鲜水牛肺包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Fresh buffalo lung
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 鲜水牛脾包装投入（`pack_fresh_spleen_input`）

Fresh buffalo spleen 作为鲜水牛脾包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Fresh buffalo spleen
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏水牛肝包装投入（`pack_chilled_liver_input`）

Chilled buffalo liver 作为冷藏水牛肝包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Chilled buffalo liver
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏水牛心包装投入（`pack_chilled_heart_input`）

Chilled buffalo heart 作为冷藏水牛心包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Chilled buffalo heart
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏水牛肾包装投入（`pack_chilled_kidney_input`）

Chilled buffalo kidney 作为冷藏水牛肾包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Chilled buffalo kidney
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏水牛舌包装投入（`pack_chilled_tongue_input`）

Chilled buffalo tongue 作为冷藏水牛舌包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Chilled buffalo tongue
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏水牛脑包装投入（`pack_chilled_brain_input`）

Chilled buffalo brain 作为冷藏水牛脑包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Chilled buffalo brain
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏水牛肚包装投入（`pack_chilled_tripe_input`）

Chilled buffalo tripe 作为冷藏水牛肚包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Chilled buffalo tripe
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏水牛小肠包装投入（`pack_chilled_small_intestine_input`）

Chilled buffalo small intestine 作为冷藏水牛小肠包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Chilled buffalo small intestine
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏水牛大肠包装投入（`pack_chilled_large_intestine_input`）

Chilled buffalo large intestine 作为冷藏水牛大肠包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Chilled buffalo large intestine
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏水牛肺包装投入（`pack_chilled_lung_input`）

Chilled buffalo lung 作为冷藏水牛肺包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Chilled buffalo lung
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏水牛脾包装投入（`pack_chilled_spleen_input`）

Chilled buffalo spleen 作为冷藏水牛脾包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Chilled buffalo spleen
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻水牛肝包装投入（`pack_frozen_liver_input`）

Frozen buffalo liver 作为冷冻水牛肝包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Frozen buffalo liver
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻水牛心包装投入（`pack_frozen_heart_input`）

Frozen buffalo heart 作为冷冻水牛心包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Frozen buffalo heart
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻水牛肾包装投入（`pack_frozen_kidney_input`）

Frozen buffalo kidney 作为冷冻水牛肾包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Frozen buffalo kidney
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻水牛舌包装投入（`pack_frozen_tongue_input`）

Frozen buffalo tongue 作为冷冻水牛舌包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Frozen buffalo tongue
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻水牛脑包装投入（`pack_frozen_brain_input`）

Frozen buffalo brain 作为冷冻水牛脑包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Frozen buffalo brain
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻水牛肚包装投入（`pack_frozen_tripe_input`）

Frozen buffalo tripe 作为冷冻水牛肚包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Frozen buffalo tripe
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻水牛小肠包装投入（`pack_frozen_small_intestine_input`）

Frozen buffalo small intestine 作为冷冻水牛小肠包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Frozen buffalo small intestine
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻水牛大肠包装投入（`pack_frozen_large_intestine_input`）

Frozen buffalo large intestine 作为冷冻水牛大肠包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Frozen buffalo large intestine
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻水牛肺包装投入（`pack_frozen_lung_input`）

Frozen buffalo lung 作为冷冻水牛肺包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Frozen buffalo lung
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻水牛脾包装投入（`pack_frozen_spleen_input`）

Frozen buffalo spleen 作为冷冻水牛脾包装投入进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Frozen buffalo spleen
- 流属性/单位：Mass / kg
- 数量规则：在校准秤上测量净转移质量，并将结果关联到器官特定批次记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_organ_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 包装线电力（`packaging_electricity`）

Electricity, medium voltage 作为包装线电力进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：从分表读取该已命名阶段的电力；共享电表须按有记录的运行时间、负荷或吞吐量驱动因素分配并核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_energy`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 线性低密度聚乙烯薄膜（`pack_lldpe_film`）

Linear low-density polyethylene film 作为线性低密度聚乙烯薄膜进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Linear low-density polyethylene film
- 流属性/单位：Mass / kg
- 数量规则：根据领用和库存记录测量这一单一包装组件净消耗量；可重复使用物品按实际损耗或补充量计。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 高密度聚乙烯内衬（`pack_hdpe_liner`）

High-density polyethylene liner 作为高密度聚乙烯内衬进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：High-density polyethylene liner
- 流属性/单位：Mass / kg
- 数量规则：根据领用和库存记录测量这一单一包装组件净消耗量；可重复使用物品按实际损耗或补充量计。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 聚酰胺薄膜（`pack_polyamide_film`）

Polyamide film 作为聚酰胺薄膜进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Polyamide film
- 流属性/单位：Mass / kg
- 数量规则：根据领用和库存记录测量这一单一包装组件净消耗量；可重复使用物品按实际损耗或补充量计。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 聚丙烯托盘（`pack_polypropylene_tray`）

Polypropylene tray 作为聚丙烯托盘进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Polypropylene tray
- 流属性/单位：Mass / kg
- 数量规则：根据领用和库存记录测量这一单一包装组件净消耗量；可重复使用物品按实际损耗或补充量计。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 发泡聚苯乙烯托盘（`pack_eps_tray`）

Expanded polystyrene tray 作为发泡聚苯乙烯托盘进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Expanded polystyrene tray
- 流属性/单位：Mass / kg
- 数量规则：根据领用和库存记录测量这一单一包装组件净消耗量；可重复使用物品按实际损耗或补充量计。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 纤维素吸水垫（`pack_cellulose_pad`）

Cellulose absorbent pad 作为纤维素吸水垫进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Cellulose absorbent pad
- 流属性/单位：Mass / kg
- 数量规则：根据领用和库存记录测量这一单一包装组件净消耗量；可重复使用物品按实际损耗或补充量计。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 纸标签（`pack_paper_label`）

Paper label 作为纸标签进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：纸质标签
- 流属性/单位：Mass / kg
- 数量规则：根据领用和库存记录测量这一单一包装组件净消耗量；可重复使用物品按实际损耗或补充量计。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 瓦楞纸箱（`pack_corrugated_box`）

Corrugated fibreboard box 作为瓦楞纸箱进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：瓦楞纸箱
- 流属性/单位：Mass / kg
- 数量规则：根据领用和库存记录测量这一单一包装组件净消耗量；可重复使用物品按实际损耗或补充量计。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 聚丙烯捆扎带（`pack_polypropylene_strap`）

Polypropylene strap 作为聚丙烯捆扎带进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Polypropylene strap
- 流属性/单位：Mass / kg
- 数量规则：根据领用和库存记录测量这一单一包装组件净消耗量；可重复使用物品按实际损耗或补充量计。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 可重复使用高密度聚乙烯周转箱（`pack_reusable_hdpe_crate`）

High-density polyethylene reusable crate 作为可重复使用高密度聚乙烯周转箱进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：High-density polyethylene reusable crate
- 流属性/单位：Mass / kg
- 数量规则：根据领用和库存记录测量这一单一包装组件净消耗量；可重复使用物品按实际损耗或补充量计。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 木托盘（`pack_wooden_pallet`）

Wooden pallet 作为木托盘进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：木托盘
- 流属性/单位：Mass / kg
- 数量规则：根据领用和库存记录测量这一单一包装组件净消耗量；可重复使用物品按实际损耗或补充量计。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 包装用氮气（`pack_nitrogen_gas`）

Nitrogen gas 作为包装用氮气进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Nitrogen gas
- 流属性/单位：Mass / kg
- 数量规则：根据浓度、投加、采购、退回、期初库存和期末库存记录核对该化学品净使用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_gases`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 包装用二氧化碳气体（`pack_carbon_dioxide_gas`）

Carbon dioxide gas 作为包装用二氧化碳气体进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Carbon dioxide gas
- 流属性/单位：Mass / kg
- 数量规则：根据浓度、投加、采购、退回、期初库存和期末库存记录核对该化学品净使用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_gases`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 干冰冷却介质（`pack_dry_ice`）

Carbon dioxide, solid 作为干冰冷却介质进入“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Carbon dioxide, solid
- 流属性/单位：Mass / kg
- 数量规则：根据浓度、投加、采购、退回、期初库存和期末库存记录核对该化学品净使用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_gases`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格水牛可食用内脏参考产出（`reference_edible_buffalo_offal`）

Edible offal of buffalo, fresh, chilled or frozen 是唯一参考流。其固定 1 kg 净产出须声明恰好一个器官身份和一个市场状态，包装质量不计入。

- 选定流：新鲜、冷藏或冷冻的水牛食用内脏 `ed9e2fcf-3bf3-4b09-a893-dc5250a65f5c`
- 流属性/单位：Mass / kg
- 数量规则：将参考产出固定为恰好 1 kg 处于声明鲜、冷藏或冷冻状态的净合格水牛可食用内脏；包装质量不计入。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`unsd-cpc-3-21152`; `eu-pef-2021-2279`

##### 废物流

###### 废线性低密度聚乙烯薄膜（`pack_waste_lldpe_film`）

Waste linear low-density polyethylene film 作为废线性低密度聚乙烯薄膜离开“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Waste linear low-density polyethylene film
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废高密度聚乙烯内衬（`pack_waste_hdpe_liner`）

Waste high-density polyethylene liner 作为废高密度聚乙烯内衬离开“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Waste high-density polyethylene liner
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废聚酰胺薄膜（`pack_waste_polyamide_film`）

Waste polyamide film 作为废聚酰胺薄膜离开“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Waste polyamide film
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废聚丙烯托盘（`pack_waste_polypropylene_tray`）

Waste polypropylene tray 作为废聚丙烯托盘离开“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Waste polypropylene tray
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废发泡聚苯乙烯托盘（`pack_waste_eps_tray`）

Waste expanded polystyrene tray 作为废发泡聚苯乙烯托盘离开“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Waste expanded polystyrene tray
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废纤维素吸水垫（`pack_waste_cellulose_pad`）

Waste cellulose absorbent pad 作为废纤维素吸水垫离开“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Waste cellulose absorbent pad
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废纸标签（`pack_waste_paper_label`）

Waste paper label 作为废纸标签离开“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：废纸质标签
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废瓦楞纸箱（`pack_waste_corrugated_box`）

Waste corrugated fibreboard box 作为废瓦楞纸箱离开“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Waste corrugated fibreboard box
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废聚丙烯捆扎带（`pack_waste_polypropylene_strap`）

Waste polypropylene strap 作为废聚丙烯捆扎带离开“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Waste polypropylene strap
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废高密度聚乙烯周转箱（`pack_waste_hdpe_crate`）

Waste high-density polyethylene crate 作为废高密度聚乙烯周转箱离开“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Waste high-density polyethylene crate
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废木托盘（`pack_waste_wooden_pallet`）

Waste wooden pallet 作为废木托盘离开“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：废木托盘
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 包装区冲洗废水（`packaging_washwater`）

Buffalo-offal packaging washwater 作为包装区冲洗废水离开“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo-offal packaging washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 基本流

###### 包装氮气释放（`pack_nitrogen_air`）

Nitrogen, to air 作为包装氮气释放离开“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Nitrogen, to air
- 流属性/单位：Mass / kg
- 数量规则：根据匹配的物料平衡或校准直接测量计算这一单项气体释放，并保留来源和空气介质。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_gas_releases`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 化石来源包装气体二氧化碳释放（`pack_gas_fossil_co2_air`）

Carbon dioxide, fossil, to air 作为化石来源包装气体二氧化碳释放离开“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据匹配的物料平衡或校准直接测量计算这一单项气体释放，并保留来源和空气介质。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_gas_releases`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 生物源包装气体二氧化碳释放（`pack_gas_biogenic_co2_air`）

Carbon dioxide, biogenic, to air 作为生物源包装气体二氧化碳释放离开“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：生物源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据匹配的物料平衡或校准直接测量计算这一单项气体释放，并保留来源和空气介质。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_gas_releases`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 化石来源干冰二氧化碳释放（`pack_dry_ice_fossil_co2_air`）

Carbon dioxide, fossil, to air 作为化石来源干冰二氧化碳释放离开“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据匹配的物料平衡或校准直接测量计算这一单项气体释放，并保留来源和空气介质。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_gas_releases`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 生物源干冰二氧化碳释放（`pack_dry_ice_biogenic_co2_air`）

Carbon dioxide, biogenic, to air 作为生物源干冰二氧化碳释放离开“包装与产品放行”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：生物源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据匹配的物料平衡或校准直接测量计算这一单项气体释放，并保留来源和空气介质。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_gas_releases`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

### 过程：清洗与消毒（`cleaning_and_disinfection`）

#### 输入

##### 产品流

###### 卫生用水（`sanitation_water`）

Process water 作为卫生用水进入“清洗与消毒”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：从专用校准水表读取该项用水；若使用共享水表，须根据经核对总量记录因果分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 卫生作业电力（`sanitation_electricity`）

Electricity, medium voltage 作为卫生作业电力进入“清洗与消毒”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：从分表读取该已命名阶段的电力；共享电表须按有记录的运行时间、负荷或吞吐量驱动因素分配并核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 外购卫生蒸汽（`sanitation_steam`）

Steam, purchased 作为外购卫生蒸汽进入“清洗与消毒”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：根据热量表或供应商记录采集跨越场址边界的外购蒸汽，不得重复计入已由燃料表示的场内产热。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 外购卫生热水（`sanitation_hot_water`）

Hot water, purchased 作为外购卫生热水进入“清洗与消毒”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：外购热水
- 流属性/单位：Energy / MJ
- 数量规则：根据实测流量和温度或供应商热量表采集外购热水热量，不得重复计入已由燃料表示的场内产热。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 卫生作业天然气（`sanitation_natural_gas`）

Natural gas 作为卫生作业天然气进入“清洗与消毒”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：天然气
- 流属性/单位：Volume / m3
- 数量规则：根据校准燃气表或经核对的发票分配采集该阶段天然气消耗量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 卫生作业柴油（`sanitation_diesel`）

Diesel fuel 作为卫生作业柴油进入“清洗与消毒”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：柴油燃料
- 流属性/单位：Mass / kg
- 数量规则：根据储罐、采购和期末库存记录核对该阶段柴油领用量；需要时使用有记录的密度换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 卫生作业液化石油气（`sanitation_lpg`）

Liquefied petroleum gas 作为卫生作业液化石油气进入“清洗与消毒”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：液化石油气
- 流属性/单位：Mass / kg
- 数量规则：根据该阶段钢瓶或储罐领用、采购、退回和库存记录核对液化石油气使用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 氢氧化钠清洗剂（`sanitation_sodium_hydroxide`）

Sodium hydroxide 作为氢氧化钠清洗剂进入“清洗与消毒”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：氢氧化钠
- 流属性/单位：Mass / kg
- 数量规则：根据浓度、投加、采购、退回、期初库存和期末库存记录核对该化学品净使用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_chemicals`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 硝酸清洗剂（`sanitation_nitric_acid`）

Nitric acid 作为硝酸清洗剂进入“清洗与消毒”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：硝酸
- 流属性/单位：Mass / kg
- 数量规则：根据浓度、投加、采购、退回、期初库存和期末库存记录核对该化学品净使用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_chemicals`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 磷酸清洗剂（`sanitation_phosphoric_acid`）

Phosphoric acid 作为磷酸清洗剂进入“清洗与消毒”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：磷酸
- 流属性/单位：Mass / kg
- 数量规则：根据浓度、投加、采购、退回、期初库存和期末库存记录核对该化学品净使用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_chemicals`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 过氧乙酸消毒剂（`sanitation_peracetic_acid`）

Peracetic acid 作为过氧乙酸消毒剂进入“清洗与消毒”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：过氧乙酸
- 流属性/单位：Mass / kg
- 数量规则：根据浓度、投加、采购、退回、期初库存和期末库存记录核对该化学品净使用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_chemicals`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 次氯酸钠消毒剂（`sanitation_sodium_hypochlorite`）

Sodium hypochlorite 作为次氯酸钠消毒剂进入“清洗与消毒”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：次氯酸钠
- 流属性/单位：Mass / kg
- 数量规则：根据浓度、投加、采购、退回、期初库存和期末库存记录核对该化学品净使用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_chemicals`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 苯扎氯铵消毒剂（`sanitation_benzalkonium_chloride`）

Benzalkonium chloride 作为苯扎氯铵消毒剂进入“清洗与消毒”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：苯扎氯铵
- 流属性/单位：Mass / kg
- 数量规则：根据浓度、投加、采购、退回、期初库存和期末库存记录核对该化学品净使用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_chemicals`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 氢氧化钠卫生废水（`sanitation_sodium_hydroxide_wastewater`）

Sodium-hydroxide sanitation wastewater 作为氢氧化钠卫生废水离开“清洗与消毒”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Sodium-hydroxide sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 硝酸卫生废水（`sanitation_nitric_acid_wastewater`）

Nitric-acid sanitation wastewater 作为硝酸卫生废水离开“清洗与消毒”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Nitric-acid sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 磷酸卫生废水（`sanitation_phosphoric_acid_wastewater`）

Phosphoric-acid sanitation wastewater 作为磷酸卫生废水离开“清洗与消毒”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Phosphoric-acid sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 过氧乙酸卫生废水（`sanitation_peracetic_acid_wastewater`）

Peracetic-acid sanitation wastewater 作为过氧乙酸卫生废水离开“清洗与消毒”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Peracetic-acid sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 次氯酸钠卫生废水（`sanitation_hypochlorite_wastewater`）

Sodium-hypochlorite sanitation wastewater 作为次氯酸钠卫生废水离开“清洗与消毒”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Sodium-hypochlorite sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 苯扎氯铵卫生废水（`sanitation_benzalkonium_wastewater`）

Benzalkonium-chloride sanitation wastewater 作为苯扎氯铵卫生废水离开“清洗与消毒”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Benzalkonium-chloride sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 末次漂洗卫生废水（`sanitation_final_rinse_wastewater`）

Final-rinse sanitation wastewater 作为末次漂洗卫生废水离开“清洗与消毒”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：末次冲洗消毒废水
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 卫生地面清扫物（`sanitation_floor_sweepings`）

Buffalo-offal facility floor sweepings 作为卫生地面清扫物离开“清洗与消毒”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo-offal facility floor sweepings
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 基本流

###### 卫生作业化石二氧化碳释放（`sanitation_fossil_co2_air`）

Carbon dioxide, fossil, to air 作为卫生作业化石二氧化碳释放离开“清洗与消毒”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据匹配的阶段燃料记录与有记录的场址因子或直接烟道测量计算这一单项空气污染物；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 卫生作业氮氧化物释放（`sanitation_nox_air`）

Nitrogen oxides, to air 作为卫生作业氮氧化物释放离开“清洗与消毒”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据匹配的阶段燃料记录与有记录的场址因子或直接烟道测量计算这一单项空气污染物；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 卫生作业硫氧化物释放（`sanitation_sox_air`）

Sulfur oxides, to air 作为卫生作业硫氧化物释放离开“清洗与消毒”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：硫氧化物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据匹配的阶段燃料记录与有记录的场址因子或直接烟道测量计算这一单项空气污染物；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 卫生作业细颗粒物释放（`sanitation_pm25_air`）

Particulate matter, < 2.5 µm, to air 作为卫生作业细颗粒物释放离开“清洗与消毒”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Particulate matter, < 2.5 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：根据匹配的阶段燃料记录与有记录的场址因子或直接烟道测量计算这一单项空气污染物；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 卫生作业粗颗粒物释放（`sanitation_pm_coarse_air`）

Particulate matter, 2.5-10 µm, to air 作为卫生作业粗颗粒物释放离开“清洗与消毒”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：颗粒物（2.5–10微米），排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据匹配的阶段燃料记录与有记录的场址因子或直接烟道测量计算这一单项空气污染物；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

### 过程：场内废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### 废水处理电力（`wwt_electricity`）

Electricity, medium voltage 作为废水处理电力进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：从分表读取该已命名阶段的电力；共享电表须按有记录的运行时间、负荷或吞吐量驱动因素分配并核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_consumables`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 处理聚合物配制用水（`wwt_makeup_water`）

Process water 作为处理聚合物配制用水进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：从专用校准水表读取该项用水；若使用共享水表，须根据经核对总量记录因果分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_consumables`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 氯化铁混凝剂（`wwt_ferric_chloride`）

Ferric chloride 作为氯化铁混凝剂进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：氯化铁
- 流属性/单位：Mass / kg
- 数量规则：根据浓度、投加、采购、退回、期初库存和期末库存记录核对该化学品净使用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_consumables`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 阴离子聚丙烯酰胺絮凝剂（`wwt_polyacrylamide`）

Anionic polyacrylamide 作为阴离子聚丙烯酰胺絮凝剂进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：阴离子聚丙烯酰胺
- 流属性/单位：Mass / kg
- 数量规则：根据浓度、投加、采购、退回、期初库存和期末库存记录核对该化学品净使用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_consumables`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废水处理氢氧化钠（`wwt_sodium_hydroxide`）

Sodium hydroxide 作为废水处理氢氧化钠进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：氢氧化钠
- 流属性/单位：Mass / kg
- 数量规则：根据浓度、投加、采购、退回、期初库存和期末库存记录核对该化学品净使用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_consumables`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废水处理硫酸（`wwt_sulfuric_acid`）

Sulfuric acid 作为废水处理硫酸进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：硫酸
- 流属性/单位：Mass / kg
- 数量规则：根据浓度、投加、采购、退回、期初库存和期末库存记录核对该化学品净使用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_consumables`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

###### 暂养区冲洗废水进水（`wwt_holding_washwater`）

Buffalo holding-area washwater 作为暂养区冲洗废水进水进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo holding-area washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 屠宰废水进水（`wwt_slaughter_wastewater`）

High-organic-load buffalo slaughter wastewater 作为屠宰废水进水进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：High-organic-load buffalo slaughter wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛肝清洗废水进水（`wwt_liver_washwater`）

Buffalo liver washwater 作为水牛肝清洗废水进水进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo liver washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛心清洗废水进水（`wwt_heart_washwater`）

Buffalo heart washwater 作为水牛心清洗废水进水进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo heart washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛肾清洗废水进水（`wwt_kidney_washwater`）

Buffalo kidney washwater 作为水牛肾清洗废水进水进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo kidney washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛舌清洗废水进水（`wwt_tongue_washwater`）

Buffalo tongue washwater 作为水牛舌清洗废水进水进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo tongue washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛脑清洗废水进水（`wwt_brain_washwater`）

Buffalo brain washwater 作为水牛脑清洗废水进水进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo brain washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛肚清洗废水进水（`wwt_tripe_washwater`）

Buffalo tripe washwater 作为水牛肚清洗废水进水进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo tripe washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛小肠清洗废水进水（`wwt_small_intestine_washwater`）

Buffalo small-intestine washwater 作为水牛小肠清洗废水进水进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo small-intestine washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛大肠清洗废水进水（`wwt_large_intestine_washwater`）

Buffalo large-intestine washwater 作为水牛大肠清洗废水进水进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo large-intestine washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛肺清洗废水进水（`wwt_lung_washwater`）

Buffalo lung washwater 作为水牛肺清洗废水进水进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo lung washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 水牛脾清洗废水进水（`wwt_spleen_washwater`）

Buffalo spleen washwater 作为水牛脾清洗废水进水进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo spleen washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷却废水进水（`wwt_chilling_wastewater`）

Buffalo-offal chilling wastewater 作为冷却废水进水进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo-offal chilling wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷藏库融霜废水进水（`wwt_chill_defrost_wastewater`）

Chilled-storage defrost wastewater 作为冷藏库融霜废水进水进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Chilled-storage defrost wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 挂冰废水进水（`wwt_glazing_wastewater`）

Buffalo-offal glazing wastewater 作为挂冰废水进水进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo-offal glazing wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冻藏库融霜废水进水（`wwt_freeze_defrost_wastewater`）

Frozen-storage defrost wastewater 作为冻藏库融霜废水进水进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Frozen-storage defrost wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 包装冲洗废水进水（`wwt_packaging_washwater`）

Buffalo-offal packaging washwater 作为包装冲洗废水进水进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Buffalo-offal packaging washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 氢氧化钠卫生废水进水（`wwt_sodium_hydroxide_wastewater`）

Sodium-hydroxide sanitation wastewater 作为氢氧化钠卫生废水进水进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Sodium-hydroxide sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 硝酸卫生废水进水（`wwt_nitric_acid_wastewater`）

Nitric-acid sanitation wastewater 作为硝酸卫生废水进水进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Nitric-acid sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 磷酸卫生废水进水（`wwt_phosphoric_acid_wastewater`）

Phosphoric-acid sanitation wastewater 作为磷酸卫生废水进水进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Phosphoric-acid sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 过氧乙酸卫生废水进水（`wwt_peracetic_acid_wastewater`）

Peracetic-acid sanitation wastewater 作为过氧乙酸卫生废水进水进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Peracetic-acid sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 次氯酸钠卫生废水进水（`wwt_hypochlorite_wastewater`）

Sodium-hypochlorite sanitation wastewater 作为次氯酸钠卫生废水进水进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Sodium-hypochlorite sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 苯扎氯铵卫生废水进水（`wwt_benzalkonium_wastewater`）

Benzalkonium-chloride sanitation wastewater 作为苯扎氯铵卫生废水进水进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Benzalkonium-chloride sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 末次漂洗卫生废水进水（`wwt_final_rinse_wastewater`）

Final-rinse sanitation wastewater 作为末次漂洗卫生废水进水进入“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：末次冲洗消毒废水
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、储罐记录或有记录的水力分配测量该已命名废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 基本流

#### 输出

##### 产品流

###### 回收废水油脂（`wwt_recovered_grease`）

Recovered wastewater grease 作为回收废水油脂离开“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Recovered wastewater grease
- 流属性/单位：Mass / kg
- 数量规则：测量单独回收质量并保留声明的有益去向；同一质量只能分类一次为产品或废物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

###### 废水筛渣（`wwt_screenings`）

Wastewater screenings 作为废水筛渣离开“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Wastewater screenings
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 溶气气浮污泥（`wwt_daf_sludge`）

Dissolved-air-flotation sludge 作为溶气气浮污泥离开“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Dissolved-air-flotation sludge
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 生化废水污泥（`wwt_biological_sludge`）

Biological wastewater sludge 作为生化废水污泥离开“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Biological wastewater sludge
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废弃废水油脂（`wwt_discarded_grease`）

Discarded wastewater grease 作为废弃废水油脂离开“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Discarded wastewater grease
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量和去向记录单独测量该已命名废物，并防止其重复报告为回收产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 基本流

###### 处理出水排放（`wwt_treated_effluent`）

Treated wastewater effluent, to surface water 作为处理出水排放离开“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Treated wastewater effluent, to surface water
- 流属性/单位：Volume / m3
- 数量规则：采集与污染物测量采用相同排放点和期间的最终处理出水体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_discharge`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 五日生化需氧量排放（`wwt_bod5_water`）

Biochemical oxygen demand, 5-day, to water 作为五日生化需氧量排放离开“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Biochemical oxygen demand, 5-day, to water
- 流属性/单位：Mass / kg
- 数量规则：根据同一排放点和期间的排水体积与代表性实测浓度，计算这一单项水污染物。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_discharge`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 化学需氧量排放（`wwt_cod_water`）

Chemical oxygen demand, to water 作为化学需氧量排放离开“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：化学需氧量，排入水体
- 流属性/单位：Mass / kg
- 数量规则：根据同一排放点和期间的排水体积与代表性实测浓度，计算这一单项水污染物。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_discharge`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 总悬浮固体排放（`wwt_tss_water`）

Total suspended solids, to water 作为总悬浮固体排放离开“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Total suspended solids, to water
- 流属性/单位：Mass / kg
- 数量规则：根据同一排放点和期间的排水体积与代表性实测浓度，计算这一单项水污染物。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_discharge`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 总氮排放（`wwt_total_n_water`）

Nitrogen, total, to water 作为总氮排放离开“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Nitrogen, total, to water
- 流属性/单位：Mass / kg
- 数量规则：根据同一排放点和期间的排水体积与代表性实测浓度，计算这一单项水污染物。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_discharge`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 总磷排放（`wwt_total_p_water`）

Phosphorus, total, to water 作为总磷排放离开“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Phosphorus, total, to water
- 流属性/单位：Mass / kg
- 数量规则：根据同一排放点和期间的排水体积与代表性实测浓度，计算这一单项水污染物。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_discharge`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 氯化物排放（`wwt_chloride_water`）

Chloride, to water 作为氯化物排放离开“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Chloride, to water
- 流属性/单位：Mass / kg
- 数量规则：根据同一排放点和期间的排水体积与代表性实测浓度，计算这一单项水污染物。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_discharge`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 铵排放（`wwt_ammonium_water`）

Ammonium, to water 作为铵排放离开“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Ammonium, to water
- 流属性/单位：Mass / kg
- 数量规则：根据同一排放点和期间的排水体积与代表性实测浓度，计算这一单项水污染物。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_discharge`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 生物源甲烷释放（`wwt_biogenic_methane_air`）

Methane, biogenic, to air 作为生物源甲烷释放离开“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：生物源甲烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据匹配的物料平衡或校准直接测量计算这一单项气体释放，并保留来源和空气介质。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_air_releases`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 生物源二氧化碳释放（`wwt_biogenic_co2_air`）

Carbon dioxide, biogenic, to air 作为生物源二氧化碳释放离开“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：生物源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据匹配的物料平衡或校准直接测量计算这一单项气体释放，并保留来源和空气介质。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_air_releases`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 氧化亚氮释放（`wwt_nitrous_oxide_air`）

Nitrous oxide, to air 作为氧化亚氮释放离开“场内废水处理”边界。本行单独记录其适用性和数量，不合并其他交换。

- 选定流：Nitrous oxide, to air
- 流属性/单位：Mass / kg
- 数量规则：根据匹配的物料平衡或校准直接测量计算这一单项气体释放，并保留来源和空气介质。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格水牛可食用内脏，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_air_releases`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 共享屠宰和公用工程作业 | 在采用分配前，优先使用实测过程细分和直接分配至器官批次。 | `eu-pef-2021-2279` |
| `allocation_shared_slaughter` | 胴体、可食器官、血液、原皮、头架、角、蹄、脂肪和尾 | 共享负荷仍存在时，使用反映过程的有记录物理关系；仅在质量可辩护时使用质量，并在评估适用层级后披露任何经济关系。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `allocation_product_waste_status` | 每项回收物料 | 根据法律状态和有记录去向，将实测数量只分类一次为产品或废物；不得在两种角色中重复同一质量。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `allocation_organ_mass_balance` | 屠宰和器官整理 | 核对验收活体质量与胴体、每个器官、其他回收产品、判废物料、内容物、残余物、废水固体、库存变化和有记录测量差异。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `allocation_waste_treatment` | 废物和废水 | 将前景收集和场内处理作业分配给本系统，披露场外处理边界，并单独报告所有抵扣。 | `eu-pef-2021-2279` |
| `allocation_reusable_packaging` | 可重复使用周转箱和木托盘 | 通过实际领用和退回记录仅分配实测补充或损耗量；披露寿命和损耗假设。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_live_mass` | `buffalo_receipt_and_holding` | 已命名边界处的活水牛质量 | 牲畜秤或地磅记录 | row_id; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id; timestamp | 在校准设备上测量毛重和皮重，计算活体净质量，并核对接收、验收、死亡和屠宰记录。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤具校准；称量单；动物批次登记；核对记录 |
| `cp_receipt_utilities` | `buffalo_receipt_and_holding` | 单一水、电力、蒸汽、热水或燃料投入 | 仪表、供应商、库存、储罐或钢瓶记录 | row_id; meter_or_stock_id; opening_reading; closing_reading; receipt; return; unit; allocation_driver; batch_id | 独立采集每种载体，核对采购和库存，并记录所有共享仪表分配，不得合并载体。 | 按声明使用 m3、kWh、MJ 或 kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 仪表校准；发票；库存台账；分配工作表 |
| `cp_receipt_residues` | `buffalo_receipt_and_holding` | 单一已命名废物、废水、不合格品、污泥、油脂或残余物 | 秤具、流量计、容器、联单和去向记录 | row_id; batch_id; material_identity; gross_quantity; tare_quantity; net_quantity; unit; destination; legal_status; timestamp | 独立测量已命名流，保留去向和法律状态，并进行核对且不重复分类为产品。 | 按声明使用 kg 或 m3 | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤具或仪表校准；废物记录；联单；去向回执；平衡核对 |
| `cp_slaughter_live_mass` | `slaughter_bleeding_and_organ_recovery` | 已命名边界处的活水牛质量 | 牲畜秤或地磅记录 | row_id; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id; timestamp | 在校准设备上测量毛重和皮重，计算活体净质量，并核对接收、验收、死亡和屠宰记录。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤具校准；称量单；动物批次登记；核对记录 |
| `cp_slaughter_utilities` | `slaughter_bleeding_and_organ_recovery` | 单一水、电力、蒸汽、热水或燃料投入 | 仪表、供应商、库存、储罐或钢瓶记录 | row_id; meter_or_stock_id; opening_reading; closing_reading; receipt; return; unit; allocation_driver; batch_id | 独立采集每种载体，核对采购和库存，并记录所有共享仪表分配，不得合并载体。 | 按声明使用 m3、kWh、MJ 或 kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 仪表校准；发票；库存台账；分配工作表 |
| `cp_slaughter_products` | `slaughter_bleeding_and_organ_recovery` | 单一器官特定或副产品质量 | 校准秤和批次转移记录 | row_id; organ_or_material; state; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id | 分别称量每个已命名器官或回收产出，并关联其身份、状态、去向和批次。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤具校准；批次表；放行或去向记录；质量平衡 |
| `cp_slaughter_coproducts` | `slaughter_bleeding_and_organ_recovery` | 单一器官特定或副产品质量 | 校准秤和批次转移记录 | row_id; organ_or_material; state; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id | 分别称量每个已命名器官或回收产出，并关联其身份、状态、去向和批次。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤具校准；批次表；放行或去向记录；质量平衡 |
| `cp_slaughter_residues` | `slaughter_bleeding_and_organ_recovery` | 单一已命名废物、废水、不合格品、污泥、油脂或残余物 | 秤具、流量计、容器、联单和去向记录 | row_id; batch_id; material_identity; gross_quantity; tare_quantity; net_quantity; unit; destination; legal_status; timestamp | 独立测量已命名流，保留去向和法律状态，并进行核对且不重复分类为产品。 | 按声明使用 kg 或 m3 | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤具或仪表校准；废物记录；联单；去向回执；平衡核对 |
| `cp_slaughter_wastewater` | `slaughter_bleeding_and_organ_recovery` | 单一已命名废水流或单项排放参数 | 流量计、混合样、实验室和排放记录 | row_id; sampling_point; start_time; end_time; volume; concentration; analyte; unit; method; detection_limit | 可行时在混合前测量流体积，并将代表性浓度结果与同一排放点和报告期配对。 | 按声明使用 m3 或 kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 仪表校准；采样计划；样品交接链；实验室报告；排放台账 |
| `cp_slaughter_air_emissions` | `slaughter_bleeding_and_organ_recovery` | 单项已命名空气排放 | 燃料、物料平衡、烟道、直接测量和计算记录 | row_id; source_row_id; activity_quantity; activity_unit; factor_or_measurement; factor_unit; origin; calculated_mass; period | 分别计算或测量每种排放物质，并保留匹配活动、来源、环境介质、因子来源和期间。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 匹配活动记录；烟道或维修记录；因子证据；计算复核 |
| `cp_prep_organ_mass` | `offal_separation_trimming_and_washing` | 单一器官特定或副产品质量 | 校准秤和批次转移记录 | row_id; organ_or_material; state; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id | 分别称量每个已命名器官或回收产出，并关联其身份、状态、去向和批次。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤具校准；批次表；放行或去向记录；质量平衡 |
| `cp_prep_utilities` | `offal_separation_trimming_and_washing` | 单一水、电力、蒸汽、热水或燃料投入 | 仪表、供应商、库存、储罐或钢瓶记录 | row_id; meter_or_stock_id; opening_reading; closing_reading; receipt; return; unit; allocation_driver; batch_id | 独立采集每种载体，核对采购和库存，并记录所有共享仪表分配，不得合并载体。 | 按声明使用 m3、kWh、MJ 或 kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 仪表校准；发票；库存台账；分配工作表 |
| `cp_prep_solid_residues` | `offal_separation_trimming_and_washing` | 单一已命名固体废物、不合格品或回收残余物 | 容器秤、废物台账、联单和去向记录 | row_id; batch_id; material_identity; container_id; gross_mass; tare_mass; net_mass; destination; legal_status; timestamp | 单独测量已命名物料并记录去向和法律状态，防止同一质量同时作为产品和废物报告。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤具校准；废物台账；联单；去向回执；质量平衡 |
| `cp_prep_washwater` | `offal_separation_trimming_and_washing` | 与 row_id 关联的单一原子交换 | 前景运行记录 | row_id; batch_id; timestamp; quantity; unit; record_id; instrument_id | 单独采集已命名交换，并保留至原始记录的可审计链接。 | 流卡声明单位 | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 仪器状态；原始记录；批次核对；责任人批准 |
| `cp_prep_air_emissions` | `offal_separation_trimming_and_washing` | 单项已命名空气排放 | 燃料、物料平衡、烟道、直接测量和计算记录 | row_id; source_row_id; activity_quantity; activity_unit; factor_or_measurement; factor_unit; origin; calculated_mass; period | 分别计算或测量每种排放物质，并保留匹配活动、来源、环境介质、因子来源和期间。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 匹配活动记录；烟道或维修记录；因子证据；计算复核 |
| `cp_fresh_organ_mass` | `fresh_offal_conditioning` | 单一器官特定或副产品质量 | 校准秤和批次转移记录 | row_id; organ_or_material; state; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id | 分别称量每个已命名器官或回收产出，并关联其身份、状态、去向和批次。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤具校准；批次表；放行或去向记录；质量平衡 |
| `cp_fresh_utilities` | `fresh_offal_conditioning` | 单一水、电力、蒸汽、热水或燃料投入 | 仪表、供应商、库存、储罐或钢瓶记录 | row_id; meter_or_stock_id; opening_reading; closing_reading; receipt; return; unit; allocation_driver; batch_id | 独立采集每种载体，核对采购和库存，并记录所有共享仪表分配，不得合并载体。 | 按声明使用 m3、kWh、MJ 或 kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 仪表校准；发票；库存台账；分配工作表 |
| `cp_fresh_rejects` | `fresh_offal_conditioning` | 单一已命名固体废物、不合格品或回收残余物 | 容器秤、废物台账、联单和去向记录 | row_id; batch_id; material_identity; container_id; gross_mass; tare_mass; net_mass; destination; legal_status; timestamp | 单独测量已命名物料并记录去向和法律状态，防止同一质量同时作为产品和废物报告。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤具校准；废物台账；联单；去向回执；质量平衡 |
| `cp_chill_organ_mass` | `chilling_and_chilled_storage` | 单一器官特定或副产品质量 | 校准秤和批次转移记录 | row_id; organ_or_material; state; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id | 分别称量每个已命名器官或回收产出，并关联其身份、状态、去向和批次。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤具校准；批次表；放行或去向记录；质量平衡 |
| `cp_chill_utilities` | `chilling_and_chilled_storage` | 单一水、电力、蒸汽、热水或燃料投入 | 仪表、供应商、库存、储罐或钢瓶记录 | row_id; meter_or_stock_id; opening_reading; closing_reading; receipt; return; unit; allocation_driver; batch_id | 独立采集每种载体，核对采购和库存，并记录所有共享仪表分配，不得合并载体。 | 按声明使用 m3、kWh、MJ 或 kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 仪表校准；发票；库存台账；分配工作表 |
| `cp_chill_refrigerants` | `chilling_and_chilled_storage` | 单一物质特定制冷剂补充或释放 | 钢瓶称量、库存、回收、转移和维修记录 | row_id; substance; equipment_id; opening_stock; receipts; recovered_mass; transferred_mass; closing_stock; direct_loss; unit | 对这一制冷剂物质建立独立质量平衡，并与回收和维修事件核对。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 钢瓶秤校准；维修日志；发票；回收证明；质量平衡复核 |
| `cp_chill_residues` | `chilling_and_chilled_storage` | 单一已命名废物、废水、不合格品、污泥、油脂或残余物 | 秤具、流量计、容器、联单和去向记录 | row_id; batch_id; material_identity; gross_quantity; tare_quantity; net_quantity; unit; destination; legal_status; timestamp | 独立测量已命名流，保留去向和法律状态，并进行核对且不重复分类为产品。 | 按声明使用 kg 或 m3 | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤具或仪表校准；废物记录；联单；去向回执；平衡核对 |
| `cp_freeze_organ_mass` | `freezing_and_frozen_storage` | 单一器官特定或副产品质量 | 校准秤和批次转移记录 | row_id; organ_or_material; state; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id | 分别称量每个已命名器官或回收产出，并关联其身份、状态、去向和批次。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤具校准；批次表；放行或去向记录；质量平衡 |
| `cp_freeze_utilities` | `freezing_and_frozen_storage` | 单一水、电力、蒸汽、热水或燃料投入 | 仪表、供应商、库存、储罐或钢瓶记录 | row_id; meter_or_stock_id; opening_reading; closing_reading; receipt; return; unit; allocation_driver; batch_id | 独立采集每种载体，核对采购和库存，并记录所有共享仪表分配，不得合并载体。 | 按声明使用 m3、kWh、MJ 或 kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 仪表校准；发票；库存台账；分配工作表 |
| `cp_freeze_refrigerants` | `freezing_and_frozen_storage` | 单一物质特定制冷剂补充或释放 | 钢瓶称量、库存、回收、转移和维修记录 | row_id; substance; equipment_id; opening_stock; receipts; recovered_mass; transferred_mass; closing_stock; direct_loss; unit | 对这一制冷剂物质建立独立质量平衡，并与回收和维修事件核对。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 钢瓶秤校准；维修日志；发票；回收证明；质量平衡复核 |
| `cp_freeze_residues` | `freezing_and_frozen_storage` | 单一已命名废物、废水、不合格品、污泥、油脂或残余物 | 秤具、流量计、容器、联单和去向记录 | row_id; batch_id; material_identity; gross_quantity; tare_quantity; net_quantity; unit; destination; legal_status; timestamp | 独立测量已命名流，保留去向和法律状态，并进行核对且不重复分类为产品。 | 按声明使用 kg 或 m3 | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤具或仪表校准；废物记录；联单；去向回执；平衡核对 |
| `cp_packaging_organ_mass` | `packaging_and_release` | 单一器官特定或副产品质量 | 校准秤和批次转移记录 | row_id; organ_or_material; state; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id | 分别称量每个已命名器官或回收产出，并关联其身份、状态、去向和批次。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤具校准；批次表；放行或去向记录；质量平衡 |
| `cp_packaging_energy` | `packaging_and_release` | 单一水、电力、蒸汽、热水或燃料投入 | 仪表、供应商、库存、储罐或钢瓶记录 | row_id; meter_or_stock_id; opening_reading; closing_reading; receipt; return; unit; allocation_driver; batch_id | 独立采集每种载体，核对采购和库存，并记录所有共享仪表分配，不得合并载体。 | 按声明使用 m3、kWh、MJ 或 kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 仪表校准；发票；库存台账；分配工作表 |
| `cp_packaging_components` | `packaging_and_release` | 单一化学品、处理耗材、包装组件或包装气体 | 采购、投加、领用、退回和库存记录 | row_id; material_identity; grade_or_concentration; opening_stock; receipts; issued_quantity; returns; closing_stock; unit; batch_id | 独立核对已命名物料，并将净消耗量关联至适用器官批次。 | 按声明使用 kg、m3、kWh 或 MJ | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 发票；规格；投加或领用记录；库存核对 |
| `cp_packaging_gases` | `packaging_and_release` | 单一化学品、处理耗材、包装组件或包装气体 | 采购、投加、领用、退回和库存记录 | row_id; material_identity; grade_or_concentration; opening_stock; receipts; issued_quantity; returns; closing_stock; unit; batch_id | 独立核对已命名物料，并将净消耗量关联至适用器官批次。 | 按声明使用 kg、m3、kWh 或 MJ | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 发票；规格；投加或领用记录；库存核对 |
| `cp_packaging_waste` | `packaging_and_release` | 单一已命名废物、废水、不合格品、污泥、油脂或残余物 | 秤具、流量计、容器、联单和去向记录 | row_id; batch_id; material_identity; gross_quantity; tare_quantity; net_quantity; unit; destination; legal_status; timestamp | 独立测量已命名流，保留去向和法律状态，并进行核对且不重复分类为产品。 | 按声明使用 kg 或 m3 | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤具或仪表校准；废物记录；联单；去向回执；平衡核对 |
| `cp_packaging_gas_releases` | `packaging_and_release` | 单项已命名空气排放 | 燃料、物料平衡、烟道、直接测量和计算记录 | row_id; source_row_id; activity_quantity; activity_unit; factor_or_measurement; factor_unit; origin; calculated_mass; period | 分别计算或测量每种排放物质，并保留匹配活动、来源、环境介质、因子来源和期间。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 匹配活动记录；烟道或维修记录；因子证据；计算复核 |
| `cp_sanitation_utilities` | `cleaning_and_disinfection` | 单一水、电力、蒸汽、热水或燃料投入 | 仪表、供应商、库存、储罐或钢瓶记录 | row_id; meter_or_stock_id; opening_reading; closing_reading; receipt; return; unit; allocation_driver; batch_id | 独立采集每种载体，核对采购和库存，并记录所有共享仪表分配，不得合并载体。 | 按声明使用 m3、kWh、MJ 或 kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 仪表校准；发票；库存台账；分配工作表 |
| `cp_sanitation_chemicals` | `cleaning_and_disinfection` | 单一化学品、处理耗材、包装组件或包装气体 | 采购、投加、领用、退回和库存记录 | row_id; material_identity; grade_or_concentration; opening_stock; receipts; issued_quantity; returns; closing_stock; unit; batch_id | 独立核对已命名物料，并将净消耗量关联至适用器官批次。 | 按声明使用 kg、m3、kWh 或 MJ | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 发票；规格；投加或领用记录；库存核对 |
| `cp_sanitation_wastewater` | `cleaning_and_disinfection` | 单一已命名废物、废水、不合格品、污泥、油脂或残余物 | 秤具、流量计、容器、联单和去向记录 | row_id; batch_id; material_identity; gross_quantity; tare_quantity; net_quantity; unit; destination; legal_status; timestamp | 独立测量已命名流，保留去向和法律状态，并进行核对且不重复分类为产品。 | 按声明使用 kg 或 m3 | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤具或仪表校准；废物记录；联单；去向回执；平衡核对 |
| `cp_sanitation_air_emissions` | `cleaning_and_disinfection` | 单项已命名空气排放 | 燃料、物料平衡、烟道、直接测量和计算记录 | row_id; source_row_id; activity_quantity; activity_unit; factor_or_measurement; factor_unit; origin; calculated_mass; period | 分别计算或测量每种排放物质，并保留匹配活动、来源、环境介质、因子来源和期间。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 匹配活动记录；烟道或维修记录；因子证据；计算复核 |
| `cp_wwt_consumables` | `onsite_wastewater_treatment` | 单一化学品、处理耗材、包装组件或包装气体 | 采购、投加、领用、退回和库存记录 | row_id; material_identity; grade_or_concentration; opening_stock; receipts; issued_quantity; returns; closing_stock; unit; batch_id | 独立核对已命名物料，并将净消耗量关联至适用器官批次。 | 按声明使用 kg、m3、kWh 或 MJ | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 发票；规格；投加或领用记录；库存核对 |
| `cp_wwt_influent` | `onsite_wastewater_treatment` | 单一已命名废水流或单项排放参数 | 流量计、混合样、实验室和排放记录 | row_id; sampling_point; start_time; end_time; volume; concentration; analyte; unit; method; detection_limit | 可行时在混合前测量流体积，并将代表性浓度结果与同一排放点和报告期配对。 | 按声明使用 m3 或 kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 仪表校准；采样计划；样品交接链；实验室报告；排放台账 |
| `cp_wwt_residues` | `onsite_wastewater_treatment` | 单一已命名废物、废水、不合格品、污泥、油脂或残余物 | 秤具、流量计、容器、联单和去向记录 | row_id; batch_id; material_identity; gross_quantity; tare_quantity; net_quantity; unit; destination; legal_status; timestamp | 独立测量已命名流，保留去向和法律状态，并进行核对且不重复分类为产品。 | 按声明使用 kg 或 m3 | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤具或仪表校准；废物记录；联单；去向回执；平衡核对 |
| `cp_wwt_discharge` | `onsite_wastewater_treatment` | 单一已命名废水流或单项排放参数 | 流量计、混合样、实验室和排放记录 | row_id; sampling_point; start_time; end_time; volume; concentration; analyte; unit; method; detection_limit | 可行时在混合前测量流体积，并将代表性浓度结果与同一排放点和报告期配对。 | 按声明使用 m3 或 kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 仪表校准；采样计划；样品交接链；实验室报告；排放台账 |
| `cp_wwt_air_releases` | `onsite_wastewater_treatment` | 单项已命名空气排放 | 燃料、物料平衡、烟道、直接测量和计算记录 | row_id; source_row_id; activity_quantity; activity_unit; factor_or_measurement; factor_unit; origin; calculated_mass; period | 分别计算或测量每种排放物质，并保留匹配活动、来源、环境介质、因子来源和期间。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景屠宰场或内脏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 匹配活动记录；烟道或维修记录；因子证据；计算复核 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个非参考行 | 将批次或报告期交换量除以相匹配的净合格参考产品质量；保留未取整分子和分母。 | 行特定数量；净合格器官质量 | 每 1 kg 参考产品的数量 | `eu-pef-2021-2279` |
| `calc_organ_mass_balance` | 接收、屠宰、整理、状态调理和包装 | 核对实测投入与器官产出、胴体产品、副产品、不合格品、废物、库存变化和有记录测量差异；不得虚构平衡流。 | 校准质量记录；库存变化 | 已披露器官和场址质量平衡 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `calc_state_route` | 鲜、冷藏和冷冻分支 | 根据放行记录将参考批次分配至一个状态路线；仅归一化该分支，并拒绝混合分支数量的计算。 | 器官批次 id；放行状态；分支记录 | 一个状态特定前景清单 | `eu-pef-2021-2279` |
| `calc_combustion_release` | 每个燃烧污染物行 | 将单独采集的燃料量乘以有记录的场址特定污染物因子，或使用匹配的直接烟道结果；保留来源、单位和期间。 | 燃料量；污染物因子或烟道结果 | 污染物空气排放质量 | `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | 每个制冷剂排放行 | 对一种物质计算期初库存加收货量，减去期末库存、回收量和转移量，再与维修损失记录核对。 | 物质特定库存和维修记录 | 制冷剂空气排放质量 | `eu-pef-2021-2279` |
| `calc_shared_meter` | 共享公用工程仪表 | 仅在评估直接分表后采用有记录的因果驱动因素；保留未分配总量和分配工作表。 | 共享仪表量；运行时间、负荷或吞吐量 | 过程特定公用工程量 | `eu-pef-2021-2279` |
| `calc_packaging_consumption` | 每个包装组件 | 计算期初库存加收货量，减去期末库存、退回量和未用转移量；可重复使用物品采用实测补充或损耗量。 | 组件特定库存、领用、退回和损耗记录 | 每参考产品包装组件质量 | `eu-pef-2021-2279` |
| `calc_effluent_load` | 每个废水污染物行 | 将相匹配的排水体积乘以同一排放点和期间的代表性实测浓度，并明确转换单位。 | 排水体积；实测浓度 | 污染物水排放质量 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_reference_identity` | 参考产品 | 证明 CPC 21152、水牛来源、精确器官身份、供人食用可食状态、一个声明状态以及包装质量排除。 | 产品规格；兽医或食品安全放行；批次记录；参考 UUID |
| `dq_state_traceability` | 鲜、冷藏或冷冻路线 | 保留分支选择、操作时长、温度记录以及同一参考批次未进入另一状态分支的证据。 | 时间记录；温度日志；路线记录；放行记录 |
| `dq_primary_foreground` | 前景操作 | 对每项物料、公用工程、器官、副产品、废物、废水、制冷剂和直接释放使用场址特定初级记录。 | 仪表；秤具；发票；库存台账；维修日志；联单；实验室报告 |
| `dq_temporal_coverage` | 报告期 | 覆盖代表性期间内的屠宰、器官整理、选定状态调理、包装、卫生作业、储存和处理波动。 | 有日期记录；生产日历；完整性核对 |
| `dq_atomic_inventory` | 清单行 | 每行保留一个精确交换，并维持与 manifest 未解决 UUID 审查条目的行级闭合。 | 有序 row_id 审计；UUID 登记；原始记录交叉映射 |
| `dq_mass_water_balance` | 场址平衡 | 核对器官和场址质量平衡，以及取水、废水转移、处理和排放；使用证据解释重要残差。 | 质量平衡工作表；水平衡工作表；复核批准 |
| `dq_refrigerant_balance` | 冷却和冻结系统 | 识别每种制冷剂并核对同一期间的补充、回收、转移、库存和释放；保留 R-744 来源。 | 钢瓶称量；维修日志；采购和回收记录；物质平衡 |
| `dq_calculation_traceability` | 计算值 | 保留原始值、单位、因子、公式、换算、因子来源以及精确批次或期间链接。 | 可复现计算文件；原始记录 id；计算复核 |
| `dq_independent_review` | 数据包 | 在生命周期提升前复核范围、参考流、状态分支、器官身份、完整性、分配、计算、数据质量和排除项。 | 验证记录；复核人身份；问题处置 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_uuid` | 参考流 | 要求 UUID ed9e2fcf-3bf3-4b09-a893-dc5250a65f5c、Product flow 类型、精确 CPC 21152 范围、Mass 属性 93a60a56-a3c8-11da-a746-0800200b9a66、Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66、kg 和恰好 1 kg 净产出。 | `unsd-cpc-3-21152` |
| `validate_product_scope` | 产品身份 | 拒绝骨骼肉、不可食内脏、混合物种内脏、非水牛内脏，以及熟制、腌制、熏制、干制、盐渍或进一步保藏产品。 | `unsd-cpc-3-21152` |
| `validate_exact_organ` | 器官身份 | 要求参考批次具有一个精确命名器官，并在每个适用过程建立原子行；拒绝 “other offal” 选定流。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `validate_state_exclusivity` | 状态路线 | 每个参考批次须恰好采用鲜、冷藏或冷冻之一，并拒绝混合状态归一化。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `validate_process_coverage` | 过程清单 | 要求所有必需过程，并对三个状态分支和场内废水处理给出有记录纳入决定。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `validate_atomic_exchange` | 清单 | 拒绝在一个选定流中合并载体、化学品、包装组件、器官、副产品、废物、废水污染物或排放。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `validate_fixed_value` | 数值模式 | 要求参考产出为唯一固定值，并禁止为非参考行虚构固定数量或范围。 | `eu-pef-2021-2279` |
| `validate_mass_allocation` | 屠宰和器官整理 | 要求质量核对、产品与废物互斥、分配披露，并在分配显著影响结果时进行敏感性分析。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `validate_refrigerants` | 冷藏和冷冻路线 | 要求对场址存在的每种制冷剂记录物质特定补充和释放，并分开化石来源与生物源 R-744 释放。 | `eu-pef-2021-2279` |
| `validate_wastewater` | 废水 | 要求已命名废水投入、相匹配的排放体积和浓度，并在无场内处理时记录场外转移。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `validate_unresolved_uuid` | 非参考身份 | 仅当物理特定行在 manifest.yaml 对应 row_id 下同时具有相匹配的 selected_flow_candidates 和 rejected_candidates 时允许 UUID 留空。 | `eu-pef-2021-2279` |
| `validate_data_quality` | 前景数据包 | 要求初级记录可追溯性、代表性时间覆盖、可复现计算、完整披露和独立复核证据。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个声明鲜、冷藏或冷冻状态下 1 kg 净合格水牛可食用内脏的前景单元过程数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 在器官和状态限定信息保持明确时，用于产品碳足迹、生命周期评价、供应商交换、场址改进和经审查聚合 |
| excluded_use | 不得直接代表骨骼肉、不可食内脏、混合物种内脏、非水牛内脏、养殖、入厂运输、零售、烹调、食用或进一步保藏产品 |
| required_metadata | PCR id；CPC 代码；参考 UUID；水牛分类单元；精确器官；可食状态；市场状态；时间和温度；修整；包装；净质量；场址；地理；技术；批次；期间；分配；副产品去向；制冷剂；废水路线；未解决 UUID 登记 |
| required_quality_disclosure | 初级数据份额；仪表和秤具覆盖；共享记录分配；器官和场址质量平衡；水平衡；制冷剂平衡；状态路线证据；数据缺口；计算来源；验证发现 |
| update_trigger | 器官组合、水牛分类单元、可食规则、状态路线、冷却或冻结技术、制冷剂、热供应、包装、卫生化学品、废水路线、分配、副产品法律状态、场址配置或代表性期间变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-21152` | 数据集（`dataset`） | 联合国统计司，《产品总分类》第 3.0 版，代码 21152，仓库保留原始文件 CPC_Ver_3.0_Structure_30Jun2025.csv，SHA-256 5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c，检索于 2026-06-23T08:55:39.235Z；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 鲜、冷藏或冷冻水牛可食用内脏的精确类别边界及其与相邻类别的区分 |
| `ec-jrc-sa-bref-jrc135916` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，《屠宰场、动物副产品及可食副产品行业最佳可行技术参考文件》，JRC135916，DOI 10.2760/18199；https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 | 接收、屠宰、放血、去内脏、器官与副产品回收、冷却、冻结、清洗、公用工程、废水、残余物、排放和前景过程结构；不导入定量默认值 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | 欧盟委员会关于环境足迹方法使用的建议（EU）2021/2279，合并文本；https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 产品特定清单、企业特定前景数据、完整性、分配、透明度、数据质量、计算可追溯性和验证 |
