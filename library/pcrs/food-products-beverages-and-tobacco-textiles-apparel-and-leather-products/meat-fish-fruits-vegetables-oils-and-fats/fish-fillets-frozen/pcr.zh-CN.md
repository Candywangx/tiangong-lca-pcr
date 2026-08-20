---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-fillets-frozen
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 冷冻鱼片

## 1. 范围与适用性

本 PCR 适用于以食品级鱼为原料，经切片、快速冷冻、可选上釉、包装后，在加工厂门以冷冻状态供应，并在常规食品制备后直接消费的未裹粉鱼片。野生捕捞和养殖鱼种均可适用，但必须声明原料鱼生产系统、鱼种、产地和上游数据集。

前景边界从加工厂接收合格鱼开始，包括接收与冷藏暂存、切片、修整、清洗、可选去皮与去骨、快速冷冻、可选上釉、包装、冷冻贮存及厂门发运准备。原料鱼生产和入厂运输由关联的上游数据集表示。裹粉或挂浆产品、鱼糜、成型鱼块、烟熏、干制、盐渍、罐藏、熟制、即食产品、声明用于后续工业加工的产品、零售配送、消费者烹饪和生命周期末端不在本 PCR 范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-fillets-frozen |
| classification_refs | CPC 3.0: 21222, Fish fillets, frozen（精确映射语境） |
| covered_products | 未裹粉冷冻或快速冷冻鱼片，包括单体速冻或块装鱼片，可带皮或去皮、带骨或去骨、上釉或不上釉 |
| excluded_products | 鲜或冷藏鱼片；不以鱼片形式呈现的冷冻鱼糜或鱼肉；裹粉或挂浆鱼块；烟熏、干制、盐渍、罐藏、熟制或即食鱼；标注用于后续工业加工的产品 |
| representative_product | 经常规食品制备后直接消费的包装未裹粉快速冷冻鱼片 |
| production_route | 食品级原料鱼接收 → 切片/修整/清洗 → 快速冷冻 → 可选上釉 → 包装 → 冷冻贮存 → 厂门 |
| market_state | 热稳定后热中心温度为 -18 °C 或更低；声明的鱼净质量不含冰衣和包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供经常规食品制备后可直接消费的食用未裹粉冷冻鱼片 |
| How much | 1 kg 鱼片净质量，不含冰衣和包装 |
| How well | 产品切制为鱼片，热稳定后热中心快速冷冻至 -18 °C 或更低，持续保持冷冻，并满足所声明的鱼种、呈现形式、上釉和食品安全规格 |
| How long or cycle | 一个生产批次，从冷冻、包装至所声明的工厂冷冻贮存期，并交付至厂门 |
| reference_flow_link | rf_frozen_fish_fillets |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 鱼净质量 |
| 参考产品流 | 冻鱼片 `130aa38f-8c63-4d0b-ad05-0b2c4426cdd8` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 鱼种；野生捕捞或养殖来源；捕捞或养殖产地及原料鱼数据集；鱼片呈现形式与切型；带皮/去皮和带骨/去骨状态；上釉状态与冰衣质量；冷冻技术；加工地点；冷冻贮存时长；净质量不含冰衣和包装 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有清单均归一化至 1 kg 鱼片净质量；参考数量不含冰衣、游离冰和包装。 |
| `glaze_mass_separation` | 上釉产品 | Mass | kg | 采用有记录的去冰衣法或等效验证方法分别测定冷冻总质量和冰衣质量；不得将冰衣计作鱼产品质量。 |
| `lot_mass_balance` | 鱼、鱼片、共产品、残余物和废水固形物 | Mass | kg | 采用校准质量测量并保持一致的湿基，在每个汇总期内核对投入与食用产品、共产品、残余物以及滞留或排放物料。 |
| `energy_conversion` | 电力与燃料 | Energy | kWh or MJ | 保留计量单位和换算系数；电力以 kWh 报告，燃料保留实测单位，转换为 MJ 前声明低位或高位热值基准。 |
| `temperature_record` | 冷冻与冷冻贮存 | Temperature | °C | 记录冷冻完成时经校准的产品热中心温度以及连续或定时间隔的贮存温度；冷冻终点为热稳定后 -18 °C 或更低。 |
| `packaging_mass` | 一级、二级和三级包装 | Mass | kg | 按材料记录包装，并将采购质量减去有记录的退回或未使用质量后归一化至参考产品净质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 加工厂接收食品级鱼，并声明鱼种、产地、生产系统、保鲜状态、批次质量以及关联的上游生产和入厂运输数据集 |
| starting_condition_role | 前景切片与冷冻系统的上游产品投入 |
| product_classification_scope | 以 CPC 3.0 代码 21222 表示的未裹粉冷冻鱼片分类语境；PCR 身份独立于分类系统 |
| recursive_input_rule | 当同类别的已冷冻鱼片进入重新包装或再冷冻时，仅将其作为关联的上游产品数据集记录一次，并只建模新增的前景作业；不得递归重建上游鱼片系统 |
| upstream_dataset_requirement | 在可获得时，原料鱼和入厂运输须采用供应商、鱼种、产地和生产系统特定数据集；使用代理时必须披露地域、技术和时间局限 |
| disclosure | 声明原料鱼生产系统、鱼种、产地、接收保鲜状态、切片路线、冷冻和上釉技术、共产品处理、冷冻贮存时长、电力组合、制冷剂、分配方法及排除的下游阶段 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate` | 前景加工 | 纳入从加工厂接收原料鱼到切片、修整、清洗、快速冷冻、可选上釉、包装和冷冻贮存直至厂门的全部物料与能源流。 | `codex-cxs-190-1995`; `codex-cxc-52-2003` |
| `boundary_upstream_links` | 原料鱼与入厂供应 | 关联原料鱼、入厂运输、水、能源载体、包装和其他采购物料的上游数据集；从摇篮到厂门结果不得遗漏其负荷。 | `eu-pef-2021-2279` |
| `boundary_cold_chain` | 冷冻与冷冻贮存 | 纳入冷冻及所声明工厂冷冻贮存期的电力、燃料、制冷剂损失和产品损失。 | `codex-cxs-190-1995`; `codex-cxc-52-2003` |
| `boundary_waste_treatment` | 残余物、废水与包装废物 | 纳入场内处理，并为越过厂界的废物关联场外运输与处理数据集；对离厂进行有益利用的共产品单独识别。 | `eu-pef-2021-2279` |
| `boundary_downstream_exclusion` | 下游阶段 | 除非研究明确扩展所声明系统，否则排除出厂后的配送、零售、解冻、消费者烹饪、消费和生命周期末端；披露每个新增下游阶段。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `prepare_fillets` | 接收、切片、修整与清洗 | required | 原料鱼加工成鱼片时始终纳入；如接收的是预切鱼片须声明 | 前景产品制备 | 离开本步骤的 kg 预制鱼片 |
| `quick_freeze_glaze` | 快速冷冻与可选上釉 | required | 冷冻始终纳入；仅在使用冰衣时适用上釉行 | 前景保藏 | 离开本步骤的 kg 冷冻鱼片，冰衣单独追踪 |
| `pack_store` | 包装与工厂冷冻贮存 | required | 始终纳入至所声明的厂门贮存期 | 前景包装与冷藏 | 厂门处 1 kg 冷冻鱼片净质量 |

### 过程：接收、切片、修整与清洗（`prepare_fillets`）

#### 输入

##### 产品流

###### 食品级原料鱼（`source_fish_input`）

记录接收的鱼种特定原料鱼，包括保鲜状态以及关联的上游生产和入厂运输数据集。

- 选定流：食品级鱼，鱼种与产地特定（UUID 待天工精确审核）
- 流属性/单位：Mass / kg
- 数量规则：进入切片工序的合格批次实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门冷冻鱼片净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_identity`
- 来源：`codex-cxs-190-1995`; `codex-cxc-52-2003`
- 数量范围：暂定原料鱼投入 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：5
  - 单位：kg/kg 冷冻鱼片净质量
  - 基准：每参考流的原料鱼投入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制备与清洗用水（`preparation_water`）

