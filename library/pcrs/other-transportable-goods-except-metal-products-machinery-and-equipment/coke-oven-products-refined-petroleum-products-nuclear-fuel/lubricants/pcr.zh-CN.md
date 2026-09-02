---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.lubricants
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 石油衍生成品润滑油

## 1. 范围与适用性

本 PCR 适用于液态成品润滑油的前景生产：配方中石油油品或从沥青矿物取得的油品质量占比不低于 70%，产品交付点为润滑油工厂发运门。申报产品族、配方、性能等级和包装状态后，可覆盖以矿物油为基础的发动机油、齿轮油、液压油、循环油、压缩机油、汽轮机油、金属加工油及可比工业润滑油。

共同前景路线始于工厂接收可销售的石油基础油、添加剂包和其他配方物料，包含计量、调和、按需加热或冷却、过滤、质量控制、返工、灌装或散装装载，以及直接废物和排放管理。原油开采、炼厂基础油生产、添加剂生产和包装材料生产应通过上游数据集链接表示，不得无说明地并入前景工厂。

润滑脂、以合成 PAO 或酯为主的润滑剂、生物基润滑剂、非石油润滑制剂、废润滑油以及作为未完工中间品销售的基础油不在范围内。分销、使用阶段性能或减排主张、维护、收集、再精炼和寿命终结均不属于本工厂门前景规则，除非另建并披露下游模型。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.lubricants |
| classification_refs | CPC 3.0 33380 Lubricants（`narrower`：本 PCR 限于液态石油衍生成品润滑油） |
| covered_products | 石油油品质量占比至少 70% 的液态成品润滑油，包括已申报的发动机油、齿轮油、液压油、循环油、压缩机油、汽轮机油、金属加工油及可比工业油产品族 |
| excluded_products | 润滑脂；以合成油、酯、硅油或生物基油为主的润滑剂；非石油制剂；废油；未完工基础油；燃料和溶剂 |
| representative_product | 已申报产品族、黏度或性能等级、基础油来源、添加剂包和包装状态，达到市场交付状态的石油衍生成品润滑油 |
| production_route | 接收石油基础油和添加剂；间歇或连续配方与调和；按需加热、冷却和过滤；质量控制与返工；工厂内灌装或散装装载 |
| market_state | 润滑油制造工厂发运门的液态成品，可为无包装散装或采用已申报的初级包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 产品是什么 | 工厂发运门达到市场交付状态的液态石油衍生成品润滑油 |
| 数量是多少 | 1 kg 润滑油净重，不含包装质量 |
| 性能如何 | 符合所申报产品族与性能规范，且石油油品或从沥青矿物取得的油品质量占比至少为 70% |
| 时间或周期 | 在有记录的代表性生产期内生产的一批成品；不包含使用阶段服务 |
| reference_flow_link | 质量放行后的可销售润滑油净质量，不含包装、返回同一批次系统的返工料、超差品或废物 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 润滑油 `66628f20-9d33-4997-bd6c-6357453fa268` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必填限定信息 | 产品族和预期润滑用途；液态；石油油品质量分数；基础油组别及原生或再精炼份额；添加剂包身份与质量分数；黏度或性能等级及适用规范；散装或包装形式；生产地区；生产期 |

构建前景数据包时，所有必填限定信息必须在数据集元数据、过程注释、参考流注释、产品说明或等效字段中声明。通用分类代码或商品名不能替代这些限定信息。

