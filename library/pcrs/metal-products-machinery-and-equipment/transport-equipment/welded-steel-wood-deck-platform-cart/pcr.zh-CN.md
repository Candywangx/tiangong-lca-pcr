---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.welded-steel-wood-deck-platform-cart
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 焊接钢架木质平台人力四轮平板车制造

## 1. 范围与适用性

候选自编方法用于新造完整人力推动敞式平板车，具有焊接钢管型钢车架扶手、带山毛榉纹理的完成木质人造板平台、两只带轮锁TPE回转脚轮与两只TPE定向脚轮及球轴承轮毂。从接收钢材库存成品平台脚轮模块开始，纳入真实下料成形车架焊接喷丸预处理无溶剂粉末涂装，再装配受控完整车验收校准空车净称重放行。制造商fetra2500仅为配置示例，不是必需几何额定载荷或工艺配方。

窄于CPC49930。排除两轮手推车独轮车货架梯式折叠车液压托盘车牵引工业挂车铝不锈钢塑料架路线四回转无轮锁变体动力推进及物料搬运运营服务。外购完整车架车辆装配路线省去材料成形焊接，不能隐含复用本制造门点。不仅按分类提升旧产品脚手架身份。科学审查待完成；翻译对齐自动检查不批准方法学。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.welded-steel-wood-deck-platform-cart |
| classification_refs | CPC3.0 49930；更窄，不声称已接受映射 |
| covered_products | 声明两回转两定向轮锁结构的完整空载焊接钢架木质人造板平台人力四轮车 |
| excluded_products | 其他车架平台脚轮系列、托盘举升动力车辆、未完成套件运行运输 |
| representative_product | fetra2500制造商基本配置；须真实工单物料库存化学规格 |
| production_route | 钢材下料成形→车架扶手焊接→喷丸粉末涂装固化→木质平台脚轮装配→受控验收空车净称重放行 |
| market_state | 声明制造放行门点新造完整验收空车 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 验收完整焊接钢架木质平台人力四轮平板车 |
| How much | 1 kg验收完整空车配置净质量 |
| How well | 按真实受控制造验收放行图纸物料完整脚轮轮锁平台配置 |
| How long or cycle | 一个制造验收周期，无寿命吨公里搬运服务 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收完整焊接钢架木质平台人力四轮平板车 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造者型号序列图纸版次；人力推动无动力敞式平台，焊接钢管型钢车架扶手；真实库存牌号截面制造路线；带山毛榉纹理的完成木质人造板平台及实际板组成；两只带轮锁TPE回转脚轮两只TPE定向脚轮、球轴承轮毂供应包含；喷丸粉末配方安全数据表实际固化热路线；完整空车验收实测净M kg及cp_mass秤校准安装配置包装载荷排除；声明额定载荷真实受控验收，不用目录质量；实际场址时期外包门点、适用时保护气化石固化燃料组成、上游供应废物接收 |

