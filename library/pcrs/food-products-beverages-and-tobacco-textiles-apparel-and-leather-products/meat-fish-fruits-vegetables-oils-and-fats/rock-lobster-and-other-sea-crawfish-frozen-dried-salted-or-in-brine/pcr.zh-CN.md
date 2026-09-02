---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.rock-lobster-and-other-sea-crawfish-frozen-dried-salted-or-in-brine
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 冷冻的、干的、盐腌的或盐水中的岩龙虾和其他海螯虾

## 1. 范围与适用性

本 PCR 用于生产冷冻、干制、干盐腌或盐水保藏并上市的岩龙虾及其他海螯虾前景数据包。每个报告结果必须恰好声明一条保藏路线。各路线的投入、产率、废物、储存条件和结果必须分别保留；只有同时披露各路线结果和汇总依据时，才可给出多路线平均值。

前景边界始于加工厂门口接收的活、鲜、冷藏或其他明确状态的甲壳类原料，止于包装后、且冷冻路线完成至声明发运点的冷冻储存后，在生产者门口得到 1 kg 净保藏产品。捕捞或养殖、饲料、船舶作业和进厂运输由上游数据集表示。生产者门口之后的配送、零售、消费者制备和终端处置不在边界内，除非研究另行纳入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.rock-lobster-and-other-sea-crawfish-frozen-dried-salted-or-in-brine |
| classification_refs | CPC 3.0: 21252（exact） |
| covered_products | 以冷冻、干制、干盐腌、湿盐腌、腌渍或其他食品级盐水状态销售的岩龙虾及其他海螯虾；整只、虾尾或其他已声明形态 |
| excluded_products | 活、鲜或仅冷藏的甲壳类；罐藏或其他经热力杀菌的常温稳定制品；混合预制菜；未声明甲壳类物种或保藏路线的产品 |
| representative_product | 采用一条已声明路线保藏、可供市场销售的岩龙虾或其他海螯虾 |
| production_route | 接收和预处理；冷冻、卫生干燥、干盐腌或盐水/湿盐腌四者恰选其一；包装；仅冷冻路线包括冷冻储存 |
| market_state | 生产者发运门口的已包装冷冻、干制、盐腌或盐水保藏产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 适合声明市场用途的保藏岩龙虾或其他海螯虾 |
| How much | 1 kg 目标产品净质量 |
| How well | 符合声明的物种、形态、保藏路线、食品安全控制和发运状态 |
| How long or cycle | 一个生产批次直至生产者发运门口；冷冻路线须声明冷冻储存时长 |
| reference_flow_link | 功能单位由下述单一参考产品流实现 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 目标产品净质量 |
| 参考产品流 | 冷冻的、干的、盐腌的或盐水中的岩龙虾和其他海螯虾 `7b3eb43f-1808-43ec-963b-40e088052194` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种或商业物种组；整只/虾尾/其他形态；带壳或去壳；熟制或生制；保藏路线（`frozen`、`dried`、`dry_salted` 或 `brined`）；包冰状态及被排除的冰衣质量；游离盐水沥除基准；吸收盐状态；包装形式；生产者门口状态；适用时的冷冻储存时长和温度 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告目标产品净质量，扣除初级包装、表面游离冰衣以及按声明沥除程序排出的游离包装盐水。仅当外壳属于上市形态时才计入外壳。 |
| `mass_balance_basis` | 所有质量投入和产出 | Mass | kg | 将实测批次总量归一化到 1 kg 净参考产品，并保留未舍入的批次投入、产品、残余物、废水、废盐水和包装记录。 |
| `energy_basis` | 电力和热能 | Energy | kWh 和 MJ | 保留计量原始单位，记录换算因子，并只在共享公用工程分配至声明路线和批次后进行归一化。 |
| `route_conditioned_measurement` | 保藏和储存记录 | 路线特定实测属性 | 各行声明单位 | 不得用冷冻路线测量值替代干制、盐腌或盐水路线测量值，反之亦然。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 物种或商业物种组；活/鲜/冷藏或其他接收状态；整只/虾尾/其他形态；外壳和熟制状态；接收质量和温度；供应商批次；来源及上游数据集引用 |
| starting_condition_role | 加工门口投入，其捕捞或养殖及进厂供应链负荷由上游数据集提供 |
| product_classification_scope | 对应 CPC 3.0 代码 21252 的保藏岩龙虾及其他海螯虾，仅作为分类背景 |
| recursive_input_rule | 若同一类别中已经保藏的产品被重新包装、再调理或储存，应将其记录为上游产品投入，不得在前景系统中重建此前的保藏过程。 |
| upstream_dataset_requirement | 上游数据集必须代表声明的物种、生产来源、原料状态和至加工门口的进厂运输；须披露代理数据和不匹配。 |
| disclosure | 声明起始状态、保藏路线、食用形态、加工地点、批次期间、截断、上游数据集选择、冷链交接和任何路线汇总。 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_separation` | 前景过程边界 | 纳入接收和预处理、恰好一条声明的保藏路线、包装，以及仅在产品冷冻时纳入的冷冻储存；不得把不适用路线的作业作为零数据占位项纳入路线结果。 | `codex-cxc-52-2003`; `unsd-cpc-3-0-2025` |
| `boundary_upstream_supply` | 原料甲壳类和进厂供应 | 使用与声明原料状态匹配的上游数据集表示捕捞或养殖、船舶或养殖场作业以及进厂运输。 | `eu-pef-2021-2279` |
| `boundary_food_safety_records` | 前景处理与保藏 | 保留适用于声明路线的批次追溯、时间-温度、卫生、盐腌/盐水/干燥控制和放行记录；这些记录支持清单质量，但不能替代法规合规。 | `codex-cxc-52-2003` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receipt_and_preparation` | 接收和预处理 | required | 纳入原料接收、分选、清洗、修整、去壳或去内脏，以及保藏前任何已声明的熟制 | 前景预处理 | 每 1 kg 净参考产品 |
| `route_specific_preservation` | 路线特定保藏 | required | 恰好执行一条声明路线：冷冻、卫生干燥、干盐腌或盐水/湿盐腌 | 前景保藏 | 每 1 kg 净参考产品 |
| `packaging` | 包装 | required | 纳入声明市场状态实际使用的包装 | 前景包装 | 每 1 kg 净参考产品 |
| `frozen_storage` | 发运前冷冻储存 | conditional | 仅冷冻路线纳入，且只计至声明的生产者门口发运点 | 前景冷藏 | 每 1 kg 净冷冻参考产品及声明储存时长 |