## 4. 测量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 成品参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有前景数量归一化为发运时 1 kg 合格润滑油净重；包装质量单列。 |
| `volume_to_mass` | 以体积报告的润滑油或液体投入 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用实际产品或批次在测量温度下的密度换算；记录密度、温度、来源和换算。 |
| `petroleum_fraction` | 配方组成 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg | 根据批次配方记录计算石油油品质量分数；适用本 PCR 时不得低于 0.70。 |
| `packaging_separation` | 初级包装和运输包装 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按材料报告每 kg 润滑油净重对应的包装质量；不得计入参考产品质量。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 润滑油工厂门接收的可销售石油基础油、添加剂包、清洗物料、公用工程和包装材料，并记录供应商身份与入厂质量 |
| starting_condition_role | 前景制造起点；上游生产负荷由链接的供应商数据集提供 |
| product_classification_scope | CPC 3.0 33380 范围内的液态石油衍生成品润滑油；不含润滑脂和非石油组分占多数的配方 |
| recursive_input_rule | 进入配方的再精炼基础油或其他同类油品作为投入记录，链接其自身上游供应商数据集并申报再生份额；不得把本成品润滑油 PCR 递归用于该投入 |
| upstream_dataset_requirement | 每种物料、能源载体、电力、蒸汽、水、运输和包装投入均链接在地理与技术上有代表性的供应商数据集；如使用经审查的代理，披露其局限 |
| disclosure | 申报配方产品族、石油和再精炼份额、工厂地区、生产期、所含操作、包装形式、分配依据、上游代理、排除项，以及调和公用工程是否分表计量或分配 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_plant_gate` | 前景润滑油制造 | 包含工厂控制下的卸料与储存、计量、调和、按需加热或冷却、过滤、质量控制、返工、灌装或散装装载、直接排放、废水和生产废物，直至发运门。 | api-tr-1533-2023; us-epa-petroleum-refining-2005 |
| `boundary_upstream_links` | 接收的基础油、添加剂、公用工程和包装 | 用链接的供应商数据集表示上游生产和入厂供应；不得将接收物料视为零负荷。 | api-tr-1533-2023 |
| `boundary_exclusions` | 分销、使用和寿命终结 | 从本前景包中排除客户物流、润滑油使用、避免排放、废油收集、再精炼和寿命终结，除非另行建模并披露。 | api-tr-1533-2023 |
| `boundary_cutoff_disclosure` | 被排除的物料或能量流 | 不得仅因质量小而排除流；筛查环境显著性，保留受监管或危险释放，并披露每项排除及理由。 | api-tr-1533-2023 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | 作用 | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `formulation_blending` | 配方、调和、调质与质量控制 | required | 始终包含 | 将接收组分生产为合格散装成品润滑油的前景过程 | 转至发运的合格调和油 kg |
| `filling_dispatch` | 灌装、包装或散装装载与发运 | required | 始终包含；散装产品记录无初级包装的装载 | 在工厂发运门交付参考产品净重 | 1 kg 成品润滑油净重 |

### 过程：配方、调和、调质与质量控制（`formulation_blending`）

#### 投入

##### 产品流

###### 石油基础油与石油衍生调和组分（`petroleum_base_oils`）

记录进入批次的每股基础油，包括供应商流、已知的 API 基础油组别、原生或再精炼状态、接收质量和批次归属。

- 选定流：按实际配方选择品级特定的石油基础油或石油衍生调和组分
- 流属性/单位：质量 / kg
- 数量规则：归属于合格成品润滑油的计量或称重批次投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 转至发运的合格调和润滑油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_materials`
- 来源：`unsd-cpc-3-0`
- 数量范围：石油油品组成边界
  - 范围角色：允许范围（`allowed_range`）
  - 下限：0.70
  - 上限：1.00
  - 单位：kg/kg 成品润滑油
  - 基准：每 kg 配方质量中的石油油品或从沥青矿物取得的油品
  - 基准类型：过程产出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`unsd-cpc-3-0`

###### 添加剂包与配方组分（`additive_package`）

按供应商身份和批次质量记录添加剂包及各配方组分；机密组成只有在总质量和上游负荷仍可追溯时才可汇总。

- 选定流：供应商特定的添加剂包或配方组分产品流
- 流属性/单位：质量 / kg
- 数量规则：称重或计量加入批次的组分质量
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 转至发运的合格调和润滑油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_materials`
- 来源：`api-tr-1533-2023`
- 数量范围：非石油配方质量平衡筛查
  - 范围角色：质量保证护栏（`qa_guardrail`）
  - 下限：0
  - 上限：0.30
  - 单位：kg/kg 成品润滑油
  - 基准：满足最低石油油品占比后的剩余配方质量
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 调和与调质购入电力（`blending_electricity`）

有条件时记录分表电力；否则依据分配规则将经核对的设施总表读数分配至批次。

- 选定流：与地区和电压相符的购入电力供应商流
- 流属性/单位：能量 / kWh
- 数量规则：转运、搅拌、加热或冷却、过滤和质量控制设备消耗的分表或分配电力
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 转至发运的合格调和润滑油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_utilities`
- 来源：`api-tr-1533-2023`
- 数量范围：待场址记录替换的临时宽筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg 调和润滑油
  - 基准：每 kg 合格过程产出的配方与调质用电
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 热能、燃料或外购蒸汽（`blending_thermal_energy`）