在数据集元数据或等效可寻源字段声明每项必需限定信息。等质量不建立同载荷额定值滚动轮锁性能搬运服务。不用载荷试验负载目录质量替代实测空车净M。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 | kg | M = 同一配置的一台完整设备的验收净质量,单位 kg; 使用 cp_mass 采集 M。 |
| `exchange_mass` | all kg inventory rows | 质量 | kg | 按kg独测净收用退物理量实际废物排放。按件平台脚轮统计须实测真实单件质量供应包含。以后采用非质量属性须保留原属性明确实测换算，不改写公开身份属性。 |
| `electric_energy` | forming_electricity; welding_electricity; finishing_electricity; assembly_electricity; acceptance_electricity | 净热值 | MJ | 采集电表kWh，用1 kWh =3.6 MJ换算，保留真实公开能量属性过程归属。上游供应方技术电压地域独立披露。 |
| `gas_volume` | natural_gas | 体积 | m3 | 保留公开体积引用。计量实际管道气体积压力温度组成体积约定；账单至引用状态任何换算用实际有记录供应测量。不从辅助质量均值或通用示例推断密度。 |
| `mass_configuration` | cp_mass | 质量 | kg | 称量完整空载验收车，含安装扶手车架平台四脚轮轮锁紧固件保留粉末涂层。移除货物试验负载临时夹具运输包装散装选配复用托盘。记录精确基本配置；折叠拆卸出货须独立核对完整构件，不能用包装总重。 |
| `mass_record_origin` | cp_mass | 质量 | kg | 用真实序列验收完整车校准平台秤读数，保留校准零点皮重不确定性签署配置验收原件。制造商目录质量额定载荷或10年保证均不是实测M或寿命因子。缺原件仍为量值采集缺口。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收钢管型钢库存、完成木质板平台与完整脚轮模块 |
| starting_condition_role | foreground_input_boundary |
| product_classification_scope | CPC49930中证据选择焊接钢架木质平台人力四轮平板车子集 |
| recursive_input_rule | 不递归将炼钢钢管轧制板材脚轮轮胎轴承制造纳入本库存至整车门点 |
| upstream_dataset_requirement | 更广供应链声明前关联真实兼容库存成品平台脚轮配制消耗品电力气供应运输废物处理数据集 |
| disclosure | 仅前景库存加工干法喷丸粉末涂层装配验收放行；披露真实外包范围排除 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_conditionals` | welding; finishing; acceptance | 实际填充气体磨料化学热源排放保护须前景证据与精确独立交换。必需粉末涂装不表示化石燃烧器水性化学前处理VOC废水。不从产品载荷额定值推断例行试验负载或通用试验力。 | `fetra-product`; `fetra-quality` |
| `boundary_completeness` | dataset | 本前景不是完整摇篮到工厂门。完整量值覆盖声明前须原子化增列每项实际遗漏指定输入外部热气服务化学废物排放，披露真实未知缺上游关联，不写合并类别或虚构零。车辆运行搬运门点后交付排除。 |  |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `forming` | 钢材下料成形 | required | 本四轮人力平板车焊接钢管型钢车架在门点内实际成形。 | foreground | 每台验收完整设备按M归一化 |
| `welding` | 车架扶手焊接 | required | 实际钢管型钢焊接结构，不是外购完整车架车辆或仅螺栓车架路线。 | foreground | 每台验收完整设备按M归一化 |
| `finishing` | 喷丸预处理与无溶剂粉末涂装 | required | 场址或独立披露纳入外包方实际声明喷丸预处理粉末涂装钢车架。 | foreground | 每台验收完整设备按M归一化 |
| `assembly` | 木质板平台与脚轮装配 | required | 一块完整木质人造板平台、两只带锁TPE回转脚轮及两只TPE定向脚轮、人力推动扶手。 | foreground | 每台验收完整设备按M归一化 |
| `acceptance` | 完整车验收净称重放行 | required | 声明净交付配置实际制造完整平板车。 | foreground | 每台验收完整设备按M归一化 |

下料成形进入焊接车架，再真实喷丸粉末涂层、供应平台脚轮装配、序列验收净称重放行。必需阶段不使每项条件消耗或排放必然发生。声明真实工位外包顺序材料库存平衡返工供应模块包含。

### 过程：钢材下料成形（`forming`）

接收声明钢管型钢库存，锯切定长并成形实际扶手车架几何，存在时按图纸制孔。炼钢钢管型钢轧制在上游。制造商列明自动锯管弯曲成形设备，不推断精确牌号必需润滑剂或废料率。

#### 输入

##### 产品流

###### 人力车架用可焊钢管库存（`steel_tube`）

仅本过程边界一个实际供应转移物理项；核验规格称量净领用减退回，核对库存供应包含，记录接收方状态。实际缺席条件交换记录为不适用，不假定通用。

- 选定流：人力车架用可焊钢管库存
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_forming`
- 来源：`fetra-product`; `fetra-quality`

###### 人力车架用可焊型钢库存（`steel_profile`）

仅本过程边界一个实际供应转移物理项；核验规格称量净领用减退回，核对库存供应包含，记录接收方状态。实际缺席条件交换记录为不适用，不假定通用。