记录用于鱼和鱼片清洗、设备接触带出及相关制备且跨越过程边界的饮用水或其他食品安全用水。

- 选定流：食品接触质量的工艺水（UUID 待天工精确审核）
- 流属性/单位：Mass / kg
- 数量规则：计量或水箱平衡得到的制备步骤供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 预制鱼片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`codex-cxs-190-1995`; `codex-cxc-52-2003`
- 数量范围：暂定制备用水 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 预制鱼片
  - 基准：每预制鱼片输出的供水量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制备用电（`preparation_electricity`）

记录接收、输送、切割、去皮、去骨、清洗及制备区制冷分配至本步骤的电力。

- 选定流：工厂供电组合（UUID 待天工精确审核）
- 流属性/单位：Energy / kWh
- 数量规则：分表电量或有记录的设备功率与运行时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 预制鱼片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集值计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定制备用电 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg 预制鱼片
  - 基准：每预制鱼片输出的电力
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

本过程无规定的废物投入。

##### 基本流

本过程不规定基本流投入；水和能源载体作为技术圈产品投入。

#### 输出

##### 产品流

###### 预制鱼片（`prepared_fillets_output`）

测量修整、清洗以及所声明去皮或去骨后转入冷冻的食用鱼片。

- 选定流：尚未冷冻的预制鱼片（UUID 待天工精确审核）
- 流属性/单位：Mass / kg
- 数量规则：离开本步骤的预制鱼片湿基实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格原料鱼投入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_identity`
- 来源：`codex-cxs-190-1995`; `codex-cxc-52-2003`
- 数量范围：暂定预制鱼片得率 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.2
  - 上限：1
  - 单位：kg/kg 合格原料鱼
  - 基准：每合格原料鱼投入的预制鱼片湿质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 食用或可销售鱼类共产品（`fish_coproducts`）

分别记录作为共产品而非废物离开前景系统的食用部分或其他可销售鱼类物料。

- 选定流：按声明用途划分的鱼种特定共产品（UUID 待天工精确审核）
- 流属性/单位：Mass / kg
- 数量规则：按去向和可销售产品类别实测共产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格原料鱼投入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_identity`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定共产品质量 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.8
  - 单位：kg/kg 合格原料鱼
  - 基准：每合格原料鱼投入的单独销售共产品湿质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 鱼类残余物与不合格品（`fish_residues`）

