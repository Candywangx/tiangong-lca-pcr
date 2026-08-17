---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.molluscs-and-other-aquatic-invertebrates-otherwise-prepared-or-preserved
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 以其他方式制备或保存的软体动物及其他水生无脊椎动物

## 1. 范围与适用性

本 PCR 规定工厂门口范围内，软体动物及其他水生无脊椎动物经比单纯冷冻、干燥、盐渍或盐水浸渍更充分的制备或保存后，其前景数据生产规则。适用产品包括鲍鱼、蛤、贻贝、墨鱼、牡蛎、扇贝、海参、鱿鱼、海螺、海蜇、章鱼、海胆和鸟蛤等，经烹煮、焙烤、调味、填馅、挂糊或裹粉、油炸、烟熏、巴氏杀菌、灭菌、罐藏、油浸或醋渍、加入不构成完整餐食的酱汁或浓汤、制成丸类或肉酱，或以其他方式制备或保存的产品。产品在上述合格保存操作后再冷冻，仍属于本范围。

前景边界从符合条件的活体、冷藏、冷冻或经初步处理的水产原料以及其他配料被加工厂接收时开始，到成品连同实际包装和必要的厂内储存经放行到达工厂门口时结束。捕捞或养殖、外购配料和包装生产以及场外处理，以独立上游或下游数据集与前景数据包连接。

