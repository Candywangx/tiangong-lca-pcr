---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.ferro-chromium
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 铬铁

## 1. 范围与适用性

本 PCR 适用于生产设施门口固态、可销售铬铁的前景生产。其覆盖高碳、中碳和低碳铬铁，但数据集必须声明牌号、铬和碳含量、生产路线、炉型及密闭形式和产品物理形态。边界包括适用时的厂内炉料制备、冶炼或金属热还原/精炼、出炉、浇铸、破碎和筛分，以及厂内烟气与粉尘治理、水循环损耗和炉渣/金属回收。

本 PCR 不包括金属铬、以硅铬合金为声明产品的生产、不锈钢及其他下游合金生产、其他铁合金、铬矿开采与选矿、外购还原剂和熔剂的生产、进出厂运输、资本设备以及产品使用与生命周期末端。跨越前景边界的上述上游产品系统须用相容的背景数据集表示。以二次含铬残余物为主要原料的铬铁生产，因原料身份和避免负担主张存在实质差异，须另经审查后扩展。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.ferro-chromium |
| classification_refs | CPC 3.0：41113，Ferro-chromium（铬铁） |
| covered_products | 固态可销售的高碳、中碳和低碳铬铁；以铬铁销售的铬矿合金亦在范围内 |
| excluded_products | 金属铬；以声明产品销售的硅铬合金；不锈钢；其他铁合金；含铬废物；未经批准扩展且主要从二次残余物回收的产品 |
| representative_product | 符合已声明商业牌号的固态破碎块状或块状铬铁合金 |
| production_route | 高碳铬铁采用矿热炉直接碳热冶炼；生产中碳或低碳牌号时采用硅热还原或氧气脱碳精炼 |
| market_state | 生产设施门口的干燥固态合金，物理形态为已声明的块状、破碎筛分料或其他可销售形态 |

产品身份边界窄于一般铁合金行业：声明参考产品必须是铬铁，不得是金属铬、硅铬合金、回收混合金属或未具体说明的铁合金。`samr-gbt-5683-2024` 核实了专业中文名称“铬铁”及其英文对应词 Ferrochromium；`eu-jrc-nfm-bref-2017` 按碳含量和生产路线区分商业铬铁牌号。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供铬、碳含量已声明的铬铁合金化材料 |
| How much | 1,000 kg 可销售铬铁净干质量 |
| How well | 满足已声明商业规范中的化学成分、粒度分布和物理形态要求 |
| How long or cycle | 在设施门口产出声明参考数量的一次生产批次或报告期；不赋予使用期限 |
| reference_flow_link | `output_ferrochromium` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 净干质量 |
| 参考产品流 | 铬铁 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 铬质量分数；碳质量分数及牌号；适用时的硅质量分数；生产路线；炉型及密闭形式；物理形态和粒度等级；水分基准；回收金属含量；设施地理位置；报告期 |