按去向记录未归为共产品的鱼头、鱼架、鱼皮、鱼骨、修整料、不合格鱼和腐败物料。

- 选定流：按去向划分的鱼类加工残余物或废物（UUID 待天工精确审核）
- 流属性/单位：Mass / kg
- 数量规则：离开过程的残余物与不合格品湿基实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格原料鱼投入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_identity`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定鱼类残余物 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.8
  - 单位：kg/kg 合格原料鱼
  - 基准：每合格原料鱼投入的鱼类残余物湿质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制备废水（`preparation_wastewater`）

记录离开制备工序的废水；夹带固形物与鱼类残余物分开计量时应单独报告。

- 选定流：鱼类加工废水（UUID 待天工精确审核）
- 流属性/单位：Mass / kg
- 数量规则：实测排放体积乘以实测或有记录的密度，并单列实测固形物
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 预制鱼片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集值计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定制备废水 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 预制鱼片
  - 基准：每预制鱼片输出的废水排放
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

本 PCR 不规定默认基本流输出；存在实测直接排放时须单独报告。

### 过程：快速冷冻与可选上釉（`quick_freeze_glaze`）

#### 输入

##### 产品流

###### 转入冷冻的预制鱼片（`prepared_fillets_input`）

沿用 `prepare_fillets` 的预制鱼片实测质量，不重复产生上游负荷。

- 选定流：尚未冷冻的预制鱼片（UUID 待天工精确审核）
- 流属性/单位：Mass / kg
- 数量规则：等于转入本过程的 `prepared_fillets_output` 实测质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门冷冻鱼片净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集值计算（`calculated_from_collection`）
- 采集协议：`cp_lot_mass_identity`
- 来源：`codex-cxs-190-1995`; `codex-cxc-52-2003`
- 数量范围：暂定预制鱼片投入 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.5
  - 单位：kg/kg 冷冻鱼片净质量
  - 基准：每参考流的预制鱼片投入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷冻用电（`freezing_electricity`）

记录冷冻机、泵、风机、输送、除霜以及分配给冷冻工序的工艺区制冷电力。

- 选定流：工厂供电组合（UUID 待天工精确审核）
- 流属性/单位：Energy / kWh
- 数量规则：冷冻分表电量或有记录的设备功率与运行时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门冷冻鱼片净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集值计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`codex-cxs-190-1995`; `codex-cxc-52-2003`
- 数量范围：暂定冷冻用电 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：10
  - 单位：kWh/kg 冷冻鱼片净质量
  - 基准：每参考流的冷冻用电
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 上釉用水（`glazing_water`）

使用冰衣时，记录作为冰衣使用的饮用水或洁净海水，并与鱼净质量分开保留。

- 选定流：用于上釉的饮用水或洁净海水（UUID 待天工精确审核）
- 流属性/单位：Mass / kg
- 数量规则：由总质量与去冰衣净质量确定的产品表面冰衣实测水量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门冷冻鱼片净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集值计算（`calculated_from_collection`）
- 采集协议：`cp_lot_mass_identity`
- 来源：`codex-cxs-190-1995`
- 数量范围：暂定冰衣质量 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 冷冻鱼片净质量
  - 基准：每参考流的保留冰衣质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

本过程无规定的废物投入。

##### 基本流

本过程不规定基本流投入；电力和水作为技术圈产品投入。

#### 输出

##### 产品流

###### 转入包装的冷冻鱼片（`frozen_fillets_intermediate`）

记录热稳定后的冷冻鱼片质量，并单独追踪保留冰衣。

- 选定流：未包装冷冻鱼片中间产品（UUID 待天工精确审核）
- 流属性/单位：Mass / kg
- 数量规则：冷冻总质量实测值减去单独测定的冰衣质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门冷冻鱼片净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集值计算（`calculated_from_collection`）
- 采集协议：`cp_lot_mass_identity`
- 来源：`codex-cxs-190-1995`
- 数量范围：暂定冷冻阶段净得率 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.2
  - 单位：kg/kg 冷冻鱼片净质量
  - 基准：每参考流转出的未包装冷冻鱼片净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 上釉与除霜废水（`freezing_wastewater`）

记录分配至本过程的上釉、冷冻机除霜和清洗排水。

- 选定流：鱼类加工废水（UUID 待天工精确审核）
- 流属性/单位：Mass / kg
- 数量规则：实测排放体积乘以实测或有记录的密度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门冷冻鱼片净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集值计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定冷冻废水 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg/kg 冷冻鱼片净质量
  - 基准：每参考流的冷冻阶段废水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 冷冻过程制冷剂排放（`freezing_refrigerant_loss`）

依据服务冷冻工序设备的库存变化、采购、回收和转移计算制冷剂直接排放。

- 选定流：化学物质特定的制冷剂向空气排放（UUID 待天工精确审核）
- 流属性/单位：Mass / kg
- 数量规则：期初充注量加补充量减回收量、转移量和期末充注量，再分配至冷冻
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门冷冻鱼片净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集值计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定制冷剂损失 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg 冷冻鱼片净质量
  - 基准：每参考流的化学物质特定制冷剂损失
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：包装与工厂冷冻贮存（`pack_store`）

#### 输入

##### 产品流

###### 转入包装的冷冻鱼片（`frozen_fillets_input`）

沿用 `quick_freeze_glaze` 的冷冻鱼片净质量和单独追踪的冰衣质量，不重复上游负荷。

- 选定流：未包装冷冻鱼片中间产品（UUID 待天工精确审核）
- 流属性/单位：Mass / kg
- 数量规则：等于转入包装的 `frozen_fillets_intermediate`，冰衣质量单列
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门冷冻鱼片净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集值计算（`calculated_from_collection`）
- 采集协议：`cp_lot_mass_identity`
- 来源：`codex-cxs-190-1995`
- 数量范围：暂定包装投入 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.2
  - 单位：kg/kg 冷冻鱼片净质量
  - 基准：每参考流的未包装冷冻鱼片净投入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装材料（`packaging_materials`）

按材料类型记录一级、二级和分配的三级包装，包括内衬、纸箱、薄膜、标签和适用的托盘。

- 选定流：材料特定包装材料（UUID 待天工精确审核）
- 流属性/单位：Mass / kg
- 数量规则：发出使用的包装减去退回的未使用包装，按材料记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门冷冻鱼片净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集值计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定包装质量 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：1
  - 单位：kg/kg 冷冻鱼片净质量
  - 基准：每参考流的包装材料总投入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷冻贮存用电（`storage_electricity`）

记录在所声明工厂贮存期内包装设备、冷库、风机、泵、照明和除霜用电。

- 选定流：工厂供电组合（UUID 待天工精确审核）
- 流属性/单位：Energy / kWh
- 数量规则：包装和冷藏分表电量，或按实测使用、时间与占用容量分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门冷冻鱼片净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集值计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`codex-cxs-190-1995`; `codex-cxc-52-2003`
- 数量范围：暂定贮存用电 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg 冷冻鱼片净质量
  - 基准：每参考流的包装与工厂贮存用电
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

本过程无规定的废物投入。

##### 基本流

本过程不规定基本流投入；电力和包装作为技术圈产品投入。

#### 输出

##### 产品流

###### 包装冷冻鱼片（`reference_product_output`）

此行为定量参考输出；鱼净质量不含冰衣和包装。

- 选定流：冻鱼片 `130aa38f-8c63-4d0b-ad05-0b2c4426cdd8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：厂门处恰好 1 kg 鱼片净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`codex-cxs-190-1995`

