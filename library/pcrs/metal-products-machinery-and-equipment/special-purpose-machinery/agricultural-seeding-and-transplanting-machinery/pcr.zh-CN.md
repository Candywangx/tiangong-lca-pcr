---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.agricultural-seeding-and-transplanting-machinery
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 农业播种与移栽机械制造

## 1. 范围与适用性

本PCR适用于完整农业条播机、精量播种机与种苗移栽机的制造，包括悬挂式、牵引式、步行式及自行式配置。声明整机内的一体式开沟、排种、覆土、栽苗及安装的施肥附件纳入完整机器；记录其存在，但不将作物增产或节肥效果归于制造。产品可折叠或含明确的可拆卸部件发运，但必须覆盖完整验收配置。

排除独立耕整地设备、单独销售的拖拉机、通用撒肥机、单独销售的备件、种子及种苗生产、田间种植服务、农场燃料与维护、作物种植、收获产品及报废阶段。本PCR不定义服务参考。按质量归一化的制造结果不证明不同机器具有相同农艺性能。Great Plains历史制造实例及Kubota型号开发案例仅支持工艺路线与配置区分，不提供通用数量或强制技术要求。（`greatplains-corporate-1602e`；`kubota-transplanter-2020`）

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.agricultural-seeding-and-transplanting-machinery |
| classification_refs | CPC 3.0 44113 |
| covered_products | 完整农业条播机；精量播种机；种苗移栽机；各声明配置分别建模。 |
| excluded_products | 独立拖拉机、备件、独立耕整地及施肥机械、农场种植服务与作物产出。 |
| representative_product | 一台排种与驱动明确的完整多行播种机；移栽机数据集使用其实际栽苗配置。 |
| production_route | 外购原料与成品零件 → 实际发生的场内制造/焊接/涂装 → 配置装配与加注 → 出厂验收/返工 → 实际采用的发运保护。 |
| market_state | 新制完整出厂验收合格机器，扣除运输包装；种箱与肥料箱为空。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造交付一台按声明设计质量完成播种或移栽的完整机器；农业作业不在本数据集内。 |
| How much | 1 kg同一明确配置的验收合格净整机；这是完整机器的归一化份额，不是可独立使用的1 kg零件。 |
| How well | 符合已放行图纸/物料清单及实际验收规范：行数/行距、作业幅宽、排种或移栽机构、驱动与供应边界；记录功能测试依据，不假定田间产量。 |
| How long or cycle | 一个制造及验收周期；使用寿命与作业公顷数未规定，不得推断。 |
| reference_flow_link | `finished_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 播种机、播种机和插秧机 `08676b65-9304-437b-bb11-7b65f5fbcc40` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号及修订；序列号/批次；产品功能；完整物料清单；行数与行距；作业幅宽；排种/移栽机构；驱动与挂接；种箱及附件配置；如安装则记录行走驱动/发动机；验收标准；净质量M；留存流体/燃料状态；可拆卸部件；工厂/时期；涂装路线；起始状态；上游覆盖；包装排除 |

以上配置限定将宽泛参考身份收窄，不授权合并不同机器。数据集元数据或参考流备注必须声明所有限定；缺失则参考定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| electricity_units | fabrication_power; welding_power; coating_power; assembly_power; test_power | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电力能量基准：归一化前将记录的kWh按3.6 MJ/kWh换算为MJ。此身份采用能量属性，不表示质量或燃料热值测量。 |
| volume_units | hydraulic_fluid; curing_gas | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 采用有温度依据的实测体积；气体还需压力与标准状态约定；升按0.001 m3/L换算。质量记录需声明条件下的实际密度，不采用通用密度。 |
| count_units | tyre; diesel_engine | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 按明确零件类型保留安装件数，同时采集净零件质量用于物料清单核对。件数不是kg，不规定通用每件质量换算。 |

按与物料清单一致的留存流体/燃料状态在验收后测量M：包括已加注流体，排除运输包装及作物/种子/肥料载荷。属于验收供货范围的可拆卸零件与机器一起称量，或以可追溯称量补入。保留配置实际测量质量，不在无关联变型间平均。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在制造场址接收的外购原料与成品部件；其生产不自动纳入前景覆盖。 |
| starting_condition_role | 制造模块所声明的物料/总成起点。 |
| product_classification_scope | 语义完整农业播种与移栽机器；CPC 3.0 44113仅提供分类语境。 |
| recursive_input_rule | 来料半装配机器或播种单体总成是明确外购投入，须声明内部零件及上游边界。追溯止于声明供应，不得递归重复纳入同一总成或内部原料。 |
| upstream_dataset_requirement | 扩展研究需要上游影响时，另行连接相容的供应商/材料数据集及交付运输；披露实际地理、技术、牌号与边界；缺失供应方仍为覆盖缺口。 |
| disclosure | 报告工厂/时期、自制与外购区分、外包表面处理、测试配置、运输覆盖、包装、废物处理及缺失流；单独制造模块不是完整从摇篮到工厂门结果。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_manufacturing | foreground | 纳入所有实际接收至验收活动、可归属公用工程、损耗、返工及场内搬运；条件工序仅在发生时纳入；外购成品零件采用供应商边界，不重复制造。 | greatplains-corporate-1602e |
| boundary_configuration | complete_machine | 包括声明的播种单体工具与控制、种箱/支架及实际安装的自行驱动；明确记录替代或缺省零件；Kubota案例仅说明设计差异，不提供通用材料配方。 | kubota-transplanter-2020 |
| boundary_exclusions | downstream | 本制造模块排除田间种植、作物生长、外部牵引拖拉机、经销商作业、维护与报废；扩展研究需声明其单独参考、运输及生命周期覆盖。 |  |
| boundary_emissions | elementary_outputs | 按控制后的实际物种与受纳介质记录；送处理废水为废物交换；处理后直接排放需按实测物质及正确受纳水体子介质设行；不因工序名称就假定排放必然发生。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| fabrication | 切割、成形与机加工 | conditional | 仅纳入声明的前景边界内实际进行的操作；否则记录外购成品零件。 | foreground_production | 每 1 kg 参考流 |
| welding | 机架与播种单体焊接 | conditional | 仅在场内生产机架或播种单体焊接件时纳入。 | foreground_production | 每 1 kg 参考流 |
| coating | 表面预处理与涂装 | conditional | 仅纳入场内涂装；区分粉末、液体及加热路线。 | foreground_production | 每 1 kg 参考流 |
| assembly | 配置整机装配与加注 | required | 所有产品；保留配置特定的外购零件覆盖。 | foreground_production | 每 1 kg 参考流 |
| acceptance | 出厂验收与返工 | required | 所有产品；实际测试方法决定条件性交换。 | foreground_production | 每 1 kg 参考流 |
| packing | 发运保护与包装 | conditional | 仅纳入出厂前实际使用的保护包装。 | foreground_production | 每 1 kg 参考流 |

以下为一个制造模块的子活动。通过工单追踪内部自制件，但不将同一内部转移再记为外部采购投入。流卡定义具体起始交换；缺失的物料清单零件、每一种实际化学品、燃料、包装组件、废物及排放均需补为独立原子行。条件性缺省需路线依据；身份未解决或数量未测量不等于零。

### 过程：切割、成形与机加工（`fabrication`）

仅纳入声明的前景边界内实际进行的操作；否则记录外购成品零件。

#### 输入

##### 产品流

###### 热轧碳钢板 （`carbon_plate`）

仅在场内实际切割或成形钢板时纳入；记录牌号、厚度及领料毛质量，扣除退回的可复用原料。

- 选定流： 热轧碳钢板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

###### 矩形碳钢空心型材 （`hollow_section`）

仅在物料清单确认该截面几何及碳钢牌号时，纳入自制工具梁或机架型材。

- 选定流： 矩形碳钢空心型材
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

###### 矿物油基切削液浓缩液 （`cutting_fluid`）

仅适用于湿式机加工；记录浓缩液配方和领用质量；稀释水另行记录，循环使用不计作新投入。

- 选定流： 矿物油基切削液浓缩液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

###### 交流电 （`fabrication_power`）

计量切割、折弯、钻孔与机加工用电，包括可归属的抽风及压缩空气设备。此身份仅适用于交付电压低于1千伏的电网平均供电；注明实际国家和供电数据集。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

###### 自来水 （`dilution_water`）

仅记录新投入用于切削液稀释的自来水；与浓缩液及复用冷却液分开记录。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

#### 输出

##### 废物流

###### 工业后钢废料 （`steel_offcuts`）

称量未经处理离厂的碳钢边角料及切屑；含油切屑与有色金属单独记录；排除复用原料及内部循环。

- 选定流： 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

###### 废矿物油基切削乳化液 （`spent_cutting_fluid`）

仅指离场送处理的废乳化液；称量液体质量，记录含油浓度与去向；金属切屑及清洁可回收钢分别记录。

- 选定流： 废矿物油基切削乳化液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

### 过程：机架与播种单体焊接（`welding`）

仅在场内生产机架或播种单体焊接件时纳入。

#### 输入

##### 产品流

###### 药芯焊丝 （`selfshielded_wire`）

仅适用于符合此身份的自保护碳钢药芯焊丝焊接；以焊丝盘领用及退回记录计量消耗量；气体保护焊丝是另一项投入。

- 选定流： 药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_welding`