清单行 `output_ferrochromium` 即未解决的参考产品行。由于可用环境中无法对 Tiangong 候选项进行混合检索和直接读取，未赋予 UUID。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_dry_mass` | 参考产品及所有质量归一化交换 | 质量 | kg | 在扣除运输包装和游离水后确定产品净质量；声明水分检测方法，并在归一化前将湿基记录换算到已声明干基。 |
| `composition_basis` | 产品和中间合金化验 | 质量分数 | 质量百分数 | 铬、碳、硅及其他规范相关成分须采用同一声明分析基准报告；不得以名义牌号代替实测或认证成分。 |
| `energy_preservation` | 电力和燃料 | 能量或燃料质量/体积 | kWh、MJ、kg 或 m3 | 保留计量原始单位及换算因子；外购电力按过程单列，不得与回收炉气能量合并。 |
| `water_makeup_basis` | 冷却、洗涤和粒化用水 | 体积或质量 | m3 或 kg | 记录跨越系统边界的新鲜补充水并与厂内循环水分开；披露排污水和废水量。 |
| `internal_transfer_consistency` | 团聚炉料、熔融合金、回收金属、炉渣、粉尘和炉气 | 质量或能量 | kg、MJ 或 m3 | 核对每项内部输出及其接收过程输入；汇总数据集仅计入跨越前景边界的净交换。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 铬铁设施门口购入的铬矿石或精矿、还原剂、熔剂、电极材料、气体、电力、水及任何外购合金中间体 |
| starting_condition_role | 由独立背景数据集表示其生产过程的上游产品投入 |
| product_classification_scope | 仅覆盖可销售铬铁生产；路线特定的内部中间体保留在前景系统内 |
| recursive_input_rule | 同类别的外购铬铁中间体按供应商数据集身份、牌号、状态和质量记录一次；除非现场实际生产，否则不得在接收过程中重复构建其上游生产 |
| upstream_dataset_requirement | 铬矿、焦炭或其他还原剂、熔剂、电力、氧气、燃料、水和外购合金中间体须采用在成分、状态、地理、技术和时间方面具有代表性的数据集 |
| disclosure | 声明矿石形态、制备路线、炉型及密闭形式、还原剂、精炼路线、炉气利用或放散、粉尘治理、水循环、炉渣处理、产品牌号、回收循环及任何被排除的厂内作业 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_facility_gate` | foreground_system | 纳入从生产投入接收到设施门口固态可销售铬铁的全部厂内作业，包括可归属于该产品的治理和厂内残余物处理。 | `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986` |
| `boundary_route_condition` | route_selection | 仅在声明产品实际采用时纳入炉料制备、碳热冶炼和中/低碳精炼；披露外购中间体，不得虚构不存在的路线。 | `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986` |
| `boundary_release_accounting` | emissions_and_residues | 捕集粉尘、炉渣、废水、回收炉气以及排放的二氧化碳、一氧化碳和颗粒物须分别记录；不得将捕集等同于消除。 | `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986` |
| `boundary_upstream_separation` | upstream_inputs | 上游开采与生产不纳入前景过程，但每项外购投入必须链接背景数据集。 | `cpc-3-0-official-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `charge_preparation` | 铬矿炉料制备与团聚 | conditional | 当铬矿粉或精矿在厂内进行干燥、磨细、造球、压团、烧结或预热时纳入 | 前景制备 | 送入铬铁炉的已制备炉料 |
| `carbothermic_smelting` | 高碳铬铁冶炼 | conditional | 当现场采用碳还原生产高碳铬铁或铬矿合金时纳入 | 前景合金生产 | 从炉内出炉的熔融高碳铬铁 |
| `medium_low_carbon_refining` | 中碳或低碳铬铁生产 | conditional | 当现场采用硅热还原或氧气脱碳生产声明牌号时纳入 | 前景精炼 | 离开精炼容器的熔融精炼铬铁 |
| `finishing_and_recovery` | 出炉、浇铸、粒度加工、炉渣处理和金属回收 | required | 每个可销售铬铁数据集均须纳入；仅在确认不存在时将炉渣粒化和金属回收行标记为不适用 | 前景精整 | 设施门口可销售铬铁净干质量 |

至少须存在一条合金生产路线（`carbothermic_smelting` 或 `medium_low_carbon_refining`）。低碳路线使用外购高碳铬铁或硅铬合金中间体时，须记录该购入流，不得虚构现场上游冶炼。

### 过程：铬矿炉料制备与团聚（`charge_preparation`）

#### 输入

##### 产品流

###### 铬精矿原料（`input_chromite_fines`）

记录进入厂内团聚的干基铬精矿。

- 选定流：铬精矿
- 流属性/单位：质量 / kg
- 数量规则：报告期实际称量的干基原料消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位已制备炉料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_charge_preparation`
- 来源：`eu-jrc-nfm-bref-2017`

###### 膨润土球团黏结剂（`input_pellet_binder`）

仅在实际作为球团黏结剂加入时记录膨润土。

- 选定流：膨润土 `e01d9941-db32-46cb-b577-ebc584597a2d`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际称量的黏结剂加入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位已制备炉料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_charge_preparation`
- 来源：`eu-jrc-nfm-bref-2017`

###### 烧结用焦粉（`input_coke_breeze`）

仅在团聚或烧结步骤实际加入时记录焦粉。

- 选定流：焦粉 `2934bd2d-a22f-4936-9bd3-20ff707605f4`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际称量的焦粉加入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位已制备炉料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_charge_preparation`
- 来源：`eu-jrc-nfm-bref-2017`

###### 制备设备用电（`input_prep_electricity`）

记录磨矿、混合、团聚、输送及其治理设备的可归属交流电。

- 选定流：交流电 `e773703a-f0ce-4a1e-b795-cb09dc7f2749`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / 能量 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：可归属于本过程的交流电计量值，按披露的精确换算由 kWh 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位已制备炉料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_charge_preparation`
- 来源：`eu-jrc-nfm-bref-2017`

###### 干燥或烧结用天然气（`input_prep_natural_gas`）

仅在厂内炉料干燥或烧结实际燃烧时记录输送的气态天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / 体积 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：在已披露参考状态下计量或与发票核对的输送气体体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位已制备炉料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_charge_preparation`
- 来源：`eu-jrc-nfm-bref-2017`