### 过程：接收和预处理（`receipt_and_preparation`）

#### 输入

##### 产品流

###### 接收的原料甲壳类（`received_source_crustaceans`）

记录跨越加工门口的龙虾或海螯虾实测质量和声明状态。

- 选定流：接收的岩龙虾或其他海螯虾
- 流属性/单位：Mass / kg
- 数量规则：接收批次实测质量归一化到 1 kg 净参考产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_receipt_mass_balance`
- 数量范围：暂定原料产率筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：10
  - 单位：kg/kg 净参考产品
  - 基准：每 kg 净参考产品的接收原料甲壳类质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 水和冰（`preparation_water_and_ice`）

记录清洗、冷却、解冻或预处理所用饮用水或清洁工艺水以及购买或现场制取的冰；不得重复计算购买冰中所含的水。

- 选定流：工艺水和冰
- 流属性/单位：Mass / kg
- 数量规则：实测用水量与用冰质量之和，循环水另行报告
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_utilities`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定预处理水和冰筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 净参考产品
  - 基准：每 kg 净参考产品的预处理水和冰总量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理电力（`preparation_electricity`）

记录分选、清洗、切割、泵送、冷却、解冻和预处理设备的计量或分配电力。

- 选定流：电力
- 流属性/单位：Energy / kWh
- 数量规则：按路线和批次归属的计量电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_receipt_utilities`
- 数量范围：暂定预处理电力筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kWh/kg 净参考产品
  - 基准：每 kg 净参考产品的预处理电力
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 预处理甲壳类中间产品（`prepared_crustacean_intermediate`）

记录转入声明保藏路线的预处理质量。

- 选定流：预处理岩龙虾或其他海螯虾
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每预处理过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_mass_balance`

