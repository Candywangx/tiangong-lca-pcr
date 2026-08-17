---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-dried-but-not-smoked-salted-but-not-dried-or-smoked-or-in-brine
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 干制但未熏制的鱼、盐渍但未干制或熏制的鱼，或盐水浸渍鱼

## 1. 范围与适用性

本 PCR 适用于以以下三种声明保存状态之一投放市场的食用鱼产品：干制但未熏制；盐渍但既未干制也未熏制；或浸于盐水中。范围包括接收合格的鲜鱼或冻鱼、路线特定的解冻与整理、适用时的盐渍或盐水浸渍、适用时的不使用烟熏的干燥、分选、包装，以及为交付声明产品状态所需的储存操作。上游捕捞或养殖、饲料生产、孵化、渔船作业以及运至声明加工厂门口的运输应通过关联上游数据集表示，不在前景边界内重复构建。

本 PCR 不包括熏鱼和烟熏干制鱼、食用鱼粉、作为独立产品类别销售的鱼副产品、罐藏或熟制鱼、鱼子酱、甲壳类、软体动物，以及主要保存特征为冷冻或上述范围外其他加工方式的产品。特定产品的食品安全、添加剂、污染物、标签、寄生虫控制与法律要求仍然具有约束力，并须按物种、产地、路线和市场管辖区声明。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-dried-but-not-smoked-salted-but-not-dried-or-smoked-or-in-brine |
| classification_refs | CPC 3.0: 21231，精确分类语境 |
| covered_products | 不经烟熏的食用干鱼、未经干制或熏制的盐渍鱼，以及以盐水保存或销售的鱼；可为整鱼、剖开鱼、去脏鱼、鱼片或其他声明的食用形态 |
| excluded_products | 熏鱼或烟熏干制鱼；食用鱼粉；单独销售的鱼副产品；熟制、罐藏或其他方式加工的鱼；鱼子酱；甲壳类；软体动物；非食品产品 |
| representative_product | 采用声明的干制、盐渍或盐水路线并处于销售状态的包装食用鱼 |
| production_route | 接收鱼 -> 条件性解冻 -> 整理 -> 路线特定盐渍/盐水浸渍 -> 条件性非烟熏干燥 -> 分选/调理 -> 包装 -> 路线所需储存 |
| market_state | 加工厂门口的包装产品；声明储存制度、物种、产品形态、盐渍方法、干燥状态、盐水状态和包装系统 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 以声明的干制但未熏制、盐渍但未干制或熏制，或盐水浸渍状态提供的食用鱼 |
| How much | 1 kg 合格产品净质量，不含包装 |
| How well | 符合声明的物种、产品形态、保存路线、食品安全计划、质量规范、包装和储存制度 |
| How long or cycle | 在加工厂门口交付的一个生产批次；保质期另行声明并提供依据 |
| reference_flow_link | 功能单位由净产品质量基准下恰好 1 kg 参考产品流实现 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 产品净质量 |
| 参考产品流 | Fish, dried but not smoked, salted but not dried or smoked, or in brine `39347f84-4a1d-414b-89f0-746f31b01aa6` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 鱼类物种及学名或商品身份；已知时的野生或养殖来源；整鱼/剖开/去脏/鱼片形态；干制/盐渍/盐水路线；盐渍或盐水浸渍方法；适用时的干燥方法和终点声明；盐水产品按沥干或未沥干销售的基准；储存温度制度；包装系统；地域和时间范围 |

