---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.grape-juice
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 葡萄汁

## 1. 范围与适用性

本 PCR 适用于仅以葡萄制成、未发酵但可发酵的葡萄汁，包括直接压榨路线和由葡萄汁浓缩物还原的路线，参考点为已声明市场状态下的工厂大门。若声明了路线和状态，可包括清汁和浑浊汁、散装和消费包装产品，以及常温、冷藏或冷冻市场状态。

本 PCR 不包括葡萄果肉饮料、混合果汁、作为产品销售的葡萄果泥、以葡萄汁浓缩物作为参考产品的产品、拟用于发酵的葡萄汁醪、葡萄酒及其他发酵饮料、醋、糖浆，以及不符合葡萄汁身份的饮料。葡萄园种植、工厂大门后的配送、零售冷藏、消费者使用和生命末期不在前景边界内，除非单独建模并链接。

产品身份、组成、允许的加工、保藏和安全控制应遵循声明市场适用的规则。Codex CXS 247-2005 是国际产品身份基线。EU Directive 2001/112/EC 和 21 CFR Part 120 仅在其司法辖区适用或明确采用等效规范时使用。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.grape-juice |
| classification_refs | CPC 3.0: 21434 Grape juice |
| covered_products | 直接压榨葡萄汁和由浓缩物还原的葡萄汁；清汁或浑浊汁；散装或消费包装；工厂大门处声明的常温、冷藏或冷冻状态 |
| excluded_products | 葡萄果肉饮料；混合果汁；葡萄果泥；以葡萄汁浓缩物作为参考产品的产品；拟用于发酵的葡萄汁醪；葡萄酒及其他发酵饮料；醋；糖浆；葡萄风味饮料 |
| representative_product | 符合声明路线和市场规格的未发酵、可发酵单一水果葡萄汁 |
| production_route | 接收完好葡萄、制备、机械提取、可选澄清或稳定、保藏和灌装；或接收葡萄汁浓缩物、受控还原、保藏和灌装；只有浓缩在声明的前景系统内进行时才纳入该步骤 |
| market_state | 工厂大门处的葡萄汁净质量，不含包装质量，并声明路线、清汁/浑浊状态、保藏方法、包装形式、储存条件和浓缩物状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 满足声明产品身份、组成、安全和放行规范的葡萄汁 |
| How much | 1 kg 葡萄汁净质量，不含包装质量 |
| How well | 合格放行产品，声明路线、可溶性固形物基准、清汁/浑浊状态、保藏方法、包装形式和储存条件 |
| How long or cycle | 一个生产和放行周期，终点为工厂大门；饮料不设服务持续时间 |
| reference_flow_link | `rf_grape_juice` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 工厂大门处按接收状态计量的 1 kg 葡萄汁净质量 |
| 参考产品流 | 葡萄汁 `d030caf4-ad0f-4371-8e04-b15ce67cc4fb` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 直接压榨或由浓缩物还原；混合路线时的浓缩物来源比例；清汁或浑浊汁；葡萄种或声明产品规范；可溶性固形物或浓度基准；保藏方法；包装形式；常温、冷藏或冷冻状态；工厂位置；生产期间 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将前景清单归一化到所有范围内加工损失之后、加入包装质量之前恰好 1 kg 的放行葡萄汁净质量。 |
| `material_mass_state` | 葡萄、葡萄汁中间品、浓缩物、配料、加工助剂、包装、废物和共产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录实际质量和实测物料状态。没有记录的换算时，不得混用湿质量、干质量、浓缩物质量和稀释后质量。 |
| `soluble_solids_separate` | 葡萄汁和浓缩物流 | 路线特定的浓度测量 | 声明的方法和单位 | 可溶性固形物或依法适用的浓度指标必须与质量分开记录。没有实测密度或批次配方证据时，不得将体积换算为质量，也不得从名义标签推断浓缩物稀释。 |
| `water_mass_by_use` | 配料水、还原水、工艺水和清洗水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按用途记录水。还原水必须与提取用水、清洗水和公用工程用水分开。 |
| `energy_carrier_preservation` | 电力、燃料、蒸汽、热、冷却和压缩公用工程 | 能源载体特定属性 | kWh、MJ 或载体计量单位 | 保留计量的载体和单位，相关时记录低位/高位热值，并仅使用已声明因子换算。影响评价前不得合并电力和热能。 |
| `packaging_mass_separate` | 初级、次级和运输包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按材料类型测量包装；若包装在声明的工厂大门产品系统内则纳入清单，但不得计入 1 kg 参考数量。 |
| `batch_mass_balance` | 每条路线和生产期间 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 核对实测质量投入与产品、中间品、共产品、废物、废水和实测或计算水损失；披露残差和调查阈值。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 对直接压榨葡萄汁，是在加工设施接收点计量的完好葡萄；对由浓缩物还原的葡萄汁，是在还原设施接收点计量的葡萄汁浓缩物和还原水；声明任何被纳入前景的上游步骤。 |
| starting_condition_role | 声明的起始物料是第一个前景技术圈投入；其上游生产由链接数据集表示，不在本 PCR 内重复创建。 |
| product_classification_scope | 与 CPC 3.0 代码 21434 对应的单一水果葡萄汁；分类仅为映射语境，不得覆盖本 PCR 的语义排除项。 |
| recursive_input_rule | 若葡萄汁或葡萄汁浓缩物从前景系统外进入，则按购入中间品记录路线、浓度、来源和供应商数据集引用；不得将其递归建模为相同的前景产出。 |
| upstream_dataset_requirement | 对葡萄、购入浓缩物或葡萄汁中间品、水、能源载体、加工助剂、清洗材料和包装使用有代表性的上游数据集。披露地理、技术、时间、分配和数据质量不匹配。 |
| disclosure | 声明路线、起始物料、纳入的单元操作、外包操作、浓缩/还原步骤、保藏与灌装方法、储存条件、产品和包装状态、截断、共产品去向及排除的生命周期阶段。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_product_identity` | 产品范围 | 仅纳入由已声明直接压榨路线或浓缩物还原路线制造的未发酵葡萄汁。葡萄果肉饮料、混合果汁、发酵产品和作为参考产品销售的浓缩物不属于本 PCR。 | `codex-cxs-247-2005`; `eu-directive-2001-112-ec` |
| `boundary_factory_gate` | 前景过程 | 纳入接收与制备、汁液提取或还原、所有场内澄清/稳定操作、保藏、灌装、范围内储存、清洗、公用工程、废水产生、产品损失，以及声明工厂大门前使用的包装。 | `codex-cxs-247-2005` |
| `boundary_route_specificity` | 直接压榨和浓缩物还原路线 | 只建模实际执行的操作。若购入浓缩物或中间品，则链接其上游数据集，不得在还原场址虚构浓缩步骤。 | `codex-cxs-247-2005`; `eu-directive-2001-112-ec` |
| `boundary_food_safety_controls` | 安全相关操作 | 记录实际保藏或病原控制操作及其监测参数。司法辖区特定的 HACCP 和病原降低要求仅在依法或依合同适用时采用。 | `codex-cxs-247-2005`; `us-ecfr-21-cfr-120` |
| `boundary_excluded_life_cycle` | 上下游阶段 | 葡萄园种植、购入投入的场外生产、工厂大门后的配送、零售、使用和生命末期需要链接数据集或明确扩展范围；不得默认为前景清单的一部分。 | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `grape_receipt_preparation` | 葡萄接收与制备 | `conditional` | 新鲜葡萄进入前景系统时必需 | 接收、检验、分选、需要时清洗、除梗或破碎并输送葡萄 | 接收和验收葡萄的 kg 数 |
| `juice_extraction_conditioning` | 葡萄汁提取与调理 | `conditional` | 直接压榨葡萄汁或在声明前景中进行提取时必需 | 机械提取汁液，并实施路线特定的沉降、澄清、过滤或稳定 | 提取葡萄汁中间品的 kg 数 |
| `juice_concentration` | 葡萄汁浓缩 | `conditional` | 仅在声明的前景系统内进行浓缩时纳入 | 物理移除水，并记录浓缩物和冷凝物流 | 产出浓缩物的 kg 数 |
| `juice_reconstitution` | 葡萄汁还原 | `conditional` | 以购入或前景浓缩物制造葡萄汁时必需 | 将浓缩物、实测水和允许恢复的组分配制至声明规范 | 还原葡萄汁的 kg 数 |
| `preservation_filling` | 保藏与灌装 | `required` | 始终必需；记录实际保藏和包装配置 | 实施经验证的保藏步骤、完成处理、灌装、封口和产品放行 | 1 kg 放行葡萄汁净质量 |
| `finished_storage` | 成品储存 | `conditional` | 工厂大门前存在常温、冷藏或冷冻储存时纳入 | 将产品维持在声明储存条件直至发运 | 发运葡萄汁的 kg 数 |

### 过程：葡萄接收与制备（`grape_receipt_preparation`）

#### 输入

##### 产品流

###### 接收用于制汁的新鲜葡萄（`fresh_grapes_input`）

在设施大门记录验收和拒收葡萄批次，包括来源、品种或葡萄种声明、成熟度或可溶性固形物证据，以及按接收状态计量的质量。

- 选定流：Fresh grapes (Tiangong UUID unresolved)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给合格葡萄汁生产的实测按接收状态葡萄质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行葡萄汁净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_batch_records`
- 来源：`codex-cxs-247-2005`
- 数量范围：暂定葡萄投入 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：10
  - 单位：kg grapes/kg released grape juice
  - 基准：等待路线特定前景得率证据的宽泛筛查区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制备和清洗用水（`preparation_water_input`）

