---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.hay-tedding-raking-and-handling-machinery
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 牧草摊晒、搂集和成条作业机械


## 1. 范围与适用性

本 PCR 覆盖拖拉机悬挂式或牵引式摊晒机、旋转式或轮式搂草机，以及将已割散状饲草重新排列成草条的非切割机械（含摊晒搂草组合机）的工厂制造。机械处理仅限该作业中的草料处理，不包括储存或运输。排除割草、割草压扁机、打捆机、裹包机、青贮收获机、饲草运输车、拖拉机、单售替换零部件、作物生产、田间使用、维护和报废。代表性路线采购成品弹齿和传动组件，按厂内实际情况制造结构件、进行适用的涂装、装配所配置机器并在工厂试验。KUHN 和 KRONE 资料提供配置实例，不确立通用物料清单、必需制造路线、重量或寿命。制造商作业性能声明不定义本制造参考。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.hay-tedding-raking-and-handling-machinery |
| classification_refs | CPC 3.0 44124; 候选的较窄语义范围；不声明已接受的映射 |
| covered_products | 完整摊晒机、旋转式和轮式搂草机、摊晒搂草组合机及非切割成条处理机械 |
| excluded_products | 割草机、打捆机、裹包机、青贮收获机、运输车、拖拉机和单售零部件 |
| representative_product | 一种指定型号和配置的验收合格完整旋转摊晒机 |
| production_route | 采购成品组件；按实际情况制造结构件和涂装；装配及工厂验收 |
| market_state | 工厂发运边界的完整验收机器；包含已安装组件，净质量不含运输包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造具备散状已割饲草摊晒或成条能力的配置明确机器；不提供量化田间服务。 |
| How much | 验收合格完整机器的 1 kg 制造份额；仅可按同一配置的实测净质量 M 放大。 |
| How well | 符合已声明工厂验收：型号、作业幅宽、弹齿和转子排列、挂接、传动、防护罩和已安装选件。等质量不代表等田间能力。 |
| How long or cycle | 一次工厂制造交付；不假定年限、作业公顷、作物产量或运行小时。 |
| reference_flow_link | `finished_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 其他打草机械 `6d11140d-35b7-498d-9c30-e0b2dfdf63f8` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；摊晒或搂草功能；作业幅宽；转子或搂草轮数量及弹齿设计；悬挂和牵引状态；PTO 或地轮传动；包含的齿轮箱；轮胎；液压和电气选件；防护罩；供货组件完整性；验收净质量 M；场址；期间；交付边界；包装 |

在数据包中声明全部必需限定信息。对验收合格的完整配置实测 M，排除拖拉机、散装备件和运输包装；目录质量不能代替称重记录。本参考是制造归一化单位，不是比较牧草作业服务的功能单位。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `energy_preservation` | electricity_fabrication; electricity_finishing; electricity_assembly | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保持电能计量；保留表计 kWh，并使用精确等式 1 kWh = 3.6 MJ。不得将能量换算为质量。三项选定流均为低于 1 kV 的用户端供电。 |
| `water_property` | tap_water; groundwater | 自来水为质量；地下水为体积 | kg; m3 | 外供自来水是以质量为基准的产品；仅在保留密度证据时转换体积读数。地下水取水保持 m3。不得以废水或外供水替代资源取水。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 指定原料及成品组件交付整机工厂；披露实际来料状态、供应商边界及运输。 |
| starting_condition_role | 前景制造模块的投入；上游生产由单独链接的数据集表示。 |
| product_classification_scope | CPC 3.0 44124 中的非切割摊晒、搂草及成条处理；分类为上下文，不是身份。 |
| recursive_input_rule | 同类别外购完整机器作为独立投入并链接供应商数据集，不递归重复本前景；将再使用或再制造披露为不同路线。 |
| upstream_dataset_requirement | 匹配供应商产品状态、组件完整性、材料等级和电力电压及地区；披露缺失链接，避免重复计入组件所含材料。 |
| disclosure | 声明工厂边界、全部实际工序、外包作业、包装、运输及间接活动分配。只有证明兼容的上游和处理及运输链接完整后，才可称为完整摇篮到工厂门数据。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory` | factory_gate | 采集来料检验、厂内切割/成形/钻孔/焊接、适用的清洗/涂装/固化、组件安装、调整、返工、工厂试验和验收前发运保护。仅纳入 cp_configuration 支持的实际工序；田间使用及作物生产在边界外。 |  |
| `boundary_purchased` | purchased_components | 外购成品弹齿和齿轮箱包含上游生产。若厂内制造，则以逐项材料及工序交换替换成品组件投入，并保留热处理及涂装证据。 | `kuhn-hay-parts`; `krone-vendro` |
| `boundary_expand` | actual_route | 这些卡片是有记录路线的初始化，不是完整通用物料清单。实际存在时，将每种原料等级、外购转子、轮辋、螺母、软管、阀、皮带、清洗化学品、冷却液、燃料、废物和实测排放分别增列为原子行。缺失实际交换属于完整性缺口，不是零。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | 机架和结构件制造 | conditional | 本配置在厂内进行切割、成形、钻孔、机加工或焊接 | 前景制造；内部转移保持在组合工厂模块内部 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `finishing` | 表面预处理和粉末涂装 | conditional | 厂内进行表面预处理或粉末涂装；采用时为电固化路线 | 前景制造；内部转移保持在组合工厂模块内部 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `assembly` | 配置装配和工厂验收 | required | 每台验收合格完整机器 | 前景制造；内部转移保持在组合工厂模块内部 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `packout` | 工厂发运保护 | conditional | 在本工厂交付边界施加包装保护 | 前景制造；内部转移保持在组合工厂模块内部 | 每 1 kg 参考流；采集基准为每台验收成品机器 |