###### 制备用工艺水（`input_prep_water`）

记录造球或制备烟气治理使用的新鲜补充水。

- 选定流：工艺水
- 流属性/单位：体积 / m3
- 数量规则：跨越设施边界的新鲜补充水计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位已制备炉料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_charge_preparation`
- 来源：`eu-jrc-nfm-bref-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 团聚铬矿炉料（`output_agglomerated_chromite`）

记录转入冶炼的干基已制备炉料内部产品流。

- 选定流：团聚铬矿炉料
- 流属性/单位：质量 / kg
- 数量规则：实际称量的干基已制备炉料输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_charge_preparation`
- 来源：`eu-jrc-nfm-bref-2017`

##### 废物流

###### 捕集的含铬矿粉尘（`output_prep_collected_dust`）

记录制备烟气净化捕集且扣除有记录厂内回用后的粉尘。

- 选定流：捕集的含铬矿粉尘
- 流属性/单位：质量 / kg
- 数量规则：离开本过程或返回厂内的捕集粉尘称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位已制备炉料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_charge_preparation`
- 来源：`eu-jrc-nfm-bref-2017`

##### 基本流

###### 制备过程排放颗粒物（`output_prep_particulate_air`）

记录物料处理和团聚治理后向空气排放的颗粒物。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：本过程有组织和无组织颗粒物排放监测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位已制备炉料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_charge_emissions`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

### 过程：高碳铬铁冶炼（`carbothermic_smelting`）

#### 输入

##### 产品流

###### 铬矿炉料（`input_chromite_burden`）

记录加入炉内的干基铬矿、球团或团聚料，并在数据集中具体说明其物理状态。

- 选定流：铬铁矿石 `2cd03bf2-5ea3-46e4-9d3e-f13b6b22ea7d`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际称量的干基铬矿炉料加入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位出炉高碳铬铁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smelting_inputs`
- 来源：`eu-jrc-nfm-bref-2017`

###### 冶金焦炭还原剂（`input_metallurgical_coke`）

记录作为碳还原剂消耗的冶金焦炭。

- 选定流：冶金焦 `a94c42b1-7fa9-42f3-a9d1-1e7353e8490d`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际称量的干焦加入量，扣除退回的未用物料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位出炉高碳铬铁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smelting_inputs`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

###### 石英岩熔剂（`input_quartzite`）

记录作为特定熔剂或炉料调整物加入的石英岩。

- 选定流：石英岩
- 流属性/单位：质量 / kg
- 数量规则：实际称量的干石英岩加入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位出炉高碳铬铁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smelting_inputs`
- 来源：`eu-jrc-nfm-bref-2017`

###### 冶炼用石灰熔剂（`input_smelting_lime`）

仅在实际加入冶炼炉料时记录石灰。

- 选定流：石灰 `c431c0c3-3f5e-4b7b-af99-2ebbdcaf5f99`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际称量的干石灰加入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位出炉高碳铬铁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smelting_inputs`
- 来源：`eu-jrc-nfm-bref-2017`

###### 自焙电极糊（`input_electrode_paste`）

记录矿热炉消耗的自焙电极糊。

- 选定流：自焙电极糊
- 流属性/单位：质量 / kg
- 数量规则：炉次期间期初库存加购入量减转出量和期末库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位出炉高碳铬铁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smelting_inputs`
- 来源：`eu-jrc-nfm-bref-2017`

###### 冶炼炉用电（`input_smelting_electricity`）

记录炉体及直接相关炉气治理系统的总计量用电。

- 选定流：交流电 `e773703a-f0ce-4a1e-b795-cb09dc7f2749`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / 能量 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：可归属于炉体运行及直接治理的交流电计量值，按披露的精确换算由 kWh 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位出炉高碳铬铁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smelting_inputs`
- 来源：`eu-jrc-nfm-bref-2017`

###### 冶炼冷却补充水（`input_smelting_cooling_water`）

记录加入炉体冷却回路的新鲜水，不包括循环水。

- 选定流：冷却水
- 流属性/单位：体积 / m3
- 数量规则：跨越设施边界的补充水计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位出炉高碳铬铁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smelting_inputs`
- 来源：`eu-jrc-nfm-bref-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 熔融高碳铬铁（`output_molten_hc_ferrochromium`）

记录在精炼或精整前出炉的熔融高碳铬铁。

- 选定流：熔融高碳铬铁
- 流属性/单位：质量 / kg
- 数量规则：与钢包称量和生产记录核对的出炉金属质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smelting_outputs`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