###### 碳钢实心焊丝 （`solid_welding_wire`）

仅在批准的焊接工艺采用实心焊丝时纳入；保留成分及直径；不得替换为建筑电线。

- 选定流： 碳钢实心焊丝
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_welding`

###### 氩气保护气体 （`argon_shield`）

仅记录单独采购并送至焊接单元的氩气；称量气瓶交付及退回量。预混保护气体需另设一个配方明确的独立行，不得在此重复记录。

- 选定流： 氩气保护气体
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_welding`

###### 二氧化碳保护气体 （`co2_shield`）

仅适用于有记录的焊接工艺中单独供应的工业二氧化碳；这是技术圈气体投入，不是基本流排放。

- 选定流： 二氧化碳保护气体
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_welding`

###### 交流电 （`welding_power`）

计量低于1千伏电网供电的焊接及可归属的烟尘抽风用电，与切割电量分开。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_welding`

#### 输出

##### 废物流

###### 收集的碳钢焊接过滤粉尘 （`welding_filter_dust`）

发生时称量移出的过滤粉尘；保留成分及废物处理去向。收集的固体不是空气排放。

- 选定流： 收集的碳钢焊接过滤粉尘
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_welding`

##### 基本流

###### 颗粒物，粒径未特指 （`welding_pm_air`）

仅纳入收集后有记录的室外空气颗粒物排放，且粒径及空气子介质未特指。说明监测覆盖、控制设备与不确定性；没有测量不等于零。不得设定通用焊接排放因子。

- 选定流： 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_welding`

