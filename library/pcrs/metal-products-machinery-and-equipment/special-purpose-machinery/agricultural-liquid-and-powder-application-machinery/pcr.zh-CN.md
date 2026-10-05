---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.agricultural-liquid-and-powder-application-machinery
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 农业液体与粉末喷施机械制造

## 1. 范围与适用性

制造完整地面农业/园艺液体喷雾机及气流喷粉器：人工携带、拖拉机悬挂及牵引配置。各型号明确为仅液体、仅粉末或有文件依据的可转换设备。所含泵、容器、喷嘴/歧管、喷杆或风机、计量、驱动、防护罩及供货控制属于完整验收供货。

排除相邻material PCR覆盖的颗粒肥料/粪肥撒施机、浆液运输罐车及土壤注入机、纯灌溉系统、热雾机、航空器及自行运载车辆、拖拉机、单售零件、农药/肥料、农场施用、作物产量、维护与报废。不定义施用服务参考。此较窄制造边界不表明机器之间农艺等价。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.agricultural-liquid-and-powder-application-machinery |
| classification_refs | CPC 3.0 44150; narrower ground-based manufacturing scope, no mapping acceptance |
| covered_products | 完整携带/悬挂/牵引液体喷雾机及气流喷粉器；各配置分别声明。 |
| excluded_products | 颗粒撒施机、浆液注入机、纯灌溉系统、热雾机、航空器/运载车辆、独立零件及田间服务。 |
| representative_product | 一台药箱、泵及喷嘴配置明确的空箱验收悬挂或牵引喷雾机；粉末数据集保留实际计量/气流路径。 |
| production_route | 接收原料与零件 → 条件性场内金属制造、连接、涂装及容器成形 → 配置装配/加注 → 出厂测试/返工 → 发运。 |
| market_state | 新制完整验收设备；喷施药箱/料斗为空，记录流体状态，运输包装排除于产品净质量。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造交付一台具有声明液体喷雾或干粉弥散功能的完整设备；农场施用不在本数据集内。 |
| How much | 1 kg同一明确配置的验收合格净整机；这是完整机器的归一化份额，不是可独立使用的1 kg零件。 |
| How well | 符合已放行图纸/物料清单及实际验收规范：药箱/料斗、泵或气流路径、喷嘴/计量配置、检漏/压力/控制测试及供货边界；记录功能测试依据，不假定田间产量。 |
| How long or cycle | 一个制造及验收周期；使用寿命与作业公顷数未规定，不得推断。 |
| reference_flow_link | `finished_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 农业或园艺用的液体或粉末投射、弥散或喷射用机械设备 `add1cc52-3d10-40c4-864c-97e4a4c428e7` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号/修订；序列号/批次；携带/悬挂/牵引；液体/粉末/可转换；药箱/料斗材质、容量及空箱状态；泵、压力及喷嘴或计量/风机配置；如安装则记录喷杆幅宽；驱动、发动机及液压/电气选项；PTO及防护罩；所含可拆卸件；实际验收标准；净质量M；留存油/燃料状态；工厂/时期；自制/外购；成形/表面处理路线；起始状态；上游覆盖；包装排除 |

以上配置限定将宽泛参考身份收窄，不授权合并不同机器。数据集元数据或参考流备注必须声明所有限定；缺失则参考定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| electricity_units | fabrication_power; welding_power; coating_power; assembly_power; test_power | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电力能量基准：归一化前将记录的kWh按3.6 MJ/kWh换算为MJ。此身份采用能量属性，不表示质量或燃料热值测量。 |
| volume_units | hydraulic_fluid; curing_gas; test_petrol | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 采用有温度依据的实测体积；气体还需压力与标准状态约定；升按0.001 m3/L换算。质量记录需声明条件下的实际密度，不采用通用密度。 |
| count_units | tyre | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 按明确零件类型保留安装件数，同时采集净零件质量用于物料清单核对。件数不是kg，不规定通用每件质量换算。 |

按与物料清单一致的留存流体/燃料状态在验收后测量M：包括已加注流体，排除运输包装及牵引农具及外部载荷。属于验收供货范围的可拆卸零件与机器一起称量，或以可追溯称量补入。保留配置实际测量质量，不在无关联变型间平均。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在制造场址接收的外购原料与成品部件；其生产不自动纳入前景覆盖。 |
| starting_condition_role | 制造模块所声明的物料/总成起点。 |
| product_classification_scope | 语义完整地面液体喷雾机及气流喷粉器；CPC 3.0 44150仅提供分类语境。 |
| recursive_input_rule | 来料半装配机器或喷施系统总成是明确外购投入，须声明内部零件及上游边界。追溯止于声明供应，不得递归重复纳入同一总成或内部原料。 |
| upstream_dataset_requirement | 扩展研究需要上游影响时，另行连接相容的供应商/材料数据集及交付运输；披露实际地理、技术、牌号与边界；缺失供应方仍为覆盖缺口。 |
| disclosure | 报告工厂/时期、自制与外购区分、外包表面处理、测试配置、运输覆盖、包装、废物处理及缺失流；单独制造模块不是完整从摇篮到工厂门结果。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_manufacturing | foreground | 纳入所有实际接收至验收活动、可归属公用工程、损耗、返工及场内搬运；条件工序仅在发生时纳入；外购成品零件采用供应商边界，不重复制造。 | hardi-factory |
| boundary_configuration | complete_machine | 覆盖声明空箱验收供货内全部容器、泵/气流路径、喷嘴、计量闸门、喷杆、驱动与控制。HARDI及STIHL文件说明不同配置，不是强制共同零件。 | hardi-lbtb; stihl-sr450 |
| boundary_exclusions | downstream | 排除田间药剂、水及作物排放；不将减药、增产或漂移收益归于制造；仅记录实际出厂试验交换。 |  |
| boundary_emissions | elementary_outputs | 按控制后的实际物种与受纳介质记录；送处理废水为废物交换；处理后直接排放需按实测物质及正确受纳水体子介质设行；不因工序名称就假定排放必然发生。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| molding | 药箱及料斗成形 | conditional | 仅在本场址成形聚合物药箱/料斗时纳入；外购成品容器替代此工序。 | foreground_production | 每 1 kg 参考流 |
| fabrication | 切割、成形与机加工 | conditional | 仅纳入声明的前景边界内实际进行的操作；否则记录外购成品零件。 | foreground_production | 每 1 kg 参考流 |
| welding | 喷雾机底架及喷杆焊接 | conditional | 仅在场内生产喷雾机底架或喷杆焊接件时纳入；其他焊接方法需不同焊丝/气体卡。 | foreground_production | 每 1 kg 参考流 |
| coating | 表面预处理与涂装 | conditional | 仅纳入场内涂装；区分粉末、液体及加热路线。 | foreground_production | 每 1 kg 参考流 |
| assembly | 配置整机装配与加注 | required | 所有产品；保留配置特定的外购零件覆盖。 | foreground_production | 每 1 kg 参考流 |
| acceptance | 出厂验收与返工 | required | 所有产品；实际测试方法决定条件性交换。 | foreground_production | 每 1 kg 参考流 |
| packing | 发运保护与包装 | conditional | 仅纳入出厂前实际使用的保护包装。 | foreground_production | 每 1 kg 参考流 |

按配置物料清单核对供货药箱/料斗、盖/滤网、泵、软管、阀/歧管、喷嘴芯、喷杆、风机/风道、计量、PTO/发动机/电机、背带或轮、防护罩及控制。外购已加注部件不重复加注；外购药箱替代场内树脂/成形。实际缺失零件、化学品及废物分别补入。出厂试验采用实际批准介质；如用农药或粉末替代试料，须具体成分行及处置依据，不假定作物投入。

以下为一个制造模块的子活动。通过工单追踪内部自制件，但不将同一内部转移再记为外部采购投入。流卡定义具体起始交换；缺失的物料清单零件、每一种实际化学品、燃料、包装组件、废物及排放均需补为独立原子行。条件性缺省需路线依据；身份未解决或数量未测量不等于零。

### 过程：药箱及料斗成形（`molding`）

仅在本场址成形聚合物药箱/料斗时纳入；外购成品容器替代此工序。

#### 输入

##### 产品流

###### 滚塑级聚乙烯粉末 （`pe_resin`）

仅限场内实际成形声明药箱/料斗的聚乙烯原料；保留牌号、原生来源、粉末形态、添加剂及扣退回领用质量；通用PE身份须实际供应商牌号限定；单独外购添加剂须原子行。

- 选定流： 滚塑级聚乙烯粉末
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_molding。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_molding`