记录储罐加热、组分调质、管线伴热或其他热负荷所用实际能源载体和数量；只有记录证明未使用热能时才可省略。

- 选定流：按实际公用工程选择场址特定燃料、热或蒸汽供应商
- 流属性/单位：能量 / MJ
- 数量规则：实测能耗或燃料消耗，或根据表计读数和载体属性形成的有记录计算
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 转至发运的合格调和润滑油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_utilities`
- 来源：`api-tr-1533-2023`
- 数量范围：待场址记录替换的临时宽筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：MJ/kg 调和润滑油
  - 基准：每 kg 合格过程产出的交付热能
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 工艺与清洗用水（`process_water`）

记录产品接触操作、清洗、冷却补水及其他可归属生产用途的用水；闭路循环水不得重复计入。

- 选定流：场址特定供水流
- 流属性/单位：质量 / kg
- 数量规则：实测取水或分配的可归属用水，扣除单独记录的非生产需求
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 转至发运的合格调和润滑油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_utilities`
- 数量范围：待场址记录替换的临时宽筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 调和润滑油
  - 基准：每 kg 合格过程产出的可归属取水
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 产出

##### 产品流

###### 合格散装调和润滑油（`blended_lubricant`）

记录完成配方、调质、过滤和质量放行后转至灌装或散装装载的质量。

- 选定流：所申报产品族的合格无包装润滑油中间流
- 流属性/单位：质量 / kg
- 数量规则：转至发运作业的已放行储罐或批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：灌装损失和包装前的过程产出
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_outputs_wastes`

##### 废物流

###### 不可回用油性残渣、过滤材料与清洗废物（`unrecoverable_oily_waste`）

记录离开前景系统接受处理的含油残渣；受控返回同一产品系统的返工料不属于废物。

- 选定流：按实际废物身份选择场址特定废油、含油固废、废过滤材料或清洗废物流
- 流属性/单位：质量 / kg
- 数量规则：称重发运量或库存变动，并与废物联单和批次记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 转至发运的合格调和润滑油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_outputs_wastes`
- 数量范围：待场址记录替换的临时宽损失筛查
  - 范围角色：质量保证护栏（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg/kg 调和润滑油
  - 基准：每 kg 合格过程产出的不可回用生产废物
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 送处理的工艺废水（`process_wastewater`）

记录清洗或其他生产操作后离开过程边界的废水，并识别厂内或厂外处理路线。

- 选定流：按处理路线区分的场址特定废水流
- 流属性/单位：质量 / kg
- 数量规则：可归属于润滑油生产的计量排放量或有记录的水量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 转至发运的合格调和润滑油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_outputs_wastes`
- 数量范围：待场址记录替换的临时宽排放筛查
  - 范围角色：质量保证护栏（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 调和润滑油
  - 基准：每 kg 合格过程产出送处理的工艺废水
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

###### 调和作业向空气、水体或土壤的直接释放（`direct_process_emissions`）

只有跨越环境边界时才记录实测、计算或许可报告的释放（如挥发性有机物）；不得重复记录能源或上游供应商数据集已含的排放。

- 选定流：为每项报告释放选择物质与环境区室特定的天工基本流
- 流属性/单位：质量 / kg
- 数量规则：可归属于生产期的各物质实测值或监管计算值
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 转至发运的合格调和润滑油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`

### 过程：灌装、包装或散装装载与发运（`filling_dispatch`）

#### 投入

##### 产品流

###### 从调和过程接收的合格散装润滑油（`blended_lubricant_input`）