记录用于葡萄清洗和制备的计量用水，并与卫生清洗水及任何还原水分开。

- 选定流：Process water (Tiangong UUID unresolved)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：供应给葡萄制备的实测用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行葡萄汁净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：
- 数量范围：暂定制备用水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg water/kg released grape juice
  - 基准：等待场址计量证据的宽泛筛查区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制备设备用电（`preparation_electricity_input`）

记录接收、输送、清洗、分选、除梗和破碎的计量或分表电力。

- 选定流：Electricity supplied at facility gate (Tiangong UUID unresolved)
- 流属性/单位：Energy / kWh (Tiangong flow-property UUID unresolved)
- 数量规则：可归属于葡萄制备的实测电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行葡萄汁净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：
- 数量范围：暂定制备用电 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg released grape juice
  - 基准：等待场址计量证据的宽泛筛查区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

常规前景流程预计无废物投入；若特殊路线使用外来废物，应予披露。

##### 基本流

仅当资源直接从环境跨界取用时记录；购入水属于产品流。

#### 输出

##### 产品流

###### 输送至提取的制备葡萄（`prepared_grapes_output`）

测量分选和制备后的输送质量，并保留与接收批次的链接。

- 选定流：Prepared grapes for extraction (Tiangong UUID unresolved)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测输送质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收葡萄或每 1 kg 放行葡萄汁净质量，并声明所用基准
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_batch_records`
- 来源：

##### 废物流

###### 拒收葡萄与制备残余物（`preparation_rejects_output`）

按去向记录拒收葡萄、梗、叶和异物，并说明该流属于废物、内部再用物料还是可销售共产品。

- 选定流：Rejected grapes and preparation residues (Tiangong UUID unresolved)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按物料和去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行葡萄汁净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_wastewater_records`
- 来源：
- 数量范围：暂定制备拒收物 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg/kg released grape juice
  - 基准：等待前景分选与去向记录的宽泛筛查区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制备废水（`preparation_wastewater_output`）

