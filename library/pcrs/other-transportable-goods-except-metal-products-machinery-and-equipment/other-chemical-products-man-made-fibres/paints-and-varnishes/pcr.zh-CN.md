---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.paints-and-varnishes
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 涂料和清漆

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 代码 35110 所涵盖的液态或粉末涂料、清漆、罩光漆、底漆、木器着色剂、高性能涂层及相关配制型涂层产品的工厂生产。当明确声明生产路线时，水性、溶剂型、粉末型、单组分、多组分以及现场熬制清漆路线均属于本 PCR 的适用范围。

前景系统生产工厂门口的经包装可销售涂层产品。系统包括配料、分散或研磨、调漆与着色、有条件的热熬制、质量控制与返工、过滤、灌装、包装、设备清洗、直接排放和场内废物管理。印刷和书写油墨、美术颜料、胶黏剂和密封剂、脱漆剂、涂装服务、基材上的固化涂层，以及作为独立产品生产的上游颜料或粘结剂不在本 PCR 范围内。

参考数量用于生产清单和从摇篮到工厂门口的数据集。基于涂层服务的比较还必须把产品质量换算为声明的覆盖面积、性能、维护周期和研究期；仅凭工厂门口参考数量不能证明功能等效。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.paints-and-varnishes |
| classification_refs | CPC 3.0: 35110, Paints and varnishes and related products |
| covered_products | 水性和溶剂型涂料、清漆、罩光漆、底漆、木器着色剂、高性能涂层、粉末涂料及相关配制型涂层产品 |
| excluded_products | 印刷和书写油墨；美术颜料；胶黏剂和密封剂；脱漆剂；涂装服务；固化涂层或涂覆制品；单独生产的上游颜料和粘结剂 |
| representative_product | 符合其声明配方系列和销售规格的包装涂料或清漆 |
| production_route | 原料接收和计量；混合及分散或研磨；调漆、着色和过滤；有条件的热熬制；质量控制和返工；灌装和包装；清洗与废物管理 |
| market_state | 工厂门口用于销售的净涂层产品及其包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 工厂门口的包装涂料或清漆 |
| How much | 1 kg 净涂层产品；包装单独列入清单，不计入 1 kg 净产品质量 |
| How well | 符合声明的产品系列、配制路线、固含量、密度、VOC 含量、适用时的覆盖率或涂布率规格以及放行质量要求 |
| How long or cycle | 一个生产批次；不代表使用阶段寿命 |
| reference_flow_link | filling_packaging 的定量参考输出为 1 kg 净产品，并链接到选定的 Paint 流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 工厂门口 1 kg 净包装涂层产品 |
| 参考产品流 | Paint；UUID b2aa1a35-1823-4b13-96db-d5b89eda2db5 |
| 参考流属性 | Mass；UUID 93a60a56-a3c8-11da-a746-0800200b9a66 |
| 参考单位组 | Units of mass；UUID 93a60a57-a4c8-11da-a746-0800200c9a66 |
| 参考单位 | kg |
| 必需限定信息 | 配方系列；水性、溶剂型、粉末型、单组分或多组分路线；产品子类别和预期基材；固含量；密度；VOC 含量；包装形式和材料；工厂及地理范围；批次期间；适用时的覆盖率或涂布率和性能等级 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| mu_reference_mass | 参考产品输出 | Mass | kg | 将可销售包装产品归一化为 1 kg 净涂层，不包括包装质量。 |
| mu_material_inputs | 配方原料、清洗剂、包装、废物和废水 | Mass | kg | 记录接收状态的湿质量；当解释物料需要时，另行记录干物质、固含量或浓度。 |
| mu_liquid_volume | 未直接测量质量的水、溶剂或液体原料 | Volume and density | m3 and kg/m3 | 使用对批次和温度有代表性的实测密度把体积换算为质量，并保留原始体积和密度。 |
| mu_electricity | 外购或自发电力 | Energy | kWh | 记录计量或分配电量，并识别电压等级和供电数据集。 |
| mu_thermal_energy | 热熬制路线使用的燃料或外供热 | Net calorific value or energy | MJ | 报告燃料质量或体积和净热值，或直接计量的供热；不得在未披露时以电力替代。 |
| mu_air_emissions | VOC 和颗粒物排放 | Mass | kg | 报告控制后的污染物特定实测或计算质量，并识别捕集与治理假设。 |
| mu_service_conversion | 涂层服务比较 | Area, performance, and time | m2 and year | 使用声明的覆盖率或涂布率、必要时的密度、施工比例、维护倍数、性能判据和研究期换算产品质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 涂层原料、中间体、包装、燃料和公用工程进入生产场址 |
| starting_condition_role | 前景工厂门口起点；报告从摇篮到工厂门口结果时，上游生产和供应商至工厂运输仍是必需的背景贡献 |
| product_classification_scope | 由声明配方系列和生产路线代表的 CPC 3.0 代码 35110 产品 |
| recursive_input_rule | 作为输入购买的涂料、清漆或涂层中间体必须作为可见技术流输入记录，不得递归继承本前景过程 |
| upstream_dataset_requirement | 对颜料、填料、粘结剂、溶剂、水、助剂、包装、燃料、电力、运输和废物处理使用有代表性的上游数据集；披露地理、技术、年代和替代关系 |
| disclosure | 披露排除工序、外包步骤、返工回路、截断、污染治理、分配、数据缺口，以及涂装和报废阶段是否位于数据集之外 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| sb_received_inputs | 前景起点 | 纳入所有原料、中间体、包装、燃料和公用工程的接收、储存损失与计量；报告从摇篮到工厂门口影响时，应连接上游数据集及供应商至工厂运输。 | epd-international-pcr-2019-14-v2-0-1 |
| sb_manufacturing_operations | 工厂作业 | 存在时纳入混合、分散或研磨、调漆、着色、过滤、有条件的热熬制、质量控制、返工、灌装、包装、设备清洗、直接排放和场内废物管理。 | us-epa-ap42-6-4-1995 |
| sb_direct_releases | 向空气、水和废物流的释放 | 记录控制后的直接 VOC、颗粒物、废水、涂层残渣和其他物料释放，并记录捕集、治理和去向。 | eu-commission-2025-2607, us-epa-ap42-6-4-1995 |
| sb_use_end_of_life | 工厂门口画像 | 工厂门口数据集不包括施工、使用、维护、去除和最终报废；仅在另行声明的扩展研究中纳入。 | jrc-145239-2026 |
| sb_cutoff_disclosure | 完整性 | 不得仅因质量较小而省略已知危险组分或直接排放；记录全部截断并适用主管方案的完整性规则。 | epd-international-pcr-2019-14-v2-0-1 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| formulation_dispersion | 配料、分散与后处理 | required | 所有产品 | 将原料转化为符合规格的散装涂层 | 送往灌装的 kg 散装涂层 |
| thermal_cooking | 清漆或树脂中间体热熬制 | conditional | 仅当报告场址发生熬制或反应时纳入 | 生产熬制中间体及相关排放 | 转入配料的 kg 熬制中间体 |
| filling_packaging | 灌装与包装 | required | 所有包装产品 | 生产工厂门口参考产品 | 1 kg 净包装涂层产品 |
| cleaning_waste_management | 设备清洗与场内废物管理 | required | 所有产品；只有具有文件证据时才可记录为零 | 记录清洗输入、废水、残渣、回收和排放 | 所支持的 kg 净包装产品 |