下列工序台账仅对所声明工厂实际进行的工序执行。外购成品组件替代其上游工序；在制品转移在内部核对。

| 工序 | 阶段 | 前景采集及纳入条件 |
| --- | --- | --- |
| 收货和检验 | fabrication; assembly | 记录供应商组件或原料状态、运输及收货损失；领用前追溯至配置。 |
| 切割 | fabrication | 厂内进行时，记录板管领用、切割用电及称重边角料；保留排料图。 |
| 折弯和成形 | fabrication | 厂内进行时，追溯坯件成形，记录设备用电及不合格件并与切割区分。 |
| 钻孔和机加工 | fabrication | 厂内进行时，记录工时、用电、切屑及每种实际切削液配方；不假定干加工。 |
| 焊接和打磨 | fabrication | 厂内进行时，记录焊接路线、各焊丝及气体投入、能耗、返工、收集粉尘及仅经监测的空气排放。 |
| 清洗和预处理 | finishing | 厂内进行时，区分干式预处理和湿式清洗；记录各试剂、水源、换槽及废物去向。 |
| 粉末施涂和固化 | finishing | 厂内进行时，保留涂料配方、粉末领用及回收、固化能耗和固体过喷料；其他涂装另列交换。 |
| 装配和调整 | assembly | 依据物料清单记录转子及弹齿、传动、车轮、挂接、防护和选件安装，并保留扭矩及对中证据。 |
| 验收和返工 | assembly | 记录防护、传动及转子检查和已配置的液压折叠检查；验收后测定净 M；纳入应归属的试验失败及返工。 |
| 发运保护 | packout | 使用时，记录每项包装；从 M 中排除，并记录最终工厂交付边界。 |

工厂模块组合这些阶段；中间机架和涂装件是内部转移，不是额外参考产出。核对各阶段台账，避免重复计入厂区能耗。同一组件的供应商交付路线与厂内制造互斥。记录有凭据的缺席或补充实际路线，不能给条件行填入假定数量。

### 过程： 机架和结构件制造 (`fabrication`)

#### 输入