本 PCR 不包括甲壳类；活体、生鲜或仅冷藏的软体动物；仅经冷冻、干燥、盐渍或盐水浸渍保存的产品；提取物和汁液；以及完整预制菜肴或餐食。零售、消费者制备与使用和生命末期也不包括，除非下游研究明确加入这些阶段。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.molluscs-and-other-aquatic-invertebrates-otherwise-prepared-or-preserved |
| classification_refs | CPC 3.0：21280（精确映射语境） |
| covered_products | 以其他方式制备或保存的软体动物及非甲壳类水生无脊椎动物，包括符合条件的罐藏、巴氏杀菌、灭菌、烟熏、烹煮、焙烤、油炸、调味、填馅、裹层、带酱汁、油浸、醋渍、成形或肉酱产品；合格保存后再冷冻的产品也包括在内。 |
| excluded_products | 甲壳类；活体、生鲜或仅冷藏产品；仅冷冻、干燥、盐渍或盐水浸渍产品；提取物和汁液；完整预制菜肴和餐食。 |
| representative_product | 经声明制备或保存路线后的可销售食用软体动物或其他水生无脊椎动物产品，并声明装填介质和储存状态。 |
| production_route | 接收与低温暂存；适用时解冻或去冰衣；清洗、去壳、修整、去除碎壳、分级和制备；配方或填充；至少一种合格保存操作；包装、储存和放行；以及清洁和废水管理。 |
| market_state | 工厂门口声明的常温稳定、冷藏或冷冻产品，已作销售包装或供进一步食品制造使用，并声明即食或需最终烹调。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 已实施声明的合格制备或保存路线的食用软体动物或其他非甲壳类水生无脊椎动物。 |
| How much | 按声明参考质量基准计的 1 kg 可销售产品，不含包装。 |
| How well | 符合声明的物种、配方、保存路线、产品形态、食品安全放行准则、装填介质和储存状态。 |
| How long or cycle | 工厂门口一个生产批次的输出；所声明的保质期和储存条件描述产品质量，但不增加使用阶段持续时间。 |
| reference_flow_link | 功能单位由下列单一天工参考产品流实现，并按适用的净质量、沥干净质量或整体产品质量基准归一化为 1 kg。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 工厂门口 1 kg 可销售产品，不含包装。固体产品处于非决定性液态装填介质时使用沥干净质量；酱汁、肉酱或液相构成产品整体时使用总净产品质量并声明组成。 |
| 参考产品流 | Molluscs and other aquatic invertebrates, otherwise prepared or preserved `5102ffa5-d24d-4e8c-b18d-d22f74677182` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种或物种组合及常用名/学名识别；已知时声明野生捕捞或养殖来源；进厂原料状态；合格制备和保存技术；产品形态；即食或食用前需烹调状态；装填介质和配方；净质量、沥干净质量或整体产品参考质量基准；冰衣处理；包装形式和质量；常温、冷藏或冷冻放行状态；储存温度；生产地理和参考期；纳入的条件过程；前景收率和返工处理 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 数据包归一化到 1 kg 不含包装的可销售产品，并识别所采用的净质量、沥干净质量或整体产品质量基准。 |
| `drained_and_glaze_mass` | 液态介质中的固体产品或带冰衣产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别测量总净质量、沥干食用固体质量、装填介质质量和冰衣质量。液体仅为附属介质时使用沥干净质量；声明食品净质量时排除冰衣。 |
| `internal_mass_transfer` | 内部中间产品和返工 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 每次内部转移按湿质量记录，并保留含水率、带壳/去壳状态和可食比例限定信息，避免混用不同状态的收率。 |
| `water_measurement` | 工艺水和清洁水 | 体积或质量 | m3 或 kg | 保留仪表原始单位。体积与质量仅在有记录的实测或合理密度时转换，并保留原始读数。 |
| `energy_measurement` | 电力、蒸汽、燃料、制冷及其他能源载体 | 能量或载体特定属性 | kWh、MJ 或载体单位 | 各外购能源载体分别记录。保留原始仪表单位；若换算电力，使用 1 kWh = 3.6 MJ 并披露换算。 |
| `batch_time_allocation` | 共用仪表和批次生产 | 质量和时间 | kg 和 h | 依据记录的运行时间、产量或其他因果驱动因子将共用消耗分配到产品批次；保留驱动因子和分母内全部产量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 加工厂接收的符合条件的活体、冷藏、冷冻或经初步处理的软体动物或其他非甲壳类水生无脊椎动物原料，并记录物种、供应商、已知时的来源、进厂状态、温度和质量。 |
| starting_condition_role | 原料验收处的前景门；捕捞或养殖及上游原料处理由连接的上游数据集表示。 |
| product_classification_scope | 仅指最终合格的制备或保存产品；配料和中间产品分类不改变规范 PCR 身份。 |
| recursive_input_rule | 已属于同一产品类别的外购产品或回收物料，仅作为上游产品投入记录一次并声明质量、状态和用途；其既往制备不在本前景过程内再次分解。 |
| upstream_dataset_requirement | 在下游研究纳入时，为水产原料、配料、包装、供水、能源载体、制冷剂和进厂服务连接上游数据集。 |
| disclosure | 声明起始状态、纳入的合格保存路线、包装点、储存状态、返工和共产品处理、厂内公用工程与废水处理，以及所有排除或单独建模的阶段。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | 前景制造 | 在报告设施发生时，纳入接收、储存、制备、配方或填充、至少一种合格保存操作、包装、厂内储存、清洁以及直接产生的废物和排放。 | `codex-cxc-52-2003-fish-fishery-products`; `eu-jrc-fdm-bref-2019` |
| `boundary_rule_2` | 合格保存 | 仅由冷冻、干燥、盐渍或盐水浸渍组成的路线不属于本 PCR。数据包必须识别烹煮、焙烤、油炸、裹层、烟熏、巴氏杀菌、灭菌、罐藏、酸化、填馅、调味或其他实质制备等合格操作。 | `codex-cxc-52-2003-fish-fishery-products` |
| `boundary_rule_3` | 密封产品 | 对罐藏或杀菌釜产品，纳入填充、封口、编码、热处理前暂存、经验证的热处理、冷却、检验和储存。采用设施验证的产品-容器工艺规程；本 PCR 不提供通用灭菌温度或时间。 | `codex-cxc-52-2003-fish-fishery-products` |
| `boundary_rule_4` | 上下游连接 | 捕捞或养殖、外购投入生产、场外废物处理、配送、零售、消费者使用和生命末期保持为连接数据集，除非声明研究边界明确加入。 | `epd-international-pcr-2025-03` |
| `boundary_rule_5` | 包装和低温储存 | 纳入实际使用至工厂门口放行的一级、二级和三级包装，并纳入保存后的厂内低温储存或冷冻。 | `epd-international-pcr-2025-03` |
| `boundary_rule_6` | 完整性 | 不得仅因难以测量而遗漏前景物料、能源载体、制冷剂损失、废水流、直接排放或残余物。依主管研究方案对每项排除进行定量筛选并披露。 | `iso-14044-2006-lca` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `raw_material_reception_and_cold_storage` | 原料接收和低温储存 | required | 始终纳入；声明实际进厂活体、冷藏或冷冻状态。 | 前景验收和暂存 | kg 验收水产原料 |
| `preparation_and_cleaning` | 制备和清洗 | required | 始终纳入；解冻、去冰衣、去壳、修整和分级等单项操作仅在实际实施时适用。 | 前景可食物料制备 | kg 制备后可食物料 |
| `formulation_and_filling` | 配方、分份和填充 | required | 始终纳入；仅在无需添加配料或装填介质的合格路线中允许添加量为零。 | 前景产品配方 | kg 保存前填充或配方产品 |
| `qualifying_preservation` | 合格保存操作 | required | 至少一种超出单纯冷冻、干燥、盐渍或盐水浸渍的声明操作。 | 前景烹煮、烟熏、裹层/油炸、巴氏杀菌、灭菌、罐藏或其他合格保存 | kg 保存后产品 |
| `packaging_storage_and_release` | 包装、厂内储存和放行 | required | 始终纳入；声明常温、冷藏或冷冻路线和包装形式。 | 前景最终化 | kg 可销售参考产品 |
| `cleaning_and_wastewater_management` | 清洁和废水管理 | required | 工厂运行始终纳入；识别已包含在过程仪表中的数量以防重复计算。 | 前景支持和环境控制 | kg 所支持参考产品 |

### 过程：原料接收和低温储存（`raw_material_reception_and_cold_storage`）

#### 输入

##### 产品流

###### 符合条件的水产原料（`eligible_aquatic_raw_material_input`）

记录每个进厂物种和供应商批次，包括活体、冷藏、冷冻、带壳、去壳或预处理状态。每个实际原料身份的天工 UUID 尚待选择。

- 选定流：符合条件的软体动物或其他非甲壳类水生无脊椎动物原料（按物种/状态的天工 UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：剔除拒收和制备损失前，按批次经供应商核验的进厂湿质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：
- 数量范围：暂定带壳和制备收率筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：4.0
  - 单位：kg/kg reference product
  - 基准：每 kg 可销售参考产品的进厂水产原料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 低温储存电力（`reception_cold_storage_electricity`）

记录制备前冷藏或冷冻暂存的实测或按因果分配电力。所选电力流须匹配设施地理和供电合同。