构建前景数据包时，`必需限定信息` 中每一项均须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中明确声明。缺失限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告恰好 1 kg 合格食用产品且不含包装；对盐水产品，声明商业净含量是否包含盐水，并在与声明规范有关时同时采集沥干鱼质量。 |
| `mass_input_output_consistency` | 鱼、盐、水、盐水、产品、共产品和废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留实测湿基数量并计算每 1 kg 参考产品的归一化数量；不得在没有明确换算的情况下混用沥干与未沥干基准或干基与湿基测量。 |
| `temperature_time_records` | 冷藏、解冻、盐渍、盐水浸渍、成熟、干燥和储存步骤 | 温度和经过时间 | °C 和 h | 保留温度与时间实测记录的原始单位并声明任何换算；路线特定限值来自经验证的 HACCP/质量计划和适用规范。 |
| `energy_conversion` | 电力和燃料 | 能量 | kWh 和 MJ | 保留源仪表或发票单位及换算因子；共享能源仅按第 7 节规则分配，并报告每 1 kg 参考产品的归一化结果。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 合格的鲜、冷藏或冷冻食用鱼在加工设施接收，记录实测质量、物种/产品形态、来源、保存状态、温度条件、供应商批次身份和验收处置。 |
| starting_condition_role | 接收鱼是技术系统产品投入；捕捞或养殖及运至厂门口属于上游，通过有代表性的数据集关联。 |
| product_classification_scope | 前景输出仅限 CPC 3.0 代码 21231 的产品状态；烟熏及其他加工鱼身份不在本 PCR 范围。 |
| recursive_input_rule | 已采购且属于同一 CPC 21231 类别的投入，按其声明保存路线仅记录一次为上游产品投入；除非前景设施实施了有记录的转化，否则不得递归重复加工。 |
| upstream_dataset_requirement | 按可得的地域、技术和时间分辨率，为接收鱼、盐、水、能源、包装、制冷剂、运输和废物处理关联有代表性的上游数据集。 |
| disclosure | 声明物种、来源、投入状态、路线步骤、盐渍/盐水方法、干燥技术与终点声明、储存制度、包装、共产品、废物处理、分配、排除项和数据缺口。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_gate` | 前景过程系统 | 纳入从合格鱼接收到加工厂门口包装参考产品之间实际实施的所有操作，包括条件性解冻、整理、盐渍/盐水浸渍、干燥、中间储存、包装、制冷、可归属的卫生物料使用、拒收物、废水/废盐水和废物处理。 | codex-cxc-52-2003 |
| `boundary_upstream_linking` | 采购鱼和其他技术系统投入 | 使用关联上游数据集表示声明接收门口之前的生产和交付，并披露缺失或代理的地域、技术和时间信息。 | eu-pef-2021-2279 |
| `boundary_route_exclusion` | 烟熏和范围外加工 | 本 PCR 下不得纳入烟熏或烟熏干燥；实施这些操作的数据集须采用适用的产品类别规则。 | unsd-cpc-3-0-2025 |
| `boundary_food_safety_controls` | 所有前景步骤 | 对实际过程顺序建模，并保留 HACCP/前提方案记录，以确立相关危害、关键或操作限值、监测、纠正措施、验证和批次放行。 | codex-cxc-52-2003 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fish_receipt_and_conditioning` | 鱼接收与投入调理 | required | 始终；仅在使用时纳入解冻和冷藏/冷冻存放 | 前景接收、验收和状态控制 | kg 合格鱼 |
| `fish_preparation` | 鱼整理与清洗 | required | 整理程度随整鱼/剖开/去脏/鱼片形态确定 | 前景食用部分整理 | kg 整理后鱼 |
| `salting_or_brining` | 盐渍、盐水浸渍或盐水保持 | conditional | 盐渍和盐水路线必须纳入；干燥前使用盐时亦纳入 | 前景保存 | kg 盐渍或盐水鱼 |
| `non_smoking_drying` | 非烟熏干燥 | conditional | 仅干制但未熏制路线必须纳入 | 前景脱水 | kg 干鱼 |
| `packing_and_storage` | 分选、包装与路线所需储存 | required | 始终；产品状态和经验证计划要求时纳入冷藏 | 最终前景产品制备 | 1 kg 参考产品 |

### 过程：鱼接收与投入调理（`fish_receipt_and_conditioning`）

#### 输入