- 选定流：人力车架用可焊型钢库存
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_forming`
- 来源：`fetra-product`; `fetra-quality`

###### 配制钢材锯切切削油（`cutting_oil`）

仅本过程边界一个实际供应转移物理项；核验规格称量净领用减退回，核对库存供应包含，记录接收方状态。实际缺席条件交换记录为不适用，不假定通用。

- 选定流：配制钢材锯切切削油
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_forming`
- 来源：`fetra-product`; `fetra-quality`

###### 前景交流电使用（`forming_electricity`）

实测使用点实际独立可归属交流电量。保留电表kWh并乘3.6 MJ/kWh；公开前景用电身份未特指技术供应方电压地域，须独立记录真实供电兼容上游关联。德国制造商示例不证明中国电网身份。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_forming`
- 来源：`fetra-product`; `fetra-quality`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 转移处理的钢车架库存下料钢余料（`offcut`）

仅本过程边界一个实际供应转移物理项；核验规格称量净领用减退回，核对库存供应包含，记录接收方状态。实际缺席条件交换记录为不适用，不假定通用。

- 选定流：转移处理的钢车架库存下料钢余料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_forming`
- 来源：`fetra-product`; `fetra-quality`

###### 转移处理的钢材锯切钢切屑（`chips`）

仅本过程边界一个实际供应转移物理项；核验规格称量净领用减退回，核对库存供应包含，记录接收方状态。实际缺席条件交换记录为不适用，不假定通用。

- 选定流：转移处理的钢材锯切钢切屑
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_forming`
- 来源：`fetra-product`; `fetra-quality`

##### 基本流


### 过程：车架扶手焊接（`welding`）

按现行图纸受控焊接规程焊接成形钢车架扶手接头。制造商支持焊接机器人，不建立通用焊接方法或保护气配比。填充丝氩气二氧化碳气行仅各自实际消耗时适用，声明真实规程牌号实测混合份额。复用夹具不是车体构件。

#### 输入

##### 产品流

###### 实心钢焊接填充丝（`wire`）

仅本过程边界一个实际供应转移物理项；核验规格称量净领用减退回，核对库存供应包含，记录接收方状态。实际缺席条件交换记录为不适用，不假定通用。

- 选定流：实心钢焊接填充丝
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_welding`
- 来源：`fetra-product`; `fetra-quality`

###### 氩保护气（`argon`）

仅本过程边界一个实际供应转移物理项；核验规格称量净领用减退回，核对库存供应包含，记录接收方状态。实际缺席条件交换记录为不适用，不假定通用。

- 选定流：氩保护气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_welding`
- 来源：`fetra-product`; `fetra-quality`

###### 二氧化碳保护气（`shield_co2`）

仅本过程边界一个实际供应转移物理项；核验规格称量净领用减退回，核对库存供应包含，记录接收方状态。实际缺席条件交换记录为不适用，不假定通用。

- 选定流：二氧化碳保护气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_welding`
- 来源：`fetra-product`; `fetra-quality`

###### 前景交流电使用（`welding_electricity`）

实测使用点实际独立可归属交流电量。保留电表kWh并乘3.6 MJ/kWh；公开前景用电身份未特指技术供应方电压地域，须独立记录真实供电兼容上游关联。德国制造商示例不证明中国电网身份。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_welding`
- 来源：`fetra-product`; `fetra-quality`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 转移处理的捕集钢焊烟残余物（`captured_fume`）

仅本过程边界一个实际供应转移物理项；核验规格称量净领用减退回，核对库存供应包含，记录接收方状态。实际缺席条件交换记录为不适用，不假定通用。

- 选定流：转移处理的捕集钢焊烟残余物
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_welding`
- 来源：`fetra-product`; `fetra-quality`

##### 基本流

###### 氩，排向空气（未指定）（`weld_argon_air`）

仅有记录保护气过程实际实测CAS7440-37-1氩向即时未指定空气释放。核对独立气体组成退回回收出口平衡；不替代空气资源长期或城市空气身份。有记录气平衡须真实批次组分质量去向，不假定整个供气混合物为氩。