- 选定流：设施电力供应（按地理的天工 UUID 未解决）
- 流属性/单位：Energy / kWh
- 数量规则：低温库实测电力，按验收批次的质量-时间或占用体积-时间分配。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收水产原料
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cold_storage_energy`
- 来源：
- 数量范围：暂定低温暂存电力筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kWh/kg accepted raw material
  - 基准：制备前设施暂存电力
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收水产原料（`accepted_aquatic_raw_material_output`）

验收物料为进厂质量扣除有记录的拒收后剩余质量，作为内部转移进入制备，不产生额外上游产品负荷。

- 选定流：验收水产原料内部转移（天工 UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：进厂质量减去拒收和有记录的暂存损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个接收批次
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_receipts`
- 来源：

##### 废物流

###### 接收拒收物（`reception_rejects`）

按实际去向和法定分类记录死亡、受损、腐败、受污染或其他拒收物料。

- 选定流：拒收水产物料至实际处理（按处理方式的天工 UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：按批次和去向称量接收拒收物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 进厂水产原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_coproducts`
- 来源：
- 数量范围：暂定接收拒收率筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg received aquatic raw material
  - 基准：每 kg 进厂水产原料的接收拒收物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：制备和清洗（`preparation_and_cleaning`）

#### 输入

##### 产品流

###### 进入制备的验收水产原料（`accepted_raw_material_to_preparation`）

记录进入实际解冻、去冰衣、清洗、去壳、修整、去除碎壳、分级或其他制备操作的内部质量。

- 选定流：验收水产原料内部转移（天工 UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：称量或通过质量平衡得到的制备内部转移量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个制备批次
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_mass_balance`
- 来源：

###### 制备和清洗用水（`preparation_water`）

纳入解冻、去冰衣、清洗、辅助去壳、产品输送和设备冲洗用水，但仅限仪表边界分配给制备的部分；海水与淡水分开记录。

- 选定流：供应制备的淡水或处理海水（按水类型的天工 UUID 未解决）
- 流属性/单位：Volume / m3
- 数量规则：制备用水仪表量减去单独计量的仅清洁用水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每吨进厂水产原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_water`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：鱼类和贝类行业代理筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：32
  - 单位：m3/t received aquatic raw material
  - 基准：已报告解冻、鱼片加工、罐藏和虾加工用水值的包络；仅作代理，不是符合性限值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 制备后可食水产物料（`prepared_edible_material`）

记录实际制备后、添加配料前的湿态可食质量，并声明带壳/去壳、沥干和含水状态。

- 选定流：制备后可食软体动物或其他水生无脊椎动物物料（天工 UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：直接称量制备后可食物料，或通过已核对的批次质量平衡计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个制备批次
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_mass_balance`
- 来源：

###### 可销售食用共产品（`preparation_edible_coproducts`）

与废物和内部返工分开记录作为产品出售或转移的食用侧流。

- 选定流：可销售食用水产共产品（按实际共产品的天工 UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：按产品身份和去向称量共产品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个制备批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_coproducts`
- 来源：

##### 废物流

###### 壳、内脏、修整物和其他残余物（`preparation_solid_residues`）

按实际再利用、回收、炼制、处置或进入废水的去向，分别记录壳、内脏、不可食修整物、碎壳和其他残余物。

- 选定流：水产加工固体残余物至实际处理（按残余物和处理的天工 UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：按批次和去向称量残余物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 进厂水产原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_coproducts`
- 来源：
- 数量范围：暂定制备残余物筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.8
  - 单位：kg/kg received aquatic raw material
  - 基准：每 kg 进厂水产原料的制备残余物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制备废水（`preparation_wastewater`）

记录离开制备的废水，包括存在时的溶解和悬浮有机物、盐和清洁残留；内部循环水不计入排放量。

- 选定流：水产产品制备废水至实际处理（天工 UUID 未解决）
- 流属性/单位：Volume / m3
- 数量规则：实测排放量或制备用水平衡计算量，并识别循环和蒸发。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 制备用水投入
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_and_wastewater`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定废水与用水比筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：1.2
  - 单位：m3/m3 preparation water input
  - 基准：离开制备的废水相对于制备用水仪表量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：配方、分份和填充（`formulation_and_filling`）

#### 输入

##### 产品流

###### 制备后可食物料投入（`prepared_material_to_formulation`）

按与制备收率相同的湿质量状态记录进入配方或填充的制备后可食水产物料。

- 选定流：制备后可食水产物料内部转移（天工 UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：称量进入配方或填充线的内部转移量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个配方批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_and_filling`
- 来源：

###### 配料和装填介质（`ingredients_and_packing_medium`）

分别记录实际加入产品的水、盐水、盐、油、醋、酱汁、调味料、面糊、裹粉、填馅、黏结剂和添加剂等每种配料。