记录进入灌装或散装装载作业的实测质量，并与调和产出核对。

- 选定流：所申报产品族的合格无包装润滑油中间流
- 流属性/单位：质量 / kg
- 数量规则：进入发运作业的转移流量计或储罐库存质量
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 发运的成品润滑油净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filling_materials`

###### 初级、次级与运输包装（`packaging_materials`）

按材料记录包装，并记录已知再生含量、使用件数、皮重、重复使用次数和损失；散装产品应将初级包装记为零，不得虚构包装。

- 选定流：每种实际包装组分对应的材料特定包装产品流
- 流属性/单位：质量 / kg
- 数量规则：归属于成品润滑油净重的采购或领用包装质量，并按可重复使用容器循环次数调整
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 发运的成品润滑油净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filling_materials`
- 来源：`api-tr-1533-2023`
- 数量范围：待实际包装形式记录替换的临时宽筛查
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg 包装/kg 润滑油净重
  - 基准：每 kg 参考产品净重领用的全部包装材料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 灌装与发运用电（`filling_electricity`）

记录泵、灌装线、贴标机、输送设备及可归属发运设备的用电。

- 选定流：与地区和电压相符的购入电力供应商流
- 流属性/单位：能量 / kWh
- 数量规则：发运作业消耗的分表或分配电力
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 发运的成品润滑油净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filling_utilities`
- 数量范围：待场址记录替换的临时宽筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2
  - 单位：kWh/kg 润滑油净重
  - 基准：每 kg 参考产品净重对应的发运用电
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 产出

##### 产品流

###### 达到市场交付状态的石油衍生成品润滑油净重（`reference_lubricating_oil`）

这是质量放行并灌装或散装装载后的定量参考产出；包装单独建模。

- 选定流：润滑油 `66628f20-9d33-4997-bd6c-6357453fa268`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：恰好 1 kg 合格润滑油净重
- 数值来源模式：固定值（`fixed_value`）
- 特异性：通用（`generic`）
- 归一化基准：发运门 1 kg 成品润滑油净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`mass-balance-identity`

##### 废物流

###### 送处理的包装废品与灌装损失（`dispatch_waste`）

记录未作为返工料返回的包装废品和润滑油污染物料。

- 选定流：按每股实际废物选择材料与处理路线特定的废物流
- 流属性/单位：质量 / kg
- 数量规则：称重废物，或将计件废物换算为质量，并与包装和润滑油领用记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 发运的成品润滑油净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filling_outputs_wastes`
- 数量范围：待场址记录替换的临时宽发运废物筛查
  - 范围角色：质量保证护栏（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg/kg 润滑油净重
  - 基准：每 kg 参考产品的包装废物与未回收灌装废物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

###### 灌装与装载直接释放（`dispatch_emissions`）

实测或许可要求时，记录灌装或散装装载产生的物质与环境区室特定释放；不得重复上游或调和排放。