##### 产品流

###### 接收食用鱼（`received_fish`）

记录跨越设施门口的每个合格鲜、冷藏或冷冻鱼批次的质量和声明身份。

- 选定流：路线适用的食用鱼原料；Tiangong UUID 待精确身份审查
- 流属性/单位：Mass / kg
- 数量规则：归属于生产批次的接收鱼实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fish_receipt`
- 来源：`codex-cxc-52-2003`；仅当接收物料属于该标准范围时使用 `codex-cxs-190-1995`
- 数量范围：接收鱼质量暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：10
  - 单位：kg/kg reference product
  - 基准：每 1 kg 合格产品的接收鱼
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷却或解冻能源（`receipt_conditioning_energy`）

发生冷藏/冷冻存放或受控解冻时，记录所用的计量电力和实测燃料。

- 选定流：按设施实际供应的电力和/或燃料载体；UUID 待精确身份审查
- 流属性/单位：Energy / kWh or MJ
- 数量规则：生产批次的计量能源或共享仪表分配能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fish_receipt`
- 数量范围：接收调理能源暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kWh/kg reference product
  - 基准：每 1 kg 合格产品的综合电当量筛选
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 合格调理鱼（`accepted_conditioned_fish`）

计算扣除拒收和解冻滴液损失后转入整理的合格质量。

- 选定流：合格鱼中间体；内部产品流
- 流属性/单位：Mass / kg
- 数量规则：接收鱼减去拒收鱼和实测调理损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格调理鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fish_receipt`

##### 废物流

###### 拒收鱼与解冻损失（`receipt_rejects`）

记录拒收物，并分别识别食用转用、共产品回收、废水或废物处理去向。

- 选定流：按实际去向的拒收鱼或解冻损失；UUID 待精确身份审查
- 流属性/单位：Mass / kg
- 数量规则：拒收鱼实测质量加分别实测或计算的解冻滴液损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 接收鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fish_receipt`
- 数量范围：接收损失暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg received fish
  - 基准：每 kg 接收鱼的拒收物和解冻损失
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：鱼整理与清洗（`fish_preparation`）

#### 输入

##### 产品流

###### 待整理合格鱼（`fish_for_preparation`）

转移合格中间体而不重复计算其上游负荷。

- 选定流：合格鱼中间体；内部产品流
- 流属性/单位：Mass / kg
- 数量规则：实测或质量平衡得到的合格调理鱼
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 整理后鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_preparation`

###### 整理用水（`preparation_water`）

记录清洗与整理所用的饮用水或其他依法适用水。

- 选定流：按实际供应的饮用水或工艺水；UUID 待精确身份审查
- 流属性/单位：Volume / m3 or Mass / kg
- 数量规则：归属于批次的计量用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 整理后鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation`
- 来源：`codex-cxc-52-2003`
- 数量范围：整理用水暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：m3/kg prepared fish
  - 基准：每 kg 整理后鱼输出的用水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 整理后鱼（`prepared_fish`）

记录转入盐渍、盐水浸渍、干燥或最终处理的食用鱼。

- 选定流：整理后鱼中间体；内部产品流
- 流属性/单位：Mass / kg
- 数量规则：整理后食用鱼实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 整理后鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation`

##### 废物流

###### 整理边角料与拒收物（`preparation_offcuts`）

将有市场的共产品与废物分开，并记录各自去向。

- 选定流：按实际处置的鱼边角料或拒收物；UUID 待精确身份审查
- 流属性/单位：Mass / kg
- 数量规则：按处置去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格鱼投入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation`
- 数量范围：整理损失暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.8
  - 单位：kg/kg accepted fish input
  - 基准：每 kg 合格鱼的整理边角料和拒收物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 整理废水（`preparation_wastewater`）

记录送往处理的废水，并在分别测量时包括夹带固体。

