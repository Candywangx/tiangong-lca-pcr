---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.tunas-skipjack-or-stripe-bellied-bonito-frozen
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 冷冻金枪鱼、鲣鱼或条纹鲣

## 1. 范围与适用性

本 PCR 适用于以整条、去头、去内脏、整理后或其他已声明非鱼片形态，在冷冻或加工设施大门交付的食品级冷冻金枪鱼、鲣鱼或条纹鲣。仅当声明物种、产地、生产体系、起始状态、产品形态、冷冻路线和所链接上游数据集时，本 PCR 才支持野生捕捞和水产养殖路线。

前景边界从经接收验收的鱼进入所声明冷冻与制备系统开始，包括接收和分级；在实际实施时的放血、去内脏、去头、整理和清洗；冷冻；可选冰衣；包装；工厂或船上冷冻储存；以及至所声明大门的发运准备。捕捞或养殖生产和进厂运输应链接上游数据集，除非这些活动被明确纳入前景。冷冻鱼片、冷冻鱼肉（无论是否切碎）、肝和鱼卵、罐藏或其他保藏产品、熟制或即食产品、大门后配送、零售、消费者制备和报废阶段均不在范围内。

对于海上冷冻，应声明前景起点以及捕捞与船上制备或冷冻的划分，确保船舶燃料、冰、制冷和损失既不遗漏也不重复计算。Codex CXS 190-1995 不是本非鱼片类别的产品合格标准；仅当明确声明相应操作时，才将其快速冷冻、冰衣水和净含量条款作为补充依据。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.tunas-skipjack-or-stripe-bellied-bonito-frozen |
| classification_refs | CPC 3.0：21215，冷冻金枪鱼、鲣鱼或条纹鲣（精确映射语境） |
| covered_products | 以已声明整条、去头、去内脏、整理后或其他非鱼片形态供应的食品级冷冻金枪鱼、鲣鱼或条纹鲣 |
| excluded_products | 活、鲜或冷藏鱼；冷冻鱼片；冷冻鱼肉（无论是否切碎）；鱼肝和鱼卵；罐藏、盐制、烟熏、熟制、即食或其他保藏产品 |
| representative_product | 在设施大门交付的、以已声明非鱼片形态包装的冷冻金枪鱼、鲣鱼或条纹鲣 |
| production_route | 验收鱼 → 分级及可选放血/去内脏/去头/整理/清洗 → 冷冻 → 可选冰衣 → 包装 → 冷冻储存 → 所声明设施大门 |
| market_state | 冷冻状态，并声明物种、产品形态、鱼体净质量、冰衣状态、冷冻终点、储存制度和大门状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供已声明非鱼片形态的食品级冷冻金枪鱼、鲣鱼或条纹鲣 |
| How much | 1 kg 目标冷冻鱼净质量，不含冰衣、游离冰和包装 |
| How well | 产品符合已声明的物种、产地、形态、冷冻、冷链、净含量及适用食品安全规范 |
| How long or cycle | 一个生产批次经过所纳入的制备、冷冻、包装和已声明冷冻储存期，直至设施大门 |
| reference_flow_link | rf_frozen_tuna_skipjack_bonito |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 目标产品净质量 |
| 参考产品流 | Tunas, skipjack or stripe-bellied bonito, frozen `e51735cd-08ba-4052-bb11-0e5d936b87f2` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种及科学名或公认商品名；野生捕捞或水产养殖来源；捕捞区域或养殖产地；上游鱼类数据集；整条或整理后形态及保留部位；海上或陆上路线；冷冻或快速冷冻声明；冷冻技术和终点；冰衣状态和冰衣质量；储存温度和期限；加工地点；不含冰衣、游离冰和包装的净质量 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将清单归一化至恰好 1 kg 目标冷冻鱼净质量；排除冰衣、游离冰和包装，并声明销售形态保留的鱼体部位。 |
| `glaze_mass_separation` | 有冰衣产品 | Mass | kg | 采用有记录的脱冰衣法或等效验证方法分别测量冷冻毛质量和冰衣质量；不得将冰衣计入目标鱼质量。 |
| `lot_mass_balance` | 鱼、滞留水或冰、共产品、残余物和废水固体 | Mass | kg | 在一致湿质量基准上使用校准计量，对每个汇总期的验收投入与产品、共产品、废物、滞留物和库存变化进行核对。 |
| `energy_conversion` | 电力和燃料 | Energy | kWh or MJ | 保留计量单位和有记录的换算因子；电力以 kWh 报告，燃料换算为 MJ 前声明热值基准。 |
| `temperature_record` | 冷冻和冷冻储存 | Temperature | °C | 记录经校准的产品热中心终点和储存温度。声称快速冷冻时，验证热稳定后热中心达到 -18 °C 或更低；否则采用并披露适用冷冻产品规范。 |
| `packaging_mass` | 初级、次级和三级包装 | Mass | kg | 按材料记录包装，将发放量扣除有记录退回量后归一化至参考产品净质量；包装废料单独报告。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进入所声明制备与冷冻系统的验收金枪鱼、鲣鱼或条纹鲣，并记录物种、产地、生产体系、保鲜状态、批次质量和上游边界 |
| starting_condition_role | 冷冻鱼前景生产系统的上游产品投入 |
| product_classification_scope | 以 CPC 3.0 代码 21215 作为分类语境的冷冻非鱼片金枪鱼、鲣鱼或条纹鲣；PCR 身份保持独立于分类体系 |
| recursive_input_rule | 若该同一类别的已冷冻鱼进入重新包装、上冰衣或再次冷冻，应将其仅记录一次为链接的上游产品数据集，并仅建模新增前景操作；不得递归重建其上游冷冻系统 |
| upstream_dataset_requirement | 在可得时要求物种、产地、生产体系和路线特定的捕捞或养殖以及进厂运输数据集；披露代理数据的地理、技术、时间和边界限制 |
| disclosure | 声明物种、产地、生产体系、产品形态、起始状态、海上或陆上路线、上游/前景划分、制备步骤、冷冻和冰衣技术、储存期限、能源供应、制冷剂、共产品处理、分配及排除的下游阶段 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_category_scope` | 产品类别 | 仅纳入已声明非鱼片形态的冷冻金枪鱼、鲣鱼或条纹鲣；本 PCR 排除冷冻鱼片、鱼肉、肝和鱼卵。 | `unsd-cpc-ver-3-0` |
| `boundary_foreground_gate` | 前景加工 | 纳入从所声明验收鱼起点，经必需接收、适用制备、冷冻、可选冰衣、包装、冷冻储存和发运准备，直至所声明大门的全部物料和能源流。 | `codex-cxc-52-2003` |
| `boundary_upstream_links` | 鱼和购入投入 | 链接捕捞或养殖、进厂运输、水、冰、能源载体、包装和其他购入投入的上游数据集；摇篮到大门结果不得遗漏这些负荷。 | `eu-pef-2021-2279` |
| `boundary_at_sea_no_double_count` | 海上路线 | 声明捕捞船活动、船上冰、制备、制冷和冷冻属于上游鱼数据集还是前景；每项活动仅纳入一次。 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `boundary_cold_chain` | 冷冻和所纳入储存 | 纳入与冷冻及已声明大门前冷冻储存期有关的电力或燃料、制冷剂损失、水或冰及产品损失。 | `codex-cxc-52-2003`; `codex-cxs-190-1995` |
| `boundary_waste_treatment` | 残余物、废水和包装废物 | 纳入现场处理，并链接跨越边界废物的场外运输和处理数据集；将有益利用的输出另列为共产品。 | `eu-pef-2021-2279` |
| `boundary_downstream_exclusion` | 下游阶段 | 排除大门后配送、零售、解冻、消费者制备、消费和报废，除非研究明确扩展系统并披露新增阶段。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receive_prepare` | 接收、分级和产品制备 | required | 始终纳入接收和分级；在所声明边界内实际实施时纳入放血、去内脏、去头、整理和清洗 | 前景制备 | 进入冷冻的制备后鱼质量 kg |
| `freeze_glaze` | 冷冻和可选冰衣 | required | 始终纳入冷冻；仅在使用冰衣时适用冰衣步骤 | 前景保藏 | 离开冷冻步骤的净冷冻鱼质量 kg，冰衣单独跟踪 |
| `pack_store` | 包装和大门前冷冻储存 | required | 始终纳入至所声明大门和储存期 | 前景包装和冷藏 | 在所声明大门的 1 kg 目标冷冻鱼净质量 |