##### 产品流

###### 钢板投入 (`steel_sheet`)

仅在厂内切割或成形板材时纳入。记录牌号、厚度及扣除退库后的领料质量；不包括外购总成中已经包含的钢材。

- 选定流： 热轧非合金钢板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集计算 (`calculated_from_collection`)
- 采集协议： `cp_material`

###### 焊接钢管投入 (`steel_tube`)

仅针对矩形焊接钢管机架路线，称量切割前领用且扣除退库后的指定空心管材，声明尺寸和牌号；圆形弹齿臂管和无缝管须另列清单，不能使用本身份。

- 选定流： 非圆形截面焊接钢管和钢管 `5b36ddd4-adb1-41da-9456-33e69e0f141c`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集计算 (`calculated_from_collection`)
- 采集协议： `cp_material`

###### 实心焊丝 (`welding_wire`)

仅在该机架采用实心焊丝焊接时纳入。记录焊丝牌号和净领用质量，不能以药芯焊丝或普通拉制钢丝替代；纳入焊接返工。

- 选定流： 实心钢电弧焊丝
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集计算 (`calculated_from_collection`)
- 采集协议： `cp_material`

###### 氩气 (`argon`)

仅在有记录的纯氩保护工序中纳入。使用称重的气瓶交付量扣除退回余气，或质量流量读数；氩气与二氧化碳混合气是另一配方，不能使用本行。

- 选定流： 氩气保护气
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集计算 (`calculated_from_collection`)
- 采集协议： `cp_material`

###### 结构制造用电 (`electricity_fabrication`)

计量切割、折弯、钻孔、焊接、抽尘和制造返工用电。本 UUID 仅用于交付到用户的低于 1 kV 电网平均交流电；其他电压或发电路线须使用独立身份。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集计算 (`calculated_from_collection`)
- 采集协议： `cp_energy`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 钢废料 (`steel_scrap`)

称量未经处理离厂的分类钢边角料和切屑。厂内循环不属于外运废物。记录接收方、含油情况和处理边界；含油切屑须使用另一废物身份。

- 选定流： 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集计算 (`calculated_from_collection`)
- 采集协议： `cp_waste`

###### 收集的钢磨削粉尘 (`steel_grinding_dust`)

仅纳入已收集并交付废物接收方的干态钢磨削粉尘，记录实测质量、组成和污染情况；它不是排放到空气的基本流。

- 选定流： 收集的钢磨削粉尘
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集计算 (`calculated_from_collection`)
- 采集协议： `cp_waste`

##### 基本流

###### 空气颗粒物 (`air_particulate`)

仅在监测确认存在空气颗粒物排放，且粒径及空气子介质均未特指时使用。采用同一时段出口浓度和实测废气体积并保留计算记录；不编造焊接排放因子，不用于已测定的 PM2.5 分级或已明确排放高度的子介质。

- 选定流： 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集计算 (`calculated_from_collection`)
- 采集协议： `cp_emission`


### 过程： 表面预处理和粉末涂装 (`finishing`)

#### 输入

##### 产品流

###### 粉末涂料 (`powder_paint`)

仅纳入用于本机的外购干粉涂料配方。记录树脂配方、供应商及扣除回收退库粉末后的领用质量；内部循环不能计为新投入。制造商弹齿涂装资料只是一种路线实例，不是通用要求。

- 选定流： 涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集计算 (`calculated_from_collection`)
- 采集协议： `cp_material`
- 来源： `kuhn-hay-parts`

###### 涂装用电 (`electricity_finishing`)

将表面预处理、静电粉末施涂和电固化用电与制造用电分开计量。选定身份为用户端低于 1 kV 的电网平均交流电；燃气固化须逐种燃料和实测排放另列，不由本电固化路线表示。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集计算 (`calculated_from_collection`)
- 采集协议： `cp_energy`

###### 自来水 (`tap_water`)