### 过程：配料、分散与后处理（`formulation_dispersion`）

#### 输入

##### 

###### 颜料和填料（`fd_pigments_fillers`）

当供应商数据集不同时，应分别记录颜料和填料；二氧化钛可使用已确认的选定流。

- 选定流：钛白粉；UUID 12525dde-1d7a-4024-9ea3-5b90912a48f8，以及产品特定颜料和填料流
- 流属性/单位：Mass / kg
- 数量规则：汇总批次领料质量并扣除有记录的退料，再按放行散装涂层质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：送往灌装的 kg 散装涂层
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_batch_materials
- 来源：jrc-145239-2026
- 数量范围：临时配方校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.80
  - 单位：kg/kg 散装涂层
  - 基准：允许透明清漆和高填充涂层的推理估计；应以工厂配方数据替代。
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）
  - 来源：

###### 配方用水（`fd_water`）

单独记录有意加入配方的水，不得与清洗水合并。

- 选定流：淡水；UUID 021fbe67-2b7a-43b4-af09-4c3d62b83e3b
- 流属性/单位：Mass / kg
- 数量规则：使用计量质量，或使用实测密度把计量体积换算为质量，再按放行散装涂层质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：送往灌装的 kg 散装涂层
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_batch_materials
- 来源：eu-commission-2025-2607
- 数量范围：临时配方校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.80
  - 单位：kg/kg 散装涂层
  - 基准：跨溶剂型、水性和粉末产品的推理估计；应以工厂数据替代。
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）
  - 来源：