### 过程：接收、分级和产品制备（`receive_prepare`）

#### 输入

##### 产品流

###### 验收金枪鱼、鲣鱼或条纹鲣（`accepted_fish_input`）

按物种、产地、生产体系、保鲜状态、形态、批次及链接上游数据集记录验收鱼。

- 选定流：物种和产地特定的验收金枪鱼、鲣鱼或条纹鲣（UUID 待 Tiangong 精确复核）
- 流属性/单位：Mass / kg
- 数量规则：进入前景制备系统的实测验收批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 在所声明大门的目标冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_identity`
- 来源：`unsd-cpc-ver-3-0`; `codex-cxc-52-2003`
- 数量范围：暂定验收鱼投入 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：3
  - 单位：kg/kg 目标冷冻鱼净质量
  - 基准：每参考流的验收鱼投入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制备用水（`preparation_water`）

记录跨越前景边界、用于食品接触清洗和制备的饮用水或清洁海水。

- 选定流：食品接触制备用水（UUID 待 Tiangong 精确复核）
- 流属性/单位：Mass / kg
- 数量规则：分配至制备过程的计量供水或有记录储罐平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 制备后鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_ice_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定制备用水 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 制备后鱼
  - 基准：每制备后鱼输出的制备用水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制备用冰（`preparation_ice`）

在本过程纳入食品接触冰时记录其使用量；不得将冰计入鱼质量。

- 选定流：食品接触冰（UUID 待 Tiangong 精确复核）
- 流属性/单位：Mass / kg
- 数量规则：实测发放冰量减去有记录回收未用冰量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收鱼投入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_ice_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定制备用冰 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg 验收鱼
  - 基准：每验收鱼投入的冰供应量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制备用电（`preparation_electricity`）

记录分配至本过程的分级、切割、清洗、输送、泵送及制备区制冷用电。

- 选定流：设施供电组合（UUID 待 Tiangong 精确复核）
- 流属性/单位：Energy / kWh
- 数量规则：分表计量用电，或有记录的设备负荷与运行时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 制备后鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定制备用电 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg 制备后鱼
  - 基准：每制备后鱼输出的制备用电
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

本过程不规定废物投入。

##### 基本流

本过程不规定基本流投入；水、冰和电力作为产品流投入。

#### 输出

##### 产品流

###### 进入冷冻的制备后鱼（`prepared_fish_output`）

测量经过已纳入制备后转入冷冻的所声明整条或整理后鱼形态。

- 选定流：尚未冷冻的制备后金枪鱼、鲣鱼或条纹鲣（UUID 待 Tiangong 精确复核）
- 流属性/单位：Mass / kg
- 数量规则：转入冷冻的实测湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收鱼投入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_identity`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定制备后产品产率 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.3
  - 上限：1
  - 单位：kg/kg 验收鱼
  - 基准：每验收鱼投入的制备后鱼湿质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 可销售鱼类共产品（`fish_coproducts`）