###### 交流电 （`molding_power`）

仅在场址发生时计量电加热药箱成形、冷却及修边；燃气热源需独立燃料计量行及燃烧排放。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_molding。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_molding`

#### 输出

##### 废物流

###### 废弃聚乙烯成形修边料 （`pe_trim`）

仅限离场送处理/回收的PE修边料；记录聚合物牌号、添加剂及净称量质量；内部清洁回用料为内部循环。

- 选定流： 废弃聚乙烯成形修边料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_molding。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_molding`

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

仅限喷雾机底架或喷杆结构实际使用的明确矩形碳钢型材；记录牌号、几何及扣除退回后的领用量。

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

计量切割、折弯、机架/泵座钻孔与机加工用电，包括可归属的抽风及压缩空气设备。此身份仅适用于交付电压低于1千伏的电网平均供电；注明实际国家和供电数据集。

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

### 过程：喷雾机底架及喷杆焊接（`welding`）

仅在场内生产喷雾机底架或喷杆焊接件时纳入；其他焊接方法需不同焊丝/气体卡。

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

仅适用于粉末涂装；记录单一供应配方、树脂及颜色批次，以及扣除回收退库粉末后的消耗质量；不规定通用固化周期或膜厚；实际采用液体涂料、喷砂或化学预处理时须补充配方明确的独立投入及废物记录后才可声称覆盖。