###### 净化后富一氧化碳炉气（`output_cleaned_co_gas`）

记录外供或作为已计量内部能源使用的净化炉气，不得与直接空气排放合并。

- 选定流：富一氧化碳炉气
- 流属性/单位：能量 / MJ
- 数量规则：干基气体计量体积乘以实测低位热值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位出炉高碳铬铁
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_smelting_outputs`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

##### 废物流

###### 铬铁炉渣（`output_smelting_slag`）

记录厂内回收或外运管理前从冶炼炉排出的炉渣。

- 选定流：铬铁炉渣
- 流属性/单位：质量 / kg
- 数量规则：称量或由体积和密度确定的炉渣质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位出炉高碳铬铁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smelting_outputs`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

###### 捕集的铬铁炉尘（`output_smelting_dust`）

记录炉体、出炉和一次烟气净化捕集且扣除有记录厂内回用后的粉尘。

- 选定流：捕集的铬铁炉尘
- 流属性/单位：质量 / kg
- 数量规则：按去向称量的捕集粉尘质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位出炉高碳铬铁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smelting_outputs`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

##### 基本流

###### 冶炼直接化石源二氧化碳（`emission_smelting_carbon_dioxide`）

记录还原气氧化、放散燃烧及可归属于冶炼的现场燃烧所产生并排入空气的化石源二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：由现场监测或碳平衡确定的化石源直接排放，并披露方法和碳来源；非化石源二氧化碳须另行记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位出炉高碳铬铁
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_smelting_emissions`
- 来源：`eu-jrc-nfm-bref-2017`

###### 冶炼直接一氧化碳（`emission_smelting_carbon_monoxide`）

记录回收、燃烧、放散和治理后排入空气的一氧化碳。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：现场监测的烟囱和已量化无组织化石源一氧化碳排放；非化石源一氧化碳须另行记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位出炉高碳铬铁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smelting_emissions`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

###### 冶炼排放颗粒物（`emission_smelting_particulate`）

记录炉体和出炉治理后排入空气的颗粒物。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：烟囱监测量加已量化无组织排放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位出炉高碳铬铁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smelting_emissions`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

### 过程：中碳或低碳铬铁生产（`medium_low_carbon_refining`）

#### 输入

##### 产品流

###### 高碳铬铁中间体（`input_refining_hc_ferrochromium`）

记录加入脱碳或路线特定精炼的高碳铬铁。

- 选定流：高碳铬铁
- 流属性/单位：质量 / kg
- 数量规则：按认证成分称量的合金加入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位精炼铬铁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_inputs`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

###### 硅铬合金还原剂（`input_ferro_silico_chromium`）

记录硅热还原时实际加入的硅铬合金。

- 选定流：硅铬合金 `d8f78abf-5c6a-45c6-909a-161ada78f835`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按认证成分称量的加入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位精炼铬铁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_inputs`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

###### 精炼用铬矿石（`input_refining_chromite`）

记录硅热精炼路线加入的铬矿石。

- 选定流：铬铁矿石 `2cd03bf2-5ea3-46e4-9d3e-f13b6b22ea7d`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际称量的干铬矿加入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位精炼铬铁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_inputs`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

###### 精炼用石灰（`input_refining_lime`）

记录为形成精炼渣而加入的石灰。

- 选定流：石灰 `c431c0c3-3f5e-4b7b-af99-2ebbdcaf5f99`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际称量的干石灰加入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位精炼铬铁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_inputs`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

###### 脱碳用氧气（`input_refining_oxygen`）

仅在吹氧中碳路线中记录氧气。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / 体积 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：在已披露参考状态下计量的送入转炉工业氧气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位精炼铬铁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_inputs`
- 来源：`eu-jrc-nfm-bref-2017`

###### 精炼用电（`input_refining_electricity`）

记录电弧炉、转炉、反应包及精炼治理设备的计量用电。

- 选定流：交流电 `e773703a-f0ce-4a1e-b795-cb09dc7f2749`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / 能量 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：可归属于精炼路线的交流电计量值，按披露的精确换算由 kWh 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位精炼铬铁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_inputs`
- 来源：`eu-jrc-nfm-bref-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 熔融精炼铬铁（`output_refined_ferrochromium`）

记录转入精整的熔融中碳或低碳铬铁。

- 选定流：熔融精炼铬铁
- 流属性/单位：质量 / kg
- 数量规则：按实测成分确定的出炉或钢包称量合金质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_outputs`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