单独记录作为产品而非废物离开过程的可食用或可销售部位，并声明去向和功能。

- 选定流：按已声明形态和用途区分的鱼类共产品（UUID 待 Tiangong 精确复核）
- 流属性/单位：Mass / kg
- 数量规则：按去向实测共产品湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收鱼投入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_identity`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定共产品质量 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.7
  - 单位：kg/kg 验收鱼
  - 基准：每验收鱼投入的可销售共产品湿质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 鱼类残余物和拒收物料（`fish_residues`）

仅当内脏、鱼头、破损物料、拒收物和其他鱼类残余物不作为共产品离开时，才将其记录为废物。

- 选定流：按去向区分的鱼类加工残余物或废物（UUID 待 Tiangong 精确复核）
- 流属性/单位：Mass / kg
- 数量规则：离开制备过程的实测残余物和拒收物湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收鱼投入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_identity`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定鱼类残余物 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.7
  - 单位：kg/kg 验收鱼
  - 基准：每验收鱼投入的残余物和拒收物湿质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制备废水（`preparation_wastewater`）

记录离开接收与制备过程的废水，将单独测得的固体与鱼类残余物分开。

- 选定流：鱼类加工废水（UUID 待 Tiangong 精确复核）
- 流属性/单位：Mass / kg
- 数量规则：实测排放体积按实测或有记录密度换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 制备后鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定制备废水 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 制备后鱼
  - 基准：每制备后鱼输出的废水排放量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

本过程不规定默认基本流输出；如有实测直接排放，应单独报告。

### 过程：冷冻和可选冰衣（`freeze_glaze`）

#### 输入

##### 产品流

###### 转入冷冻的制备后鱼（`prepared_fish_input`）

承接 `receive_prepare` 的实测制备后鱼，不重复计算其上游负荷。

- 选定流：尚未冷冻的制备后金枪鱼、鲣鱼或条纹鲣（UUID 待 Tiangong 精确复核）
- 流属性/单位：Mass / kg
- 数量规则：等于转入本过程的实测 `prepared_fish_output`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 在所声明大门的目标冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_lot_mass_identity`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定制备后鱼投入 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.5
  - 单位：kg/kg 目标冷冻鱼净质量
  - 基准：每参考流的制备后鱼投入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷冻用电（`freezing_electricity`）

记录分配至冷冻过程的冷冻机、泵、风机、输送设备、除霜和制冷用电。

- 选定流：设施或船舶供电组合（UUID 待 Tiangong 精确复核）
- 流属性/单位：Energy / kWh
- 数量规则：分表计量用电，或有记录的设备负荷与运行时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 在所声明大门的目标冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`codex-cxc-52-2003`; `codex-cxs-190-1995`
- 数量范围：暂定冷冻用电 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：10
  - 单位：kWh/kg 目标冷冻鱼净质量
  - 基准：每参考流的冷冻用电
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冰衣用水（`glazing_water`）

使用冰衣时，记录所用饮用水或清洁海水，并将实测冰衣与鱼体净质量分开保留。

- 选定流：食品接触冰衣用水（UUID 待 Tiangong 精确复核）
- 流属性/单位：Mass / kg
- 数量规则：实测冰衣供水量，并分别核对滞留冰衣和排放水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 在所声明大门的目标冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_ice_records`
- 来源：`codex-cxs-190-1995`
- 数量范围：暂定滞留冰衣 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 目标冷冻鱼净质量
  - 基准：每参考流的滞留冰衣
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