- 选定流：氩 `fe0acd60-3ddc-11dd-a350-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_welding`
- 来源：`fetra-product`; `fetra-quality`

###### 二氧化碳（化石源）保护气释放，排向空气（未指定）（`weld_co2_air`）

仅本焊接阶段实际化石源CO2 CAS124-38-9保护气向即时未指定空气释放。须真实供应批次化石生物来源及实测出口或有记录组分输入退回回收去向平衡。不把发酵CO2判为化石，不与固化燃烧器合并。未知来源保留量值身份审查缺口。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_welding`
- 来源：`fetra-product`; `fetra-quality`


### 过程：喷丸预处理与无溶剂粉末涂装（`finishing`）

按实际喷丸路线准备钢表面，施涂指定无溶剂粉末并完成真实固化。原件规定喷丸无溶剂粉末，不建立树脂化学磨料组成温度热源排放量。钢砂示例须实际磨料证据；粉末为一种成品配方，须供应安全数据表批次。天然气燃烧排放仅实际门点内燃气加热时适用，不是粉末涂装必需交换。不从本干法路线推断液洗磷化铬溶剂VOC或废水。

#### 输入

##### 产品流

###### 钢砂喷丸磨料（`steel_grit`）

仅本过程边界一个实际供应转移物理项；核验规格称量净领用减退回，核对库存供应包含，记录接收方状态。实际缺席条件交换记录为不适用，不假定通用。

- 选定流：钢砂喷丸磨料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finishing`
- 来源：`fetra-product`; `fetra-quality`

###### 配制无溶剂钢车架粉末涂料（`powder`）

仅本过程边界一个实际供应转移物理项；核验规格称量净领用减退回，核对库存供应包含，记录接收方状态。实际缺席条件交换记录为不适用，不假定通用。

- 选定流：配制无溶剂钢车架粉末涂料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finishing`
- 来源：`fetra-product`; `fetra-quality`

###### 供应平板车粉末固化的化石天然气（`natural_gas`）

仅实际固化门点内燃烧器耗用、压缩管道交付消费端且符合实际适用燃气标准的化石气态天然气。保留公开体积引用属性真实气表压力温度组成体积约定；任何修正标准体积须供应方真实实测换算，不假定密度标准状态。公开辅助质量均值不是密度。不替代LNG沼气原始开采甲烷或外购热；须披露热路线真实量值。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finishing`
- 来源：`fetra-product`; `fetra-quality`

###### 前景交流电使用（`finishing_electricity`）

实测使用点实际独立可归属交流电量。保留电表kWh并乘3.6 MJ/kWh；公开前景用电身份未特指技术供应方电压地域，须独立记录真实供电兼容上游关联。德国制造商示例不证明中国电网身份。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finishing`
- 来源：`fetra-product`; `fetra-quality`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 转移处理的废钢砂喷丸残余物（`spent_grit`）

仅本过程边界一个实际供应转移物理项；核验规格称量净领用减退回，核对库存供应包含，记录接收方状态。实际缺席条件交换记录为不适用，不假定通用。

- 选定流：转移处理的废钢砂喷丸残余物
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finishing`
- 来源：`fetra-product`; `fetra-quality`

###### 转移处理的未固化粉末涂料残余物（`waste_powder`）

仅本过程边界一个实际供应转移物理项；核验规格称量净领用减退回，核对库存供应包含，记录接收方状态。实际缺席条件交换记录为不适用，不假定通用。

- 选定流：转移处理的未固化粉末涂料残余物
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finishing`
- 来源：`fetra-product`; `fetra-quality`

##### 基本流

###### 二氧化碳（化石源），排向空气（未指定）（`co2_air`）

仅有记录门点内燃气固化燃烧器实际CAS124-38-9向即时未指定空气释放。按校准出口浓度流量真实运行期间分测单一物质，保留单位检出限不确定性。CO2须实际化石碳来源；实测化石碳平衡须真实组成氧化产物去向。NO不是NO2/N2O或总NOx。不假定必需燃烧器排放量，不替代焊烟颗粒VOC。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finishing`
- 来源：`fetra-product`; `fetra-quality`