### 过程：表面预处理与涂装（`coating`）

仅纳入场内涂装；区分粉末、液体及加热路线。

#### 输入

##### 产品流

###### 涂料（粉末） （`powder_paint`）

仅适用于粉末涂装；记录单一供应配方、树脂及颜色批次，以及扣除回收退库粉末后的消耗质量；不规定通用固化周期或膜厚。

- 选定流： 涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 配方聚氨酯面漆基料 （`liquid_paint`）

仅在实际进行液体涂装时记录组分比例明确的外购配方面漆基料；注明交付固体及溶剂含量。本行不意味着每台机器都进行液体涂装。

- 选定流： 配方聚氨酯面漆基料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 氢氧化钠溶液，30% （`caustic_30`）

仅在来料脱脂试剂有记录证明为质量分数30%的氢氧化钠溶液时纳入；计量交付溶液质量，而非有效氢氧化钠质量。其他浓度需另行身份与记录。

- 选定流： 氢氧化钠溶液，30% `7115909b-796c-4b3d-b40a-1a7c693d12d0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 自来水 （`wash_water`）

仅适用于自来水预处理或冲洗；按质量测量补水，或采用有记录的水密度及温度换算经校准的体积计量；供水量不得等同于废水输出量。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 交流电 （`coating_power`）

按实际路线计量预处理、喷涂与电加热固化的可归属电量；该身份仅适用于低于1千伏的电网供电。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 气态天然气 （`curing_gas`）

仅适用于燃气固化炉；计量管输气体体积，并在匹配流体积前记录表压、温度、压缩性约定与供气条件。不得把身份原件中质量与体积的1比1属性值当作物理气体密度。

- 选定流： 气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 聚异氰酸酯涂料固化剂 （`polyisocyanate_hardener`）

仅在实际涂料以基料与固化剂分开供应时纳入；固化剂单独称量，并保留成分及有记录的混合比；不得按基料质量臆定固化剂量。

- 选定流： 聚异氰酸酯涂料固化剂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

#### 输出

##### 废物流

###### 废弃聚酯涂装粉末 （`powder_waste`）

仅指明确配方的废弃固体过喷粉末；称量时与固化漆屑、废水污泥及内部回收粉末分开。

- 选定流： 废弃聚酯涂装粉末
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 废弃水性碱性脱脂漂洗水 （`pretreatment_wastewater`）

仅指跨越技术圈边界送处理的废水；测量液体质量并保留pH、溶解金属分析及处理去向。直接排入受纳水体的排放需按物种单独设行。

- 选定流： 废弃水性碱性脱脂漂洗水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

##### 基本流

###### 二氧化碳（化石源） （`curing_co2`）

仅纳入固化燃烧器有测量或场址燃料碳平衡依据的化石源室外空气二氧化碳排放，空气子介质未特指；披露化石比例、氧化依据及捕集情况；不得由用电量推导现场二氧化碳排放。

- 选定流： 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

### 过程：配置整机装配与加注（`assembly`）

所有产品；保留配置特定的外购零件覆盖。

#### 输入

##### 产品流

###### 成品碳钢种沟开沟圆盘 （`opener_disc`）

仅记录指定播种单体配置的外购成品开沟圆盘；记录零件号及质量。若由已计入的场内钢材制造，不再列作外购投入。

- 选定流： 成品碳钢种沟开沟圆盘
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品排种器 （`seed_meter`）

仅记录外购排种器，每个数据集采用一个明确的机械或气力设计；记录驱动、作物适配与零件号。种子及肥料不是制造部件。

- 选定流： 成品排种器
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品高密度聚乙烯种箱 （`seed_hopper`）

仅在验收配置含高密度聚乙烯种箱时纳入；记录实际牌号、零件净质量及供应总成边界；树脂粒料不得替代已经成形的种箱。

- 选定流： 成品高密度聚乙烯种箱
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品聚氨酯输种管 （`seed_tube`）

仅在采用明确的聚氨酯管时纳入；记录直径、长度及净质量；其他聚合物为不同零件。

- 选定流： 成品聚氨酯输种管
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品钢制滚珠轴承 （`ball_bearing`）

记录安装轴承的规格和质量；核对密封及轴承轮毂总成边界，避免重复计入已包含的轴承。

- 选定流： 成品钢制滚珠轴承
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品钢制六角螺栓 （`steel_bolt`）

记录安装螺栓的等级、镀层及质量；如含垫圈与螺母，实际数据集中分别设交换。

- 选定流： 成品钢制六角螺栓
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 轮胎 （`tyre`）

仅记录外购成品充气橡胶轮胎，每个交换限一种尺寸和类型；记录件数、每件净质量、结构、载荷等级及是否排除轮辋；此身份使用Item(s)。金属轮及履带总成需另行记录。

- 选定流： 轮胎 `11c2e97a-624f-41de-957d-543cddb777ef`
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 液压软管 （`hydraulic_hose`）

仅适用于安装液压回路的配置；记录成品软管牌号、增强结构、压力等级、长度及净质量；接头若不在外购软管总成内则单独记录。

- 选定流： 液压软管 `e2fc1719-69dc-4281-8eae-383af8d9a405`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品液压缸 （`hydraulic_cylinder`）

仅在安装用于折叠、升降或播种单体控制的完整液压缸时纳入；保留缸径、行程、零件号与净质量。

- 选定流： 成品液压缸
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 液压油 （`hydraulic_fluid`）

仅记录一种有文件依据的工厂加注配方液压油；记录牌号、基础油来源、密度及温度，分别记录留存加注量与试验损耗；此公开身份采用体积/m3。

- 选定流： 液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品绝缘铜线束 （`wiring_harness`）

仅适用于电气控制配置；明确连接器配置、导体质量及线束边界；已在外购线束中包含的铜不再单列投入。

- 选定流： 成品绝缘铜线束
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品播种机电子控制单元 （`controller`）

仅适用于电子控制；记录电路板、壳体、软件配置及安装质量；若已包含于外购集成模块，不再重复计入部件。

- 选定流： 成品播种机电子控制单元
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品电动排种驱动电机 （`electric_drive`）

仅适用于电动排种；记录额定输出、电压、控制边界及净质量；工业输送机电机或限定中国的通用机械模块不得无条件作为身份。

- 选定流： 成品电动排种驱动电机
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 柴油发动机 （`diesel_engine`）

仅适用于自行式柴油配置；记录一种明确的外购发动机，包括功率、排放配置、件数及净质量；悬挂或牵引机具不纳入牵引拖拉机。此身份采用Item(s)。

- 选定流： 柴油发动机 `d3ac8612-80b9-4283-9439-62aa4986fce2`
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品钢制移栽爪 （`transplant_claw`）

仅记录材质及设计明确的外购移栽爪；记录安装数量和总质量；播种机不要求此部件。

- 选定流： 成品钢制移栽爪
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品钢制秧盘支架 （`seedling_rack`）

仅在安装外购成品支架时纳入；记录安装配置及质量；农场作业消耗的育秧盘不属于制造产品。

- 选定流： 成品钢制秧盘支架
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品静液压传动单元 （`hydrostatic_drive`）

仅适用于采用静液压传动的自行式机器；明确包含的泵、马达与齿轮箱边界及净质量；内部零件不重复列入。

- 选定流： 成品静液压传动单元
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 交流电 （`assembly_power`）

测量安装及工厂加注用电，包括可归属的气动工具压缩机用电；该身份仅适用于低于1千伏的电网供电。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品钢制播种机主机架 （`purchased_main_frame`）

仅指播种机器外购成品主机架/工具梁；明确涂层及所含零件；其原料、焊接与涂装不在本场址模块重复记录；移栽机底盘为不同物料清单零件。

- 选定流： 成品钢制播种机主机架
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品钢制播种单体机架 （`purchased_row_frame`）

仅指外购成品播种单体机架，须声明是否包含开沟盘、轴承及排种器；不重复计入内部零件。

- 选定流： 成品钢制播种单体机架
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

### 过程：出厂验收与返工（`acceptance`）

所有产品；实际测试方法决定条件性交换。

#### 输入

##### 产品流

###### 交流电 （`test_power`）

记录以低于1千伏电网供电的出厂排种检查、液压检漏及控制检查；注明测试时间与返工。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

###### 柴油 （`test_diesel`）

仅记录柴油机器或试验台在出厂验收中实际消耗的燃料；以领用量扣除退回及留存未燃烧燃料计量；排除农场作业燃料。

- 选定流： 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

#### 输出

##### 产品流

###### 播种机、播种机和插秧机 （`finished_machine`）

1 千克验收合格的完整机器，通过实测整机净质量M及同一配置记录表述；运输包装、运输的种子或肥料不计入产品质量。

- 选定流： 播种机、播种机和插秧机 `08676b65-9304-437b-bb11-7b65f5fbcc40`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_mass`