- 选定流：配方配料或装填介质（按配料的天工 UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：领用质量减去退回、回收或废弃配料，并与填充产品核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 保存前填充产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_ingredient_and_filling`
- 来源：
- 数量范围：暂定配方添加量筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2.0
  - 单位：kg/kg filled product
  - 基准：每 kg 填充产品的配料和装填介质总量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保存前一级容器（`primary_container_input`）

对于容器内巴氏杀菌、灭菌或杀菌釜路线，记录热处理前施加的实际容器、封口、内衬和标签组件及相关废品。

- 选定流：一级食品容器和封口件（按材料和形式的天工 UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：合格填充单元领用包装减去回收未用库存，废品另行记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 填充产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：
- 数量范围：暂定一级容器筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：1.0
  - 单位：kg/kg filled product
  - 基准：每 kg 填充产品的一级包装质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 填充或配方产品（`filled_product`）

记录配方和分份控制后、合格保存步骤前的产品及装填介质，保留适用时的填充质量、沥干质量、顶隙和容器形式。

- 选定流：填充或配方水产产品内部转移（天工 UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：按批次汇总合格填充单元净质量，不含包装。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个配方批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_and_filling`
- 来源：`eu-1169-2011-food-information`

##### 废物流

###### 配方和填充损失（`formulation_and_filling_losses`）

记录溢洒产品、不合格混合物、开机和换产损失、过量填充回收及送处理的配料；可复用返工保留为内部循环而不是废物。

- 选定流：配方或填充残余物至实际处理（天工 UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：按去向称量或通过质量平衡得到损失量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 填充产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_coproducts`
- 来源：
- 数量范围：暂定配方损失筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg filled product
  - 基准：每 kg 填充产品的配方和填充损失
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：合格保存操作（`qualifying_preservation`）

#### 输入

##### 产品流

###### 进入合格保存的产品（`product_to_preservation`）

记录进入实际烹煮、焙烤、油炸、裹层、烟熏、巴氏杀菌、灭菌、罐藏、酸化或其他合格路线的产品。

- 选定流：填充或配方水产产品内部转移（天工 UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：称量进入各保存路线的产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个保存批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_schedule`
- 来源：`codex-cxc-52-2003-fish-fishery-products`

###### 保存用电（`preservation_electricity`）

记录烹煮器、炸锅、烟熏设备、杀菌釜、泵、风机、制冷、保存后冷冻、控制和生产线设备用电，排除已分配给接收或最终储存的电力。

- 选定流：设施电力供应（按地理的天工 UUID 未解决）
- 流属性/单位：Energy / kWh
- 数量规则：各保存路线和批次的实测或因果分配电力。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 保存后产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_preservation_energy`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定保存用电筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.02
  - 上限：2.0
  - 单位：kWh/kg preserved product
  - 基准：合格保存路线用电
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 热能载体（`preservation_thermal_energy`）

按载体分别记录蒸汽、热水、燃料、回收热或其他热力供应，且不将外购燃料与直接燃烧排放合并。

- 选定流：保存使用的蒸汽、燃料或回收热能（按载体的天工 UUID 未解决）
- 流属性/单位：Energy / MJ 或载体特定单位
- 数量规则：分配到保存路线的实测热能或燃料数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 保存后产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_preservation_energy`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定保存热能筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：MJ/kg preserved product
  - 基准：合格保存路线输送热能
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 保存后产品（`preserved_product`）

记录合格保存操作和冷却后的合格产品，并将实际时间-温度或其他经验证工艺记录连接到批次。

- 选定流：保存后软体动物或其他水生无脊椎动物产品内部转移（天工 UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：冷却后、最终包装或储存前的合格保存产品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个保存批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_schedule`
- 来源：`codex-cxc-52-2003-fish-fishery-products`

##### 废物流

###### 保存损失和废介质（`preservation_losses_and_spent_media`）

按实际处理或回收路线分别记录产品损失、废盐水、油、酱汁、裹层、烟熏残余、冷却水排污和不合格单元。

- 选定流：保存残余物或废工艺介质至实际处理（按物料的天工 UUID 未解决）
- 流属性/单位：Mass 或 Volume / kg 或 m3
- 数量规则：按残余物类型和去向称量、计量或核对数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 保存后产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_coproducts`
- 来源：
- 数量范围：暂定保存损失筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg preserved product
  - 基准：每 kg 保存后产品的保存损失和废介质
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 直接燃烧和烟熏排放（`direct_preservation_air_emissions`）

现场燃烧燃料或产生烟气时，按物质使用实测数据或有记录的燃料和技术特定计算报告直接排放，不得从 LCI 默认值推断食品安全烟气控制。

- 选定流：按物质的直接空气排放（按物质的天工 UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：烟道测量或根据所采集燃料和运行数据计算的排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 保存后产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_preservation_energy`
- 来源：

### 过程：包装、厂内储存和放行（`packaging_storage_and_release`）

#### 输入

##### 产品流

###### 进入最终化的保存后产品（`preserved_product_to_finalization`）

记录进入最终包装、装箱、贴标、厂内储存和放行的合格保存后产品。

- 选定流：保存后水产产品内部转移（天工 UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：称量从保存过程转移的合格产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个最终化批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_release`
- 来源：

###### 最终包装材料（`final_packaging_materials`）

记录保存前未计入的一级包装以及至工厂门口放行使用的全部二级和三级包装，并分开材料和可重复使用运输物品。

- 选定流：按材料和形式的最终包装材料（天工 UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：包装领用减去退回未用库存，并在合格放行单元间分配。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：
- 数量范围：暂定总包装筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：1.0
  - 单位：kg/kg reference product
  - 基准：每 kg 参考产品至工厂门口的全部包装
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 最终低温储存电力（`final_cold_storage_electricity`）

纳入保存后至出厂放行的冷藏或冷冻储存，并识别已包含在保存仪表中的能源。