- 选定流： 涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
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

###### 成品钢制农业喷雾机底架 （`purchased_frame`）

仅限外购底架；记录所含焊接机架及表面处理；场内钢制造为替代路线，不重复。

- 选定流： 成品钢制农业喷雾机底架
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品聚乙烯农业喷雾药箱 （`spray_tank`）

仅限外购成形液体药箱；记录聚合物牌号、容量、壁结构及所含盖/滤网；树脂不是成品药箱。

- 选定流： 成品聚乙烯农业喷雾药箱
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品农业喷雾隔膜泵 （`liquid_pump`）

仅限指定外购完整隔膜泵，声明压力/流量验收基准及所含驱动；活塞泵需另设独立行。

- 选定流： 成品农业喷雾隔膜泵
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品陶瓷农业喷雾喷嘴芯 （`spray_nozzle`）

每个交换只含一种明确陶瓷芯；记录安装件数及净质量、安装壳体边界和喷型；聚合物喷嘴须独立行。

- 选定流： 成品陶瓷农业喷雾喷嘴芯
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品农业喷雾液体过滤器 （`liquid_filter`）

记录网孔、壳体材质、滤芯边界及实际质量；已包含于供应泵/药箱时不重复。

- 选定流： 成品农业喷雾液体过滤器
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品增强橡胶农药喷雾软管 （`spray_hose`）

记录一种明确软管牌号、内径、长度、压力及净质量；液压软管为不同回路及身份。

- 选定流： 成品增强橡胶农药喷雾软管
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品液体喷雾压力调节阀 （`pressure_valve`）

记录材质、实际规范控制压力范围及所含表计/歧管边界；不假定通用压力。

- 选定流： 成品液体喷雾压力调节阀
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品聚乙烯喷粉器料斗 （`powder_hopper`）