本过程不规定废物投入。

##### 基本流

本过程不规定基本流投入；能源载体和水作为产品流投入。

#### 输出

##### 产品流

###### 转入包装的冷冻鱼（`frozen_fish_intermediate`）

测量离开冷冻机的冷冻鱼，并单独跟踪冰衣，以便中间产品与鱼体净质量核对。

- 选定流：冷冻金枪鱼、鲣鱼或条纹鲣中间产品（UUID 待 Tiangong 精确复核）
- 流属性/单位：Mass / kg
- 数量规则：实测冷冻毛质量减去单独测量的冰衣质量（如有）
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 进入冷冻的制备后鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_lot_mass_identity`
- 来源：`codex-cxc-52-2003`; `codex-cxs-190-1995`
- 数量范围：暂定冷冻产率 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.8
  - 上限：1
  - 单位：kg 冷冻鱼净质量/kg 制备后鱼
  - 基准：每制备后鱼投入的冷冻鱼净输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 冷冻拒收物和产品损失（`freezing_loss`）

按去向记录冷冻产生的拒收或损失鱼、滴液及其他可单独回收物料。

- 选定流：按去向区分的冷冻拒收物或鱼产品损失（UUID 待 Tiangong 精确复核）
- 流属性/单位：Mass / kg
- 数量规则：离开冷冻过程的实测拒收和损失湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 进入冷冻的制备后鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_identity`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定冷冻损失 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg 制备后鱼
  - 基准：每制备后鱼投入的冷冻拒收和损失
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 冷冻过程制冷剂释放（`freezing_refrigerant_loss`）

计算服务于冷冻过程的设备按化学品区分的制冷剂损失。

- 选定流：按化学品区分的向空气排放制冷剂物质（UUID 待 Tiangong 精确复核）
- 流属性/单位：Mass / kg
- 数量规则：期初充注量加补充量减回收量、转移量和期末充注量，并分配至冷冻过程
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 在所声明大门的目标冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定冷冻制冷剂损失 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg 目标冷冻鱼净质量
  - 基准：每参考流按化学品区分的制冷剂损失
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：包装和大门前冷冻储存（`pack_store`）

#### 输入

##### 产品流

###### 转入包装的冷冻鱼（`frozen_fish_input`）

承接实测冷冻鱼中间产品，不重复计算制备或冷冻负荷。

- 选定流：冷冻金枪鱼、鲣鱼或条纹鲣中间产品（UUID 待 Tiangong 精确复核）
- 流属性/单位：Mass / kg
- 数量规则：等于转入包装的实测 `frozen_fish_intermediate`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 在所声明大门的目标冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_lot_mass_identity`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定冷冻鱼转移 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.2
  - 单位：kg/kg 目标冷冻鱼净质量
  - 基准：每参考流转入包装的冷冻鱼
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装材料（`packaging_input`）

按材料记录初级、次级和三级包装，包括可重复使用包装经验证的分配。

- 选定流：材料特定包装材料（UUID 待 Tiangong 精确复核）
- 流属性/单位：Mass / kg
- 数量规则：发放质量减去有记录退回量，可重复使用物品按经验证使用次数分摊
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 在所声明大门的目标冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定包装投入 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 目标冷冻鱼净质量
  - 基准：每参考流的包装投入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷冻储存用电（`storage_electricity`）

记录在已声明大门前储存期内包装、冷库、风机、泵、除霜和发运准备的用电。

- 选定流：设施或船舶供电组合（UUID 待 Tiangong 精确复核）
- 流属性/单位：Energy / kWh
- 数量规则：分表计量用电，或依据实测储存时间、占用容量和设备运行分配的用电
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 目标冷冻鱼净质量及已声明储存期限
- 基准类型：储存期限（`storage_duration`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定冷冻储存用电 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kWh/kg 目标冷冻鱼净质量
  - 基准：每参考流在已声明大门前储存期的用电
  - 基准类型：储存期限（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

本过程不规定废物投入。

##### 基本流

本过程不规定基本流投入；电力和包装作为产品流投入。

#### 输出

##### 产品流

###### 参考冷冻金枪鱼、鲣鱼或条纹鲣（`reference_product_output`）

按恰好 1 kg 鱼体净质量报告目标产品，不含冰衣、游离冰和包装。

- 选定流：Tunas, skipjack or stripe-bellied bonito, frozen `e51735cd-08ba-4052-bb11-0e5d936b87f2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在所声明大门恰好 1 kg 目标冷冻鱼净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`unsd-cpc-ver-3-0`
- 数量范围：参考流身份范围
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：不含冰衣、游离冰和包装的目标冷冻鱼净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 包装拒收物和产品损失（`packed_product_loss`）