##### 废物流

###### 铬铁精炼渣（`output_refining_slag`）

记录在回收、回用或外运管理前从精炼分离的炉渣。

- 选定流：铬铁精炼渣
- 流属性/单位：质量 / kg
- 数量规则：称量或由体积和密度确定的炉渣质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位精炼铬铁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_outputs`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

###### 捕集的精炼粉尘（`output_refining_dust`）

记录精炼容器和反应包捕集且扣除有记录回用后的粉尘。

- 选定流：捕集的铬铁精炼粉尘
- 流属性/单位：质量 / kg
- 数量规则：按去向称量的捕集粉尘质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位精炼铬铁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_outputs`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

##### 基本流

###### 精炼排放颗粒物（`emission_refining_particulate`）

记录精炼容器和反应包治理后排入空气的颗粒物。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：烟囱监测量加已量化无组织排放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位精炼铬铁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_emissions`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

### 过程：出炉、浇铸、粒度加工、炉渣处理和金属回收（`finishing_and_recovery`）

#### 输入

##### 产品流

###### 精整用熔融铬铁（`input_molten_ferrochromium`）

记录进入浇铸或粒化的熔融合金，并与供应过程核对。

- 选定流：熔融铬铁
- 流属性/单位：质量 / kg
- 数量规则：进入精整的钢包称量或出炉质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位可销售铬铁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

###### 破碎筛分用电（`input_finishing_electricity`）

记录浇铸辅助设备、破碎、筛分、输送及精整治理的交流电计量值。

- 选定流：交流电 `e773703a-f0ce-4a1e-b795-cb09dc7f2749`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / 能量 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：可归属于精整的交流电计量值，按披露的精确换算由 kWh 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位可销售铬铁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

###### 炉渣粒化用水（`input_slag_granulation_water`）

厂内进行炉渣粒化时记录新鲜补充水，不包括循环水。

- 选定流：工艺水
- 流属性/单位：体积 / m3
- 数量规则：粒化循环的新鲜补充水计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位可销售铬铁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-nfm-bref-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售铬铁参考产品（`output_ferrochromium`）

本行为声明参考产品。记录粒度加工和质量验收后的干基净可销售铬铁。

- 选定流：铬铁
- 流属性/单位：质量 / kg
- 数量规则：实测净干合格产品质量，并归一化到 1,000 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 净干可销售铬铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_records`
- 来源：`cpc-3-0-official-2025`; `samr-gbt-5683-2024`

###### 回收铬铁金属（`output_recovered_ferrochromium`）

将炉渣处理或粒度加工残余物中回收的金属作为独立内部或外供产品流记录。

- 选定流：回收铬铁
- 流属性/单位：质量 / kg
- 数量规则：按去向和实测牌号称量的回收金属质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位可销售铬铁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-nfm-bref-2017`

##### 废物流

###### 外运铬铁炉渣（`output_ferrochromium_slag`）

记录以废物身份离开设施的已处理或未处理铬铁炉渣，并披露去向和金属回收状态。

- 选定流：铬铁炉渣
- 流属性/单位：质量 / kg
- 数量规则：扣除厂内回用后离开设施的炉渣称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位可销售铬铁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

###### 捕集的破碎筛分粉尘（`output_finishing_dust`）

记录浇铸、破碎、筛分和产品处理捕集且扣除回用后的粉尘。

- 选定流：捕集的铬铁产品粉尘
- 流属性/单位：质量 / kg
- 数量规则：按去向称量的捕集粉尘质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位可销售铬铁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

###### 炉渣粒化废水（`output_finishing_wastewater`）

记录厂内循环后从炉渣粒化系统排污或排放的废水。

- 选定流：炉渣粒化废水
- 流属性/单位：体积 / m3
- 数量规则：跨越设施边界的排污或排放体积计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位可销售铬铁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-nfm-bref-2017`

##### 基本流

###### 精整排放颗粒物（`emission_finishing_particulate`）