- 选定流：按实际接收处理方式的废水；UUID 待精确身份审查
- 流属性/单位：Volume / m3 or Mass / kg
- 数量规则：计量排放，或用水投入减实测带出和蒸发
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 整理后鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_preparation`
- 数量范围：整理废水暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：m3/kg prepared fish
  - 基准：每 kg 整理后鱼输出的废水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：盐渍、盐水浸渍或盐水保持（`salting_or_brining`）

#### 输入

##### 产品流

###### 待保存整理后鱼（`fish_for_salting`）

记录进入声明盐渍或盐水路线的整理后鱼。

- 选定流：整理后鱼中间体；内部产品流
- 流属性/单位：Mass / kg
- 数量规则：整理后鱼实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 盐渍或盐水鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salting_batch`

###### 食品级盐（`food_grade_salt`）

记录干盐渍、湿盐渍、盐水浸渍、注射、腌渍或补充使用的新食品级盐；不得假定重复使用盐。

- 选定流：按实际供应的氯化钠或食品级盐；UUID 待精确身份审查
- 流属性/单位：Mass / kg
- 数量规则：生产批次称量加入的盐
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 盐渍或盐水鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salting_batch`
- 来源：`codex-cxc-52-2003`
- 数量范围：盐投入暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：5
  - 单位：kg/kg salted or brined fish output
  - 基准：每 kg 保存鱼输出的食品级盐投入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 配制盐水用水（`brine_water`）

路线使用盐水时，记录配制或补充盐水所用饮用水。

- 选定流：按实际供应的饮用水；UUID 待精确身份审查
- 流属性/单位：Volume / m3 or Mass / kg
- 数量规则：计量或按批次称量的补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 盐渍或盐水鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salting_batch`
- 来源：`codex-cxc-52-2003`
- 数量范围：盐水用水暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.02
  - 单位：m3/kg salted or brined fish output
  - 基准：每 kg 保存鱼输出的盐水配制用水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 盐渍或盐水鱼中间体（`salted_or_brined_fish`）

记录保存鱼质量以及该路线实测的盐/盐水、时间、温度和放行准则。

- 选定流：盐渍或盐水鱼中间体；内部产品流
- 流属性/单位：Mass / kg
- 数量规则：按明确声明基准实测的鱼加保留盐水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 保存鱼中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salting_batch`
- 来源：`codex-cxc-52-2003`

##### 废物流

###### 废盐水与含盐废水（`spent_brine`）

当处理方式不同时，将废盐水、滴液和清洗排放与淡水废水分开记录。

- 选定流：按实际处理的废盐水或含盐废水；UUID 待精确身份审查
- 流属性/单位：Volume / m3 or Mass / kg
- 数量规则：按去向计量排放或进行批次平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 盐渍或盐水鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salting_batch`
- 数量范围：废盐水暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.02
  - 单位：m3/kg salted or brined fish output
  - 基准：每 kg 输出的废盐水和含盐废水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：非烟熏干燥（`non_smoking_drying`）

#### 输入

##### 产品流

###### 进入干燥的鱼（`fish_for_drying`）

记录进入非烟熏干燥的鱼质量及其先前盐渍状态。

- 选定流：整理后或盐渍鱼中间体；内部产品流
- 流属性/单位：Mass / kg
- 数量规则：干燥器入口实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 干鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch`

###### 干燥能源（`drying_energy`）

记录风机、加热器、除湿、控制装置和可归属辅助设备消耗的电力与燃料；排除烟熏燃料。

- 选定流：按实际干燥技术的电力和/或燃料载体；UUID 待精确身份审查
- 流属性/单位：Energy / kWh or MJ
- 数量规则：干燥批次的计量能源或工程分配能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 干制产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch`
- 数量范围：干燥能源暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kWh/kg dried product
  - 基准：每 kg 干制产品输出的综合电当量筛选
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 干鱼中间体（`dried_fish`）

记录最终干鱼质量和产品特定的经验证干燥终点；本 PCR 不主张通用水分或水活度限值。