##### 基本流

###### 二氧化碳（化石源） （`test_co2`）

仅记录出厂柴油测试有依据的化石源室外空气二氧化碳排放，子介质未特指；采用实测排放或核验的场址燃料碳平衡；生物源碳为不同流。

- 选定流： 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

###### 二氧化氮排入室外空气，子介质未特指 （`test_no2`）

仅在验收试验排气中单独测定二氧化氮时纳入；以NO2计的总NOx结果并非NO2物种实测，需另行明确基准。不得替换为NO或N2O。

- 选定流： 二氧化氮排入室外空气，子介质未特指
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

### 过程：发运保护与包装（`packing`）

仅纳入出厂前实际使用的保护包装。

#### 输入

##### 产品流

###### 聚乙烯薄膜 （`pe_film`）

仅纳入发运实际使用的聚乙烯保护薄膜；称量领用质量并扣除退回；排除于整机质量M之外。

- 选定流： 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_packing`

###### 瓦楞纸板 （`corrugated_board`）

仅纳入含再生成分且有记录证明纤维含量至少80%的C、E或F型瓦楞纸板，以符合此身份；称量安装的保护包装；其他牌号需另行身份。

- 选定流： 瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_packing`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_direct | manufacturing | 优先使用直接计量或工单领用交换。按cp_allocation，将其余共享公用工程按实测因果驱动分摊：机加工/焊接运行时间结合实测功率；涂装载荷面积结合实测批次消耗；装配/试验工位时间结合实测工位需求。记录驱动覆盖，并将分摊量加排除量核对至原始表计。 |  |
| allocation_variants | product_mix | 配置或能耗不同的变型不得全部按机器台数分摊。质量或经济基准后备方法需有前景依据、不确定性敏感性及审查，不是本PCR规定的默认方法。 |  |
| allocation_scrap | steel_offcuts | 保留材料投入及单独实测的废钢输出，不自动给予避免钢生产抵扣；有关时报告废钢价格与去向；共产品分类或回收抵扣需另行声明且经审查的模型，防止重复抵扣；内部循环回收粉末不是可销售共产品。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | finished_machine | measurement | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每个验收配置及有可追溯覆盖的抽样序列号 | 与活动记录相同的制造时期 | 一个声明场址的验收完整供货 | 每台验收净质量 | 秤校准；空种箱；留存流体状态；可拆卸部件质量；验收签署 |
| cp_fabrication | fabrication | 本过程各原子行 | measurement | 零件/牌号；原料领用/退回；切屑/边角料；切削液质量；kWh；工单 | 分别称量每项原料/耗材及外送钢废料；各工序计量；核对原料、自制件、留存及废料。 | kg; MJ | 每批次/工单；每次测试；按月核对 | 一个完整声明生产年，或有理由的更短完整批次；与验收数量时期一致 | 相同场址及配置；明确外包工作边界 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存核对；验收数量；排除需求；缺失记录披露 |
| cp_welding | welding | 本过程各原子行 | measurement | 焊丝牌号；焊丝盘领用/退回；气瓶气体质量；kWh；过滤粉尘；室外颗粒物分析；运行时间 | 采用焊接工单、校准表计、气瓶称量及控制后实际排放采样；保留粒径未知情况；另留过滤废物记录。 | kg; MJ | 每批次/工单；每次测试；按月核对 | 一个完整声明生产年，或有理由的更短完整批次；与验收数量时期一致 | 相同场址及配置；明确外包工作边界 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存核对；验收数量；排除需求；缺失记录披露 |
| cp_coating | coating | 本过程各原子行 | measurement | 配方；浓度；新粉；回收退库；面漆基料；固化剂；混合比；冲洗水质量；MJ；气体m3及状态；液体废物质量；化石碳分析 | 分别记录化学品批次及消耗、新水、固化炉电力/燃料、废物移出及实际监测排放；回收循环属于内部；核对零件留存涂层、损耗及库存。 | kg; m3; MJ | 每批次/工单；每次测试；按月核对 | 一个完整声明生产年，或有理由的更短完整批次；与验收数量时期一致 | 相同场址及配置；明确外包工作边界 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存核对；验收数量；排除需求；缺失记录披露 |
| cp_assembly | assembly | 本过程各原子行 | measurement | 物料清单零件号；供应商边界；安装件数；各零件净质量；加注流体体积/密度；退回零件；kWh；配置 | 采用配置受控物料清单及外购零件领用/退回记录；称量相关各部件类型；发动机与轮胎保留Item(s)，液压油保留m3；保留电气及液压验收要求。 | kg; m3; Item(s); MJ | 每批次/工单；每次测试；按月核对 | 一个完整声明生产年，或有理由的更短完整批次；与验收数量时期一致 | 相同场址及配置；明确外包工作边界 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存核对；验收数量；排除需求；缺失记录披露 |
| cp_acceptance | acceptance | 本过程各原子行 | measurement | 序列号/配置；图纸修订；测试方法/时间；合格/不合格；返工；MJ；柴油kg；燃料化石碳；单独测量NO2 kg；M | 按适用性保留排种/移栽机构、折叠/液压与安装控制的签署验收记录；计量台架能量与燃料，记录实际排气物种和返工；区分田间演示及出厂验收。 | kg; MJ | 每批次/工单；每次测试；按月核对 | 一个完整声明生产年，或有理由的更短完整批次；与验收数量时期一致 | 相同场址及配置；明确外包工作边界 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存核对；验收数量；排除需求；缺失记录披露 |
| cp_packing | packing | 本过程各原子行 | measurement | 聚乙烯薄膜质量；瓦楞纸板楞型/纤维/再生成分；领用/退回；发运序列号 | 分别称量实际使用的各包装组件，核对退回及发运配置，包装质量排除于M之外；另用木材/钢制保护件须各设独立行。 | kg | 每批次/工单；每次测试；按月核对 | 一个完整声明生产年，或有理由的更短完整批次；与验收数量时期一致 | 相同场址及配置；明确外包工作边界 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存核对；验收数量；排除需求；缺失记录披露 |
| cp_allocation | manufacturing | shared_demand | measurement | 公用工程总量；实测功率/负载；运行时间；涂装面积；验收配置数量；排除需求 | 尽可能分表计量；测量共用设备/炉/工位负载及因果驱动，并记录各共享交换采用该驱动的理由。 | MJ; h; m2 | 每个共用批次与每月核对 | 相同生产区间 | 该场址全部消耗产品与排除操作 | 按实测因果需求分摊总量；再汇总可归属数量 / 验收机器数量 | 分表一致性；总量闭合；驱动不确定性；敏感性；批准记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | carbon_plate; hollow_section; cutting_fluid; fabrication_power; steel_offcuts; selfshielded_wire; solid_welding_wire; argon_shield; co2_shield; welding_power; welding_filter_dust; welding_pm_air; powder_paint; liquid_paint; caustic_30; wash_water; coating_power; curing_gas; powder_waste; pretreatment_wastewater; curing_co2; opener_disc; seed_meter; seed_hopper; seed_tube; ball_bearing; steel_bolt; tyre; hydraulic_hose; hydraulic_cylinder; hydraulic_fluid; wiring_harness; controller; electric_drive; diesel_engine; transplant_claw; seedling_rack; hydrostatic_drive; assembly_power; test_power; test_diesel; test_co2; test_no2; pe_film; corrugated_board; dilution_water; spent_cutting_fluid; polyisocyanate_hardener; purchased_main_frame; purchased_row_frame | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