仅限干粉配置；记录型号指定的封闭、计量出口及防静电措施；净质量验收时为空。

- 选定流： 成品聚乙烯喷粉器料斗
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品喷粉器计量闸门 （`powder_meter`）

仅限一种实际干粉计量闸门总成，记录所含执行器及质量；螺旋计量须独立行。

- 选定流： 成品喷粉器计量闸门
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品农业弥雾喷施风机总成 （`blower`）

记录实际轴流或离心结构、壳体及所含驱动、净质量与风道装配；每个数据集一种配置。

- 选定流： 成品农业弥雾喷施风机总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品绝缘铜制喷雾机线束 （`wiring_harness`）

仅限安装电控；声明连接器/导体边界及实际质量；所含铜不在这里再列来料。

- 选定流： 成品绝缘铜制喷雾机线束
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品农业喷雾机电子控制单元 （`controller`）

记录指定阀段控制及所含传感器；避免重复集成部件。

- 选定流： 成品农业喷雾机电子控制单元
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品农业喷雾机带防护罩动力输出轴 （`pto_shaft`）

仅限拖拉机驱动配置；记录轴尺寸、接头、所含防护罩及质量；拖拉机在本产品供货范围外。

- 选定流： 成品农业喷雾机带防护罩动力输出轴
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品农业喷雾泵电动机 （`electric_motor`）

仅限安装的独立电动泵驱动；记录额定电压/输出、所含控制器及净质量。

- 选定流： 成品农业喷雾泵电动机
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品背负式弥雾机火花点火发动机 （`petrol_engine`）

仅限携带式装置实际供货发动机模块；记录冲程结构、所含风机、排气系统及质量。

- 选定流： 成品背负式弥雾机火花点火发动机
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 轮胎 （`tyre`）

仅限声明拖车尺寸的已安装充气橡胶轮胎；采集Item(s)及零件净质量用于物料清单核对，明确是否含轮辋。

- 选定流： 轮胎 `11c2e97a-624f-41de-957d-543cddb777ef`
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
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

记录以低于1千伏电网供电的出厂液体/粉末机构检查、液压检漏及控制检查；注明测试时间与返工。

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

###### 自来水 （`test_water`）

用于药箱/管路压力、检漏、喷嘴流量及冲洗试验的新自来水；实际净取水与复用、回收水及废水分别记录；不纳入农场喷施药液。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

###### 汽油 （`test_petrol`）

仅限配置出厂试验发动机实际燃烧的无铅汽油实测体积；记录m3（或换算的升）、温度及实际组成；kg领用需实测密度；二冲程油及未燃留存燃料另记。

- 选定流： 汽油 `1611d42e-3a3f-46ff-b994-466fa33ca65d`
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

###### 配方二冲程发动机混配油 （`two_stroke_oil`）

仅在工厂测试实际需此供货配方时纳入；与汽油分开称量，采用有文件依据的型号混配要求，不设通用混配比。

- 选定流： 配方二冲程发动机混配油
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

###### 农业或园艺用的液体或粉末投射、弥散或喷射用机械设备 （`finished_machine`）

1 千克验收合格的完整机器，通过实测整机净质量M及同一配置记录表述；运输包装及独立销售农具不计入产品质量。