测量送往场内处理、下水道、场外处理或其他去向的废水；可得时保留路线和固形物信息。

- 选定流：Wastewater (Tiangong UUID unresolved)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按去向实测或计算排放质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行葡萄汁净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_wastewater_records`
- 来源：
- 数量范围：暂定废水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg wastewater/kg released grape juice
  - 基准：等待场址水量平衡证据的宽泛筛查区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

只有为本步骤实测或计算且未在废水或废物处理数据集中表示时，才记录直接排放。

### 过程：葡萄汁提取与调理（`juice_extraction_conditioning`）

#### 输入

##### 产品流

###### 制备葡萄或葡萄果浆（`prepared_grapes_input`）

链接前一过程的实测制备葡萄输送，并保留批次身份。

- 选定流：Prepared grapes for extraction (Tiangong UUID unresolved)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入提取的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 提取葡萄汁中间品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_batch_records`
- 来源：`codex-cxs-247-2005`

###### 提取、澄清和清洗用水（`extraction_water_input`）

按用途记录水，不得与浓缩物还原用水合并。

- 选定流：Process water (Tiangong UUID unresolved)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：供应给提取和调理的实测用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行葡萄汁净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：
- 数量范围：暂定提取用水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg water/kg released grape juice
  - 基准：等待场址计量证据的宽泛筛查区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 路线特定加工助剂（`processing_aids_input`）

记录实际使用的每种酶、澄清剂、过滤助剂、稳定剂或其他助剂，包括浓度、批次、质量和去向。本 PCR 不预设特定助剂。

- 选定流：Route-specific processing aid (Tiangong UUID unresolved)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每种加工助剂的实测使用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行葡萄汁净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_batch_records`
- 来源：`codex-cxs-247-2005`
- 数量范围：暂定加工助剂 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg released grape juice
  - 基准：宽泛筛查区间；需以助剂特定的评审证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 提取和调用电（`extraction_electricity_input`）

记录实际进行的压榨、泵送、沉降、分离、过滤和稳定操作用电。

- 选定流：Electricity supplied at facility gate (Tiangong UUID unresolved)
- 流属性/单位：Energy / kWh (Tiangong flow-property UUID unresolved)
- 数量规则：可归属于提取和调理的实测电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行葡萄汁净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：
- 数量范围：暂定提取用电 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg released grape juice
  - 基准：等待场址计量证据的宽泛筛查区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

常规流程预计无废物投入。

##### 基本流

只有资源直接从环境跨界取用时才记录。

#### 输出

##### 产品流

###### 提取葡萄汁中间品（`extracted_juice_output`）

在声明的提取和调理步骤后测量中间葡萄汁质量和浓度。

- 选定流：Grape juice intermediate (Tiangong UUID unresolved)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测中间品质量，并单独记录可溶性固形物或浓度结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个提取批次及每 1 kg 放行葡萄汁净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_batch_records`
- 来源：`codex-cxs-247-2005`

##### 废物流

###### 葡萄渣、酒泥和过滤残余物（`pomace_lees_output`）

按实测湿质量或干质量、水分基准、组成类别和实际去向记录每股物流。根据记录的去向和适用规则判定其为废物或共产品。

- 选定流：Grape pomace, lees and filtration residues (Tiangong UUID unresolved)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按物流、状态和去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行葡萄汁净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_wastewater_records`
- 来源：
- 数量范围：暂定葡萄渣及残余物 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg/kg released grape juice
  - 基准：等待路线特定前景质量平衡的宽泛筛查区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 提取和调理废水（`extraction_wastewater_output`）

按处理去向记录废水，并避免重复计算保留在葡萄渣或产品中的水。

- 选定流：Wastewater (Tiangong UUID unresolved)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测或通过水量平衡计算的排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行葡萄汁净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residue_wastewater_records`
- 来源：
- 数量范围：暂定提取废水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg wastewater/kg released grape juice
  - 基准：等待场址水量平衡的宽泛筛查区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