按去向记录破损包装、拒收产品、脱水损失及其他可测包装和储存产品损失。

- 选定流：按去向区分的冷冻鱼产品损失（UUID 待 Tiangong 精确复核）
- 流属性/单位：Mass / kg
- 数量规则：包装和所纳入储存期间的实测拒收产品和库存损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在所声明大门的目标冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_identity`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定包装产品损失 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 目标冷冻鱼净质量
  - 基准：每参考流的包装和储存产品损失
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装废物（`packaging_waste`）

按材料和去向记录包装废料和破损包装，不从购入投入中直接抵扣。

- 选定流：材料特定包装废物（UUID 待 Tiangong 精确复核）
- 流属性/单位：Mass / kg
- 数量规则：离开包装和储存过程的实测包装废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在所声明大门的目标冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定包装废物 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 目标冷冻鱼净质量
  - 基准：每参考流的包装废物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 冷冻储存制冷剂释放（`storage_refrigerant_loss`）

计算服务于包装和所纳入冷冻储存的设备按化学品区分的制冷剂损失。

- 选定流：按化学品区分的向空气排放制冷剂物质（UUID 待 Tiangong 精确复核）
- 流属性/单位：Mass / kg
- 数量规则：期初充注量加补充量减回收量、转移量和期末充注量，并分配至包装和储存
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 目标冷冻鱼净质量及已声明储存期限
- 基准类型：储存期限（`storage_duration`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定储存制冷剂损失 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg 目标冷冻鱼净质量
  - 基准：每参考流和已声明储存期按化学品区分的制冷剂损失
  - 基准类型：储存期限（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共享制备、冷冻、包装、船舶和储存操作 | 尽可能通过分表计量和细分批次、设备、船舶活动及储存期避免分配，使投入和输出可直接归属。 | `eu-pef-2021-2279` |
| `allocation_system_expansion` | 附加共产品功能 | 无法细分时，如能一致表示替代功能和数据集，应评估系统扩展；透明报告扩展系统整体结果。 | `eu-pef-2021-2279` |
| `allocation_physical_relationship` | 未解决多功能过程 | 若细分或系统扩展不可行，采用有记录的因果物理关系。仅在无法论证更相关物理驱动时才使用分离点湿质量，并对其他功能相关属性进行敏感性分析。 | `eu-pef-2021-2279` |
| `allocation_economic_fallback` | 缺乏可辩护物理关系的共产品 | 仅将经济分配作为后备方法；采用同一市场边界的代表性净价值，并披露价格来源、期间、币种和敏感性。 | `eu-pef-2021-2279` |
| `allocation_waste_no_credit` | 残余物、废水、包装废物和拒收产品 | 不向被归类并管理为废物的物料分配产品负荷。纳入废物管理负荷，并披露任何单独建模的避免产品抵扣。 | `eu-pef-2021-2279` |
| `allocation_mass_reconciliation` | 鱼产品、共产品和废物 | 在分配前保留未分配湿质量平衡，并报告合计为一的负荷承担产品分配因子。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_mass_identity` | `receive_prepare`; `freeze_glaze`; `pack_store` | 鱼投入、中间产品、产品、共产品、残余物和损失 | 称量、批次、追溯和产品规范记录 | lot_id; species; origin; production_system; presentation; gross_mass; tare_mass; glaze_mass; net_fish_mass; intermediate_mass; co_product_mass; waste_mass; destination | 与批次谱系和转移关联的校准秤 | kg | 每批次和每次转移 | 至少连续 12 个代表性月份或完整季节性生产期 | 每个纳入设施、船舶、生产线和产品路线 | 按批次和过程汇总有效质量；核对转移和库存变化；归一化至验收参考产品净质量 | 校准证书；批次追溯；产品规范；质量核对日志 |
| `cp_water_ice_records` | `receive_prepare`; `freeze_glaze` | 制备用水、冰、冰衣用水和滞留冰衣 | 水表、储罐、发放、批次和质量记录 | meter_id; opening_reading; closing_reading; issued_mass; returned_mass; water_source; food_contact_quality; glaze_mass; lot_id | 与运行期和批次关联的分表计量或储罐/发放平衡 | kg or m3 | 每日及每个相关批次 | 与生产相同代表期 | 每个纳入水和冰系统 | 按实测或有记录密度换算体积；扣除有记录非过程用量；单独报告滞留冰衣 | 仪表检查；水质证据；发放和批次记录；脱冰衣或等效验证 |
| `cp_energy_records` | `receive_prepare`; `freeze_glaze`; `pack_store` | 电力和直接燃料 | 仪表、发票、燃料、设备运行时间和储存占用记录 | meter_id; readings; fuel_quantity; unit; heating_value_basis; equipment_power; operating_hours; storage_days; occupied_capacity; allocation_key | 优先分表计量；否则依据设备运行和物理分配驱动核对发票或燃料记录 | kWh, MJ, or purchased fuel unit | 每月，并在可行时按批次或班次分表 | 至少连续 12 个代表性月份或完整季节性生产期 | 每个纳入设施、船舶、冷冻机和冷库 | 直接分配分表读数；按有记录物理驱动分配剩余共享用量；归一化至过程输出 | 校准；发票；燃料日志；运行记录；分配工作表；能源平衡 |
| `cp_wastewater_records` | `receive_prepare` | 废水和夹带固体 | 排水仪表、储罐、采样和处理记录 | discharge_volume; density; solids_mass; treatment_route; sampling_time; process_assignment | 带代表性采样和处理路线记录的仪表或储罐平衡 | kg or m3 | 每日或每次排放事件 | 与生产相同代表期 | 每个纳入排放点 | 将体积换算为质量；将单独测量固体保留为不同流；归一化至制备输出 | 仪表检查；实验室报告；排放和处理联单 |
| `cp_refrigerant_records` | `freeze_glaze`; `pack_store` | 按化学品区分的制冷剂损失 | 设备充注、采购、维护、回收和转移记录 | refrigerant_id; opening_charge; additions; recovered; transferred; closing_charge; equipment_group; service_date | 按制冷剂和设备组完成完整库存平衡 | kg | 每次维护事件和期间结算 | 至少一个覆盖生产期的完整平衡 | 每个纳入冷冻和冷藏设备组 | 损失 = 期初 + 补充 - 回收 - 转移 - 期末；按设备服务或制冷负荷驱动分配 | 维护发票；钢瓶日志；回收记录；签字库存平衡 |
| `cp_packaging_records` | `pack_store` | 包装投入和废物 | 采购、发放、物料清单、退回、重复使用和废料记录 | material_id; material_type; issued_mass; returned_mass; scrap_mass; packs_produced; reuse_cycles | 按材料和产品形态进行质量核对 | kg | 每次包装运行，按月汇总 | 与生产相同代表期 | 每个纳入包装线和形态 | 净投入 = 发放 - 退回；单独报告废料；按经验证使用次数分配可重复使用包装 | 供应商规范；库存核对；重复使用证据；废料票据 |
| `cp_temperature_food_safety` | `receive_prepare`; `freeze_glaze`; `pack_store` | 时间-温度控制、冷冻终点、储存和鲭鱼毒素控制 | 校准探针、记录仪、危害计划、检测和纠正措施记录 | lot_id; receipt_time; preparation_time; thermal_centre_temperature; storage_temperature; timestamp; excursion_duration; criterion; test_result; corrective_action | 经验证产品核心测量和连续或有依据的间隔记录，并链接食品安全计划 | °C、时间和已声明检测单位 | 每批次关键步骤；储存期间连续或有依据的间隔 | 整个纳入生产和储存期 | 每个纳入设施、船舶、冷冻机、冷库和批次 | 保留批次最小/最大值、暴露时间、适用标准、检测结果和处置；不得通过平均掩盖温度偏离 | 校准；记录仪记录；危害分析；验证检测；纠正措施和批次处置记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | 归一化数量 = 有效前景数量 / 所声明大门的目标冷冻鱼净质量 | 有效流数量；不含冰衣、游离冰和包装的 `net_fish_mass` | 每 1 kg 参考流的数量 | `mass-balance-identity` |
| `calc_net_fish_mass` | 有冰衣或冰的产品 | 目标鱼净质量 = 冷冻产品毛质量 - 经验证冰衣质量 - 游离冰 - 包装皮重 | gross_mass; glaze_mass; free_ice_mass; packaging_tare | `net_fish_mass` | `codex-cxs-190-1995`; `mass-balance-identity` |
| `calc_process_mass_balance` | 制备、冷冻和包装 | 差额 = 验收物料投入 + 期初库存 - 产品 - 共产品 - 废物 - 排放物料 - 期末库存；调查而非强制平衡物料差异 | 批次和库存质量；滞留水或冰；产品；共产品；废物；废水固体 | 已核对质量平衡及未解释差额 | `mass-balance-identity` |
| `calc_shared_energy` | 共享设备和储存 | 分配能源 = 实测共享能源 × 产品的有记录物理分配驱动 / 总驱动 | 仪表或燃料数量；运行时间、制冷负荷、产量或占用容量驱动 | 分配的 kWh、MJ 或燃料数量 | `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | 冷冻和储存设备 | 制冷剂损失 = 期初充注量 + 补充量 - 回收量 - 转移量 - 期末充注量 | 按化学品区分的设备库存 | 排放并分配至过程的制冷剂 kg | `mass-balance-identity` |
| `calc_physical_allocation` | 联合产品 | 分配因子_i = 所选因果物理量_i / 全部负荷承担产品该物理量之和 | 分离点实测数量；所选物理属性 | 合计为一的产品特定因子 | `eu-pef-2021-2279` |
| `calc_economic_allocation` | 经济后备分配 | 分配因子_i = 代表性净价值_i / 同一边界全部负荷承担共产品净价值之和 | 代表性价格；实测共产品数量 | 合计为一的经济因子 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 鱼投入和成品批次 | 保留物种、公认商品名或科学名、野生捕捞或养殖体系、产地、供应商或船舶、批次关联、接收状态、非鱼片形态和产品去向。 | 供应商或卸货记录、捕捞或养殖记录、批次谱系、产品规范和标签 |
| `dq_temporal_representativeness` | 全部前景流 | 覆盖至少连续 12 个代表性月份或完整季节性生产期；披露停产、缺失期间和外推。 | 带日期仪表、批次、发票、维护和生产记录 |
| `dq_site_route_coverage` | 多场址、多船舶或多路线数据集 | 纳入数据集代表的每个场址、船舶和路线，或报告产量加权覆盖率及排除项；不得默默从一条路线外推至另一条路线。 | 场址和船舶清单、路线记录、生产总量、覆盖率计算 |
| `dq_measurement_control` | 质量、水、冰、能源、制冷剂和温度 | 使用经校准或验证的仪器，保留原始单位和换算，并在无直接测量时记录估算。 | 校准、仪表检查、换算工作表、估算依据 |
| `dq_mass_completeness` | 鱼、共产品、残余物、冰衣、包装和库存 | 核对主要投入、输出和库存变化；调查未解释差异并保留产品与废物去向。 | 过程质量平衡、库存核对、废物和销售记录 |
| `dq_cold_chain` | 冷冻产品 | 对每条纳入路线保留冷冻终点、冷冻储存温度和期限、温度偏离、措施及适用产品规范。 | 经验证冷冻研究、探针和记录仪记录、温度偏离及纠正措施记录 |
| `dq_food_safety_scombrotoxin` | 金枪鱼、鲣鱼和条纹鲣批次 | 采用有记录的食品安全计划控制时间-温度滥用及鲭鱼毒素或组胺风险，使用适用法规或客户标准；保留检测、处置和纠正措施，不得以本 PCR 替代食品法规。 | 危害分析、监测记录、实验室结果、批次处置、纠正措施 |
| `dq_upstream_dataset_fit` | 鱼和购入投入 | 记录各上游数据集的地理、技术、时间、生产体系和边界；披露代理限制及已经表示的任何船上活动。 | 数据集元数据、边界比较和数据质量评估 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求恰好 1 kg 目标产品净质量，链接流 `e51735cd-08ba-4052-bb11-0e5d936b87f2`、Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 和单位 kg。 | `mass-balance-identity` |
| `validate_category_scope` | 产品身份 | 要求以已声明冷冻非鱼片形态提供金枪鱼、鲣鱼或条纹鲣；拒绝产品为鱼片、鱼肉、肝、鱼卵、鲜或冷藏鱼或其他保藏形式的记录。 | `unsd-cpc-ver-3-0` |
| `validate_required_qualifiers` | 数据集元数据 | 缺少物种、产地、生产体系、非鱼片形态、起始状态、路线、上游边界、冷冻终点、冰衣状态、储存制度、加工地点或净质量基准时，完整性校验失败。 | `unsd-cpc-ver-3-0`; `codex-cxc-52-2003` |
| `validate_process_coverage` | 前景清单 | 要求接收和分级、每项实际实施制备步骤、冷冻、适用冰衣、包装、大门前冷冻储存、能源、实际使用的水或冰、制冷剂、共产品和废物处理，或明确且有依据的零值/不适用声明。 | `codex-cxc-52-2003` |
| `validate_cold_chain` | 每个成品批次 | 要求已声明冷冻终点、储存温度和期限、温度偏离评估及纠正措施。声称快速冷冻时，要求热稳定后热中心达到 -18 °C 或更低的证据。 | `codex-cxc-52-2003`; `codex-cxs-190-1995` |
| `validate_glaze_net_mass` | 有冰衣产品 | 要求单独测量冰衣，并确认参考质量排除冰衣、游离冰和包装；不得从 CXS 190-1995 推断整条产品合格。 | `codex-cxs-190-1995` |
| `validate_mass_balance` | 每个汇总期 | 要求将验收投入和库存变化与产品净量、共产品、残余物、废水固体、冰衣或滞留水以及损失核对；报告未解释差异和措施。 | `mass-balance-identity` |
| `validate_food_safety_controls` | 金枪鱼、鲣鱼和条纹鲣批次 | 要求适用卫生、时间-温度、可追溯及鲭鱼毒素或组胺控制与批次处置证据；标记缺失或未评估标准。 | `codex-cxc-52-2003` |
| `validate_allocation` | 多功能过程 | 要求记录细分或系统扩展评估、后备方法论证、合计为一的分配因子，以及在分配可能显著影响结果时的敏感性披露。 | `eu-pef-2021-2279` |
| `validate_temporal_route_coverage` | 前景数据集 | 要求声明代表期以及场址、船舶和路线覆盖，并披露排除项、缺失期间和外推。 | `eu-pef-2021-2279` |
| `validate_provisional_ranges` | 候选 QA 范围 | 所有 `reasoned_estimate` 范围仅作为筛查标志；不得替代前景记录，并应在用于发布关键场景前替换或明确评审。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 已声明非鱼片形态的冷冻金枪鱼、鲣鱼或条纹鲣前景生产数据集，归一化至所声明大门 1 kg 产品净质量 |
| downstream_use | 当物种、产地、生产体系、形态、路线、上游边界、地理、技术、储存期、分配和数据质量适配研究时，可作为 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 需要透明冷冻非鱼片金枪鱼、鲣鱼或条纹鲣投入，并保留已声明上游数据集和限定信息的摇篮到大门或下游产品系统 |
| excluded_use | 直接表示鱼片、切碎或其他鱼肉、肝、鱼卵、鲜或冷藏鱼、罐藏或熟制产品、零售或消费者阶段，或未经代表性评估的不同物种、产地、形态或冷冻路线 |
| required_metadata | PCR id 和版本；产品流 UUID；物种；生产体系；捕捞区域或养殖产地；上游数据集和船上边界；产品形态；起始状态；冷冻技术和终点；冰衣和净质量方法；加工场址或船舶；储存温度和期限；电力和燃料供应；制冷剂；共产品去向；分配；参考期 |
| required_quality_disclosure | 场址、船舶、路线和时间覆盖；质量平衡差异；仪表和秤质量；冷链和食品安全证据；上游代理；暂定估算；分配敏感性；排除阶段；CXS 190-1995 适用性限制 |
| update_trigger | 物种、产地、生产体系、形态、船上边界、制备产率、冷冻或冰衣技术、包装、能源供应、制冷剂、储存期、共产品市场、分配基准、食品安全要求、场址或船舶覆盖、代表性数据期发生实质变化 |

## 11. 数据源

| 来源 ID | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-ver-3-0` | `official_guidance` | 联合国统计司。《产品总分类（CPC）3.0 版》解释性说明，子类 21215。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-11） | 类别身份，以及排除冷冻鱼片、鱼肉、肝和鱼卵 |
| `codex-cxc-52-2003` | `official_guidance` | Codex Alimentarius Commission。CXC 52-2003，《鱼和渔业制品操作规范》，2019 年版。https://workspace.fao.org/sites/codex/Standards/CXC%2052-2003/CXC_052e.pdf（检索于 2026-08-11） | 鱼类加工、卫生、时间-温度控制、可追溯、冷链、废物和鲭鱼毒素风险数据要求 |
| `codex-cxs-190-1995` | `standard` | Codex Alimentarius Commission。CXS 190-1995，《快速冷冻鱼片标准》，2024 年修订并于 2026 年重新设计出版。https://openknowledge.fao.org/handle/20.500.14283/ce0070en（检索于 2026-08-11） | 仅在明确适用时补充快速冷冻终点、冰衣水、深冻处理和净含量概念；不作为 CPC 21215 产品合格依据 |
| `eu-pef-2021-2279` | `official_guidance` | European Commission。Commission Recommendation (EU) 2021/2279，关于环境足迹方法的使用，CELEX 32021H2279。https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng（检索于 2026-08-11） | 生命周期边界完整性；上游数据；多功能性处理层级；废物和分配披露 |
| `mass-balance-identity` | `method_factor` | 应用于实测前景投入、输出和库存变化的质量守恒恒等式。 | 参考归一化、净质量核对、过程质量平衡、制冷剂库存平衡和分配因子检查 |