记录浇铸、破碎、筛分和物料处理治理后排入空气的颗粒物。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：烟囱监测量加已量化无组织排放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位可销售铬铁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_emissions`
- 来源：`eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | multi_process_facility | 分配共享负担之前，应优先对炉料制备、冶炼、精炼、精整、炉气利用、粉尘治理和炉渣回收实施物理细分和直接计量。 | `eu-jrc-nfm-bref-2017` |
| `allocation_internal_recycle` | internal_recycle | 在所评估前景系统内回用的粉尘、回收金属、返炉渣和炉气保留其已计量内部转移，不得产生额外外部产品抵扣或重复负担。 | `eu-jrc-nfm-bref-2017` |
| `allocation_exported_coproduct` | exported_coproducts | 外供回收金属或净化炉气在可证实被替代功能时优先扩展系统；否则采用有记录的物理关系，例如炉气按能量含量、回收合金按金属质量分配。不得采用未披露的经济分配。 | `eu-jrc-nfm-bref-2017` |
| `allocation_waste_status` | slag_and_dust | 除非数据集记录产品身份、去向和功能，否则炉渣和粉尘按废物处理。废物管理系统接收该流之前的处理负担仍归属于铬铁生产。 | `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_charge_preparation` | `charge_preparation` | 物料、水、燃料、电力和已制备炉料 | 秤量、仪表、发票、库存记录 | 期初库存；收货；期末库存；干物质；仪表读数；炉料输出 | 将经校准秤量和仪表与批次及月度生产日志核对 | kg、m3、kWh、MJ | 按批次或每日记录并按月汇总 | 至少一个代表性报告年度或完整批次 | 服务于产品的所有厂内制备线 | 按生产线汇总净消耗和产出，再归一化到已制备炉料及参考产品 | 校准记录；水分检测；库存核对；仪表覆盖率 |
| `cp_charge_emissions` | `charge_preparation` | 排放颗粒物 | 烟囱测试、连续监测、无组织排放调查 | 浓度；干烟气流量；运行时间；捕集状态；无组织估算 | 采用场址认可方法量化有组织和无组织排放 | kg、mg/Nm3、Nm3 | 按监测计划频次并在重大变更后开展 | 与生产记录同期 | 所有相关制备排放点 | 对浓度和流量按运行时间积分并核对捕集状态 | 采样报告；检出限；运行日志；治理设施状态 |
| `cp_smelting_inputs` | `carbothermic_smelting` | 炉料、电力和冷却补充水 | 秤量、配料单、仪表、库存记录 | 各物料干基加入量；成分；电力；补充水；炉时 | 将配料单、校准仪表和库存变动与各炉次核对 | kg、kWh、m3 | 按批次或班次记录并按月汇总 | 完整炉次和报告期 | 生产声明合金的每座炉 | 按炉和路线汇总，排除厂内循环，并归一化到出炉合金及参考产品 | 秤和仪表校准；化验；库存核对 |
| `cp_smelting_outputs` | `carbothermic_smelting` | 出炉合金、炉渣、捕集粉尘和回收炉气 | 钢包秤、残余物秤、气体计量和分析 | 出炉金属；炉渣；各去向粉尘；干气体积；气体成分；热值 | 核对出炉质量和残余物去向，并由实测体积和热值计算炉气能量 | kg、Nm3、MJ | 按炉次或班次记录并按月汇总 | 与炉料投入同期 | 服务于产品的炉体、烟气治理和残余物处理 | 汇总输出，核对内部转移和质量平衡差异 | 秤和气表校准；实验室化验；去向记录 |
| `cp_smelting_emissions` | `carbothermic_smelting` | 直接 CO2、CO 和颗粒物 | 烟囱及无组织监测、碳平衡记录 | 浓度；气体流量；运行时间；碳投入；外供炉气；放散燃烧；捕集状态 | 量化监测排放；采用碳平衡时保留全部碳输入和输出项 | kg、kg C、mg/Nm3、Nm3 | 按监测计划并按月汇总 | 与炉料投入和输出同期 | 所有冶炼主要及二次排放点 | 对监测排放积分，核对碳平衡且不重复计算回收炉气 | 监测报告；校准；碳化验；放散和治理日志 |
| `cp_refining_inputs` | `medium_low_carbon_refining` | 合金、矿石、还原剂、石灰、氧气和电力 | 秤量、配料单、气表、电表 | 加入质量和成分；氧气；电力；容器身份 | 将每炉或每包记录与精炼生产记录核对 | kg、Nm3、kWh | 每炉或每批记录并按月汇总 | 完整精炼批次 | 生产声明牌号的所有容器 | 汇总路线特定投入并归一化到合格精炼合金 | 秤和仪表校准；证书和化验；炉次日志 |
| `cp_refining_outputs` | `medium_low_carbon_refining` | 精炼合金、炉渣和捕集粉尘 | 钢包秤、残余物秤、实验室化验 | 合金质量和成分；炉渣；各去向粉尘 | 核对各炉次输出、投入炉料和残余物去向 | kg | 每炉或每批记录并按月汇总 | 与精炼投入同期 | 服务于该牌号的全部容器和治理系统 | 汇总输出并核对质量平衡差异 | 秤校准；化验；去向记录 |
| `cp_refining_emissions` | `medium_low_carbon_refining` | 排放颗粒物 | 烟囱测试、连续监测、无组织调查 | 浓度；气体流量；运行时间；集气罩状态 | 采用场址认可方法量化有组织和无组织排放 | kg、mg/Nm3、Nm3 | 按监测计划频次 | 与精炼记录同期 | 所有精炼排放点 | 对浓度和流量按运行时间积分 | 采样报告；检出限；治理设施状态 |
| `cp_finishing_records` | `finishing_and_recovery` | 熔融投入、电力、水、合格产品、回收金属、炉渣、粉尘和废水 | 秤量、产品发运、仪表、实验室和去向记录 | 熔融质量；电力；水；合格干产品；牌号；粒度；回收金属；炉渣；粉尘；废水 | 核对生产、质量验收、库存和发运记录，并实施干质量修正 | kg、kWh、m3 | 按批次或每日记录并按月汇总 | 完整报告期 | 服务于产品的所有精整和回收线 | 汇总合格干产品及全部残余物，将完整前景系统归一化到 1,000 kg | 秤和仪表校准；水分和化验报告；发运和去向记录 |
| `cp_finishing_emissions` | `finishing_and_recovery` | 排放颗粒物 | 烟囱测试和无组织调查 | 浓度；气体流量；运行时间；捕集状态 | 量化浇铸、破碎、筛分和物料处理的有组织与无组织排放 | kg、mg/Nm3、Nm3 | 按监测计划频次 | 与精整记录同期 | 所有精整排放点 | 对监测排放积分并核对运行覆盖率 | 监测报告；校准；治理设施和生产日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground exchanges | 归一化交换量 = 报告期交换量 × 1,000 kg / 合格干基可销售铬铁质量 | 交换量；合格产品质量；产品水分 | 每 1,000 kg 净干产品的交换量 |  |
| `calc_dry_product_mass` | reference product | 干产品质量 = 合格产品净质量 ×（1 − 实测游离水质量分数） | 产品净质量；水分分数 | kg 干基可销售铬铁 | `samr-gbt-5683-2024` |
| `calc_internal_transfer` | internal intermediates | 成对核对供应过程输出和接收过程输入；匹配内部转移在汇总边界上的数量为零，损失仍须显式记录 | 成对转移质量；库存变动；损失记录 | 已核对内部转移及未解释差异 | `eu-jrc-nfm-bref-2017` |
| `calc_furnace_gas_energy` | cleaned furnace gas | 回收炉气能量 = 实测干气体积 × 实测低位热值 | 干气体积；低位热值 | MJ 回收炉气 | `eu-jrc-nfm-bref-2017` |
| `calc_monitored_release` | monitored air emission | 排放质量 = 污染物浓度与干气体流量的时间积分，并实施单位和参考状态换算 | 浓度；气体流量；时间；参考状态 | kg 污染物排放 | `us-epa-ap42-ferroalloy-1986` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | 保留产品规范、批次、铬和碳化验、物理形态、粒度等级及干质量基准。 | 分析证书；采样和水分方法；发运记录 |
| `dq_route_identity` | all processes | 声明实际运行的制备、炉体、精炼、炉气、水和炉渣回收配置；解释每个标记为不适用的条件过程。 | 工艺流程图；设备清单；批次日志 |
| `dq_temporal_alignment` | all exchanges | 投入、输出、排放和生产记录须来自同一报告期；任何代理期间均须说明理由。 | 有日期记录；仪表导出；监测计划 |
| `dq_completeness` | foreground system | 核对服务于产品的全部生产线和排放点，并量化缺失仪表覆盖率和未解释质量平衡差异。 | 覆盖矩阵；质量平衡；异常日志 |
| `dq_background_match` | purchased inputs | 按产品状态、成分、地理、技术和时间选择背景数据集，并披露代理。 | 数据集标识；供应商规范；代理理由 |
| `dq_uuid_status` | all inventory rows | 所有空 Tiangong UUID 均作为未解决身份处理；仅在混合检索和公开 state_code=100 直接读取确认语义、属性、单位、状态、地理和技术适用后方可增加 UUID。 | UUID 审计记录 |
| `dq_range_status` | important flows | 在两个独立、原文已核实且边界相容的来源支持综合之前，使用前景记录且不设外部数值 QA 范围，并保留 manifest 中的证据需求。 | 来源审查和范围综合记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | reference_product | 缺少铬铁牌号、铬和碳含量、生产路线、物理形态、干质量基准或与 `output_ferrochromium` 的链接时，拒绝数据包。 | `cpc-3-0-official-2025`; `samr-gbt-5683-2024` |
| `validation_route` | process_map | 至少要求一条合金生产路线及所有适用的制备、精炼、治理和精整过程；拒绝虚构作业和无解释的条件排除。 | `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986` |
| `validation_atomic_inventory` | process_inventory | 每行须表示一个原子交换，并将电力、燃料、水、原料、废物、回收炉气和每种基本排放分别记录。 | `eu-jrc-nfm-bref-2017` |
| `validation_internal_balance` | internal_transfers | 标记未匹配的已制备炉料、熔融合金、回收金属、炉渣、粉尘或炉气内部转移，并要求解释物料平衡差异。 | `eu-jrc-nfm-bref-2017` |
| `validation_release_control` | emissions_and_residues | 捕集粉尘和炉渣须保持显式；适用时治理后的 CO2、CO 和颗粒物排放须分别报告。 | `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-1986` |
| `validation_allocation` | coproducts_and_waste | 拒绝内部回用的重复抵扣及外供炉气或回收金属的未披露分配；炉渣和粉尘须声明废物/产品身份及去向。 | `eu-jrc-nfm-bref-2017` |
| `validation_uuid_and_range_gaps` | review_readiness | UUID 和独立范围证据未解决期间，本 PCR 保持需审查状态；缺失这些引用不授权使用代理 UUID 或虚构范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景生产数据集；仅在审查和发布后方可成为 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 需要铬铁合金投入的从摇篮到大门产品系统；牌号和地理相容时可用于不锈钢及合金钢生产 |
| allowed_use | 用于已声明铬铁牌号、路线、设施地理、技术、产品状态和报告期；跨场址汇总须透明加权 |
| excluded_use | 金属铬、以硅铬合金为产品的系统、其他铁合金、未经批准扩展的二次残余物回收，或与数据集存在实质差异的牌号/路线/地理 |
| required_metadata | 规范 PCR id；CPC 背景；产品牌号和成分；路线和设备；炉体密闭；炉气去向；水和炉渣管理；参考产品状态；设施地理；期间；分配；背景数据集标识；未解决 UUID 和范围状态 |
| required_quality_disclosure | 仪表和秤量覆盖率；水分和化验方法；监测覆盖及检出限；质量平衡差异；厂内回用；条件过程排除；代理数据集；分配理由；审查限制 |
| update_trigger | 矿石类型、还原剂、牌号、炉体或精炼路线、炉体密闭、炉气去向、治理、水循环、炉渣回收、分配、产品形态、地理或代表性报告期发生变化 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `cpc-3-0-official-2025` | official_guidance | 联合国统计司。CPC 3.0 结构，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-03）。 | CPC 41113 官方产品分类身份。 |
| `eu-jrc-nfm-bref-2017` | official_guidance | 欧盟委员会联合研究中心。Best Available Techniques (BAT) Reference Document for the Non-Ferrous Metals Industries，JRC107041，2017。https://publications.jrc.ec.europa.eu/repository/bitstream/JRC107041/kjna28648enn.pdf（检索日期：2026-09-03）。 | 铬铁牌号、原料、炉料制备、高碳冶炼、中/低碳路线、炉气、炉渣、粉尘、水、能源和精整过程分解；未采用该来源中的数值范围。 |
| `us-epa-ap42-ferroalloy-1986` | official_guidance | 美国环境保护署。AP-42 Section 12.4, Ferroalloy Production，1986-10。https://www.epa.gov/sites/production/files/2020-11/documents/b12s04.pdf（检索日期：2026-09-03）。 | 对电炉和金属热路线、出炉、渣金分离、浇铸、破碎、筛分及空气排放源的独立描述；未采用排放因子或数值范围。 |
| `samr-gbt-5683-2024` | standard | 国家市场监督管理总局、国家标准化管理委员会。GB/T 5683-2024《铬铁》（Ferrochromium）。https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=EA0B1B2339CA6704E035C52D7AD92A3A（检索日期：2026-09-03）。 | 专业中文产品名称、英文对应及产品规范身份；未将合格限值作为经验范围。 |