仅记录未通过废物或废水处理流表示的直接排放。

### 过程：葡萄汁浓缩（`juice_concentration`）

#### 输入

##### 产品流

###### 进入浓缩的葡萄汁原料（`juice_feed_input`）

记录紧邻浓缩前的进料质量和浓度。

- 选定流：Grape juice intermediate (Tiangong UUID unresolved)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测进料质量并测量可溶性固形物或浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 产出浓缩物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_batch_records`
- 来源：`codex-cxs-247-2005`

###### 浓缩热能（`concentration_heat_input`）

按载体记录实测蒸汽、燃料或热，并保留载体特定单位。

- 选定流：Thermal energy carrier (Tiangong UUID unresolved)
- 流属性/单位：Energy / MJ (Tiangong flow-property UUID unresolved)
- 数量规则：实测载体用量，或由计量载体记录计算的供热量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行葡萄汁净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：
- 数量范围：暂定浓缩热能 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：MJ/kg released grape juice
  - 基准：等待技术特定计量数据的宽泛筛查区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

常规流程预计无废物投入。

##### 基本流

仅当燃料在前景内燃烧且未由上游供热数据集表示时，记录直接燃烧排放。

#### 输出

##### 产品流

###### 葡萄汁浓缩物（`grape_concentrate_output`）

测量浓缩物质量和最终浓度；相关时单独记录回收香气或组分。

- 选定流：Grape-juice concentrate (Tiangong UUID unresolved)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测浓缩物质量并测量浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个浓缩批次及每 1 kg 放行葡萄汁净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_batch_records`
- 来源：`codex-cxs-247-2005`; `eu-directive-2001-112-ec`

##### 废物流

###### 冷凝水和浓缩损失（`concentration_water_loss_output`）

数据允许时，分别记录回收冷凝水、排放冷凝水和未收集水损失。

- 选定流：Condensate or water loss (Tiangong UUID unresolved)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测冷凝水加质量平衡计算的未收集水损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行葡萄汁净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_intermediate_batch_records`
- 来源：
- 数量范围：暂定浓缩水损失 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg released grape juice
  - 基准：等待进料与浓缩物浓度测量的宽泛筛查区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

仅在直接排放跨越环境边界时记录。

### 过程：葡萄汁还原（`juice_reconstitution`）

#### 输入

##### 产品流

###### 接收的葡萄汁浓缩物（`grape_concentrate_input`）

记录每批浓缩物的供应商、来源、质量、浓度和链接的上游数据集。

- 选定流：Grape-juice concentrate (Tiangong UUID unresolved)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每个还原批次使用的实测浓缩物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行葡萄汁净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_batch_records`
- 来源：`codex-cxs-247-2005`; `eu-directive-2001-112-ec`
- 数量范围：暂定浓缩物投入 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg concentrate/kg released grape juice
  - 基准：等待批次浓度和配方记录的宽泛筛查区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 还原用水（`reconstitution_water_input`）

记录水质量及适用的化学、微生物和感官质量证据。

- 选定流：Potable reconstitution water (Tiangong UUID unresolved)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：还原批次加入的实测水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行葡萄汁净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`codex-cxs-247-2005`; `eu-directive-2001-112-ec`
- 数量范围：暂定还原水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg water/kg released grape juice
  - 基准：等待浓缩物组成和批次配方的宽泛筛查区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

常规流程预计无废物投入。

##### 基本流

常规流程预计无基本流投入；如直接取用资源则披露。

#### 输出

##### 产品流

###### 还原葡萄汁中间品（`reconstituted_juice_output`）

测量产出质量并校验路线特定产品规范，不得假设不同浓缩物批次使用固定配方。

- 选定流：Reconstituted grape juice intermediate (Tiangong UUID unresolved)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次计算质量与实测输送质量和浓度结果核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个还原批次
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_intermediate_batch_records`
- 来源：`codex-cxs-247-2005`; `eu-directive-2001-112-ec`

##### 废物流

###### 还原损失和废水（`reconstitution_loss_output`）

按去向记录泄漏、管线损失、清洗废水和不合格批次。

- 选定流：Reconstitution loss and wastewater (Tiangong UUID unresolved)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按去向实测或质量平衡计算的损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行葡萄汁净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residue_wastewater_records`
- 来源：
- 数量范围：暂定还原损失 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg/kg released grape juice
  - 基准：等待批次核对的宽泛筛查区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

仅记录未通过废物处理表示的直接排放。

### 过程：保藏与灌装（`preservation_filling`）

#### 输入

##### 产品流

###### 最终保藏前的路线特定葡萄汁（`juice_before_preservation_input`）

记录进入最终保藏和灌装系统的葡萄汁质量、路线、浓度、清汁/浑浊状态及输送来源。