- 选定流：为每项报告释放选择物质与环境区室特定的天工基本流
- 流属性/单位：质量 / kg
- 数量规则：可归属于发运作业的实测值或监管计算值
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 发运的成品润滑油净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 批次物料、公用工程、废物和排放 | 可行时通过独立批次记录、分表计量、储罐核对或划分独立计量操作来避免分配。 | api-tr-1533-2023 |
| `allocation_shared_utilities` | 共用电力、热、蒸汽、水和场址服务 | 产品路线公用工程强度相近时，按合格产出净质量分配经核对的共用公用工程；强度有实质差异时，使用分表计量或有记录的因果工程依据并披露结果。 | api-tr-1533-2023 |
| `allocation_rework` | 系统内返工 | 受控的同产品返工料返回批次质量平衡，不重复分配上游负荷；离开产品系统的物料按实际去向记录为产品、废物或排放。 | mass-balance-identity |
| `allocation_upstream_coproducts` | 基础油和添加剂供应商数据集 | 沿用供应商数据集经审查的联产品分配；不得在润滑油调和前景内重新分配上游炼油或化工负荷。供应商方法未知时披露局限。 | api-tr-1533-2023 |
| `allocation_no_unverified_credit` | 废物和回收物料 | 没有明确的下游系统模型和一致分配方法时，不得在本前景过程计入避免负荷或回收抵扣。 | api-tr-1533-2023 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_materials` | `formulation_blending` | 基础油、添加剂和配方物料 | 批次配方、称量票、转移流量计、储罐库存 | batch_id; product_code; supplier_flow; material_role; base_oil_group; virgin_or_rerefined; opening_mass; received_mass; charged_mass; closing_mass; unit; density; temperature | 对每批次核对配方、称量/流量记录和储罐库存 | kg；L 经密度换算 | 每批次 | 覆盖至少连续 12 个月的代表期 | 服务于申报产品的全部生产线与储罐 | 按产品汇总可归属物料并除以合格调和产出；核对库存变动 | 经校准秤或流量计记录、配方批准、供应商规范、储罐核对 |
| `cp_blending_utilities` | `formulation_blending` | 电力、热、蒸汽、燃料和水 | 公用工程表计、账单、设备日志 | meter_id; carrier; opening_reading; closing_reading; unit; line_or_area; operating_hours; batch_ids; allocation_basis | 优先分表；否则核对场址总量并应用批准的分配规则 | kWh; MJ; kg; m3 | 每月，已分表时按批次 | 同一代表性 12 个月期间 | 调和、加热、冷却、过滤、实验室和可归属辅助设备 | 扣除非生产需求，仅分配经核对余量并按合格产出归一化 | 表计校准、账单、燃料分析、分配工作表、核对签字 |
| `cp_blending_outputs_wastes` | `formulation_blending` | 放行产品、返工料、油性废物、过滤材料和废水 | 储罐转移、生产报告、废物联单、废水表计 | batch_id; released_mass; rework_returned; waste_stream; waste_mass; wastewater_volume_or_mass; treatment_route; opening_inventory; closing_inventory | 将放行产品和全部非产品产出与物料投入核对 | kg；m3 经密度换算 | 每批次及每次废物发运 | 同一代表性 12 个月期间 | 所有纳入的调和作业 | 按产品族和处理路线汇总；返工留在平衡内，废物置于平衡外 | 已签字放行记录、联单、废水日志、库存核对 |
| `cp_direct_emissions` | `formulation_blending`; `filling_dispatch` | 直接基本流释放 | 烟道或无组织测量、许可报告、排放计算 | substance; compartment; measurement_method; activity_data; factor; measured_amount; uncertainty; reporting_period; process_area | 有实测值时使用实测；否则使用监管计算方法并保留输入 | kg 物质 | 测量或许可报告频率 | 同一代表性 12 个月期间 | 所有纳入的排放点与过程区域 | 按物质和环境区室求和，不重复供应商数据集排放 | 实验室报告、经校准仪器、许可申报、计算工作簿 |
| `cp_filling_materials` | `filling_dispatch` | 散装润滑油转移与包装 | 灌装流量计、储罐库存、物料清单、采购与领用记录 | product_code; package_type; material; unit_count; tare_mass; recycled_content; reuse_cycles; lubricant_in; lubricant_out; rejected_units | 将润滑油转移和包装领用与可销售发运质量核对 | kg；计件换算 kg | 每批次或发运批 | 同一代表性 12 个月期间 | 产品全部灌装线与散装装载点 | 按材料汇总包装并除以发运润滑油净重；散装包装报告为零 | 经校准灌装机、皮重测试、包装规范、领用记录、发运记录 |
| `cp_filling_utilities` | `filling_dispatch` | 发运电力和燃料 | 公用工程表计、设备日志、燃料记录 | meter_id; carrier; readings; operating_hours; line; product_lots; allocation_basis | 对发运区域公用工程分表，或对核对后用量进行分配 | kWh; MJ | 每月，已分表时按发运批 | 同一代表性 12 个月期间 | 灌装、贴标、输送和散装装载 | 采用有记录的因果依据；强度相近时可按产出净质量分配 | 表计记录、账单、分配工作表、主管批准 |
| `cp_filling_outputs_wastes` | `filling_dispatch` | 可销售产品、灌装损失与包装废品 | 发运记录、生产线核对、废物联单 | lot_id; lubricant_in; net_product_out; package_issue; package_reject; lubricant_loss; rework_return; waste_mass; treatment_route | 核对每个发运批并保持废物去向可追溯 | kg；计件换算 kg | 每发运批及每次废物发运 | 同一代表性 12 个月期间 | 所有纳入的灌装与装载作业 | 汇总可销售产出和非产品产出；返回返工料不得计为废物 | 已签字发运记录、生产线平衡、称量票、联单 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_amount` | 每个前景清单行 | 归一化数量 = 代表期可归属数量 / 同期发运的合格参考产品净质量 kg | 可归属行数量；发运润滑油净质量 | 每 1 kg 参考产品的数量 | mass-balance-identity |
| `calc_volume_to_mass` | 体积记录的液体 | 质量 = 实测体积 × 记录温度下密度；可获得产品特定密度时不得使用通用密度 | 体积；密度；测量温度 | kg 物料 | api-tr-1533-2023 |
| `calc_petroleum_fraction` | 配方身份 | 石油占比 = 石油油品和从沥青矿物取得的油品质量 / 润滑油配方总净质量；结果不得低于 0.70 | 批次配方质量与物料身份 | kg 石油油品/kg 配方 | unsd-cpc-3-0; mass-balance-identity |
| `calc_process_mass_balance` | 每个过程和批次族 | 残差 = 总质量投入 - 产品净产出 - 已记录返工转移 - 废物产出 - 实测基本流质量释放 - 期末库存增加 + 期初库存减少；调查并披露残差 | 物料、产品、废物、排放与库存记录 | 质量平衡残差与闭合声明 | mass-balance-identity |
| `calc_packaging_intensity` | 包装产品 | 分材料包装强度 = 包装领用量减去经核实的可重复使用返回和废品 / 发运润滑油净质量 kg | 包装领用、返回、废品、皮重与发运记录 | kg 包装材料/kg 润滑油净重 | api-tr-1533-2023 |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品与配方 | 保留产品代码、产品族、用途、性能或黏度等级、液态、石油占比、基础油组别、再精炼份额、添加剂包和包装形式。 | 批准配方、产品规范、分析证书、批次放行 |
| `dq_temporal` | 全部前景记录 | 使用覆盖至少连续 12 个月的代表期；识别停机、异常生产和替代。 | 带日期记录、生产日历、异常日志 |
| `dq_measurement` | 质量、体积、公用工程和排放 | 使用经校准仪器或受控账单；记录体积换算的密度和温度并保留计算输入。 | 校准证书、账单、实验室报告、换算工作表 |
| `dq_completeness` | 前景边界 | 核对所有纳入的生产线、储罐、灌装点、废物和直接释放；披露遗漏操作，并在可行时量化潜在显著性。 | 场址图、表计图、质量与公用工程平衡、排除清单 |
| `dq_representativeness` | 上游供应商和代理 | 匹配技术、地区、时间、基础油路线和包装材料；记录每个代理及无法获得更有代表性供应商数据集的原因。 | 供应商元数据、代理评估、来源审查 |
| `dq_confidentiality` | 机密配方 | 汇总可以保护商业秘密，但必须保留总质量、石油占比、上游负荷、添加剂包可追溯性和验证证据。 | 受控机密附件与公开汇总声明 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_scope` | 产品身份 | 产品不是液态成品润滑油、石油油品占比低于 0.70 或无证据，或缺少必填限定信息时失败。 | unsd-cpc-3-0 |
| `validate_reference_flow` | 定量参考 | 必须恰好为 1 kg 合格润滑油净重：润滑油 `66628f20-9d33-4997-bd6c-6357453fa268`，质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；包装必须单列。 | mass-balance-identity |
| `validate_process_coverage` | 过程清单 | 必须包含 `formulation_blending` 和 `filling_dispatch`；无初级包装时仍包含散装装载。工厂控制下的物料、公用工程、废物或直接释放不得无说明遗漏。 | api-tr-1533-2023 |
| `validate_mass_balance` | 配方与发运 | 必须形成过程质量平衡闭合记录，按场址批准容差调查残差并披露剩余残差；返工料不得同时重复计为产品与废物。 | mass-balance-identity |
| `validate_allocation` | 共用操作 | 必须使用分表计量、对强度相近路线按质量分配，或对实质不同路线采用有记录的因果依据；披露所选依据及受影响流。 | api-tr-1533-2023 |
| `validate_temporal_completeness` | 前景数据期 | 必须有至少连续 12 个月的代表性前景记录；较短生产活动须有理由，并覆盖完整生产活动及库存变化。 | api-tr-1533-2023 |
| `validate_upstream_links` | 物料与能量投入 | 每项非微小投入必须有供应商数据集或经审查代理，并披露技术、地区、时间和分配局限。 | api-tr-1533-2023 |
| `validate_no_double_count` | 公用工程、包装、排放与返工 | 数量计入多个过程、供应商数据集内含排放又作为直接排放重复、可重复使用包装未经循环调整而每次全计，或返工料重复获得生产负荷时失败。 | mass-balance-identity |
| `validate_reasoned_ranges` | 临时范围 | 所有 `reasoned_estimate` 范围只能作为筛查辅助，不能代替前景记录；在出版关键使用前必须披露并替换。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 润滑油工厂发运门石油衍生成品润滑油的前景制造数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 具备产品和场址限定的过程 LCI、链接上游供应商的从摇篮到工厂门模型、供应商足迹；仅在配方范围、边界、分配、时期、包装处理和数据质量一致时比较 |
| excluded_use | 润滑脂或非石油配方；通用使用阶段性能；避免排放主张；从摇篮到坟墓主张；燃烧或燃料替代；跨产品族或性能等级的无限定比较 |
| required_metadata | canonical PCR id；产品族与用途；液态；石油占比；基础油组别与再精炼份额；添加剂包；黏度或性能等级与规范；工厂地区；生产期；散装或包装形式；边界；分配；供应商数据集；代理清单 |
| required_quality_disclosure | 前景覆盖与校准；质量平衡残差；公用工程分配；配方机密处理；时间、地区和技术代表性；上游代理局限；推理估计；排除与截断决定 |
| update_trigger | 配方、基础油路线或再精炼份额发生实质变化；产品族或性能规范变化；工厂或技术变化；包装变化；分配变化；供应商替换；生产期滚动；新证据使临时范围或边界规则失效 |

## 11. 数据来源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | official_guidance | 联合国统计司，《Central Product Classification Version 3.0》，CPC 33380 Lubricants，https://unstats.un.org/unsd/classifications/Econ/cpc（检索于 2026-08-09） | 分类边界，以及从 CPC 组别语境继承的最低石油油品占比 |
| `environdec-pcr-2025-06` | standard | International EPD System，PCR 2025:06 Lubricating products，version 1.0.3，https://www.environdec.com/pcr-library/pcr_c41f1c3a-ce16-4e42-470c-08dcb7aea32c（检索于 2026-08-09） | 确认 CPC 3338 润滑产品存在材料 PCR 类别；类别层面范围语境 |
| `api-tr-1533-2023` | official_guidance | American Petroleum Institute，API Technical Report 1533，Lubricants Life Cycle Assessment and Carbon Footprinting—Methodology and Best Practice，First Edition，May 2023，https://www.api.org/-/media/files/certification/engine-oil-diesel/publications/api%20tr%201533.pdf（检索于 2026-08-09） | 申报质量单位、生命周期边界、分配层级、润滑油调和清单、包装、采集期、数据层级和数据质量 |
| `us-epa-petroleum-refining-2005` | official_guidance | 美国环境保护署，Appendix A—Overview of Petroleum Refining，November 2005，https://www.epa.gov/sites/production/files/documents/AppendixA_Overview_of_Petroleum_Ref.pdf（检索于 2026-08-09） | 石油润滑油精炼与调和过程拆分，以及油品与润滑脂的区分 |
| `mass-balance-identity` | method_factor | 对每个申报批次和过程边界应用质量守恒 | 归一化、配方组成、返工处理和过程质量平衡验证 |