###### 一氧化氮，排向空气（未指定）（`no_air`）

仅有记录门点内燃气固化燃烧器实际CAS10102-43-9向即时未指定空气释放。按校准出口浓度流量真实运行期间分测单一物质，保留单位检出限不确定性。CO2须实际化石碳来源；实测化石碳平衡须真实组成氧化产物去向。NO不是NO2/N2O或总NOx。不假定必需燃烧器排放量，不替代焊烟颗粒VOC。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finishing`
- 来源：`fetra-product`; `fetra-quality`

###### 二氧化氮，排向空气（未指定）（`no2_air`）

仅有记录门点内燃气固化燃烧器实际CAS10102-44-0向即时未指定空气释放。按校准出口浓度流量真实运行期间分测单一物质，保留单位检出限不确定性。CO2须实际化石碳来源；实测化石碳平衡须真实组成氧化产物去向。NO不是NO2/N2O或总NOx。不假定必需燃烧器排放量，不替代焊烟颗粒VOC。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finishing`
- 来源：`fetra-product`; `fetra-quality`


### 过程：木质板平台与脚轮装配（`assembly`）

安装独供完成木质人造板平台与山毛榉纹理表面、四只完成脚轮模块真实螺栓轮锁。不将其断言为实心山毛榉胶合板中纤板或刨花板；身份背景关联前须记录真实供应板材组成。按供货脚轮模块包含轮胎轮毂球轴承轮锁，不重复单列轮胎轴承。无动力推进液压升降货架折叠机构。

#### 输入

##### 产品流

###### 完成带山毛榉纹理表面的木质人造板平台板（`deck`）

仅本过程边界一个实际供应转移物理项；核验规格称量净领用减退回，核对库存供应包含，记录接收方状态。实际缺席条件交换记录为不适用，不假定通用。

- 选定流：完成带山毛榉纹理表面的木质人造板平台板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：`fetra-product`

###### 完成带球轴承轮毂轮锁的TPE轮胎回转脚轮（`swivel_castor`）

仅本过程边界一个实际供应转移物理项；核验规格称量净领用减退回，核对库存供应包含，记录接收方状态。实际缺席条件交换记录为不适用，不假定通用。

- 选定流：完成带球轴承轮毂轮锁的TPE轮胎回转脚轮
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：`fetra-product`

###### 完成带球轴承轮毂的TPE轮胎定向脚轮（`fixed_castor`）

仅本过程边界一个实际供应转移物理项；核验规格称量净领用减退回，核对库存供应包含，记录接收方状态。实际缺席条件交换记录为不适用，不假定通用。

- 选定流：完成带球轴承轮毂的TPE轮胎定向脚轮
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：`fetra-product`

###### 钢制螺纹平板车装配螺栓（`bolt`）

仅本过程边界一个实际供应转移物理项；核验规格称量净领用减退回，核对库存供应包含，记录接收方状态。实际缺席条件交换记录为不适用，不假定通用。

- 选定流：钢制螺纹平板车装配螺栓
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：`fetra-product`

###### 前景交流电使用（`assembly_electricity`）

实测使用点实际独立可归属交流电量。保留电表kWh并乘3.6 MJ/kWh；公开前景用电身份未特指技术供应方电压地域，须独立记录真实供电兼容上游关联。德国制造商示例不证明中国电网身份。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：`fetra-product`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流


### 过程：完整车验收净称重放行（`acceptance`）

按实际受控验收规程核对现行图纸焊缝涂层平台紧固完整性脚轮方向自由滚动回转锁功能。任何试验负载滚动测试须实际批准原件，不虚构通用500kg阈值。用校准设备称量验收完整空车，移除试验载荷临时夹具。放行必需；一次性保护仅真实使用时适用，与净M独立。

#### 输入

##### 产品流

###### 完成平板车运输瓦楞纸箱（`cardboard`）

仅本过程边界一个实际供应转移物理项；核验规格称量净领用减退回，核对库存供应包含，记录接收方状态。实际缺席条件交换记录为不适用，不假定通用。