##### 废物流

###### 外壳、内脏、拒收物及其他预处理残余物（`preparation_residues`）

分别记录具有实质差异的残余物及其去向，并声明其为废物还是可销售共产品。

- 选定流：甲壳类预处理残余物
- 流属性/单位：Mass / kg
- 数量规则：按去向实测残余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_mass_balance`
- 数量范围：暂定预处理残余物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：9
  - 单位：kg/kg 净参考产品
  - 基准：每 kg 净参考产品的预处理残余物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理废水（`preparation_wastewater`）

在扣除循环水以及产品或残余物所含水后，记录离开前景设施的废水。

- 选定流：预处理废水
- 流属性/单位：Mass / kg
- 数量规则：实测排放量或按水平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_receipt_utilities`
- 数量范围：暂定预处理废水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 净参考产品
  - 基准：每 kg 净参考产品的预处理废水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：路线特定保藏（`route_specific_preservation`）

#### 输入

##### 产品流

###### 预处理甲壳类投入（`prepared_crustacean_input`）

记录进入恰好一条声明保藏路线的预处理质量。

- 选定流：预处理岩龙虾或其他海螯虾
- 流属性/单位：Mass / kg
- 数量规则：实测路线投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_mass_and_route`
- 数量范围：暂定保藏投入筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：10
  - 单位：kg/kg 净参考产品
  - 基准：每 kg 净参考产品的预处理投入质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保藏电力（`preservation_electricity`）

记录冷冻、干燥风机、泵、盐水循环及实际使用设备的路线归属电力；不适用的设备不纳入。

- 选定流：电力
- 流属性/单位：Energy / kWh
- 数量规则：实测或有文件依据的路线分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_preservation_utilities`
- 来源：`fao-fisheries-technical-paper-340`
- 数量范围：暂定保藏电力筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kWh/kg 净参考产品
  - 基准：每 kg 净参考产品的路线特定电力
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保藏热能（`preservation_thermal_energy`）

仅在熟制、加热干燥或其他声明路线步骤消耗热能时，记录燃料、蒸汽或外购热量。

- 选定流：热能
- 流属性/单位：Energy / MJ
- 数量规则：实测或按燃料计算的路线特定热能；只有有证据表明无热过程时才可为零
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_preservation_utilities`
- 数量范围：暂定热能筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：MJ/kg 净参考产品
  - 基准：每 kg 净参考产品的路线特定热能
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 食品级盐（`preservation_salt`）

仅为干盐腌或盐水/湿盐腌产品记录食品级盐，并区分产品吸收的盐与随废盐水或废水排出的盐。

- 选定流：食品级氯化钠
- 流属性/单位：Mass / kg
- 数量规则：实测领用盐减去退回的未使用盐
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_mass_and_route`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定用盐筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：kg/kg 净参考产品
  - 基准：每 kg 盐腌或盐水参考产品的盐投入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 盐水、包冰和路线用水（`preservation_route_water`）

记录配制盐水、包冰和路线特定工艺所用水；仅盐水路线纳入盐水用水，仅实际包冰时纳入冰衣。

- 选定流：饮用工艺水
- 流属性/单位：Mass / kg
- 数量规则：实测路线用水，不含预处理已记录的水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_mass_and_route`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定路线用水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 净参考产品
  - 基准：每 kg 净参考产品的盐水、包冰和其他路线用水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 保藏甲壳类中间产品（`preserved_crustacean_intermediate`）

记录转入包装的保藏产品，并采用与参考流限定信息一致的路线、水分或含盐状态、包冰状态和质量基准。

- 选定流：保藏岩龙虾或其他海螯虾
- 流属性/单位：Mass / kg
- 数量规则：按声明净产品基准实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每保藏过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_mass_and_route`