仅在湿式清洗使用供应的饮用水等级自来水时纳入。直接记录质量；若使用体积表，保留实测或供应商确认的密度及质量换算。不用于去离子水或原地下水。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集计算 (`calculated_from_collection`)
- 采集协议： `cp_material`

###### 碳酸钠试剂 (`sodium_carbonate`)

仅在清洗配方使用单独采购的碳酸钠试剂时纳入。记录等级、水合状态、浓度、领用干试剂质量及换槽情况；槽液用水单列。

- 选定流： 碳酸钠清洗试剂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集计算 (`calculated_from_collection`)
- 采集协议： `cp_material`

##### 废物流

##### 基本流

###### 地下水取水 (`groundwater`)

仅用于实际向所声明清洗工序供水的厂区淡水地下水取水。在井口计量取水并记录国家和含水层；将抽水和处理作为前景活动。不能再次计入外供自来水中已包含的资源取水。

- 选定流： 地下水 `4f462198-40cd-4184-8733-86648a20dc3f`
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_groundwater。
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集计算 (`calculated_from_collection`)
- 采集协议： `cp_groundwater`

#### 输出

##### 产品流

##### 废物流

###### 废粉末涂料 (`powder_waste`)

记录厂内回收后作为固体废物离厂的称重粉末漆过喷料或残渣，披露实际组成和去向。不假定废弃率。

- 选定流： 固体废粉末涂料过喷料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集计算 (`calculated_from_collection`)
- 采集协议： `cp_waste`

###### 清洗废水 (`cleaning_wastewater`)

仅在该清洗槽液交付外部处理接收方时纳入。记录质量、pH、碳酸盐浓度及实测污染物。内部回用不是外运；厂内处理须在任何环境排放前建立独立清单。

- 选定流： 未处理的碳酸钠水溶液金属清洗废水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集计算 (`calculated_from_collection`)
- 采集协议： `cp_waste`

##### 基本流


### 过程： 配置装配和工厂验收 (`assembly`)

#### 输入

##### 产品流

###### 成品弹齿 (`spring_tine`)

称量装入所配置机器的外购成品弹簧钢弹齿，保留齿形、数量、质量和涂层记录。采购成品时，其钢丝成形、热处理、抛丸和涂装属于上游，不能在本前景重复计入。

- 选定流： 成品弹簧钢牧草作业弹齿
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集计算 (`calculated_from_collection`)
- 采集协议： `cp_parts`
- 来源： `kuhn-hay-parts`

###### 转子齿轮箱 (`rotor_gearbox`)

仅在配置中安装时纳入外购完整转子齿轮箱，按交付配置称重；记录齿轮设计、数量及随件润滑剂。其已包含的轴承和润滑脂不能再次计为外购投入。单独采购的主齿轮箱须另列组件行。

- 选定流： 成品牧草作业转子齿轮箱
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集计算 (`calculated_from_collection`)
- 采集协议： `cp_parts`
- 来源： `krone-vendro`

###### 单独外购滚珠轴承 (`ball_bearing`)

本行记录为机器单独采购的一种指定成品滚珠轴承设计，称量该设计已安装轴承的总质量。数据库类别也包含滚柱轴承，但本行不提供设计多选，也不包含外购齿轮箱内的轴承。