###### 配方溶剂（`fd_solvent`）

尽可能按物质或供应商产品分别记录各有机溶剂。

- 选定流：涂装溶剂；UUID db1ae0f8-e5fb-408a-a443-e5d837ec8767，或物质特定溶剂流
- 流属性/单位：Mass / kg
- 数量规则：汇总批次领料质量并扣除有记录的退料，再按放行散装涂层质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：送往灌装的 kg 散装涂层
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_batch_materials
- 来源：us-epa-ap42-6-4-1995, jrc-145239-2026
- 数量范围：临时配方校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.80
  - 单位：kg/kg 散装涂层
  - 基准：跨粉末、水性和高溶剂产品的推理估计；应以工厂数据替代。
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）
  - 来源：

###### 助剂（`fd_additives`）

按化学性质和危害相关性分别记录重要助剂。

- 选定流：产品特定助剂流；系列 UUID 未决
- 流属性/单位：Mass / kg
- 数量规则：汇总批次领料质量并扣除有记录的退料，再按放行散装涂层质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：送往灌装的 kg 散装涂层
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_batch_materials
- 来源：eu-commission-2025-2607
- 数量范围：临时配方校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg/kg 散装涂层
  - 基准：推理估计；应以工厂配方和采购数据替代。
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）
  - 来源：

###### 电力（`fd_electricity`）

包括混合、分散、研磨、泵送、通风、过滤和本地质量控制用电。

- 选定流：Electricity, medium voltage, at plant GLO；UUID 00e13b1e-b38b-42bc-b5d9-22b1ff5d4355，应由代表性区域供电流替代
- 流属性/单位：Net calorific value / kWh
- 数量规则：使用分表电量，或按有因果关系的设备运行时间和负荷分配经核对的全厂电表总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：送往灌装的 kg 散装涂层
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_formulation_energy
- 来源：eu-commission-2025-2607
- 数量范围：临时过程能源校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.005
  - 上限：1.5
  - 单位：kWh/kg 散装涂层
  - 基准：覆盖低剪切混合至高强度研磨的推理估计；应以计量数据替代。
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）
  - 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 送往灌装的散装涂层（`fd_bulk_output`）

该中间体闭合配制过程并转入灌装。

- 选定流：产品特定散装涂料或清漆中间体
- 流属性/单位：Mass / kg
- 数量规则：测量放行批次质量；无法直接称量时，根据灌装质量、留样和有记录的下游损失计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：配方总输入
- 基准类型：物料输入（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_batch_outputs
- 来源：mass-balance-identity
- 数量范围：临时批次收率校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.90
  - 上限：1.00
  - 单位：kg/kg 配方总输入
  - 基准：仅用于标记未核对损失的推理估计；应以场址收率历史替代。
  - 基准类型：物料输入（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）
  - 来源：

##### 废物流

###### 不合格涂层和滞留残渣（`fd_waste_paint`）

将内部返工物料与送往回收、处理或处置的物料分开。

- 选定流：废涂料残渣；UUID 877e5a04-76c8-4c5b-ac4c-062f5beeb2bd
- 流属性/单位：Mass / kg
- 数量规则：汇总离开该过程的称量残渣和报废批次，不包括有记录的闭环返工。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：kg 散装涂层
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_batch_outputs
- 来源：mass-balance-identity
- 数量范围：临时废物校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg/kg 散装涂层
  - 基准：推理估计；超出范围时应调查而不得截断。
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）
  - 来源：

##### 基本流

###### 挥发性有机物排放至空气（`fd_voc_air`）

记录实测 VOC，或记录经过捕集与治理修正的物质层级质量平衡。

- 选定流：挥发性有机化合物；UUID 08a91e70-3ddc-11dd-9155-0050c2490048
- 流属性/单位：Mass / kg
- 数量规则：使用监测排放或溶剂平衡；报告治理效率并避免重复计算产品中保留的溶剂。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：kg 投入溶剂
- 基准类型：物料输入（`process_output`）
- 证据类型：计算值（`calculated_from_collection`）
- 采集协议：cp_process_emissions
- 来源：us-epa-ap42-6-4-1995
- 数量范围：历史未控制制造损失校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：0.02
  - 单位：kg VOC/kg 投入溶剂
  - 基准：AP-42 对涂料和清漆制造溶剂损失的历史描述；不得作为当前默认值或法规因子。
  - 基准类型：物料输入（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：us-epa-ap42-6-4-1995