##### 废物流

###### 保藏废水和废盐水（`preservation_wastewater_and_spent_brine`）

当组成或处理方式不同时，分别记录路线特定废水和废盐水。

- 选定流：保藏废水或废盐水
- 流属性/单位：Mass / kg
- 数量规则：实测排放质量或按路线水盐平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_preservation_mass_and_route`
- 数量范围：暂定废水和废盐水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 净参考产品
  - 基准：每 kg 净参考产品的保藏废水和废盐水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：包装（`packaging`）

#### 输入

##### 产品流

###### 待包装保藏产品（`preserved_product_for_packaging`）

按与包装产出相同的净质量基准记录进入包装过程的保藏产品。

- 选定流：保藏岩龙虾或其他海螯虾
- 流属性/单位：Mass / kg
- 数量规则：包装线实测投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 初级和次级包装材料（`packaging_materials`）

按材料和质量记录实际使用的内衬、袋、托盘、纸箱、标签和盐水容器等包装材料。

- 选定流：按材料区分的包装材料
- 流属性/单位：Mass / kg
- 数量规则：采购或领用质量减退库量后分配至合格包装产出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 数量范围：暂定包装材料筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：2
  - 单位：kg/kg 净参考产品
  - 基准：每 kg 净参考产品的包装投入总量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装电力（`packaging_electricity`）

记录封口、真空或气调设备、贴标及实际使用的包装线辅助设备电力。

- 选定流：电力
- 流属性/单位：Energy / kWh
- 数量规则：实测或有文件依据的包装线分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 数量范围：暂定包装电力筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg 净参考产品
  - 基准：每 kg 净参考产品的包装电力
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 已包装保藏产品（`packaged_preserved_product`）

对于干制、干盐腌和盐水路线，本行为生产者门口参考产品；对于冷冻路线，本产品转入冷冻储存。

- 选定流：冷冻的、干的、盐腌的或盐水中的岩龙虾和其他海螯虾 `7b3eb43f-1808-43ec-963b-40e088052194`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：适用门口的 1 kg 目标产品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 包装边角料（`packaging_scrap`）

按材料和管理去向记录生产边角料。

- 选定流：按材料区分的包装生产边角料
- 流属性/单位：Mass / kg
- 数量规则：实测包装边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 数量范围：暂定包装边角料筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 净参考产品
  - 基准：每 kg 净参考产品的包装边角料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：发运前冷冻储存（`frozen_storage`）

#### 输入

##### 产品流

###### 进入储存的已包装冷冻产品（`packaged_frozen_product_input`）

仅冷冻路线纳入本行，并记录入库质量。

- 选定流：已包装冷冻岩龙虾或其他海螯虾
- 流属性/单位：Mass / kg
- 数量规则：实测入库质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 发运净冷冻参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_storage_records`

###### 冷冻储存电力（`frozen_storage_electricity`）

记录至声明发运点的储存电力，并保留储存时长和温度记录。

- 选定流：电力
- 流属性/单位：Energy / kWh
- 数量规则：设施计量电力按有文件依据的容量-时间或实测负荷方法分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净冷冻参考产品及声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_storage_records`
- 来源：`fao-fisheries-technical-paper-340`; `codex-cxc-52-2003`
- 数量范围：暂定冷冻储存电力筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kWh/kg 净冷冻参考产品
  - 基准：每 kg 净冷冻产品至生产者发运门口的储存电力
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制冷剂补充量（`refrigerant_makeup`）

记录向服务于所纳入冷冻储存的设备补充的制冷剂，并仅分配报告期库存平衡中归属的损失。

- 选定流：按物质区分的制冷剂
- 流属性/单位：Mass / kg
- 数量规则：按物质实测制冷剂补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：所纳入设备报告期制冷剂库存
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_storage_records`
- 数量范围：暂定制冷剂补充量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg 净冷冻参考产品
  - 基准：每 kg 净冷冻产品分配的制冷剂补充量
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 生产者发运门口的冷冻产品（`frozen_product_at_dispatch`）