- 选定流： 滚珠轴承或滚柱轴承 `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集计算 (`calculated_from_collection`)
- 采集协议： `cp_parts`

###### 钢螺栓 (`steel_bolt`)

按安装质量记录一种声明了等级、镀层和尺寸的螺栓，并与装配清单核对。螺母和垫圈若单独供货须另列，不能使用汇总紧固件数量。

- 选定流： 成品六角头钢螺栓
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集计算 (`calculated_from_collection`)
- 采集协议： `cp_parts`

###### 农用轮胎 (`agricultural_tyre`)

仅纳入单独采购并安装到地面仿形轮或运输轮的新轮胎，记录尺寸、层级和质量。外购完整车轮已包含轮胎，须改用独立车轮总成行，不能重复计入。

- 选定流： 农用牧草作业机械新充气橡胶轮胎
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集计算 (`calculated_from_collection`)
- 采集协议： `cp_parts`
- 来源： `krone-vendro`

###### PTO 传动轴 (`pto_shaft`)

仅纳入随机交付的完整带防护罩 PTO 传动轴。记录长度、万向节设计、防护罩和实测质量；排除拖拉机。厂内制造传动轴须有独立制造记录。

- 选定流： 带防护罩的农用动力输出传动轴
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集计算 (`calculated_from_collection`)
- 采集协议： `cp_parts`

###### 液压折叠油缸 (`hydraulic_cylinder`)

仅在采用液压折叠时纳入。称量交付的各指定完整油缸，记录行程、缸径及随件油液。不能以缸体毛坯或套件替代；单独供货的软管和阀须分别列行。

- 选定流： 完整液压折叠油缸
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集计算 (`calculated_from_collection`)
- 采集协议： `cp_parts`
- 来源： `kuhn-gf-13003-2023`

###### 装配润滑脂 (`assembly_grease`)

仅纳入有记录的工厂单独首次加注或装配施用的该润滑脂配方。记录净施用质量和配方。不能向已含润滑剂的密封外购齿轮箱重复加算，也不能假定未来维护消耗。

- 选定流： 矿物油锂皂润滑脂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集计算 (`calculated_from_collection`)
- 采集协议： `cp_material`

###### 装配验收用电 (`electricity_assembly`)

计量装配、扭矩工具及工厂转子和传动验收试验用电，并纳入应归属的返工。记录试验时长和外接试验台用电；拖拉机田间燃料不在范围内。选定身份为用户端低于 1 kV 的电网平均交流电。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集计算 (`calculated_from_collection`)
- 采集协议： `cp_energy`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收净整机 (`finished_machine`)

已声明配置的验收合格完整机器的净质量一千克。以摊晒或搂草范围及配置元数据限定较宽的公开产品流身份，不据此建立分类叶派生的 PCR 身份。

- 选定流： 其他打草机械 `6d11140d-35b7-498d-9c30-e0b2dfdf63f8`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式： 固定值 (`fixed_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_mass`

##### 废物流

##### 基本流


### 过程： 工厂发运保护 (`packout`)

#### 输入

##### 产品流

###### 瓦楞纸板 (`cardboard`)

仅在使用含再生纤维且纤维含量至少 80% 的 C 型瓦楞纸板保护机器时纳入。称量净领用包装并记录规格；它不属于净整机质量，但属于所声明的包装活动。

- 选定流： 瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集计算 (`calculated_from_collection`)
- 采集协议： `cp_material`

###### 聚乙烯保护薄膜 (`polyethylene_film`)

仅在发运保护采用声明为化石来源的聚乙烯薄膜时纳入；称量净领用薄膜并记录聚合物等级。不能替换为聚酯膜或未指定塑料膜。包装产出随包装活动体现，不是另一整机产出。

- 选定流： 化石来源聚乙烯保护薄膜
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集计算 (`calculated_from_collection`)
- 采集协议： `cp_material`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流


## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_measure` | shared_operations | 依据 cp_energy 和 cp_material，首先按工单、表计及实际组件路线分开。无法分开时，能耗使用有记录的设备或工具工时，材料使用称重领用原料或组件；记录物理分配依据、覆盖产品和总账核对。没有依据时，不能将不同机器配置按台数平均分配。 |  |
| `allocation_scrap` | waste_outputs | 保留实测废物产出并单独披露处理链接；不能因销售废钢假定替代抵扣或负钢投入。若声明某废钢流为可销售共产品，须有证据并单独报告状态、分配和敏感性；本 PCR 不设市场价值比例。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | assembly | finished_machine | 称重 | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每个代表配置和验收批次 | 同一生产期间 | 最终验收工位 | 每台验收净质量 | 秤校准；称重凭证；配置清单 |
| cp_configuration | assembly | route_and_completeness | 装配记录 | 型号；批次；物料清单版本；序列号；包含选件；验收台数；工艺路线；外包供应商边界 | 针对明确声明的同一配置核对采购单、工单、签字物料清单和验收记录。 | 记录 | 每批 | 同一生产期间 | 工厂及指定供应商 | 按配置统计验收完整机器；不合格品和返工单独保留 | 签字放行和路线记录 |
| cp_material | fabrication; finishing; assembly; packout | individual_material_input | 称重及领料台账 | row_id；等级；批次；领用质量；退库；库存变化；工单；验收台数；表计自来水密度；纯度 | 对每个独立行使用经校准秤、净领退料台账及供应商规格。纳入应归属返工。表计水体积须有实测或供应商确认密度，保留原单位及换算。 | kg | 每次领料和批次；用水按表计时段 | 声明起止日期的代表性生产期间 | 实际纳入工序；不跨阶段重复 | 应归属的单项投入质量 / 同一配置的验收机器数量 | 校准；账单；库存核对；密度及组成证据 |
| cp_parts | assembly | individual_finished_component | 物料清单及称重 | row_id；组件编号；供应商；规格；安装数量；净组件质量；随件润滑剂；验收台数 | 将一种具体组件设计与物料清单匹配，称量安装组件交付质量并核对包含子组件，防止重复；数量作为支持记录，不能替代 kg。 | kg | 每种组件设计及批次 | 同一生产期间 | 收货及装配 | 应归属已安装组件质量 / 同一配置的验收机器数量 | 供应商图纸；称重凭证；配置核对 |
| cp_energy | fabrication; finishing; assembly | individual_stage_electricity | 表计及工序日志 | row_id；表计；电压；电能 kWh；时段；空载和返工；设备工时；分配份额；验收台数 | 使用分表读数；共用时，以有记录的设备工时及核对后的实测负荷归属。使用 3.6 将 kWh 换为 MJ；将阶段合计与购电核对，并纳入所声明边界内的抽水和抽尘。 | MJ | 表计时段及工单 | 同一生产期间 | 纳入的工厂工序 | 应归属的单阶段电量 / 同一配置的验收机器数量 | 表计校准；账单；分配依据；平衡 |
| cp_waste | fabrication; finishing | individual_exported_waste | 废物称重及转移 | row_id；组成；污染；质量；回收；去向；处理边界；验收台数 | 称量各分类外运废物并扣除内部返料，保留废水化学分析并识别处理状态；不能由废物质量推断环境排放。 | kg | 每次转移及生产批次 | 同一生产期间 | 实际产生工序 | 应归属单项废物质量 / 同一配置的验收机器数量 | 转移单；秤；组成检测；去向凭据 |
| cp_emission | fabrication | air_particulate | 出口监测 | 出口浓度；废气体积；运行时间；空气介质；子介质；粒径分级；治理；验收台数 | 测量同一时段治理后实际出口浓度和废气体积，以保留单位及采样覆盖的计算获得质量；明确记录缺测，不编造排放因子。 | kg | 代表性运行时段 | 同一生产期间并披露采样缺口 | 仅实际出口 | 应归属实测颗粒物质量 / 同一配置的验收机器数量 | 采样报告；校准；单位计算；适用性 |
| cp_groundwater | finishing | groundwater | 井口表计 | 井；国家；含水层；取水 m3；用途；抽水能耗；验收台数 | 计量用于纳入清洗工序的实际淡水取水，分开外供水和内部循环；抽水能耗归入 cp_energy，不重复外供水生产。 | m3 | 每个表计时段 | 同一生产期间 | 厂区淡水井 | 应归属地下水取水量 / 同一配置的验收机器数量 | 表计校准；取水许可；位置和水体身份 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_config` | all inventory rows | 全部使用相同验收型号、配置和期间。将组件交付质量及领料与净整机、废物、退料和在制品变化核对；解释偏差，不编造排放强行平衡。 | cp_mass; cp_configuration; cp_material; cp_parts; cp_waste |
| `quality_coverage` | all inventory rows | 将每个实际物料清单项目及工序对应原子交换或有依据排除；披露缺失 UUID、供应商、测量、上游链接和时段缺口。不设通用截断百分比。 | cp_configuration; cp_material; cp_parts; cp_energy |
| `quality_sources` | product_configuration | 制造商实例只支持设计和可能路线，不支持通用重量、寿命、排放或行业数量。较旧型号资料仅作为明确注明日期的设计实例。 | kuhn-gf-13003-2023; kuhn-hay-parts; krone-vendro; krone-swadro |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_mass` | reference_flow | 要求 cp_mass 提供正值实测净质量 M、精确配置匹配及 finished_machine 的 1 kg 产出。每个按台采集的非参考行须在原分子单位下应用 normalize_mass。 |  |
| `validation_route` | inventory_completeness | 依据路线核查必需装配及验收和每个实际条件工序，核查称重、台数、库存变化、返工及阶段能耗核对。缺失或未解决证据表示覆盖不完整，不是已核实零值或方法学批准。 |  |
| `validation_identity` | all inventory rows | 每行仅使用一个物理交换；核验 UUID 属性、单位、路线、浓度、化石或生物来源和环境介质。核查官方中文名及英中 row/rule 身份一致。身份缺口阻止声称数据集已完整解析。 |  |
| `validation_boundary` | dataset_claims | 没有证明兼容上游、运输和处理覆盖时，拒绝完整摇篮到工厂门声明。拒绝仅按机器等质量提出田间服务比较声明。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置明确的前景整机制造模块；本节描述后续数据集交付，不代表 PCR 已发表。 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 向配置明确的机器模型提供制造清单；仅对相同配置按实测净质量 M 放大。 |
| excluded_use | 牧草产量、田间服务比较、农场燃料、维护或寿命估计；无上游覆盖记录的完整摇篮到工厂门；作为方法学批准。 |
| required_metadata | 全部限定信息、场址及期间、边界、详细路线、组件供应及完整性、参考数量、称重及分配协议、上游及处理链接。 |
| required_quality_disclosure | 测量不确定性、采样缺口、未解决身份、缺失链接、返工及不合格品处理、遗漏及代理敏感性。 |
| update_trigger | 配置或物料清单、供电电压或来源、涂装路线、供应商边界、分配依据或称重协议变化。 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| kuhn-gf-13003-2023 | handbook | KUHN, GF 13003 tedder, July 2023, PDF pp. 1–2. https://www.kuhn.com/sites/default/files/media-files/GF%2013003_PressRelease_202307_EN.pdf | 有明确日期的悬挂式转子、传动及液压配置实例；不采用质量、清单、寿命或性能因子。 |
| kuhn-hay-parts | handbook | KUHN PARTS – Hay / Silage Making, sections Tines: Longevity, Optimized Position; DIGIDRIVE Coupler. https://zoom.kuhn.com/focus/kuhn_parts/us/catalog-hay-silage-making.html | 仅用于弹簧钢弹齿及涂装路线实例；不采用通用制造要求或耐久性倍数。 |
| krone-vendro | handbook | KRONE, Vendro rotary tedders, sections Bolted tine carriers; The gearboxes; Tyre options; mounting and running gear. https://www.krone-agriculture.com/en/products/rotary-tedders/vendro | 独立摊晒机配置及外购组件完整性；齿轮箱润滑只用于重复计入检查。 |
| krone-swadro | handbook | KRONE, Swadro S | TS side delivery rotary rakes, sections KRONE side delivery rotary rakes; The pioneer in quality foraging. https://www.krone-agriculture.com/en/products/rotary-rakes/swadro-sts | 用于搂草及成条类别边界，与后续打捆机或饲草运输车分开；不采用能力因子。 |