- 选定流：设施电力供应（按地理的天工 UUID 未解决）
- 流属性/单位：Energy / kWh
- 数量规则：按产品质量-时间或占用体积-时间分配的实测储存电力。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品和声明厂内储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cold_storage_energy`
- 来源：
- 数量范围：暂定最终储存电力筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kWh/kg reference product
  - 基准：声明储存时长内至工厂门口的电力
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售参考产品（`saleable_reference_product`）

这是唯一参考输出。应用声明质量基准，并保留放行、编码、储存和保质期元数据。

- 选定流：Molluscs and other aquatic invertebrates, otherwise prepared or preserved `5102ffa5-d24d-4e8c-b18d-d22f74677182`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按声明净质量、沥干净质量或整体产品基准计 1 kg 可销售产品，不含包装。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_product_release`
- 来源：`eu-1169-2011-food-information`
- 数量范围：参考流身份
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`eu-1169-2011-food-information`

##### 废物流

###### 包装和成品拒收物（`finalization_rejects`）

按材料和去向记录受损容器、包装边角料、标签和箱体废品、放行失败单元及厂内过期产品。

- 选定流：包装或成品拒收物至实际处理（按材料的天工 UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：按批次和去向称量，或按计数和换算得到拒收量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：
- 数量范围：暂定最终化拒收筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg released reference product
  - 基准：每 kg 放行参考产品的包装和产品拒收物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：清洁和废水管理（`cleaning_and_wastewater_management`）

#### 输入

##### 产品流

###### 清洁水和化学品（`cleaning_water_and_chemicals`）

记录未包含在过程仪表中的就地清洗和人工清洁水，以及每种清洗或消毒化学品；化学产品质量与活性物质量分开。

- 选定流：清洁水和化学产品（按产品的天工 UUID 未解决）
- 流属性/单位：Volume 或 Mass / m3 或 kg
- 数量规则：分配给产品生产活动的实测用水和化学品领用减退回量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 所支持参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_and_wastewater`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定清洁投入筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：20
  - 单位：kg water-equivalent/kg reference product
  - 基准：水当量合并筛选量；化学品仍须分别报告
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 合并过程和清洁废水（`combined_wastewater`）

按处理路线报告离开设施边界的废水，避免重复计算制备和保存流；研究要求时保留流量及 COD、悬浮物、氮、磷、盐、油脂和清洁化学品等负荷数据。

- 选定流：食品加工废水至实际厂内或场外处理（天工 UUID 未解决）
- 流属性/单位：Volume / m3
- 数量规则：最终出水仪表量减去单独外送清洁水，排除内部循环。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_and_wastewater`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定设施废水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：35
  - 单位：kg water-equivalent/kg reference product
  - 基准：每 kg 参考产品离开设施的最终废水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | 过程细分 | 技术可行时，通过分别计量差异显著的产品线、保存路线、物种组和包装形式来避免分配。 | `iso-14044-2006-lca` |