- 选定流：完成平板车运输瓦楞纸箱
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`fetra-product`; `fetra-quality`

###### 非黏性非泡沫低密度聚乙烯保护包装薄膜（`film`）

仅实际消耗非黏性非泡沫且未增强未层压未支撑LDPE薄膜，核验实际供应规格实测净量。其他结构须独立身份。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`fetra-product`; `fetra-quality`

###### 前景交流电使用（`acceptance_electricity`）

实测使用点实际独立可归属交流电量。保留电表kWh并乘3.6 MJ/kWh；公开前景用电身份未特指技术供应方电压地域，须独立记录真实供电兼容上游关联。德国制造商示例不证明中国电网身份。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`fetra-product`; `fetra-quality`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收完整焊接钢架木质平台人力四轮平板车（`finished_machine`）

验收完整空车配置固定1kg，包括车架粉末涂层平台扶手四脚轮必需轮锁紧固件。排除搬运货物试验载荷夹具运输包装散装选配复用托盘。实测净M，不用载荷能力目录重量。

- 选定流：验收完整焊接钢架木质平台人力四轮平板车
- 流属性/单位：质量 / kg
- 数量规则：1 kg
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`fetra-product`; `fetra-quality`

##### 废物流

##### 基本流


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared resources | 按工单批次工位细分分表避免分配。剩余共用锯焊喷丸固化负荷仅按有证明因果实测有效机时负荷或兼容实际涂覆面积固化配方分配，保留分子分母敏感性。不同结构不按台均分或无物理因果名义载荷质量驱动。 | `ghg-allocation` |
| `allocation_recovery` | offcut; chips; spent_grit; waste_powder | 区分库存退回厂内磨料粉末循环转移处理真实联产品。循环钢砂粉末不重复计新原料；残余废物实测一次。不自动给避免钢材抵扣或按出售判联产品。审查联产品处理接收供应边界独立记录。 | `ghg-allocation` |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | reference product | weighing_record | 序列；配置；验收净质量 M；秤零皮校准不确定性；空车安装物料；排除试验负载夹具包装；验收设备数量签名 | 使用经校准的秤称量已验收的完整设备,排除运输包装；核对同一配置和验收记录。 | kg | 每个验收序列变更配置 | 实际制造报告期 | 声明制造场址 | 每台验收净质量 | 原始秤校准物料签署验收 |
| `cp_forming` | `forming` | inventory rows | production_record | 工单序列；配置；真实物品牌号安全数据表；净领退库存循环；脚轮平台供应包含；原单位；同一配置的验收设备数量；仪表校准；实际气体压力温度组成体积约定；电力kWh；排放物质浓度出口流量期间；分配分子分母 | 记录图纸库存牌号尺寸、实测净领退、切长余料切屑转移实际独用润滑剂分表能耗。 采集kg物品废物物质净量、电力按3.6 MJ/kWh、实际管道气按注明状态m3。条件缺席与未知测量分记。仅用真实有记录库存退回修正因果归属。 | 逐行kg；MJ；m3 | 每工单批次实际实测过程期 | 实际报告期 | 声明工厂独立披露纳入外包方 | 可归属交换数量 / 验收设备数量 | 原始领用库存仪表安全数据表物料试验废物因果分配证据 |
| `cp_welding` | `welding` | inventory rows | production_record | 工单序列；配置；真实物品牌号安全数据表；净领退库存循环；脚轮平台供应包含；原单位；同一配置的验收设备数量；仪表校准；实际气体压力温度组成体积约定；电力kWh；排放物质浓度出口流量期间；分配分子分母 | 保留焊缝图规程检验、称量焊丝领退、实测分项保护气质量组成真实捕集钢焊烟残余电耗。 采集kg物品废物物质净量、电力按3.6 MJ/kWh、实际管道气按注明状态m3。条件缺席与未知测量分记。仅用真实有记录库存退回修正因果归属。 | 逐行kg；MJ；m3 | 每工单批次实际实测过程期 | 实际报告期 | 声明工厂独立披露纳入外包方 | 可归属交换数量 / 验收设备数量 | 原始领用库存仪表安全数据表物料试验废物因果分配证据 |
| `cp_finishing` | `finishing` | inventory rows | production_record | 工单序列；配置；真实物品牌号安全数据表；净领退库存循环；脚轮平台供应包含；原单位；同一配置的验收设备数量；仪表校准；实际气体压力温度组成体积约定；电力kWh；排放物质浓度出口流量期间；分配分子分母 | 分项采集真实磨料粉末净领用回收循环废物转移涂覆面积配方实际固化热能计量指定涂层验收，适用时校准分物质燃烧器排放。 采集kg物品废物物质净量、电力按3.6 MJ/kWh、实际管道气按注明状态m3。条件缺席与未知测量分记。仅用真实有记录库存退回修正因果归属。 | 逐行kg；MJ；m3 | 每工单批次实际实测过程期 | 实际报告期 | 声明工厂独立披露纳入外包方 | 可归属交换数量 / 验收设备数量 | 原始领用库存仪表安全数据表物料试验废物因果分配证据 |
| `cp_assembly` | `assembly` | inventory rows | production_record | 工单序列；配置；真实物品牌号安全数据表；净领退库存循环；脚轮平台供应包含；原单位；同一配置的验收设备数量；仪表校准；实际气体压力温度组成体积约定；电力kWh；排放物质浓度出口流量期间；分配分子分母 | 实测平台脚轮螺栓收料安装净质量、板牌号表面、脚轮方向轮锁安排模块包含真实序列图纸装配检查。 采集kg物品废物物质净量、电力按3.6 MJ/kWh、实际管道气按注明状态m3。条件缺席与未知测量分记。仅用真实有记录库存退回修正因果归属。 | 逐行kg；MJ；m3 | 每工单批次实际实测过程期 | 实际报告期 | 声明工厂独立披露纳入外包方 | 可归属交换数量 / 验收设备数量 | 原始领用库存仪表安全数据表物料试验废物因果分配证据 |
| `cp_acceptance` | `acceptance` | inventory rows | production_record | 工单序列；配置；真实物品牌号安全数据表；净领退库存循环；脚轮平台供应包含；原单位；同一配置的验收设备数量；仪表校准；实际气体压力温度组成体积约定；电力kWh；排放物质浓度出口流量期间；分配分子分母 | 采集序列配置批准脚轮制动检查、实际施加时的实测试验载荷、秤校准物料净读数验收台数实际独耗包装净质量退回。 采集kg物品废物物质净量、电力按3.6 MJ/kWh、实际管道气按注明状态m3。条件缺席与未知测量分记。仅用真实有记录库存退回修正因果归属。 | 逐行kg；MJ；m3 | 每工单批次实际实测过程期 | 实际报告期 | 声明工厂独立披露纳入外包方 | 可归属交换数量 / 验收设备数量 | 原始领用库存仪表安全数据表物料试验废物因果分配证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