###### 颗粒物排放至空气（`fd_pm_air`）

记录捕集和治理后的颜料与粉末处理排放。

- 选定流：Particulate matter；UUID 0418b561-ecf8-33c8-9c81-225789f15bd3
- 流属性/单位：Mass / kg
- 数量规则：使用监测排放，或按有记录的捕集与治理修正干物料平衡。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：kg 处理的干颜料和填料
- 基准类型：物料输入（`process_output`）
- 证据类型：计算值（`calculated_from_collection`）
- 采集协议：cp_process_emissions
- 来源：us-epa-ap42-6-4-1995
- 数量范围：历史未控制干颜料处理校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.005
  - 上限：0.01
  - 单位：kg 颗粒物/kg 处理的干颜料
  - 基准：AP-42 对未控制颗粒物排放的历史估计；不得作为当前默认值或法规因子。
  - 基准类型：物料输入（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：us-epa-ap42-6-4-1995

### 过程：清漆或树脂中间体热熬制（`thermal_cooking`）

#### 输入

##### 产品流

###### 清漆或树脂前体（`tc_precursors`）

仅纳入进入现场熬制中间体的原料。

- 选定流：化学组成特定的前体流
- 流属性/单位：Mass / kg
- 数量规则：汇总批次领料质量并扣除有记录的退料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：kg 熬制中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_thermal_batch
- 来源：us-epa-ap42-6-4-1995

###### 热能（`tc_thermal_energy`）

分别记录燃料和热载体；流 UUID 取决于具体路线。

- 选定流：路线特定燃料或外供热流；热能 UUID 未决
- 流属性/单位：Net calorific value / MJ
- 数量规则：使用计量燃料或热量及实测净热值；按因果热负荷分配共享热量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：kg 熬制中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_thermal_energy
- 来源：us-epa-ap42-6-4-1995
- 数量范围：临时热能校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：MJ/kg 熬制中间体
  - 基准：推理估计；应以路线特定的计量数据替代。
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）
  - 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 熬制清漆或树脂中间体（`tc_intermediate`）

把实测中间体转入配料，不赋予最终产品参考流。

- 选定流：产品特定熬制中间体
- 流属性/单位：Mass / kg
- 数量规则：使用经前体输入和已记录释放核对的实测批次输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：前体总质量
- 基准类型：物料输入（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_thermal_batch
- 来源：mass-balance-identity

##### 废物流

##### 基本流

###### 热路线 VOC 排放至空气（`tc_voc_air`）

在汇总前单独记录路线特定 VOC。

- 选定流：挥发性有机化合物；UUID 08a91e70-3ddc-11dd-9155-0050c2490048
- 流属性/单位：Mass / kg
- 数量规则：使用监测排放，或使用经捕集与治理修正的批次质量平衡。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：kg 熬制中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：计算值（`calculated_from_collection`）
- 采集协议：cp_thermal_emissions
- 来源：us-epa-ap42-6-4-1995

### 过程：灌装与包装（`filling_packaging`）

#### 输入

##### 产品流

###### 散装涂层（`fp_bulk_input`）

从配制过程转入已放行散装涂层。

- 选定流：产品特定散装涂料或清漆中间体
- 流属性/单位：Mass / kg
- 数量规则：使用转移或核对后的批次质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：kg 净包装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_packaging_records
- 来源：mass-balance-identity

###### 包装材料（`fp_packaging`）

分别记录容器、封盖、内衬、标签、纸箱、托盘和其他非重复使用包装。

- 选定流：材料特定包装流；包装材料 UUID 未决
- 流属性/单位：Mass / kg
- 数量规则：使用经领用、退回和包装废料核对的物料清单数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：kg 净包装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_packaging_records
- 来源：eu-commission-2025-2607
- 数量范围：临时包装校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：0.30
  - 单位：kg 包装/kg 净产品
  - 基准：覆盖散装和小容器包装的推理估计；应以包装物料清单替代。
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）
  - 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装涂料或清漆（`fp_reference_product`）