- 选定流：Grape juice intermediate (Tiangong UUID unresolved)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测输送质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个灌装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_batch_records`
- 来源：`codex-cxs-247-2005`

###### 保藏和灌装用电与热公用工程（`preservation_energy_input`）

分别记录巴氏杀菌或其他经验证保藏、冷却、泵送和灌装所用电力及各热能载体。

- 选定流：Electricity and thermal utilities (Tiangong UUID unresolved)
- 流属性/单位：carrier-specific Energy / kWh or MJ (Tiangong flow-property UUID unresolved)
- 数量规则：可归属于保藏和灌装的实测载体特定用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行葡萄汁净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`us-ecfr-21-cfr-120`
- 数量范围：暂定保藏能耗 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：MJ-equivalent screening value/kg released grape juice
  - 基准：仅用于宽泛筛查；清单中应保留载体特定前景值，不使用该合并值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装材料（`packaging_material_input`）

按材料、部件和实际质量记录初级、次级和运输包装。

- 选定流：Packaging material by type (Tiangong UUID unresolved)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按包装材料实测或物料清单计算质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行葡萄汁净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：
- 数量范围：暂定包装质量 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg packaging/kg released grape juice
  - 基准：等待产品特定物料清单的宽泛筛查区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗和卫生材料（`sanitation_material_input`）

分别记录清洗水和每种清洗或卫生化学品；没有浓度证据时，不得将化学溶液质量作为活性成分质量。

- 选定流：Cleaning and sanitation material (Tiangong UUID unresolved)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按记录的清洗批次分配实测使用物料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行葡萄汁净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_batch_records`
- 来源：
- 数量范围：暂定卫生材料 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg as-used material/kg released grape juice
  - 基准：等待清洗批次记录的宽泛筛查区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

常规流程预计无废物投入。

##### 基本流

只有燃料燃烧或制冷剂释放发生在前景边界内且有记录或声明的计算支持时才记录。

#### 输出

##### 产品流

###### 放行葡萄汁（`released_grape_juice_output`）

这是参考产品。记录所有范围内损失后的合格产品净质量，并将包装质量分开。

- 选定流：葡萄汁 `d030caf4-ad0f-4371-8e04-b15ce67cc4fb`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归一化后恰好 1 kg 放行葡萄汁净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-247-2005`

##### 废物流

###### 不合格葡萄汁、灌装损失和最终废水（`filling_loss_wastewater_output`）

按去向分别记录不合格产品、泄漏、开机或换产损失、包装废料和废水。

- 选定流：Filling loss and wastewater by destination (Tiangong UUID unresolved)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按物流和去向实测或核对质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行葡萄汁净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_wastewater_records`
- 来源：
- 数量范围：暂定灌装损失 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg/kg released grape juice
  - 基准：等待灌装和废水记录的宽泛筛查区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

仅当直接排放跨越环境边界且未在公用工程或处理数据集中重复计算时记录。

### 过程：成品储存（`finished_storage`）

#### 输入

##### 产品流

###### 进入储存的放行产品（`stored_product_input`）

记录工厂大门发运前的产品质量、包装配置、储存温度类别和储存时长。

- 选定流：葡萄汁 `d030caf4-ad0f-4371-8e04-b15ce67cc4fb`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入储存的实测产品净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 发运葡萄汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_dispatch_records`
- 来源：

###### 储存用电（`storage_electricity_input`）

记录发运前冷藏或冷冻储存及物料搬运设备的计量或分配电量。

- 选定流：Electricity supplied at facility gate (Tiangong UUID unresolved)
- 流属性/单位：Energy / kWh (Tiangong flow-property UUID unresolved)
- 数量规则：实测电量乘以记录的储存分配份额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 发运葡萄汁
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_storage_dispatch_records`
- 来源：
- 数量范围：暂定储存用电 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg grape juice dispatched
  - 基准：等待温度、时长和计量负荷证据的宽泛筛查区间
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

常规流程预计无废物投入。

##### 基本流

仅根据充注和维护记录或已记录计算来记录制冷剂泄漏。

#### 输出

##### 产品流

###### 待发运葡萄汁（`dispatch_ready_output`）

记录离开储存的合格净质量和声明工厂大门前的任何储存损失。