| `allocation_rule_2` | 内部返工 | 返回同一生产系统的返工视为内部循环；记录其质量和额外加工，但不得设为共产品或重复上游负荷。 | `iso-14044-2006-lca` |
| `allocation_rule_3` | 联产食用共产品 | 细分后，使用有记录的因果物理关系分配不可分共享负荷。若未证明更合适的因果关系，在分离点使用湿质量，并对合理的经济关系进行敏感性检验。 | `iso-14044-2006-lca` |
| `allocation_rule_4` | 壳及其他不可食输出 | 按实际法定状态和去向将每项输出分类为可销售共产品、可回收残余物或废物。仅对真实共产品分配；由废物引起的处理负荷归于前景产品系统。 | `iso-14044-2006-lca` |
| `allocation_rule_5` | 共用公用工程和清洁 | 使用实测用量、运行时间、质量-时间、占用体积-时间或废水负荷等因果驱动因子分配共用电力、热力、制冷、水、清洁和废水，并披露驱动因子和分母。 | `iso-14044-2006-lca` |
| `allocation_rule_6` | 分配闭合 | 每个共用过程的分配因子之和必须为 1.0；未分配的内部转移、损失和返工须在质量平衡中可见。 | `iso-14044-2006-lca` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `raw_material_reception_and_cold_storage` | 水产原料、验收质量和拒收 | 供应商批次与接收记录 | 供应商；物种；来源；已知时的捕捞/养殖状态；进厂状态；带壳/去壳；温度；毛重、皮重、净重、验收和拒收质量；拒收原因 | 校准秤、接收检验和供应商文件 | kg 和 degC | 每批 | 具有季节覆盖的代表性生产年 | 范围内全部接收点和供应商 | 汇总批次质量并保留物种和状态分层；验收质量为进厂减拒收 | 秤校准、批次标识、供应商文件、温度日志和拒收记录 |
| `cp_cold_storage_energy` | `raw_material_reception_and_cold_storage`; `packaging_storage_and_release` | 冷藏和冷冻储存电力 | 电表与储存占用日志 | 仪表起止；储存区；运行小时；产品质量；占用体积；温度设定；进出时间 | 优先分表；否则按质量-时间或体积-时间分配设施电表 | kWh、h、kg、m3 | 仪表周期和每次批次移动 | 与生产数据同期间 | 服务于范围内产品的全部低温库 | 扣除无关负荷并按记录的因果驱动因子分配 | 仪表标识、校准或账单核对、占用日志和分配表 |
| `cp_preparation_water` | `preparation_and_cleaning` | 解冻、去冰衣、清洗和制备用水 | 水表和运行日志 | 水源；淡水/海水；仪表起止；循环；排放；生产线；批次；运行时间 | 专用水表或核对后的设施水平衡 | m3 | 班次或批次 | 包括清洁和旺季的代表性生产年 | 范围内全部制备线 | 净取水为进水减单独计量的回用或内部循环水 | 仪表校准、水处理记录和月度账单核对 |
| `cp_preparation_mass_balance` | `preparation_and_cleaning` | 制备后可食物料、壳、修整物和内部转移 | 批次质量平衡记录 | 进料；解冻/滴水损失；可食输出；共产品；壳；内脏；修整物；废水固体；返工 | 校准秤和经核对批次表 | kg | 每批或有统计依据的连续线间隔 | 代表性生产年及全部物种/路线 | 范围内全部制备操作和质量转移点 | 汇总输出和库存变化，与同一湿质量状态输入核对 | 秤校准、批次标识、签字核对和异常调查 |
| `cp_ingredient_and_filling` | `formulation_and_filling` | 配方配料、装填介质、填充质量和损失 | 配方领用、退回、填充和检重记录 | 配料 id；领用/退回/废弃质量；配方；容器数；填充质量；沥干质量；顶隙；过量填充；返工 | 库存领用核对与校准填充机/检重秤 | kg、count | 每个配方批次和例行过程检查 | 代表性生产年和全部声明配方 | 范围内全部配方、分份和填充线 | 配料净用量为领用减退回和单独回收量；仅汇总相同配方 | 配方批准、仪器校准、填充控制图和批次追溯 |
| `cp_preservation_schedule` | `qualifying_preservation` | 合格路线和保存后输出 | 批次、杀菌釜、烹煮器、烟熏器、炸锅、巴氏杀菌或其他验证工艺记录 | 路线；设备；产品/容器形式；填充或初始温度；时间；温度；压力；流量；关键限值；偏差；合格输出 | 经验证现场工艺下的自动记录器或合格操作员记录 | 路线特定单位和 kg | 每批或连续生产批次 | 完整报告期 | 每条范围内保存线和产品-容器组合 | 每个放行批次连接一套完整工艺记录；关键限值符合性不得平均 | 校准、验证批准、操作员签字、偏差处置和放行授权 |
| `cp_preservation_energy` | `qualifying_preservation` | 电力、蒸汽、热、燃料、制冷和直接排放 | 分表、燃料领用、蒸汽表和运行日志 | 载体；仪表起止；燃料质量/体积；蒸汽/热量；回收热；设备时间；产量；计算排放时的因子来源 | 优先计量；否则使用燃料清单和因果分配 | kWh、MJ、kg、m3 | 批次、班次或账单周期 | 与生产数据同期间 | 服务于范围内产品的保存设备和现场能源发生 | 分开载体；扣除外送或回收能源；按运行时间或产量分配共用负荷 | 仪表校准、账单核对、燃料发票和计算记录 |
| `cp_packaging_records` | `formulation_and_filling`; `packaging_storage_and_release` | 一级、二级、三级和废弃包装 | 包装物料清单、领用、退回和废品记录 | 组件 id；材料；单件质量；领用/退回数；合格单元；废品；重复使用次数 | 供应商规格经抽样称量和库存核对验证 | kg 和 count | 包装批次和生产批次 | 代表性生产年和全部形式 | 范围内全部包装领用、施加和废品点 | 组件质量为核实单件质量乘净消耗数；重复使用包装按记录周转次数分摊 | 供应商规格、秤校准、物料清单和库存核对 |
| `cp_product_release` | `packaging_storage_and_release` | 参考产品、净/沥干质量、放行状态和最终拒收 | 放行、标签、检重、储存和处置记录 | 产品 id；物种；路线；批次；净质量；沥干质量；冰衣质量；容器数；放行状态；储存温度；放行/拒收量；保质期 | 校准称量、标签核验、质量放行和仓库记录 | kg、count、degC、day | 每个放行批次 | 完整报告期 | 范围内全部工厂门口放行和成品拒收点 | 仅按声明参考质量基准汇总合格放行产品 | 校准、放行授权、标签批准、编码追溯和储存日志 |
| `cp_cleaning_and_wastewater` | `cleaning_and_wastewater_management` | 清洁水、化学品、废水和污染物负荷 | CIP/人工清洁记录、水表、化学品领用、出水流量与分析 | 进水；循环水；化学产品和活性浓度；清洗面积/设备；废水流量；COD；固体；营养盐；盐；油脂；处理路线 | 场址监测方案下的计量和实验室分析 | m3、kg、mg/L | 每次清洁记录投入；按许可或研究频率采样出水 | 包括高负荷生产活动的代表性生产年 | 服务范围内生产的全部清洁系统和废水排放或处理点 | 汇总流量加权污染负荷，并按因果驱动因子分配共用清洁 | 仪表和加药校准、实验室方法与 QA/QC、样品流转和许可报告 |
| `cp_waste_and_coproducts` | 全部过程 | 残余物、共产品、拒收和处理去向 | 秤单、转移单、库存和处置或销售记录 | 物料类型；法定状态；湿/干状态；质量；去向；处理；经济敏感性使用时的收入；内部返工 | 称量或经验证容器计数换算，加去向文件 | kg，必要时为 currency | 每次转移或批次 | 与生产数据同期间 | 全部范围内过程及残余物、共产品、拒收和废物转移点 | 按物料、状态和去向汇总；内部返工分开 | 秤校准、转移文件、购买方或处理收据及质量平衡核对 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_output` | 可销售参考产品 | 参考输出为不含包装的合格放行净质量；非决定性液态介质中的固体使用沥干可食固体质量；液体或酱汁为整体时使用总净质量；排除冰衣。 | 净质量、沥干质量、装填介质质量、冰衣质量、放行数量 | kg reference product | `eu-1169-2011-food-information` |
| `calc_accepted_material` | 接收 | 验收原料 = 进厂净质量 - 接收拒收 - 有记录的暂存损失。 | 进厂、拒收和暂存损失质量 | kg accepted raw material |  |
| `calc_preparation_yield` | 制备 | 制备收率 = 制备后可食物料 / 验收水产原料，二者须采用一致的湿质量和带壳状态。 | 验收投入和制备后可食输出 | kg/kg |  |
| `calc_water_intensity` | 制备和清洁 | 用水强度 = 外部净取水 / 适用进厂原料或参考产品质量；淡水与海水分别报告。 | 进水、回用或循环水、原料、参考输出 | m3/t 或 m3/kg | `eu-jrc-fdm-bref-2019` |
| `calc_energy_intensity` | 保存和储存 | 分载体能耗强度 = 净计量载体投入 / 合格过程输出。电力、蒸汽、燃料和回收热分开；仅在需要统一显示时使用 1 kWh = 3.6 MJ。 | 能源仪表、燃料领用、回收/外送能源、过程输出 | kWh/kg、MJ/kg 或 carrier unit/kg | `eu-jrc-fdm-bref-2019` |
| `calc_wastewater_load` | 废水 | 污染负荷 = 流量加权浓度乘废水流量并换算为 kg；内部循环水不计入排放。 | 流量、浓度、采样期、循环量 | m3 和 kg pollutant per reference product | `eu-jrc-fdm-bref-2019` |
| `calc_mass_balance` | 各过程和前景总计 | 质量平衡差 = 投入 + 期初库存 - 输出 - 期末库存。接受残差前调查正负号、状态基准、含水、蒸发、废水固体、返工和测量不确定性。 | 全部实测质量转移和库存变化 | kg 和输入百分比 | `iso-14044-2006-lca` |
| `calc_allocation` | 共用过程和共产品 | 已分配负荷 = 共享负荷乘有记录的分配因子；一个共用过程的全部因子之和必须为 1.0。 | 共享负荷、因果驱动因子、分配因子 | 按产品分配的清单 | `iso-14044-2006-lca` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dqr_identity` | 产品和原料 | 保留物种或物种组合、进厂状态、配方、合格路线、最终状态及批次连接。 | 供应商记录、产品规格、路线记录和放行记录。 |
| `dqr_measurement` | 质量、水、能源和包装 | 使用校准仪器或核对公用工程与库存记录；保留原始读数、单位、换算因子和分配驱动因子。 | 校准证书、仪表日志、发票、库存核对和计算表。 |
| `dqr_temporal` | 前景代表性 | 可用时使用一个代表性生产年，并覆盖物种供应季节性、停产、清洁活动、路线组合和储存时长；较短期间须披露及评估代表性。 | 生产日历、批次登记、仪表期间和代表性评估。 |
| `dqr_completeness` | 清单 | 核对物料质量并披露每项排除的物料、公用工程、排放、残余物和过程；不得以来源代理值替代缺失前景数据。 | 质量平衡、排除登记和来源字段绑定。 |
| `dqr_preservation_control` | 罐藏、杀菌釜、巴氏杀菌、烟熏、烹煮或其他受控产品 | 每个放行批次连接适用的经验证工艺及偏差处置；不接受通用 PCR 温度-时间值。 | 经验证工艺规程、连续记录、校准、偏差审查和放行授权。 |
| `dqr_water_proxy` | 用水审查 | JRC 报告解冻约 1 m3/t 原鱼、鱼片加工 5-11 m3/t、罐藏 15 m3/t、虾加工 23-32 m3/t。仅作为行业代理 QA 语境；解释路线/物种差异并用场址数据替代。 | `eu-jrc-fdm-bref-2019` 加前景仪表。 |
| `dqr_energy_proxy` | 能耗审查 | JRC 报告罐藏能耗 150-190 kWh/t 原鱼。仅作为鱼类行业综合工艺能源筛选基准，不是软体动物默认值，也不得替代分载体仪表数据。 | `eu-jrc-fdm-bref-2019` 加前景能源记录。 |
| `dqr_source_age` | 外部证据 | 每次方法学审查时复核官方法规、标准、PCR 有效性和技术指南，并记录适用版本。 | 来源登记和审查日期。 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | 参考身份 | 参考流 UUID 必须为 `5102ffa5-d24d-4e8c-b18d-d22f74677182`，其流属性必须为 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`，单位组必须为 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位必须为 kg。 |  |
| `validation_rule_2` | 类别适格性 | 数据包若表示甲壳类、完整餐食、提取物或汁液、仅生鲜/活体/冷藏产品，或仅经冷冻、干燥、盐渍或盐水浸渍保存的产品，应拒绝。 | `codex-cxc-52-2003-fish-fishery-products` |
| `validation_rule_3` | 必需限定信息 | 物种、合格保存路线、配方和装填介质、产品形态、即食状态、参考质量基准、包装、放行状态、地理、参考期或条件操作缺失时，数据包不完整并应拒绝。 | `codex-cxc-52-2003-fish-fishery-products`; `eu-1169-2011-food-information` |
| `validation_rule_4` | 参考质量 | 确认排除包装和冰衣；非决定性液态介质中的固体使用沥干质量；否则要求整体产品声明和组成。 | `eu-1169-2011-food-information` |
| `validation_rule_5` | 过程覆盖 | 确认六个必需过程图条目均有表示。未实施操作仅可在实际路线和仪表边界明确时为零流；至少一种合格保存操作必不可少。 | `codex-cxc-52-2003-fish-fishery-products` |
| `validation_rule_6` | 热加工完整性 | 罐藏、杀菌釜或其他热控产品必须有产品-容器特定的经验证工艺规程，以及完整时间、温度、适用时压力、监测、校准、偏差、冷却和放行记录。 | `codex-cxc-52-2003-fish-fishery-products` |
| `validation_rule_7` | 质量平衡 | 确认过程和前景质量平衡采用一致的湿/干、带壳、沥干和含水状态；调查无法解释的残差，不得静默归入废物或蒸发。 | `iso-14044-2006-lca` |
| `validation_rule_8` | 公用工程和废水 | 确认电力、热能载体、水源、清洁投入、废水流量和相关污染负荷无仪表重叠；若将 JRC 代理数值作为数据集值而非 QA 语境，应标记。 | `eu-jrc-fdm-bref-2019` |
| `validation_rule_9` | 分配 | 确认已考虑细分、记录所选因果驱动因子、因子之和为 1.0、内部返工不是共产品且废物状态匹配实际去向。 | `iso-14044-2006-lca` |
| `validation_rule_10` | 证据和暂定估算 | 每项外部来源约束须引用列出的来源。所有 `reasoned_estimate` 均为临时筛选范围，不得覆盖前景记录，也不得在未经明确审查时作为发布关键允许范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 以其他方式制备或保存软体动物及其他非甲壳类水生无脊椎动物的工厂门口前景生产数据集。 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 在连接上游原料和外购投入数据集后，用于路线、物种、配方、地理、技术、包装和储存相匹配的 LCA process 或 lifecyclemodel 构建。 |
| excluded_use | 表示捕捞或养殖；甲壳类；生鲜或仅冷冻/干燥/盐渍/盐水浸渍产品；完整餐食；零售或消费者阶段；食品安全认证；在参考质量基准或保存路线不匹配时作比较声明。 |
| required_metadata | PCR id 和版本；参考流 UUID 和质量基准；物种和来源；进厂状态；制备与保存路线；产品形态和配方；净/沥干/冰衣处理；即食状态；包装物料清单；储存状态和时长；设施地理；参考年；技术；供应商和路线组合；过程覆盖；分配方法；上游数据集连接。 |
| required_quality_disclosure | 前景覆盖；仪器和仪表质量；时间和季节代表性；质量平衡残差；缺失 UUID；排除项；代理基准；所有暂定 `reasoned_estimate` 范围；分配敏感性；废水监测覆盖；热加工验证证据；来源版本和检索日期。 |
| update_trigger | 新代表年；物种或供应商组合、原料状态、配方、合格保存技术、容器或包装形式、储存制度、能源或水系统、废水处理、共产品去向、法规、PCR 要求或改变规则/筛选基准的外部证据发生实质变化。 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `codex-cxc-52-2003-fish-fishery-products` | standard | FAO 与 WHO，2020，*Code of Practice for Fish and Fishery Products*，CXC 52-2003。DOI：https://doi.org/10.4060/cb0658en（检索日期 2026-08-11）。 | 软体动物和罐藏产品过程分解；接收、制备、填充、封口、热加工、冷却、储存、追溯、监测和校验规则。 |
| `eu-jrc-fdm-bref-2019` | official_guidance | 欧盟委员会联合研究中心，2019，*Best Available Techniques Reference Document for the Food, Drink and Milk Industries*，第 7 章 Fish and Shellfish Processing。https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/food-drink-and-milk-industries（检索日期 2026-08-11）。 | 环境过程边界；能源、水、废水、清洁和行业代理 QA 数值。 |
| `eu-1169-2011-food-information` | standard | Regulation (EU) No 1169/2011，第 23 条和附件 IX 第 5 点。https://eur-lex.europa.eu/eli/reg/2011/1169/oj/eng（检索日期 2026-08-11）。 | 净含量、液态介质中固体食品的沥干净质量，以及声明净质量排除冰衣。 |
| `iso-14044-2006-lca` | standard | ISO 14044:2006，*Environmental management - Life cycle assessment - Requirements and guidelines*，包括适用修正。https://www.iso.org/standard/38498.html（检索日期 2026-08-11）。 | 系统边界完整性、分配层级、清单一致性和质量平衡审查。 |
| `epd-international-pcr-2025-03` | official_guidance | EPD International，PCR 2025:03，*Food and beverage products (main PCR)*，版本 1.0.1，有效至 2030-07-14。https://www.environdec.com/pcr-library/pcr_fbd3e8c6-483c-48f5-d22f-08da0b49f7f5（检索日期 2026-08-11）。 | 行业声明单位语境、工厂门口数据集画像、包装及上下游连接语境。 |