这是定量参考输出。

- 选定流：涂料；UUID b2aa1a35-1823-4b13-96db-d5b89eda2db5
- 流属性/单位：Mass / kg
- 数量规则：将实测可销售批次输出归一化后精确设为 1 kg 净涂层；包装单独列入清单。
- 数值来源模式：固定常量（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：
- 来源：mass-balance-identity
- 数量范围：参考数量恒等式
  - 范围角色：预期范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：定义的参考数量。
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：mass-balance-identity

##### 废物流

###### 包装废料（`fp_packaging_waste`）

按材料记录送往回收、处理或处置的包装废料。

- 选定流：材料特定包装废物流
- 流属性/单位：Mass / kg
- 数量规则：称量，或根据包装领用、包装单元、退回和库存进行核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：kg 净包装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_packaging_records
- 来源：mass-balance-identity
- 数量范围：临时包装废料校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg/kg 净产品
  - 基准：推理估计；应以包装核对记录替代。
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）
  - 来源：

##### 基本流

### 过程：设备清洗与场内废物管理（`cleaning_waste_management`）

#### 输入

##### 产品流

###### 清洗水（`cw_water`）

清洗水与配方用水分开记录。

- 选定流：淡水；UUID 021fbe67-2b7a-43b4-af09-4c3d62b83e3b
- 流属性/单位：Mass / kg
- 数量规则：使用计量质量，或用实测密度换算计量体积，并按有记录的清洗事件分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：所支持的 kg 净包装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_cleaning_inputs
- 来源：eu-commission-2025-2607
- 数量范围：临时清洗水校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg 净产品
  - 基准：推理估计；应以清洗事件记录替代。
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）
  - 来源：

###### 清洗溶剂（`cw_solvent`）

分别记录新鲜和回收清洗溶剂。

- 选定流：涂装溶剂；UUID db1ae0f8-e5fb-408a-a443-e5d837ec8767，或物质特定溶剂流
- 流属性/单位：Mass / kg
- 数量规则：按清洗事件核对领用、回收、退回、排放和废弃溶剂。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：所支持的 kg 净包装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_cleaning_inputs
- 来源：us-epa-ap42-6-4-1995
- 数量范围：临时清洗溶剂校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 净产品
  - 基准：推理估计；应以清洗事件溶剂平衡替代。
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）
  - 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废水（`cw_wastewater`）

数据允许时表征废水固体、有机物含量和去向。

- 选定流：废水；UUID bc2cd1d5-69d5-42d7-818f-38a69ebb18ef
- 流属性/单位：Mass / kg
- 数量规则：使用排放计量，或使用扣除有记录回收水后的清洗事件水量平衡。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：所支持的 kg 净包装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_cleaning_outputs
- 来源：eu-commission-2025-2607
- 数量范围：临时废水校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg 净产品
  - 基准：推理估计；应以排放数据或清洗事件平衡替代。
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）
  - 来源：

###### 清洗残渣和废涂料（`cw_residue`）

把回收涂层与送往处理或处置的残渣分开记录。

- 选定流：废涂料残渣；UUID 877e5a04-76c8-4c5b-ac4c-062f5beeb2bd
- 流属性/单位：Mass / kg
- 数量规则：称量残渣容器并扣除有记录的内部回收量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：所支持的 kg 净包装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_cleaning_outputs
- 来源：mass-balance-identity
- 数量范围：临时清洗残渣校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg/kg 净产品
  - 基准：推理估计；应以残渣发运和回收记录替代。
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）
  - 来源：

##### 基本流

###### 清洗 VOC 排放至空气（`cw_voc_air`）

汇总前单独记录清洗溶剂排放。

- 选定流：挥发性有机化合物；UUID 08a91e70-3ddc-11dd-9155-0050c2490048
- 流属性/单位：Mass / kg
- 数量规则：根据清洗溶剂平衡，在扣除回收、废物发运和治理后计算，或使用监测排放。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：kg 领用清洗溶剂
- 基准类型：物料输入（`process_output`）
- 证据类型：计算值（`calculated_from_collection`）
- 采集协议：cp_cleaning_outputs
- 来源：us-epa-ap42-6-4-1995
- 数量范围：临时清洗溶剂质量平衡校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg VOC/kg 领用清洗溶剂
  - 基准：基于质量守恒的推理上限；应以监测排放或经核对的事件特定溶剂平衡替代。
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）
  - 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| al_avoid | 共享作业和公用工程 | 首先通过批次隔离、分表计量或过程细分避免分配。 | iso-14044-2006 |