记录完成声明储存时长且尚未开始出厂配送的冷冻参考产品。

- 选定流：冷冻的、干的、盐腌的或盐水中的岩龙虾和其他海螯虾 `7b3eb43f-1808-43ec-963b-40e088052194`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 冷冻目标产品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：1 kg 净冷冻参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 基本流

###### 制冷剂向空气排放（`refrigerant_emissions_to_air`）

根据所纳入设备报告期的库存平衡，按具体物质计算排放；不得使用未指明物质的制冷剂汇总流。

- 选定流：按物质区分的制冷剂向空气排放
- 流属性/单位：Mass / kg
- 数量规则：期初库存加补充量减期末库存再减有记录的回收量，并按所纳入储存产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净冷冻参考产品及声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_storage_records`
- 数量范围：暂定制冷剂排放筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg 净冷冻参考产品
  - 基准：每 kg 净冷冻产品分配的制冷剂损失
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_routes` | 冷冻、干制、干盐腌和盐水生产 | 分配前细分路线特定过程、公用工程、产率和废物。分别报告各路线结果，不得使用无条件多路线平均值。 | `eu-pef-2021-2279` |
| `allocation_shared_operations` | 共享预处理、包装和场址公用工程 | 首选直接测量；否则使用加工质量、计量运行时间或容量-时间等有文件依据的物理因果驱动量。若无法证明物理关系，使用同期价格进行有文件依据的经济分配，并提供敏感性结果。 | `eu-pef-2021-2279` |
| `allocation_residues_and_coproducts` | 外壳、内脏、拒收物、回收产品和其他产出 | 按实际去向把各产出分类为产品、共产品或废物。通过过程细分避免分配；无法避免时采用相同的先物理、后经济层级，并单独披露任何抵扣或替代产品。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_mass_balance` | `receipt_and_preparation` | 接收质量、预处理转移量、残余物 | 地磅或经校准秤记录 | lot_id; species; received_state; presentation; received_mass; prepared_mass; residue_mass_by_destination; cooking_status | 按批次核对接收、转移和废物记录 | kg | 每批 | 覆盖所有纳入批次的代表性生产期 | 各设施和生产线 | 按批次和路线求和后除以合格净产出 | 校准记录；批次核对；去向记录 |
| `cp_receipt_utilities` | `receipt_and_preparation` | 水、冰、电力、废水 | 仪表、发票、生产日志、水平衡 | meter_start; meter_end; purchased_ice_mass; recycled_water; discharge_mass; operating_time; lot_output | 优先直接分表计量；共享时采用有文件依据的分配 | kg; kWh | 每批或每计量区间 | 与生产批次相同期间 | 各设施及相关公用工程系统 | 扣除循环回路并按实测驱动量分配共享公用工程 | 仪表校准；发票；分配工作表；水平衡 |
| `cp_preservation_mass_and_route` | `route_specific_preservation` | 路线身份、投入/产出质量、盐、水、废盐水 | 批次表、秤、配方和排放记录 | route_code; batch_id; input_mass; output_mass; salt_issued; unused_salt; route_water; retained_salt; spent_brine; wastewater; time; temperature; moisture_or_drainage_basis | 每批恰好按一条声明路线分别采集 | kg; h; °C | 每批 | 所有纳入保藏批次 | 各设施、生产线和路线 | 仅在同一路线和声明产品状态内汇总 | 经校准秤；配方记录；路线控制日志；质量平衡 |
| `cp_preservation_utilities` | `route_specific_preservation` | 电力和热能 | 分表、燃料记录、蒸汽或热量表 | route_code; meter_start; meter_end; fuel_quantity; fuel_energy; steam_or_heat; operating_time; output_mass | 优先路线直接计量；否则按有文件依据的设备时间分配 | kWh; MJ | 每批或每计量区间 | 与保藏批次相同期间 | 各设施、设备组和路线 | 使用有文件依据的因子换算并除以路线特定净产出 | 仪表校准；发票；换算因子；分配工作表 |
| `cp_packaging_records` | `packaging` | 产品质量、包装、电力、边角料 | 生产线秤、材料领用、仪表、边角料记录 | batch_id; input_mass; net_output_mass; material_type; issued_mass; returned_mass; scrap_mass; electricity; package_count | 按批次核对包装线质量和材料领用 | kg; kWh; item | 每包装批次 | 所有纳入包装批次 | 各设施和包装线 | 按包装形式汇总并除以合格净产出 | 秤和仪表校准；物料清单；库存核对 |
| `cp_frozen_storage_records` | `frozen_storage` | 储存质量、时长、温度、电力、制冷剂 | 仓库出入库、温度记录仪、仪表、制冷剂服务记录 | lot_id; entry_mass; dispatch_mass; entry_time; dispatch_time; temperature_series; electricity; refrigerant_substance; opening_inventory; additions; closing_inventory; recovery | 仅为冷冻路线批次采集至生产者发运门口 | kg; day; °C; kWh | 连续温度；每次出入库；每月公用工程和制冷剂核对 | 完整纳入储存期 | 各冷库和制冷系统 | 按有文件依据的容量-时间或实测负荷分配电力；按库存平衡计算具体物质损失 | 经校准记录仪和仪表；服务发票；库存核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | 已包装保藏产出 | 目标产品净质量 = 灌装单元总质量 - 初级包装质量 - 游离冰衣质量 - 按声明沥除程序排出的游离包装盐水 | 总质量；包装质量；冰衣质量；沥出的游离盐水质量；外壳是否属于上市形态的声明 | kg 目标产品净质量 | `codex-cxc-52-2003` |
| `calc_process_mass_balance` | 预处理、保藏和包装 | 将实测投入与产品产出、分别实测的残余物、废水或废盐水、保留水或盐以及有记录的库存变化进行核对；调查无法解释的不平衡 | 各过程和批次的协议质量记录 | 路线特定产率和核对结果 | `eu-pef-2021-2279` |
| `calc_normalized_utilities` | 所有公用工程 | 归一化公用工程 = 路线归属公用工程量 / 合格净参考产品产出 | 仪表或发票量；分配驱动量；净产出 | 每 kg 净参考产品的 kWh 或 MJ | `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | 冷冻储存 | 按物质的制冷剂损失 = 期初库存 + 补充量 - 期末库存 - 有记录的回收量；只分配至所纳入设备和储存期间 | 具体物质库存和服务记录；储存产出 | 每 kg 净冷冻产品的 kg 制冷剂排放 | `fao-fisheries-technical-paper-340` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_route` | 每个数据集 | 声明物种或商业物种组、形态、外壳/熟制状态、恰好一条保藏路线、净质量方法、包装和门口状态。 | 产品规格；批次记录；标签；路线代码 |
| `dq_temporal_and_site_coverage` | 前景记录 | 使用覆盖所有纳入批次、路线、班次和季节条件的代表性期间；披露排除项、停机和共享服务分配。 | 生产日历；批次清单；仪表覆盖；排除日志 |
| `dq_measurement_and_reconciliation` | 质量、水、能源、盐、包装、废物和制冷剂 | 保留校准或发票证据，核对过程平衡，并在汇总前调查缺失记录、异常值和无法解释的损失。 | 校准证书；发票；平衡工作表；纠正措施记录 |
| `dq_upstream_and_proxy_quality` | 上游数据集 | 评估技术、地理、时间和精度/完整性适宜性；披露代理选择和实质性不匹配。 | 与 `eu-pef-2021-2279` 一致的数据集元数据和数据质量评分文件 |
| `dq_reasoned_estimates` | 所有暂定范围 | 不得把这些 QA 范围作为实测前景值。激活前须以采集证据或获认可的来源证据替代，或记录评审接受结论和不确定性。 | 评审记录；替代来源或获批不确定性说明 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考流和已包装产出 | 使用声明的沥除、冰衣、包装和外壳基准，以及指定的 Mass 属性和单位组 UUID，核验一个参考流恰等于 1 kg 目标产品净质量。 | `codex-cxc-52-2003` |
| `validate_single_route` | 过程图和清单 | 核验每个结果恰好声明 `frozen`、`dried`、`dry_salted` 或 `brined` 之一；冷冻储存仅可出现在 `frozen` 路线，盐和盐水投入仅在声明路线实际使用时出现。 | `codex-cxc-52-2003`; `unsd-cpc-3-0-2025` |
| `validate_mass_and_utility_completeness` | 前景清单 | 核验过程质量平衡，并覆盖适用于路线的重要水或冰、电力、热能、盐、包装、残余物、废水或废盐水和制冷剂流；任何适用但缺失的流必须有记录为零或排除的依据。 | `eu-pef-2021-2279` |
| `validate_food_safety_traceability` | 批次和路线记录 | 核验保留可追溯批次以及适用的时间-温度、卫生、干燥、盐腌/盐水和放行控制记录；失败属于数据质量发现，本 PCR 不构成法律合规认证。 | `codex-cxc-52-2003` |
| `validate_provisional_ranges` | 推理估算 QA 校验范围 | 对超出暂定范围的数值作调查标记，但不得以范围替代前景记录；所有暂定范围在激活前仍为评审事项。 |  |
| `validate_uuid_completeness` | 非参考清单流 | 激活前解析并评审重要非参考流的 Tiangong UUID，或记录获批的语义回退；参考流 UUID 为必填。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一条声明保藏路线的岩龙虾或海螯虾前景生产数据集 |
| downstream_use | `secondary_dataset`；在代表性和完整性评审后可作为 `background_dataset` |
| allowed_use | 与声明物种组、形态、保藏路线、技术、地理、期间、包装、储存时长和生产者门口边界相匹配的产品和过程 LCA 模型 |
| excluded_use | 冷冻、干制、干盐腌和盐水路线之间无条件替代；活/鲜/冷藏或罐藏产品；法律或食品安全认证；把暂定范围当作实测清单 |
| required_metadata | PCR id；物种或商业物种组；形态；外壳/熟制状态；路线代码；净质量和沥除基准；地点；技术；参考期间；包装；冷冻储存时长和温度；上游数据集；分配；截断；数据质量评估 |
| required_quality_disclosure | 前景覆盖；仪表和秤基准；过程核对；缺失数据；推理估算；分配驱动量；路线汇总；上游代理；未解析 UUID；不确定性和评审状态 |
| update_trigger | 物种组合、形态、保藏路线或技术、产率、能源系统、盐或盐水做法、包装、冷库系统或时长、制冷剂、场址、法规、上游数据集或来源证据发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | 联合国统计司，《中央产品分类》第 3.0 版，代码 21252，2025 年结构；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-08-11） | 分类范围及所覆盖保藏产品类别的区分 |
| `codex-cxc-52-2003` | standard | Codex Alimentarius，CXC 52-2003，《鱼和渔业产品操作规范》；https://www.fao.org/input/download/standards/10273/CXP_052e.pdf（检索于 2026-08-11） | 龙虾处理和加工、冷冻、干燥、盐腌/盐水、卫生、追溯、包装、储存和过程控制 |
| `fao-fisheries-technical-paper-340` | official_guidance | FAO Fisheries Technical Paper 340，Freezing and refrigerated storage in fisheries，1994；https://www.fao.org/4/v3630e/v3630e00.htm（检索于 2026-08-11） | 冷冻路线过程分解、制冷能耗记录、冷库、包装、温度测量和制冷剂管理 |
| `eu-pef-2021-2279` | official_guidance | 欧盟委员会关于环境足迹方法使用的建议（EU）2021/2279；https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（检索于 2026-08-11） | 功能单位和边界一致性、初级数据、分配层级、数据质量评估和披露 |