- 选定流：葡萄汁 `d030caf4-ad0f-4371-8e04-b15ce67cc4fb`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测发运质量归一化到 1 kg 参考流
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_storage_dispatch_records`
- 来源：

##### 废物流

如有储存损坏或过期产品，按质量和去向记录。

##### 基本流

仅记录有前景证据支持的直接排放。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | 多产出前景过程 | 首先通过独立计量和过程细分避免分配；只有明确论证替代功能及链接数据集时才扩展系统。 | `iso-14044-2006` |
| `allocation_residue_status` | 葡萄渣、葡萄籽、梗、酒泥、回收香气、浓缩副产物和不合格葡萄汁 | 根据实际去向和适用规则判定每项产出为废物、内部再用还是共产品。不得仅因某股物流可能有用途就分配避免负担或共产品抵扣。 | `iso-14044-2006` |
| `allocation_physical_then_other` | 无法避免的分配 | 当因果物理关系能够代表联合过程时采用并记录该关系。若不存在可辩护的物理关系，则采用另一种已声明关系，例如经济价值，并披露地理、期间、价格、敏感性和零价值处理。 | `iso-14044-2006` |
| `allocation_internal_recycling` | 内部葡萄汁回流、返工、水回收和余热回收 | 将内部循环保留在前景过程内，只计算净外部投入和产出。披露循环损失，不得对同一回收重复抵扣。 | `iso-14044-2006` |
| `allocation_route_mix` | 代表多条生产路线或产品配置的数据集 | 首先计算路线特定清单，再按声明生产期间实际放行产品净质量加权。没有路线份额时不得平均直接压榨和浓缩物还原路线。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_batch_records` | `grape_receipt_preparation`; `juice_extraction_conditioning`; `juice_reconstitution`; `preservation_filling` | 葡萄、浓缩物、加工助剂和清洗材料 | 地磅、接收、配方、库存领用和批次记录 | 物料身份；供应商；批次；来源；路线；毛重/皮重/净重；浓度；水分或活性基准；时间戳；生产批次 | 校准秤，或与生产批次核对的已验证库存领用记录 | kg 及声明的浓度基准 | 每批物料或生产批次 | 整个代表性生产期间 | 每个前景设施和范围内外包操作 | 按批次和路线汇总净物料，扣除有记录的退料，并按放行产品净质量归一化 | 秤校准；相关时供应商证书；批次可追溯性；核对签字 |
| `cp_water_records` | 所有适用过程 | 配料水、还原水、工艺水、清洗水和公用工程水 | 水表、批次配方和水质检测记录 | 水表起止；用水用途；批次；水源；处理；质量结果；时间戳 | 优先使用校准水表；有记录时才使用批次罐或工程计算 | kg 或 m3，并记录实测密度/换算 | 每批次或计量期间 | 整个代表性生产期间 | 每个设施；区分主要用途和还原水 | 需要时用记录的密度换算为质量；按记录的因果驱动分配共享用水 | 仪表校准；水质结果；完整性核对 |
| `cp_energy_records` | 所有适用过程 | 电力、燃料、蒸汽、热、冷却和压缩公用工程 | 电表、分表、发票和设备日志 | 载体；仪表起止；数量；单位；热值基准；批次或期间；设备；分配驱动 | 优先直接计量；没有分表时才从设施总表按记录方法分配 | 载体单位、kWh 或 MJ | 连续、批次或账期 | 整个代表性生产期间，包括季节性运行 | 每个设施及范围内公用工程系统 | 保留载体；扣除无关负荷；按计量时间、质量吞吐或记录的工程驱动分配共享公用工程 | 仪表校准；发票核对；换算因子来源；分配评审 |
| `cp_intermediate_batch_records` | `grape_receipt_preparation`; `juice_extraction_conditioning`; `juice_concentration`; `juice_reconstitution`; `preservation_filling` | 制备葡萄、葡萄汁、浓缩物、冷凝水和输送 | 批次单、罐位、秤、流量计和实验室记录 | 批次；投入/产出质量或体积；密度；可溶性固形物或浓度；路线；罐号；时间戳；回收组分 | 与代表性取样关联的校准质量或流量测量 | kg 及声明的分析单位 | 每批次和每次输送 | 整个代表性生产期间 | 每条相关过程线 | 核对输送，并由实测状态计算路线特定得率 | 校准；取样方法；实验室 QA；批次签字 |
| `cp_residue_wastewater_records` | 所有适用过程 | 拒收物、葡萄渣、酒泥、不合格产品、包装废料、废水和处理产出 | 秤、容器、转移单、仪表、处理和去向记录 | 物流；质量或体积；密度；水分；组成；去向；废物/共产品状态；日期；批次 | 直接称量或计量；未计量废水仅使用有记录的水量平衡 | kg 或 m3，并记录换算 | 每次装运、批次或计量期间 | 整个代表性生产期间 | 每个设施和去向 | 按物流、状态和去向分别汇总；不得用共产品抵减投入 | 秤/仪表校准；转移文件；处理记录；去向确认 |
| `cp_packaging_release_records` | `preservation_filling` | 包装和放行产品 | 包装物料清单、灌装计数、净含量、秤、QA 放行和拒收记录 | SKU；包装部件；材料；部件质量；灌装件数；净含量；验收/拒收数量；批次；放行状态 | 已验证物料清单及校准净质量和生产线计数记录 | kg 和件数 | 每个 SKU 和批次 | 整个代表性生产期间 | 每条灌装线和产品配置 | 按已验证部件质量将件数换算为质量；放行葡萄汁净质量与包装分开归一化 | 秤校准；物料清单版本；放行证书；核对 |
| `cp_storage_dispatch_records` | `finished_storage` | 储存产品、储存能耗、损失和发运 | 仓库库存、温度、时间、仪表和发运记录 | 批次；质量；进出时间；温度类别；仪表数量；损失；去向 | 与监控储存条件和仪表期间关联的库存事务 | kg、h 或 day、温度和 kWh | 每个批次和计量期间 | 整个范围内储存期间 | 每个常温、冷藏或冷冻区域 | 按占用质量-时间或其他记录的因果驱动分配能耗；核对入库、发运和损失 | 温度日志；仪表证据；库存核对；发运记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有前景行 | 归一化数量 = 路线特定数量 / 放行葡萄汁净质量；分母不含包装质量 | 实测行数量；验收放行产品净质量 | 每 1 kg 葡萄汁的数量 | `iso-14044-2006` |
| `calc_direct_route_yield` | 直接压榨路线 | 得率 = 实测提取或放行葡萄汁质量 / 验收葡萄质量，并报告物料状态和可溶性固形物基准 | 验收葡萄质量；中间品和产品质量；浓度结果 | 路线得率和核对证据 | `codex-cxs-247-2005` |
| `calc_reconstitution_balance` | 浓缩物还原路线 | 将浓缩物、还原水、恢复组分和损失与实测还原产出核对；使用实测批次浓度，不使用通用因子 | 浓缩物质量和浓度；水；恢复组分；产出质量和浓度；损失 | 还原批次平衡 | `codex-cxs-247-2005`; `eu-directive-2001-112-ec` |
| `calc_mass_balance` | 每个过程和路线 | 残差 = 实测质量投入总和 - 实测质量产出总和 - 单独量化的转移或水损失；报告残差并签署评审 | 投入质量；产品和共产品质量；废物；废水；实测/计算损失 | 质量平衡残差 |  |
| `calc_shared_utility_allocation` | 共享公用工程 | 只用已记录的因果驱动分配实测共享总量；保留载体和单位 | 共享仪表数量；可得时分表数据；运行时间、吞吐量或工程驱动 | 过程特定公用工程数量 | `iso-14044-2006` |
| `calc_route_weighted_result` | 多路线数据集 | 总归一化清单 = sum（路线归一化清单 × 路线放行质量份额） | 路线清单；各路线放行产品质量 | 生产加权数据集清单 | `iso-14044-2006` |
| `calc_packaging_mass` | 包装 | 包装质量 = 已验证部件质量 × 合格包装件数，并与领用及报废包装核对 | 部件质量；合格件数；领用物料；废料 | 每 kg 葡萄汁净质量的包装质量 |  |
| `calc_storage_energy` | 范围内储存 | 分配给产品的储存能耗 = 区域计量能耗 × 已记录产品质量-时间份额 | 区域仪表；产品质量；停留时间；总占用质量-时间 | 每 kg 发运产品的储存用电 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 产品和路线 | 对每个代表产品配置保留产品规范、路线声明、葡萄身份、浓缩物状态、清汁/浑浊状态、保藏方法、包装和储存状态。 | 批次规范、标签或散装规范、配方和放行记录；`codex-cxs-247-2005`; `eu-directive-2001-112-ec` |
| `dq_temporal_coverage` | 前景数据 | 覆盖有代表性的连续生产期间或全部相关生产批次，并披露停机、年份或收获影响、季节性储存和异常批次。 | 带日期的生产、计量和发运记录及覆盖声明 |
| `dq_mass_and_energy_measurement` | 物料和公用工程行 | 对实质性数量使用经校准或验证的测量；披露估算份额、换算因子、缺失期间和分配驱动。 | 校准、发票、仪表核对和不确定性说明 |
| `dq_route_separation` | 直接压榨、浓缩和还原路线 | 在路线加权前，保持路线特定投入、得率、能源、水、废物和产品记录分开。 | 带路线编码的批次和生产记录 |
| `dq_completeness` | 所有前景过程 | 纳入主要原料、按用途用水、电力、热能载体、加工助剂、清洗、包装、残余物、废水、损失和直接排放；或记录某类别为何为零或不适用。 | 签署的完整性清单及过程质量/能量核对 |
| `dq_safety_and_quality_controls` | 保藏和放行 | 对所用保藏和依法适用的葡萄汁安全控制，保留实际监测参数、偏差、纠正措施和验证证据。 | 适用时的 HACCP 或等效计划与记录；过程验证；放行检验；`codex-cxs-247-2005`; `us-ecfr-21-cfr-120` |
| `dq_upstream_links` | 购入投入 | 对葡萄、浓缩物、水、能源、助剂和包装记录供应商、地理、技术、时间、浓度基准和数据集引用；披露代理使用。 | 供应商和数据集元数据及代表性评审 |
| `dq_reasoned_ranges` | 暂定 QA 校验范围 | 每个 `reasoned_estimate` 范围仅作为筛查信号。用于发布关键决策前，应由前景分布或经评审外部证据替换。 | 显示每个暂定范围已替换、接受或删除的评审记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 所选参考产品必须解析为 Grape juice `d030caf4-ad0f-4371-8e04-b15ce67cc4fb`，其为公开 state-100 Product flow，分类 CPC 21434，参考属性为 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`，参考单位组为 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位为 kg。 |  |
| `validate_product_scope` | 产品身份 | 拒绝葡萄果肉饮料、混合果汁、以浓缩物作为产品、发酵产品或其他排除产品的数据集；必须声明直接压榨或浓缩物还原路线。 | `codex-cxs-247-2005`; `eu-directive-2001-112-ec` |
| `validate_reference_quantity` | 参考数量 | 确认范围内损失后的放行葡萄汁净质量恰为 1 kg，不含包装质量，并包含所有必需限定信息。 |  |
| `validate_route_processes` | 过程图 | 要求保藏与灌装以及每个由路线触发的条件过程；当相应中间品为购入时，不得虚构浓缩或提取步骤。 | `codex-cxs-247-2005`; `eu-directive-2001-112-ec` |
| `validate_concentration_reconstitution` | 浓缩和浓缩物还原路线 | 要求进料、浓缩物、水、恢复组分、产出和损失具有实测质量和浓度证据；不得接受无支持的通用稀释因子。 | `codex-cxs-247-2005`; `eu-directive-2001-112-ec` |
| `validate_inventory_completeness` | 前景清单 | 核查葡萄或浓缩物、按用途用水、电力、热能载体、加工助剂、清洗、包装、产品、残余物、废水、损失和直接排放；每个缺项必须明确为零、不适用或范围外。 |  |
| `validate_mass_balance` | 每个路线和过程 | 要求披露质量平衡残差、调查阈值和评审决定；湿态、干态、浓缩态和稀释态必须可追溯换算。 |  |
| `validate_safety_control` | 保藏和放行 | 要求实际保藏或病原控制参数及放行证据。21 CFR Part 120 适用时，要求场址特定的危害分析、HACCP 记录和适用的病原降低证据，不得假设通用处理。 | `codex-cxs-247-2005`; `us-ecfr-21-cfr-120` |
| `validate_allocation` | 共产品和共享过程 | 要求产出去向和废物/共产品状态、避免分配评审、所选分配关系、参数和敏感性；拒绝对可能但未经证实的用途自动抵扣。 | `iso-14044-2006` |
| `validate_route_weighting` | 多路线或多 SKU 数据集 | 聚合前要求实际放行质量份额和路线特定清单；包装和储存配置必须保持可追溯。 | `iso-14044-2006` |
| `validate_uuid_resolution` | 清单身份 | 参考产品和 Mass 支持链已解析。在独立确认前，其他每个 Tiangong 清单流或属性 UUID 均保持 unresolved；不得把语义候选表示为精确数据库身份。 |  |
| `validate_provisional_ranges` | QA 范围 | 超出暂定校验范围的值应触发评审，但不得用校验范围替代前景数据。发布评审必须替换、明确接受或删除每个 `reasoned_estimate` 范围。 |  |
| `validate_source_traceability` | 证据 | 每条由外部证据约束的边界、身份、安全、质量或分配规则必须引用已列来源；网页检索记录和 Tiangong 命令轨迹必须留在 PCR 外。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明工厂大门处葡萄汁的前景生产数据集 |
| downstream_use | `secondary_dataset`; 在完成方法学评审、来源评审并解析或明确接受身份及定量缺口后可作 `background_dataset` |
| allowed_use | 当地理、时间、技术、浓缩路线、包装和储存具有代表性时，用于路线和市场状态匹配的 LCA 研究、供应链模型和下游产品 |
| excluded_use | 葡萄果肉饮料、混合果汁、以浓缩物作为参考产品、发酵产品、单独葡萄园种植，或未经代表性评审的其他路线/地理/市场状态 |
| required_metadata | PCR id 和版本；参考流 UUID 和单位支持链；地理；生产期间；直接压榨/浓缩物还原路线及份额；葡萄或浓缩物来源；可溶性固形物基准；清汁/浑浊状态；保藏方法；包装；储存条件；过程覆盖；分配；上游数据集；未解析身份；数据所有者和评审状态 |
| required_quality_disclosure | 前景与代理份额；仪表和秤覆盖；路线分离；浓度和质量平衡；数据缺口；暂定范围；分配选择；安全控制适用性；上游代表性；不确定性和评审决定 |
| update_trigger | 产品身份或法律改变；路线、配方、葡萄或浓缩物来源、技术、保藏、包装或储存改变；出现实质性共产品去向；数据质量实质改变；Tiangong UUID 得到解析；暂定证据被替换；或声明代表期间到期 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-247-2005` | `standard` | Codex Alimentarius, General Standard for Fruit Juices and Nectars, CXS 247-2005, amended 2025, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+247-2005%2FCXS_247e.pdf (retrieved 2026-08-11) | 葡萄汁身份、直接压榨与浓缩物还原路线、组成和真实性核查、加工助剂语境、卫生及与标签相关的路线披露 |
| `eu-directive-2001-112-ec` | `official_guidance` | Council Directive 2001/112/EC relating to fruit juices and certain similar products intended for human consumption, current EUR-Lex record, https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=celex%3A32001L0112 (retrieved 2026-08-11) | 适用欧盟市场的产品和路线定义、浓缩与还原区分、允许工艺及路线披露语境 |
| `us-ecfr-21-cfr-120` | `official_guidance` | Electronic Code of Federal Regulations, Title 21, Part 120, Hazard Analysis and Critical Control Point (HACCP) Systems, https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-120 (retrieved 2026-08-11) | 美国市场条件适用的危害分析、监控、验证、记录保存和病原降低控制证据 |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, confirmed current in 2022, https://www.iso.org/standard/38498.html (retrieved 2026-08-11) | LCI 范围、清单归一化、分配层级、报告、解释和评审框架 |