| al_internal_rework | 合格的闭环返工 | 将内部返工保留在前景系统内，不给予共产品抵扣；核对其质量且不得重复计入新鲜输入。 | mass-balance-identity |
| al_saleable_coproduct | 多个可销售输出 | 当物理因果关系能代表资源使用时采用该关系；只有不存在可辩护的物理关系时才采用经济分配，并披露价格、期间和敏感性。 | iso-14044-2006 |
| al_waste_recovery | 废物、回收溶剂和回收包装 | 按主管方案建模处理负担及任何抵扣；披露系统扩展、替代或截断，不得把避免的废物作为负前景输入。 | iso-14044-2006, epd-international-pcr-2019-14-v2-0-1 |
| al_shared_site_energy | 共享场址电力和热量 | 按计量设备消耗或有因果关系的运行时间和负荷分配；只有经过论证并对实质不同路线开展敏感性分析后，才可按质量分配。 | iso-14044-2006 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_batch_materials | formulation_dispersion | 配方原料 | 批次领退料记录 | 物料 ID、批号、总领用、退料、密度、固含量 | ERP 领料和校准秤；仅以实测密度换算体积 | kg | 每批 | 代表性报告年度 | 报告工厂 | 按物料和产品系列汇总净领用 | 采购台账、批次单、秤校准 |
| cp_formulation_energy | formulation_dispersion | 电力 | 电表和设备日志 | 电表起止、运行时间、负荷、产品系列 | 分表；否则以因果驱动分配经核对的全厂电量 | kWh | 每批或每月 | 代表性报告年度 | 报告工厂 | 汇总直接读数并分配有记录的共享余量 | 电表校准、能源核对 |
| cp_batch_outputs | formulation_dispersion | 散装输出和残渣 | 批次收率记录 | 放行质量、留样、返工、残渣、库存变化 | 校准秤和批次核对 | kg | 每批 | 代表性报告年度 | 报告工厂 | 按产品系列质量加权汇总 | 放行记录、废物记录、质量平衡 |
| cp_process_emissions | formulation_dispersion | VOC 和颗粒物释放 | 监测和物料平衡 | 溶剂投入、产品保留、回收、废物、捕集、治理、实测浓度、气量 | 合规监测或有记录的质量平衡 | kg | 监测活动和报告期 | 代表性报告年度 | 报告工厂和排放口 | 汇总控制后污染物质量并保持路线分离 | 监测报告、治理日志、平衡核对 |
| cp_thermal_batch | thermal_cooking | 前体和熬制中间体 | 批次记录 | 前体领用、退料、中间体输出、残渣 | 校准秤和批次核对 | kg | 每个热批次 | 代表性报告年度 | 报告工厂 | 按路线汇总净输入和输出 | 批次单、秤校准、质量平衡 |
| cp_thermal_energy | thermal_cooking | 燃料和热量 | 仪表和燃料记录 | 燃料质量或体积、净热值、热表、运行时间 | 校准仪表和供应商燃料规格 | MJ | 每批或每月 | 代表性报告年度 | 报告工厂 | 用记录的净热值换算并按路线汇总 | 仪表校准、燃料证书 |
| cp_thermal_emissions | thermal_cooking | 路线 VOC | 监测和批次平衡 | 挥发性输入、产品保留、冷凝液、回收、治理、实测排放 | 合规监测或有记录的质量平衡 | kg | 监测活动和报告期 | 代表性报告年度 | 报告工厂和排放口 | 按路线汇总治理后排放 | 监测报告、批次平衡 |
| cp_packaging_records | filling_packaging | 散装输入、产品输出和包装 | 灌装和物料清单记录 | 散装转入、灌装净质量、单元数、包装领用、退回、废料 | 校准灌装机或秤及库存核对 | kg | 每批 | 代表性报告年度 | 报告工厂 | 把可销售净输出归一化为 1 kg 并按材料汇总包装 | 灌装检查、物料清单、秤校准 |
| cp_cleaning_inputs | cleaning_waste_management | 水和溶剂输入 | 清洗事件记录 | 设备、水、新鲜溶剂、回收溶剂、退回 | 计量、称量领用和溶剂日志 | kg | 每次清洗 | 代表性报告年度 | 报告工厂 | 直接分配到产品活动或使用有记录的共享清洗驱动 | 清洗日志、仪表校准 |
| cp_cleaning_outputs | cleaning_waste_management | 废水、残渣和 VOC | 排放、发运和平衡记录 | 废水、固体、残渣、回收、溶剂领用、溶剂退回、VOC 治理 | 排放计量、称量发运和溶剂平衡 | kg | 每次事件和报告期 | 代表性报告年度 | 报告工厂 | 按去向和产品系列汇总并核对回收 | 联单、排放报告、溶剂平衡 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalize | 所有前景交换 | 归一化量 = 报告期交换量 / 净可销售涂层质量 | 交换量、净可销售涂层质量 | 每 kg 净产品的量 | mass-balance-identity |
| calc_material_balance | 每条生产路线 | 闭合差 = 总质量输入 - 可销售输出 - 转移中间体 - 已记录废物 - 已记录排放 - 合理库存变化 | 湿质量输入、输出、废物、排放、库存变化 | 绝对闭合差和百分比闭合差 | mass-balance-identity |
| calc_voc_balance | VOC 排放 | VOC 排放 = 挥发性输入 - 产品中保留的 VOC - 回收溶剂 - 发运废物中的溶剂 - 销毁或捕集质量 - 合理库存变化 | 溶剂与挥发组分平衡 | 控制后 kg VOC | us-epa-ap42-6-4-1995, mass-balance-identity |
| calc_pm_release | 颗粒物排放 | 排放颗粒物 = 处理的干物料 × 实测或论证的损失率 × 一减捕集效率 × 一减治理效率 | 干颜料和填料处理量、损失、捕集、治理 | kg 颗粒物排放 | us-epa-ap42-6-4-1995 |
| calc_shared_energy | 共享能源 | 按计量运行时间和负荷或其他有记录的因果驱动分配经核对的共享能源，并检验实质性替代方案 | 电表总量、直接读数、驱动量 | 过程和产品能源 | iso-14044-2006 |
| calc_service_conversion | 比较服务 | 所需产品质量 = 声明面积 × 单位面积施工质量 × 施工比例 × 声明研究期内的维护倍数 | 面积、覆盖率或涂布率、必要时的密度、施工比例、维护周期、研究期 | 等效声明服务的 kg 产品 | jrc-145239-2026 |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_technology | 前景路线 | 数据必须代表声明的水性、溶剂型、粉末型、单组分、多组分或热路线及实际治理技术。 | 过程描述、配方系列、设备和治理记录 |
| dq_time | 前景数据 | 可获得时采用具有代表性的连续十二个月；解释停工、活动生产、异常批次和外推。 | 有日期的批次、计量、采购、废物和生产记录 |
| dq_geography | 所有数据集 | 识别工厂国家或地区，并使用有代表性的电力、燃料、运输、水和废物处理数据集。 | 数据集元数据和供应商或公用工程记录 |
| dq_completeness | 物料与排放清单 | 核对物料和能源，列明遗漏与截断，并保留危险或环境重要的组分和排放。 | 平衡检查、遗漏登记、监测报告 |
| dq_source_priority | 次级数据 | 优先采用官方标准、PCR、法规、官方数据集和机构报告，其次是同行评审文献和行业文件；把推理估计标记为临时。 | 来源登记和估计标记 |
| dq_uncertainty | 估计与分配 | 对临时估计、次级数据替代、分配和服务换算进行定量或定性不确定性评价。 | 敏感性结果和数据质量说明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| val_reference_identity | 参考流 | 确认 Paint UUID b2aa1a35-1823-4b13-96db-d5b89eda2db5、Mass UUID 93a60a56-a3c8-11da-a746-0800200b9a66、单位组 UUID 93a60a57-a4c8-11da-a746-0800200c9a66、kg 单位，以及不含包装的精确 1 kg 净产品。 | mass-balance-identity |
| val_qualifiers | 数据集元数据 | 任何必需限定信息缺失或含糊时，判定参考定义不完整。 | eu-commission-2025-2607, jrc-145239-2026 |
| val_route_coverage | 过程图 | 必须纳入 formulation_dispersion、filling_packaging 和 cleaning_waste_management；仅在现场发生熬制或反应时要求 thermal_cooking，否则记录为不适用。 | us-epa-ap42-6-4-1995 |
| val_mass_closure | 前景过程 | 计算路线和场址质量平衡闭合，报告差值与阈值，并调查而不得截断未解释损失。 | mass-balance-identity |
| val_records | 采集值 | 确认时间覆盖、场址范围、单位、校准、汇总以及对指定采集协议的可追溯性。 | epd-international-pcr-2019-14-v2-0-1 |
| val_emissions | 直接 VOC 和颗粒物 | 确认路线特定监测或平衡、捕集与治理处理以及未重复计算；AP-42 范围仅用作历史 QA 检查。 | us-epa-ap42-6-4-1995 |
| val_allocation | 共享作业和输出 | 确认优先考虑细分、记录因果基础，并在采用经济分配时进行论证和敏感性分析。 | iso-14044-2006 |
| val_background | 从摇篮到工厂门口画像 | 确认物料输入连接上游数据集和运输，并披露地理、技术、年代和替代。 | epd-international-pcr-2019-14-v2-0-1 |
| val_service_claim | 比较声明 | 拒绝仅以 1 kg 产品为基础的服务等效声明；必须声明面积、性能、施工比例、覆盖率或涂布率、维护和研究期。 | jrc-145239-2026 |
| val_provisional | 推理估计 | 将所有 reasoned_estimate 范围标记为临时并禁止作为工厂默认值；发布前应予替换，除非经过明确审查和论证。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明涂料或清漆产品系列和工厂路线的前景生产数据集 |
| downstream_use | 从摇篮到工厂门口 LCA、主管方案允许时的 EPD A1 至 A3 模块、产品足迹，以及扩展施工或建筑研究的输入 |
| allowed_use | 满足参考限定信息、过程覆盖、来源质量和校验检查时，适用于声明范围内的产品与路线 |
| excluded_use | 对不同涂层服务进行直接比较；在未增加使用阶段数据时作为涂装清单；印刷油墨、美术颜料、胶黏剂、脱漆剂或固化涂覆制品 |
| required_metadata | PCR id 和版本；产品和配方系列；路线；CPC 参考；产品和流 UUID；工厂地理；期间；固含量、密度、VOC 和覆盖性质；包装；过程图；分配；截断；数据源 |
| required_quality_disclosure | 一手数据比例；次级数据集替代；质量和能源闭合；直接排放方法；分配；不确定性；临时估计；排除和外包作业 |
| update_trigger | 实质配方或路线变化；新工厂或治理技术；包装变化；分类或适用 PCR 修订；数据超过主管方案允许的年限；UUID、来源或计算发生实质纠正 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| eu-commission-2025-2607 | official_guidance | European Commission, Commission Decision (EU) 2025/2607 establishing EU Ecolabel criteria for paints, varnishes and related products, CELEX 32025D2607, 2025; https://eur-lex.europa.eu/legal-content/en/TXT/?uri=CELEX:32025D2607 | 产品系列范围；配方和包装特征；生产空气、水、VOC、材料效率和能源效率议题 |
| jrc-145239-2026 | official_guidance | European Commission Joint Research Centre, Revision of the EU Ecolabel criteria for Paints and Varnishes: Final Technical Report, JRC145239, DOI 10.2760/7406739, 2026; https://doi.org/10.2760/7406739 | 原材料热点；从摇篮到坟墓背景；基于覆盖、性能、维护和研究期的服务换算 |
| us-epa-ap42-6-4-1995 | official_guidance | United States Environmental Protection Agency, AP-42 Section 6.4 Paint and Varnish, January 1995; https://www.epa.gov/sites/default/files/2020-10/documents/c06s04.pdf | 制造过程图；溶剂和颜料排放机制；历史未控制 QA 范围 |
| epd-international-pcr-2019-14-v2-0-1 | standard | EPD International, PCR 2019:14 Construction products, version 2.0.1, 2025; https://www.environdec.com/pcr-library/pcr_6b99d07c-4b75-4763-4485-08dd775d2e49 | 从摇篮到工厂门口模块、上游材料和运输覆盖、数据质量、完整性和废物处理框架 |
| iso-14044-2006 | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines; https://www.iso.org/standard/38498.html | 分配层级和 LCA 方法学要求 |
| mass-balance-identity | method_factor | Conservation of mass calculation identity | 参考归一化、收率、返工、包装、溶剂和过程质量平衡计算 |