- 选定流： 农业或园艺用的液体或粉末投射、弥散或喷射用机械设备 `add1cc52-3d10-40c4-864c-97e4a4c428e7`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_mass`

##### 废物流

###### 收集的喷雾机出厂试验废水 （`test_wastewater`）

仅限移交处理的水性流；记录实测液体质量、污染物及去向；清水循环为内部过程，不是新水投入或排放污染物。

- 选定流： 收集的喷雾机出厂试验废水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

##### 基本流

###### 二氧化碳（化石源） （`test_co2`）

仅记录实际出厂发动机测试有依据的化石源室外空气二氧化碳排放，子介质未特指；采用实测排放或核验的场址燃料碳平衡；生物源碳为不同流。

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
| allocation_direct | manufacturing | 优先使用直接计量或工单领用交换。按cp_allocation，将其余共享公用工程按实测因果驱动分摊：机加工/焊接运行时间结合实测功率；成形加热器时间/负载结合实测批次需求；涂装载荷面积结合实测批次消耗；装配/试验工位时间结合实测工位需求。记录驱动覆盖，并将分摊量加排除量核对至原始表计。 |  |
| allocation_variants | product_mix | 配置或能耗不同的变型不得全部按机器台数分摊。质量或经济基准后备方法需有前景依据、不确定性敏感性及审查，不是本PCR规定的默认方法。 |  |
| allocation_scrap | steel_offcuts | 保留材料投入及单独实测的废钢输出，不自动给予避免钢生产抵扣；有关时报告废钢价格与去向；共产品分类或回收抵扣需另行声明且经审查的模型，防止重复抵扣；内部循环回收粉末不是可销售共产品。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | finished_machine | measurement | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每个验收配置及有可追溯覆盖的抽样序列号 | 与活动记录相同的制造时期 | 一个声明场址的验收完整供货 | 每台验收净质量 | 秤校准；空药箱/料斗；留存流体状态；可拆卸部件质量；验收签署 |
| cp_molding | molding | 本过程各原子行 | measurement | 聚合物牌号；树脂领用/退回；加热MJ；修边/回用料；药箱配置 | 分别称量树脂及外送修边料；计量成形、冷却与修边，核对内部回用；保留实际树脂/添加剂配方及自制/外购记录。 | kg; MJ | 每批次/工单；每次测试；按月核对 | 一个完整声明生产年，或有理由的更短完整批次；与验收数量时期一致 | 相同场址及配置；明确外包工作边界 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存核对；验收数量；排除需求；缺失记录披露 |
| cp_fabrication | fabrication | 本过程各原子行 | measurement | 零件/牌号；机架型材领用；原料领用/退回；切屑/边角料；切削液质量；kWh；工单 | 分别称量每项原料/耗材及外送钢废料；各工序计量；核对原料、自制件、留存及废料。 | kg; MJ | 每批次/工单；每次测试；按月核对 | 一个完整声明生产年，或有理由的更短完整批次；与验收数量时期一致 | 相同场址及配置；明确外包工作边界 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存核对；验收数量；排除需求；缺失记录披露 |
| cp_welding | welding | 本过程各原子行 | measurement | 焊丝牌号；焊丝盘领用/退回；气瓶气体质量；kWh；过滤粉尘；室外颗粒物分析；运行时间 | 采用焊接工单、校准表计、气瓶称量及控制后实际排放采样；保留粒径未知情况；另留过滤废物记录。 | kg; MJ | 每批次/工单；每次测试；按月核对 | 一个完整声明生产年，或有理由的更短完整批次；与验收数量时期一致 | 相同场址及配置；明确外包工作边界 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存核对；验收数量；排除需求；缺失记录披露 |
| cp_coating | coating | 本过程各原子行 | measurement | 配方；浓度；新粉；回收退库；面漆基料；固化剂；混合比；冲洗水质量；MJ；气体m3及状态；液体废物质量；化石碳分析 | 分别记录化学品批次及消耗、新水、固化炉电力/燃料、废物移出及实际监测排放；回收循环属于内部；核对零件留存涂层、损耗及库存。 | kg; m3; MJ | 每批次/工单；每次测试；按月核对 | 一个完整声明生产年，或有理由的更短完整批次；与验收数量时期一致 | 相同场址及配置；明确外包工作边界 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存核对；验收数量；排除需求；缺失记录披露 |
| cp_assembly | assembly | 本过程各原子行 | measurement | 物料清单零件号；供应商边界；安装件数；各零件净质量；加注流体体积/密度；退回零件；kWh；配置 | 采用配置受控物料清单及外购零件领用/退回记录；称量相关各部件类型；发动机保留Item(s)，液压油保留m3；保留电气及液压验收要求。 | kg; m3; Item(s); MJ | 每批次/工单；每次测试；按月核对 | 一个完整声明生产年，或有理由的更短完整批次；与验收数量时期一致 | 相同场址及配置；明确外包工作边界 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存核对；验收数量；排除需求；缺失记录披露 |
| cp_acceptance | acceptance | 本过程各原子行 | measurement | 序列号/配置；图纸修订；测试方法/时间；合格/不合格；返工；MJ；柴油kg；汽油m3/温度/密度；试验水质量；复用；废水质量/分析；粉末试料组成；燃料化石碳；单独测量NO2 kg；M | 按适用性保留药箱及管路检漏、泵压力/流量、单个喷嘴供液、喷杆折叠、喷粉计量开闭、风机/风道功能、PTO防护罩与安装控制的签署验收记录；计量台架能量与燃料，记录实际排气物种和返工；区分田间演示及出厂验收。 | kg; m3; MJ | 每批次/工单；每次测试；按月核对 | 一个完整声明生产年，或有理由的更短完整批次；与验收数量时期一致 | 相同场址及配置；明确外包工作边界 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存核对；验收数量；排除需求；缺失记录披露 |
| cp_packing | packing | 本过程各原子行 | measurement | 聚乙烯薄膜质量；瓦楞纸板楞型/纤维/再生成分；领用/退回；发运序列号 | 分别称量实际使用的各包装组件，核对退回及发运配置，包装质量排除于M之外；另用木材/钢制保护件须各设独立行。 | kg | 每批次/工单；每次测试；按月核对 | 一个完整声明生产年，或有理由的更短完整批次；与验收数量时期一致 | 相同场址及配置；明确外包工作边界 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存核对；验收数量；排除需求；缺失记录披露 |
| cp_allocation | manufacturing | shared_demand | measurement | 公用工程总量；实测功率/负载；运行时间；涂装面积；验收配置数量；排除需求 | 尽可能分表计量；测量共用设备/炉/工位负载及因果驱动，并记录各共享交换采用该驱动的理由。 | MJ; h; m2 | 每个共用批次与每月核对 | 相同生产区间 | 该场址全部消耗产品与排除操作 | 按实测因果需求分摊总量；再汇总可归属数量 / 验收机器数量 | 分表一致性；总量闭合；驱动不确定性；敏感性；批准记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | carbon_plate; hollow_section; cutting_fluid; fabrication_power; steel_offcuts; selfshielded_wire; welding_power; welding_pm_air; powder_paint; wash_water; coating_power; curing_gas; powder_waste; pretreatment_wastewater; curing_co2; hydraulic_hose; hydraulic_fluid; assembly_power; test_power; test_diesel; test_co2; test_no2; pe_film; corrugated_board; dilution_water; spent_cutting_fluid; purchased_frame; spray_tank; liquid_pump; spray_nozzle; liquid_filter; spray_hose; pressure_valve; powder_hopper; powder_meter; blower; wiring_harness; controller; pto_shaft; electric_motor; petrol_engine; tyre; test_water; test_wastewater; pe_resin; molding_power; pe_trim; test_petrol; two_stroke_oil | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

应用normalize_mass前，保持单一声明配置及匹配时期。按各协议取得q_item：有效退回后的净原料/零件领用、可归属表计消耗或实测废物/排放，除以同一配置的验收机器数量。废品及返工负担由验收产出承担，不得除以全部投产数量。不同实测M的数据集只有在保留配置特定记录后才能按质量加权。单位转换及分摊在原始记录上完成，并另留计算凭据；本PCR不提供通用消耗范围、密度或排放因子。

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_identity | all_flows | 匹配实际零件/材料牌号、交付状态、浓度、地理、参考属性及单位；UUID仅提供身份，不提供数量依据或供应方数据集；交换完全链接前解决空身份。 | 供应商资料；流/属性/单位记录；身份审查 |
| quality_completeness | complete_machine | 将配置物料清单全部部件、流体及可拆卸件核对至M；清点实际公用工程、化学品、每项废物及排放；缺失零件须测量，不按M残差臆造；报告覆盖及未链接供应方。 | 物料清单修订；称量表；物料平衡；缺失数据登记 |
| quality_period | production_records | 采用一个声明工厂及完整代表时期；记录型号变化、季节性、空载需求、外包及返工；量化一手覆盖与不确定性；历史产品案例不替代当前生产记录。 | 工单；验收台账；表计校准；来源限制 |
| quality_test | acceptance | 对实际安装的药箱/管路密封、泵/喷嘴流量、压力调节、喷粉计量、气流路径、液压与控制采用实际放行验收标准；不设任意田间性能或耐久门槛。 | 签署测试方案及关联序列号/配置的测试结果 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | 要求1 kg参考输出、cp_mass取得的实测M、完整配置、声明空药箱/料斗及供货、包装排除及一致留存流体状态；缺失验收/质量依据不得声称数据集完整。 |  |
| validation_normalization | inventory | 每个适用的非参考行采用normalize_mass及声明协议；核对q_item与M配置/时期相同、除法方向正确且能量/体积/件数分子单位保留。 |  |
| validation_route | processes | 按工单匹配自制/外购、焊接方法与涂装路线；钢材及成品自制件、外购总成及其内部零件、内部回收、发动机件数与质量不得重复计入。 | hardi-factory |
| validation_species | elementary_flows | 核对化石/生物源碳、NO2与NO/NOx/N2O差异、粒径、室外空气子介质及控制边界；物种或介质未知仍为缺口；废水送处理不是淡水排放。 |  |
| validation_coverage | dataset | 区分实测、计算、估算、排除、不适用及缺失数量；核对验收产出、废料、库存及分摊闭合；方法检查或投影有效不等于科学方法学批准，也不证明从摇篮到工厂门完整性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 用于明确配置与时期的有记录制造模块；只有建立供应商/运输/处理覆盖后方用于上游连接评价。 |
| excluded_use | 农场液体/粉末施用服务、作物产量比较、按寿命归一化声明、不同施用配置的通用等价性及无依据的完整从摇篮到工厂门声明。 |
| required_metadata | PCR标识；型号/配置/物料清单及序列号范围；实测M及流体状态；验收标准；场址/时期；自制/外购及工艺路线；参考基准；供应方及运输；包装；分摊；数据来源；版本。 |
| required_quality_disclosure | 实测覆盖、缺失身份/供应方及数量、路线排除、来源年龄/限制、转换条件、分摊依据、排放监测缺口、不确定性及独立审查状态。 |
| update_trigger | 物料清单或配置变化；验收试验修订；供应商/工序/涂装或能源供应变化；新代表生产时期；身份或证据缺口解决。 |

## 11. 数据源

| Source id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| hardi-factory | handbook | HARDI Australia，Global Made Local制造商网页，Adelaide制造段落。https://hardi.com/en-au/our-company/global-made-local | 焊接、粉末喷涂/烘烤、装配及测试实例；未标日期网页快照，不采用年工厂总量、工时或按产品归一化消耗。 |
| hardi-lbtb | handbook | HARDI LB/TB说明书674087-GB-96/2（历史版本），Description，PDF/印刷第5页。https://www.hardiinternational.com/application/files/9515/3424/6237/674087_LB_TB_GB.pdf | 历史型号特定药箱、泵、压力控制、过滤器、陶瓷喷嘴、PTO及风机部件边界；实际当前物料清单及验收协议决定数据集，不施加规格数值。 |
| stihl-sr450 | handbook | STIHL USA，SR 450 Gasoline Backpack Sprayer制造商产品网页，Product Details及喷雾/喷粉多功能说明。https://www.stihlusa.com/en/p/mistblowers-sprayers-sr-450-gasoline-backpack-sprayer-1027378 | 型号特定喷雾/喷粉转换及背负式供货配置；不将颗粒操作、输送率、运行燃油混配比及农场性能移用于制造参考。 |