- 选定流：干鱼中间体；内部产品流
- 流属性/单位：Mass / kg
- 数量规则：合格干鱼实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 干鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch`
- 来源：`codex-cxc-52-2003`

##### 废物流

###### 干燥拒收物（`drying_rejects`）

记录干燥后移除的不合格鱼及其处置。

- 选定流：按实际处置的不合格干鱼；UUID 待精确身份审查
- 流属性/单位：Mass / kg
- 数量规则：拒收质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 进入干燥的鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch`
- 数量范围：干燥拒收暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg fish entering drying
  - 基准：每 kg 干燥器投入的不合格干鱼
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：分选、包装与路线所需储存（`packing_and_storage`）

#### 输入

##### 产品流

###### 待包装合格保存鱼（`fish_for_packing`）

记录转入分选和包装的干制、盐渍或盐水产品，不重复计算内部转移。

- 选定流：合格保存鱼中间体；内部产品流
- 流属性/单位：Mass / kg
- 数量规则：包装入口实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_storage`

###### 初级和次级包装（`packaging_materials`）

按材料类型记录每种包装的实测或物料清单质量。

- 选定流：按实际聚合物、纸、金属、玻璃、木材或复合材料的包装；UUID 待精确身份审查
- 流属性/单位：Mass / kg
- 数量规则：物料清单或包装发出称量减退回未用包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_storage`
- 来源：`codex-cxc-52-2003`
- 数量范围：包装质量暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：2
  - 单位：kg/kg net reference product
  - 基准：每 kg 净产品的包装发出总量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 储存能源（`storage_energy`）

记录截至设施门口的路线所需制冷、通风或湿度控制能源。

- 选定流：按实际储存系统的电力和/或燃料载体；UUID 待精确身份审查
- 流属性/单位：Energy / kWh or MJ
- 数量规则：按占用容量-时间或其他披露的因果驱动因素分配的计量能源
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packing_storage`
- 数量范围：储存能源暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kWh/kg reference product
  - 基准：截至设施门口的综合电当量筛选
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 参考鱼产品（`reference_product`）

合格包装产品是所有归一化前景数量的定量参考。

- 选定流：Fish, dried but not smoked, salted but not dried or smoked, or in brine `39347f84-4a1d-414b-89f0-746f31b01aa6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：恰好 1 kg 产品净质量，不含包装
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 包装拒收物与包装废物（`packing_waste`）

按处理或回收去向分别记录不合格产品和包装废物。