##### 废物流

###### 包装废物与破损产品包装（`packaging_waste`）

按材料和去向记录包装边角料、破损包装和被拒包装产品，不从采购包装投入中抵扣。

- 选定流：材料特定包装废物（UUID 待天工精确审核）
- 流属性/单位：Mass / kg
- 数量规则：离开过程的包装与破损包装废物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门冷冻鱼片净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定包装废物 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 冷冻鱼片净质量
  - 基准：每参考流的包装与破损包装废物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 冷冻贮存制冷剂排放（`storage_refrigerant_loss`）

计算服务包装和冷冻贮存设备的化学物质特定制冷剂直接排放。

- 选定流：化学物质特定的制冷剂向空气排放（UUID 待天工精确审核）
- 流属性/单位：Mass / kg
- 数量规则：期初充注量加补充量减回收量、转移量和期末充注量，再分配至包装与贮存
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门冷冻鱼片净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集值计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定贮存制冷剂损失 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg 冷冻鱼片净质量
  - 基准：每参考流的化学物质特定制冷剂损失
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共享制备、冷冻、包装和贮存作业 | 优先通过分表以及细分作业、批次、设备和贮存期，使投入与输出直接归属冷冻鱼片产品，从而避免分配。 | `eu-pef-2021-2279` |
| `allocation_physical_relationship` | 未解决的多功能过程 | 无法实际细分或系统扩展时，采用有记录的因果物理关系；共同加工的鱼类输出若无更强因果参数，则使用分离点实测湿质量，并对干物质或其他功能相关属性进行敏感性检验。 | `eu-pef-2021-2279` |
| `allocation_economic_fallback` | 缺乏可辩护物理关系的共产品 | 仅在无法建立可辩护物理关系时采用经济分配；使用同一市场边界的代表性年度平均净价，并披露价格来源、期间、币种和敏感性。 | `eu-pef-2021-2279` |
| `allocation_waste_no_credit` | 鱼类残余物、废水、包装废物和不合格产品 | 不向被归类和管理为废物的物料赋予共产品抵扣。纳入处理负荷；任何系统扩展或替代产品抵扣须单独报告，并披露被替代功能与数据集。 | `eu-pef-2021-2279` |
| `allocation_mass_reconciliation` | 所有共产品与废物 | 分配前保留未分配的湿质量平衡，并报告所有承担负荷产品之和为一的分配因子。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_mass_identity` | `prepare_fillets`; `quick_freeze_glaze`; `pack_store` | 鱼投入、中间产品、产品、共产品、残余物、冰衣 | 地磅、秤、批次和产品规格记录 | lot_id; species; origin; production_system; preservation_state; gross_mass; tare_mass; glaze_mass; net_fish_mass; co_product_mass; residue_mass; destination | 校准秤关联批次与转移记录；冰衣使用经验证的去冰衣法或等效方法 | kg | 每批与每次转移 | 至少连续 12 个代表性月份或完整季节性生产期 | 每个纳入的加工场址与相关生产线 | 按批次和过程汇总有效质量；核对转移；归一化至合格参考产品净质量 | 校准证书；批次追溯；产品规格；去冰衣方法；核对日志 |
| `cp_water_records` | `prepare_fillets`; `quick_freeze_glaze` | 制备与上釉用水 | 水表、水箱与批次记录 | meter_id; opening_reading; closing_reading; batch_volume; water_source; food_contact_quality; allocation_key | 分表供水或关联运行期的水箱平衡 | kg or m3 | 每日及每个上釉批次 | 与生产相同的代表期 | 每个纳入场址与水系统 | 按实测或有记录密度换算体积；扣除有记录的非工艺用水；归一化至过程输出 | 水表检查；饮用水或洁净海水验证；批次记录 |
| `cp_energy_records` | `prepare_fillets`; `quick_freeze_glaze`; `pack_store` | 电力与燃料 | 电表、发票、设备运行和贮存占用记录 | meter_id; opening_reading; closing_reading; fuel_quantity; unit; equipment_power; operating_hours; storage_days; occupied_capacity; allocation_key | 优先分表；否则以设备功率、运行时间和占用容量核对发票 | kWh, MJ, or purchased fuel unit | 每月，并在可行时按批次或班次分表 | 至少连续 12 个代表性月份或完整季节性生产期 | 每个纳入场址、生产线、冷冻机和冷库 | 直接分表；共享余量按有记录物理驱动分配；归一化至过程输出 | 电表校准；发票；运行日志；分配工作表；能源平衡 |
| `cp_wastewater_records` | `prepare_fillets`; `quick_freeze_glaze` | 废水与夹带固形物 | 排水表、水箱、采样和处理记录 | discharge_volume; density; solids_mass; treatment_route; sampling_time; process_assignment | 采用流量计或水箱平衡，并保留代表性采样与处理去向记录 | kg or m3 | 每日或每次排放 | 与生产相同的代表期 | 每个纳入排放点 | 体积换算质量；实测固形物单列；归一化至过程输出 | 仪表检查；实验室报告；排放与处理联单 |
| `cp_refrigerant_records` | `quick_freeze_glaze`; `pack_store` | 化学物质特定制冷剂损失 | 设备充注、采购、维护、回收和转移记录 | refrigerant_id; opening_charge; additions; recovered; transferred; closing_charge; equipment_service | 按制冷剂与设备组执行年度或生产期库存平衡 | kg | 每次维护及年度结账 | 覆盖生产期的至少一个完整库存平衡 | 每个纳入冷冻机与冷库设备组 | 损失 = 期初 + 补充 - 回收 - 转移 - 期末；按设备服务或有记录冷量分配 | 维护发票；钢瓶日志；回收记录；库存签核 |
| `cp_packaging_records` | `pack_store` | 包装投入与废物 | 采购、领用、物料清单、退回和废料记录 | material_id; material_type; purchased_mass; issued_mass; returned_mass; scrap_mass; packs_produced; pallet_reuse_cycles | 按包装材料与产品形式进行质量核对 | kg | 每次包装运行，按月汇总 | 与生产相同的代表期 | 每个纳入包装线与产品形式 | 净投入 = 领用 - 退回；废料输出单列；可复用三级包装按验证周转次数分配 | 供应商规格；采购记录；库存核对；废料单 |
| `cp_temperature_records` | `quick_freeze_glaze`; `pack_store` | 冷冻终点与冷冻贮存 | 校准探针和冷库记录仪 | lot_id; probe_id; thermal_centre_temperature; stabilization_time; room_temperature; timestamp; excursion_action | 在验证位置测量产品中心，并连续或按合理间隔记录贮存温度 | °C | 每批冷冻完成时；贮存连续或按合理间隔 | 全部纳入的生产与贮存期 | 每台冷冻机、每批与每个冷库 | 保留批次最小/最大值和偏离时长；纠正措施关联受影响批次 | 校准证书；验证研究；记录仪数据；偏离与纠正日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 有效前景数量 / 厂门冷冻鱼片净质量 | 有效流数量；不含冰衣和包装的 `net_fish_mass` | 每 1 kg 参考流的数量 | `codex-cxs-190-1995` |
| `calc_net_fish_mass` | 上釉产品 | 鱼净质量 = 冷冻产品总质量 - 经验证的冰衣质量；包装不计入两者 | `gross_mass`; `glaze_mass`; 包装皮重 | `net_fish_mass` | `codex-cxs-190-1995` |
| `calc_process_mass_balance` | `prepare_fillets` 与 `quick_freeze_glaze` | 质量平衡差 = 合格物料投入 - 分别实测的产品、共产品、废物、保留冰衣和排放物料输出；调查实质性未解释差值 | 批次质量；相关保留水；产品、共产品、残余物、废水固形物和冰衣质量 | 经核对的质量平衡记录与未解释差值 | `codex-cxc-52-2003` |
| `calc_refrigerant_loss` | 冷冻与贮存设备 | 制冷剂损失 = 期初充注 + 补充 - 回收 - 转移 - 期末充注 | 化学物质特定设备库存字段 | 分配至过程输出的制冷剂排放 kg | `eu-pef-2021-2279` |
| `calc_physical_allocation` | 联产品 | 分配因子_i = 选定因果物理量_i / 所有承担负荷产品该物理量之和 | 分离点实测量；选定物理属性 | 之和为一的产品特定分配因子 | `eu-pef-2021-2279` |
| `calc_economic_allocation` | 经济回退 | 分配因子_i = 代表性净市场价值_i / 同一边界所有承担负荷共产品净市场价值之和 | 年度平均价格；实测共产品数量 | 之和为一的经济分配因子 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 原料鱼与产品批次 | 保留鱼种、野生捕捞或养殖生产系统、产地、供应商、接收状态、批次链接、呈现形式、皮骨状态、上釉状态和产品去向。 | 供应商规格、接收记录、批次谱系、产品标签 |
| `dq_temporal_representativeness` | 所有前景流 | 覆盖至少连续 12 个代表性月份或完整季节性生产期；披露停产、缺失期间与外推。 | 带日期的计量、批次、发票、维护和生产记录 |
| `dq_site_coverage` | 多场址数据集 | 纳入数据集所表示的每个场址，或报告按产量加权的覆盖率和排除场址；不得默默将一个场址外推至另一个场址。 | 场址清单、产量总计、覆盖率计算 |
| `dq_measurement_control` | 质量、能源、水、制冷剂和温度 | 使用校准或验证的仪器，保留单位与换算系数；无直接计量时记录所用估算。 | 校准证书、仪表检查、换算工作表、估算理由 |
| `dq_mass_completeness` | 鱼、共产品、残余物、冰衣和包装 | 核对所有主要物料投入与输出并调查未解释差值；保留废物和共产品去向。 | 过程质量平衡、库存核对、废物联单、销售记录 |
| `dq_food_safety_quality` | 成品 | 证明原料鱼适用质量、食品接触水质量、冷冻终点、冷冻贮存控制、净质量不含冰衣及适用批次验收检查。 | HACCP 或食品安全计划、水质检测、温度日志、净含量测试、检验记录 |
| `dq_upstream_dataset_fit` | 原料鱼与采购投入 | 记录各物料上游数据集的地域、技术、时期、生产系统和代理局限。 | 数据集元数据和数据质量评估 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求恰好 1 kg 鱼片净质量，关联产品流 `130aa38f-8c63-4d0b-ad05-0b2c4426cdd8`、Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 和单位 kg。 | `codex-cxs-190-1995` |
| `validate_required_qualifiers` | 数据集元数据 | 鱼种、生产系统与产地、鱼片呈现形式、皮骨状态、上釉状态与质量、冷冻技术、加工地点、贮存时长或净质量基准缺失时判定完整性失败。 | `codex-cxs-190-1995`; `codex-cxc-52-2003` |
| `validate_freezing_endpoint` | 每一成品批次 | 要求证明热稳定后热中心达到 -18 °C 或更低，且产品在纳入的贮存期保持冷冻；标记未评估的温度偏离。 | `codex-cxs-190-1995` |
| `validate_glaze_exclusion` | 上釉产品 | 要求单独测量冰衣，并确认所声明鱼净质量不含冰衣和包装。 | `codex-cxs-190-1995` |
| `validate_process_coverage` | 前景清单 | 要求接收/制备、切片/修整/清洗、快速冷冻、使用时的上釉、包装、工厂冷冻贮存、共产品与废物处理、废水、能源和制冷剂记录，或明确且有理由的零值/不适用声明。 | `codex-cxs-190-1995`; `codex-cxc-52-2003` |
| `validate_mass_balance` | 每个汇总期 | 要求合格原料鱼和其他保留物料投入与净产品、共产品、残余物、冰衣、废水固形物和库存变化核对；报告未解释差值及纠正措施，不得静默配平。 | `codex-cxc-52-2003` |
| `validate_allocation` | 多功能过程 | 要求记录细分尝试、选定的物理关系或有理由的经济回退、之和为一的分配因子，并在方法可能实质改变结果时披露敏感性。 | `eu-pef-2021-2279` |
| `validate_temporal_site_coverage` | 前景数据集 | 要求所声明的代表期与场址覆盖，并披露缺失期间、排除场址和外推。 | `eu-pef-2021-2279` |
| `validate_provisional_ranges` | 候选 QA 范围 | 每个 `reasoned_estimate` 范围仅作为筛查标记；不得以其替代前景记录，且用于发布关键用途前必须审核或替换。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 以加工厂门 1 kg 产品净质量归一化的前景冷冻鱼片生产数据集 |
| downstream_use | 鱼种、产地、生产系统、地域、技术、贮存时长、分配和数据质量适合研究时，可作为食品产品 LCA 的 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 需要透明冷冻鱼片投入并保留所声明上游原料鱼数据集与限定信息的从摇篮到厂门或下游产品系统 |
| excluded_use | 未经代表性评估，不得直接表示鲜鱼、鱼糜、裹粉/挂浆产品、烟熏/干制/盐渍/罐藏/熟制产品、零售或消费者阶段，或其他鱼种、产地与技术 |
| required_metadata | PCR id 与版本；产品流 UUID；鱼种；野生捕捞或养殖生产系统；原料产地；上游数据集；鱼片呈现形式；皮骨与上釉状态；净质量方法；加工场址；冷冻技术；贮存时长；电力组合；制冷剂；共产品去向；分配方法；参考期 |
| required_quality_disclosure | 场址与时间覆盖；质量平衡差；仪表与秤质量；温度与食品安全证据；源数据缺口；代理数据集；暂定估算；分配敏感性；排除阶段 |
| update_trigger | 鱼种或原料鱼生产系统、切片得率、冷冻或上釉技术、包装、电力组合、制冷剂、贮存时长、共产品市场、分配基准、场址覆盖、食品安全要求或代表数据期发生实质变化 |

## 11. 数据源

| 来源 ID | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `codex-cxs-190-1995` | `standard` | Codex Alimentarius Commission. CXS 190-1995, Standard for Quick-Frozen Fish Fillets, amended 2024 and redesigned 2026. https://openknowledge.fao.org/handle/20.500.14283/ce0070en（检索于 2026-08-11） | 产品范围与定义；快速冷冻终点；深冻处理；上釉水质；净含量不含冰衣；标签、抽样、缺陷与批次验收 |
| `codex-cxc-52-2003` | `official_guidance` | Codex Alimentarius Commission. CXC 52-2003, Code of Practice for Fish and Fishery Products, 2019 edition. https://workspace.fao.org/sites/codex/Standards/CXC%2052-2003/CXC_052e.pdf（检索于 2026-08-11） | 鱼类加工步骤分解；卫生处理；水、温度、追溯、过程控制、废物和冷链数据要求 |
| `eu-pef-2021-2279` | `official_guidance` | European Commission. Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods. CELEX 32021H2279. https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng（检索于 2026-08-11） | 生命周期边界完整性；细分/系统扩展、物理关系及经济回退的多功能性层级；上游数据集和分配披露 |