应用normalize_mass前，保持单一声明配置及匹配时期。按各协议取得q_item：有效退回后的净原料/零件领用、可归属表计消耗或实测废物/排放，除以同一配置的验收机器数量。废品及返工负担由验收产出承担，不得除以全部投产数量。不同实测M的数据集只有在保留配置特定记录后才能按质量加权。单位转换及分摊在原始记录上完成，并另留计算凭据；本PCR不提供通用消耗范围、密度或排放因子。

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_identity | all_flows | 匹配实际零件/材料牌号、交付状态、浓度、地理、参考属性及单位；UUID仅提供身份，不提供数量依据或供应方数据集；交换完全链接前解决空身份。 | 供应商资料；流/属性/单位记录；身份审查 |
| quality_completeness | complete_machine | 将配置物料清单全部部件、流体及可拆卸件核对至M；清点实际公用工程、化学品、每项废物及排放；缺失零件须测量，不按M残差臆造；报告覆盖及未链接供应方。 | 物料清单修订；称量表；物料平衡；缺失数据登记 |
| quality_period | production_records | 采用一个声明工厂及完整代表时期；记录型号变化、季节性、空载需求、外包及返工；量化一手覆盖与不确定性；历史产品案例不替代当前生产记录。 | 工单；验收台账；表计校准；来源限制 |
| quality_test | acceptance | 对实际安装的排种器转动/精量排种或栽苗机构、驱动、液压回路与电子系统采用实际放行验收标准；不设任意田间性能或耐久门槛。 | 签署测试方案及关联序列号/配置的测试结果 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | 要求1 kg参考输出、cp_mass取得的实测M、完整配置、空作物料箱、包装排除及一致留存流体状态；缺失验收/质量依据不得声称数据集完整。 |  |
| validation_normalization | inventory | 每个适用的非参考行采用normalize_mass及声明协议；核对q_item与M配置/时期相同、除法方向正确且能量/体积/件数分子单位保留。 |  |
| validation_route | processes | 按工单匹配自制/外购、焊接方法与涂装路线；钢材及成品自制件、外购总成及其内部零件、内部回收、轮胎/发动机件数与质量不得重复计入。 | greatplains-corporate-1602e |
| validation_species | elementary_flows | 核对化石/生物源碳、NO2与NO/NOx/N2O差异、粒径、室外空气子介质及控制边界；物种或介质未知仍为缺口；废水送处理不是淡水排放。 |  |
| validation_coverage | dataset | 区分实测、计算、估算、排除、不适用及缺失数量；核对验收产出、废料、库存及分摊闭合；方法检查或投影有效不等于科学方法学批准，也不证明从摇篮到工厂门完整性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 用于明确配置与时期的有记录制造模块；只有建立供应商/运输/处理覆盖后方用于上游连接评价。 |
| excluded_use | 每公顷种植服务、作物产量比较、按寿命归一化的声明、播种机与移栽机的通用等价性及无依据的完整从摇篮到工厂门声明。 |
| required_metadata | PCR标识；型号/配置/物料清单及序列号范围；实测M及流体状态；验收标准；场址/时期；自制/外购及工艺路线；参考基准；供应方及运输；包装；分摊；数据来源；版本。 |
| required_quality_disclosure | 实测覆盖、缺失身份/供应方及数量、路线排除、来源年龄/限制、转换条件、分摊依据、排放监测缺口、不确定性及独立审查状态。 |
| update_trigger | 物料清单或配置变化；验收试验修订；供应商/工序/涂装或能源供应变化；新代表生产时期；身份或证据缺口解决。 |

## 11. 数据源

| Source id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| greatplains-corporate-1602e | handbook | Great Plains Manufacturing企业手册1602E-CORP，未标日期版本，含2017年事件；PDF第11页（无印刷页码的Salina制造页）。https://cdn-assets.greatplainsmfg.com/ag_files/1602e-corp-corporate-brochure-web.pdf | 历史播种机制造实例：制造、激光/等离子、焊接、CNC、涂装与装配；不采用设备数量、产率、当前路线、机重或消耗要求。 |
| kubota-transplanter-2020 | literature | Kubota Technical Report No.53，2020年1月，Development of Diesel Rice Transplanter NW6S/8S for Domestic Market；印刷/PDF第21–28页；第24页§4.1.1及图3–5。https://www.kubota.com/innovation/report/no53/data/tech_report_no53_en.pdf | 型号特定机架、树脂零件与传动变化说明应保留物料清单/配置及实际质量；不将历史减重、寿命、田间性能或节肥量移用于制造参考。 |