- 选定流：按实际材料和去向的产品拒收物与包装废物；UUID 待精确身份审查
- 流属性/单位：Mass / kg
- 数量规则：按废物类型和去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_storage`
- 数量范围：包装废物暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg reference product
  - 基准：每 kg 净产品的包装拒收物和包装废物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | 共享或多输出前景操作 | 首先通过过程细分避免分配；当被替代功能可证明且与研究目标一致时，可采用系统扩展。 | eu-pef-2021-2279 |
| `allocation_physical_second` | 无法避免且存在因果物理关系的联合过程 | 按实测因果物理关系分配，例如质量、加工时间、占用容量-时间或计量能源；说明该驱动因素为何代表资源使用或排放。 | eu-pef-2021-2279 |
| `allocation_other_relation_last` | 无法避免且没有可辩护物理关系的联合过程 | 仅在前述方案不可行时采用其他有记录的关系，通常为代表期经济价值；披露价格、期间、币种、份额和敏感性。 | eu-pef-2021-2279 |
| `co_product_or_waste_status` | 边角料、拒收鱼、回收盐/盐水及其他输出 | 仅当输出具有有记录的去向和功能或市场价值时将其归类为共产品；否则按废物进入实际处理建模。没有明确系统扩展模型时不得计入避免负荷信用。 | eu-pef-2021-2279 |
| `internal_flow_no_double_count` | 前景步骤之间转移的鱼中间体 | 内部转移携带质量用于平衡校验，但不得引入第二次上游负荷。 | eu-pef-2021-2279 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fish_receipt` | `fish_receipt_and_conditioning` | 接收鱼、拒收物、解冻损失与调理能源 | 地磅/秤、接收检验、温度记录、仪表、供应商批次记录 | lot_id; species; product_form; origin; input_state; gross_mass; tare_mass; accepted_mass; reject_mass; thaw_loss; receipt_temperature; holding_time; electricity; fuel; disposition | 校准称量、验收检查、连续或批次温度记录以及可归属仪表/发票读数 | kg; °C; h; kWh; MJ | 每批；能源至少每个生产活动期 | 包括正常季节变化的代表性运行期 | 每个纳入设施及接收/储存区域 | 汇总批次数量；扣除皮重；按实测因果驱动分配共享调理能源；归一化至合格输出 | 校准、供应商规范、验收决定、温度轨迹、仪表核对和批次关联 |
| `cp_preparation` | `fish_preparation` | 鱼投入/输出、用水、边角料和废水 | 批次单、校准秤、水表、废物票据 | lot_id; input_mass; prepared_mass; water_input; offcut_mass_by_disposition; reject_mass; wastewater_volume; solids_mass | 批次称量和计量，并按处置去向记录废物 | kg; m3 | 每批或与批次关联的连续仪表区间 | 代表性运行期 | 每条整理线 | 按批进行质量平衡；仅汇总相同产品形态和路线；归一化至整理后和最终输出 | 秤/仪表校准、批次核对和废物去向证据 |
| `cp_salting_batch` | `salting_or_brining` | 鱼、盐、盐水用水、保存输出、废盐水、时间和温度 | 配方/批次单、秤、流量计、盐度计或经验证浓度测试、温度记录器 | lot_id; method; fish_input_mass; salt_mass; brine_water; brine_concentration; make_up; time; temperature; output_mass; spent_brine; discharge_destination | 称量各批次添加量和输出；按经验证计划监测浓度、时间和温度 | kg; m3; concentration unit; °C; h | 每批，监测频率由 HACCP/质量计划规定 | 代表性运行期 | 每条盐渍/盐水线和容器 | 批次质量平衡；不得跨实质不同方法平均；归一化至保存输出和参考产品 | 校准、配方批准、浓度检查、温度/时间记录、纠正措施和批次放行 |
| `cp_drying_batch` | `non_smoking_drying` | 干燥器投入/输出、能源、终点和拒收物 | 批次单、校准秤、能源仪表、时间/温度/湿度记录、经验证终点测试 | lot_id; dryer_id; input_mass; output_mass; reject_mass; electricity; fuel; start_time; end_time; temperature_profile; humidity_profile; endpoint_method; endpoint_result | 称量投入/输出；计量能源；记录运行曲线；用经验证方法测试声明终点 | kg; kWh; MJ; °C; h; declared endpoint unit | 每批或连续运行区段 | 代表性季节和装载条件 | 每种干燥技术和场址 | 分开技术和配方；计算得率与单位能源；归一化至干制和最终产品 | 校准、仪表核对、终点测试记录、偏差/纠正措施和批次放行 |
| `cp_packing_storage` | `packing_and_storage` | 产品、包装、拒收物、储存能源、时长和温度 | 包装物料清单、秤、仓库系统、温度记录器、仪表、废物记录 | lot_id; packed_net_mass; drained_mass_if_applicable; packaging_mass_by_material; rejects; storage_start; storage_end; temperature_profile; energy; occupied_capacity; waste_destination | 称量或核对包装材料和产品；计量储存能源；按经验证计划连续或定期记录储存条件 | kg; h; °C; kWh; MJ | 每个包装批次；储存能源和条件覆盖可归属区间 | 代表性运行期 | 每条包装线和储存系统 | 按产品净质量归一化包装；若无更优因果驱动，按占用容量-时间分配储存能源 | 净含量检查、物料核对、温度轨迹、仪表校准、批号和放行记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个前景清单行 | 归一化数量 = 可归属行数量 / 合格净参考产品质量 | 可归属行数量；合格净产品 kg | 每 1 kg 参考产品的数量 |  |
| `calc_process_mass_balance` | 每个鱼加工步骤 | 质量平衡残差 = 实测总质量投入 - 实测产品、共产品、废物、废水固体、保留盐水和实测水分损失输出总量；使用不确定性和缺失流记录调查实质残差 | 批次投入/输出质量及水分/盐水基准 | 残差和完整性标记 |  |
| `calc_yield` | 整理、保存、干燥和包装 | 过程得率 = 合格过程输出质量 / 相同声明基准下的合格过程鱼投入质量 | 合格鱼投入；合格输出 | kg/kg 得率 |  |
| `calc_shared_energy` | 共享仪表 | 可归属能源 = 实测共享能源 x 有记录的因果份额；经济分配前优先采用生产时间、计量负荷、占用容量-时间或其他合理物理驱动 | 仪表总量；因果驱动总量；产品份额 | 可归属 kWh 或 MJ | eu-pef-2021-2279 |
| `calc_allocation_share` | 多输出过程 | 应用第 7 节所选层级，并从与被分配清单相同期间和边界的数据计算份额；数值容差内份额之和须为 1 | 细分清单或物理/经济驱动数据 | 分配后清单与分配份额 | eu-pef-2021-2279 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 鱼和参考产品 | 保留供应商、物种/产品身份、已知来源、批次链、投入与输出状态，以及直至最终批次放行的声明 CPC 21231 路线。 | 接收记录、供应商规范、批次谱系、产品规范和批号 |
| `dq_measurement_control` | 质量、水、能源、浓度、温度、时间和终点测量 | 使用适合运行范围的校准或验证仪器；保留原始读数、单位、换算因子、校准状态和数据替代。 | 校准/验证记录、仪表核对、实验室方法和计算表 |
| `dq_temporal_representativeness` | 前景活动数据 | 覆盖包含相关物种、路线、技术、负荷和季节变化的代表性运行期；披露停机、异常批次和排除项。 | 生产日历、批次覆盖表和代表性评估 |
| `dq_completeness` | 过程清单 | 核对鱼在各过程中的质量，并采集所有实质性的鱼、盐、盐水、水、能源、包装、适用时的制冷剂损失、废水、拒收物、共产品和处理去向。 | 过程质量平衡、公用工程核对、废物票据和完整性检查表 |
| `dq_food_safety_quality` | 加工与放行控制 | 维持前提方案和产品/路线特定 HACCP 与缺陷控制计划，包括适用法律和规范要求的限值、监测、纠正措施、验证和放行准则。 | HACCP 计划、监测记录、偏差、纠正措施、验证、测试结果和放行批准；`codex-cxc-52-2003` |
| `dq_proxy_disclosure` | 上游和缺失前景数据 | 识别每个代理、缺口填充值、估算、分配和未验证 UUID；报告其影响和替换优先级。 | 数据缺口登记、敏感性结果和审查记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求参考产品 UUID `39347f84-4a1d-414b-89f0-746f31b01aa6`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 UUID `93a60a57-a4c8-11da-a746-0800200c9a66`、单位 kg，以及恰好 1 kg 产品净质量。 |  |
| `validate_required_qualifiers` | 数据集元数据和产品说明 | 第 3 节任一必需限定信息缺失时完整性失败；盐水产品的沥干/未沥干基准含糊时亦失败。 | unsd-cpc-3-0-2025 |
| `validate_route_scope` | 过程图 | 仅在使用时要求盐渍/盐水浸渍；干制路线要求非烟熏干燥；本 PCR 禁止烟熏；披露所有省略的条件步骤。 | codex-cxc-52-2003; unsd-cpc-3-0-2025 |
| `validate_mass_balance` | 各前景过程和整个前景系统 | 要求在一致湿基/沥干/干基上记录质量平衡；调查并披露实质残差，不得强行闭合。 |  |
| `validate_haccp_records` | 食品安全和质量控制 | 要求路线与产品特定的 HACCP/前提方案记录，包括监测、纠正措施、验证和批次放行证据。 | codex-cxc-52-2003 |
| `validate_salting_brining_controls` | 盐渍或盐水路线 | 要求食品级盐、饮用级盐水用水、实测盐或盐水投入、声明方法、适用时的时间/温度和浓度控制，以及废盐水去向。 | codex-cxc-52-2003 |
| `validate_drying_endpoint` | 干制路线 | 要求产品特定的经验证干燥终点及方法、记录的运行条件，并确认未进行烟熏；本 PCR 不提供通用终点值。 | codex-cxc-52-2003 |
| `validate_chilled_storage` | 需要冷藏的盐成熟鱼 | 要求在 1 °C 至 4 °C 储存并记录时间和温度，除非更严格的适用产品规范另有规定。 | codex-cxc-52-2003 |
| `validate_allocation` | 多输出和共享操作 | 要求采用第 7 节层级、提供因果驱动证据、份额之和为 1，并对经济或其他关系分配进行披露/敏感性分析。 | eu-pef-2021-2279 |
| `validate_provisional_ranges` | 推理估算 QA 范围 | 将每个 `reasoned_estimate` 范围作为非约束审查筛选；不得用其替代前景数据或声称具有来源支持的代表性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明干制、盐渍或盐水鱼路线的前景生产数据集 |
| downstream_use | `secondary_dataset`；经代表性和复用审查后可作 `background_dataset` |
| allowed_use | 与声明物种/产品形态、保存路线、地域、技术、储存和时间相匹配的产品碳足迹、LCA、EPD、供应链和过程改进研究 |
| excluded_use | 熏鱼或烟熏干制鱼、食用鱼粉、鱼副产品类别、熟制/罐藏或其他加工鱼、无限定信息的通用水产品代理，或未经适用审查的公开比较声明 |
| required_metadata | PCR id/版本；参考 UUID；物种与来源；产品形态；投入状态；保存路线与方法；干制终点声明；盐水/净质量基准；储存制度；包装；设施地域；技术；参考年；分配；上游数据集；排除项 |
| required_quality_disclosure | 前景覆盖、校准、质量平衡、HACCP/质量证据、路线特定限值、代理、暂定估算、未验证 UUID、分配敏感性、数据缺口和审查状态 |
| update_trigger | 物种组合、来源鱼、路线、盐渍/盐水配方、干燥器或储存技术、保存终点、包装、能源供应、设施、法律/规范、分配驱动或代表性数据期发生实质变化 |

## 11. 数据源

| 来源 ID | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | dataset | United Nations Statistics Division, Central Product Classification Version 3.0 structure, code 21231, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-06-23） | 产品类别范围和排除项 |
| `codex-cxc-52-2003` | official_guidance | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products; https://www.fao.org/input/download/standards/10273/CXP_052e.pdf（访问日期 2026-08-11） | 接收与整理、盐渍/盐水浸渍/干燥过程分解、卫生和 HACCP 控制、包装、质量记录及路线依赖冷藏 |
| `codex-cxs-190-1995` | standard | Codex Alimentarius, CXS 190-1995, Standard for Quick Frozen Fish Fillets | 仅当速冻鱼片用作投入且属于该标准范围时作为条件性来料规范；不导入类别通用数值规则 |
| `eu-pef-2021-2279` | official_guidance | European Commission, Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Annex I Product Environmental Footprint method, CELEX 32021H2279; https://eur-lex.europa.eu/eli/reco/2021/2279/oj | 系统边界关联、多功能层级、共享资源分配和共产品处理 |