先按每行单位，从原始实测批量除同一配置实际验收设备数量及实测因果分配，取得每台验收完整设备可归属净q_item，明确拒收返工退回相同范围，再除同一实际实测M。等同设备可用交换合计除实测验收净质量之和；实质不同车架平台脚轮涂层热路线分开。每kg气体体积电力MJ不是每kg材料质量。不虚构通用密度收率经验质量寿命。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | 按mass_record_origin和mass_configuration真实校准完整空车称重签署物料验收。拒载荷试验负载运输总重。缺实际M仍为量值缺口。 | 实际序列秤校准配置验收 |
| `quality_materials` | forming; welding; finishing; assembly | 核验钢管型钢牌号截面焊接消耗气体规程磨料组成粉末树脂安全数据表固化路线真实木质板类型完成脚轮包含。山毛榉纹理不证明实心山毛榉胶合板。原子化增列实际遗漏交换，循环粉末安装脚轮组分一次计入。 | 实际图纸物料安全数据表供应实测库存原件 |
| `quality_shield_balance` | argon; shield_co2; weld_argon_air; weld_co2_air | 实际使用这些保护气时，用原始批次组成实测去向核对分项组分领退回收即时空气释放。CO2另须化石生物来源；未知不能标化石。不假定总混合气为氩，不与燃烧器合并。缺真实接收排放气平衡阻止量值完成。 | 实际气批次供应来源、校准领退回收出口去向原件 |
| `quality_heat_emissions` | natural_gas; co2_air; no_air; no2_air | 仅实际门点内化石燃气热及分测即时未指定空气物质适用。不替代外购热甲烷资源NOx N2O职业接触或通用燃烧因子。保留校准出口换算化石组成真实治理检出限。 | 实际燃烧器仪表气体安全数据表分物质实测出口证据 |
| `quality_evidence` | dataset | 披露真实场址时期门点外包覆盖不确定性全部量值身份上游缺口条件缺席。经验质量范围须实际校准原件或独立兼容核验原件。制造商产品工序网页不提供工厂观测或科学批准。 | 来源真实采集缺口原件 |


## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | finished_machine; cp_mass | 核验人力无动力焊接钢架木质板两回转两定向TPE轮锁配置及完整空车验收实际正净M，固定输出1kg。拒其他车辆结构载荷运营服务参考替代。 | `fetra-product` |
| `validate_rows` | all inventory rows | 核验一个实际化学物理身份方向类型、公开引用属性单位正式中文名来源路线介质合法小写关联规则协议。保留天然气体积电力能量。未解决身份保留缺口；机械通过不证明科学适用性。 |  |
| `validate_balance` | all processes | 核对库存下料焊接增量捕集废物磨料粉末输入循环保留废物成品平台脚轮真实净产品。量值完成须实际M及全部真实交换；完整摇篮到工厂门另须兼容上游处理数据集。 | `ghg-allocation` |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置焊接钢架木质平台人力车前景制造 |
| downstream_use | secondary_dataset；background_dataset须合格审查兼容上游关联 |
| allowed_use | 声明兼容车架平台脚轮涂层制造、实际净M门点 |
| excluded_use | 整个CPC49930、其他车辆车架路线、液压动力搬运运行无依据全生命周期 |
| required_metadata | 制造者型号序列图纸版次；人力推动无动力敞式平台，焊接钢管型钢车架扶手；真实库存牌号截面制造路线；带山毛榉纹理的完成木质人造板平台及实际板组成；两只带轮锁TPE回转脚轮两只TPE定向脚轮、球轴承轮毂供应包含；喷丸粉末配方安全数据表实际固化热路线；完整空车验收实测净M kg及cp_mass秤校准安装配置包装载荷排除；声明额定载荷真实受控验收，不用目录质量；实际场址时期外包门点、适用时保护气化石固化燃料组成、上游供应废物接收 |
| required_quality_disclosure | 真实数量M校准库存模块包含树脂磨料热气条件实测排放分配经验质量身份上游缺口 |
| update_trigger | 车架牌号几何平台组成脚轮轮锁粉末喷丸焊热路线供应包含实际秤配置门点场址时期变化 |


## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fetra-product` | literature | [fetra Open cart2500](https://www.fetra.com/carts/open_cart-2500) | HTML产品信息技术数据及变体背景：焊接钢管型钢粉末涂层木质人造板山毛榉纹理平台两回转两定向TPE脚轮球轴承轮毂回转轮锁。仅基本结构；选配尺寸载荷额定值不设通用配方试验或净实测M。不声称实木胶合板组成。 |
| `fetra-quality` | literature | [fetra Quality and production](https://www.fetra.com/quality) | HTML完美工艺优良加工卓越涂层：自动锯钢管弯曲成形焊接机器人喷丸预处理无溶剂粉末涂装。制造商路线背景，不是精确库存填充配比磨料树脂热源固化因子实测量或10年寿命。 |
| `ghg-allocation` | official_guidance | [WRI/WBCSD Product Life Cycle Accounting and Reporting Standard,2011](https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf) | 印刷63/PDF65表9.1至9.2：仅历史避免分配细分潜在物理关系层次。须真实实测前景因果驱动，不推断平板车数值因子或当前法规义务。 |
