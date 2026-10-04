---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machinery-used-in-the-milling-industry-or-for-the-working-of-cereals-or-dried-leguminou-52304b89
status: candidate
language: zh-CN
sync_with: pcr.en-US.md
---

# 非农用谷类碾磨及干豆加工机械

## 1. 范围与适用性

本方法覆盖完整非农用粮食碾磨或谷类及干豆加工机器制造：辊磨、石磨、锤磨或冲击研磨、稻谷脱壳、碾白抛光、干豆脱壳分瓣及主要功能确属本类别的面粉专用筛理。保留实际原料物种及供应配置，不局限小麦辊磨一个子型。来源：`un-cpc-44513`；`buhler-pulses`；`satake-polisher`。

排除农用型设备及单独分类种子粮食清洗分选分级机器、独立供应零件、单独干燥包装输送储存及热加工食品机器。筛理已磨面粉不同于原粮分级；混合功能按实际主要功能审查。整条工艺链宣传不能将全部邻接机器放入本PCR。吸风、传感、气动调节及工具按实际供应范围纳入，独立工厂服务不自动并入。来源：`un-cpc-44513`；`buhler-plansifters`；`buhler-pulses`。

Diorit说明铸铁机架、食品接触材料及可配置辊组控制。Engsko建立不同石磨路线及矿物复合磨石；Satake HR10DDF-T说明胶辊、气动辊压力及脱壳吸风替代组件。KB抛光采用选定辊及筛。这些原始正文说明定性替代，不建立通用合金、橡胶配方、材料比例、产能功率、工厂试验时长、质量、产率或寿命。实际交付物料及自制外购确定清单。来源：`buhler-diorit-2019`；`engsko-europemill`；`satake-husker`；`satake-polisher`。

实际完整非农用机器在碾磨边界内加工谷类时，原粮调质润湿仍覆盖。HS2022第84章将原粮润湿机明确归8437而非8419；8437.10清选、8437.80其他机器及8437.90零件保持不同。不能仅因调质改变温度排除原粮润湿机；独立干燥机和无关热加工食品机器仍须其自身主要功能分类。声明实际计量加液、湿侧接触、混合、泵阀传感接口及随附附件；安装水和用户粮食加工负荷仍属下游。来源：`wco-hs2022`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machinery-used-in-the-milling-industry-or-for-the-working-of-cereals-or-dried-leguminou-52304b89 |
| classification_refs | CPC3.0:44513 |
| covered_products | 完整非农用谷类或干豆磨机、脱壳机、碾白或抛光机及制粉专用筛理机，包括实际原粮调质润湿机器 |
| excluded_products | 农用型机器；独立供应种子或粮食清洗分选分级机、干燥机、包装机、输送储存、无关热加工食品机器及独立零件；混合线须逐项审查 |
| representative_product | 同一实际配置的完整验收设备，无代表重量 |
| production_route | 实际机械制造、研磨表面供应、表面处理、传动控制及工厂试验；自制或外购 |
| market_state | 完整验收交付配置，包括实际随附部件及初始保留润滑剂；净质量排除包装及试粮 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应一台非农用谷类或干豆加工机器，不是用户碾磨服务 |
| How much | 1 kg 同一配置验收净整机质量 |
| How well | 满足声明物料、机构、卫生、安全及实际验收计划 |
| How long or cycle | 一个制造交付期间，无默认寿命 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 粮食碾磨工业用机械或谷类或干豆类植物加工用机械，农用机械除外 `777a709f-59dc-4927-843f-2e9546f5495e` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 非农用工业功能；型号修订；原料物种；磨辊石磨锤磨脱壳碾白抛光筛理机构；牌号及食品接触；供应附件或吸风边界；初始保留填充；自制外购；实际试粮与验收；校准净质量和N；场址期间；公用工程接口；废物排放及不确定性 |

限定须在数据包声明；宽类别参考流不建立工厂配方、数量或性能默认值。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `physical_basis` | material/water/species | 质量 | kg | 各项采用自身含量、水分、干湿基准、温度密度、库存、反应及返回，总量不是元素量。 |
| `utility_basis` | energy and gases | 交付能量或体积 | MJ; m3 | 电力1 kWh=3.6 MJ；气体保留m3及实际温压或声明标准条件，质量转换采用相应实测密度；热供回各质量乘自身共同零点焓，总已净区别，返回仅扣一次。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `gate` | foreground | 纳入从收料、场内制造、机械或控制装配、集成、工厂试验或返工、公共服务、废物及包装至验收放行的实际操作。 |  |
| `make_buy` | supplier_interface | 各部件选择实际自制或外购状态：完整外购机架、磨辊、磨石、电机或控制板的嵌入投入计一次；自制改用实际原料及操作。仅计后续场内工作。内部转移成对，不把场内中间品列为外购。 |  |
| `factory_use` | production | 纳入实际工厂负载碾磨试验、试粮、清洗水、电力及消耗润滑剂，回收试粮采用实测返回及库存。用户碾磨、面粉或米或豆输出及下游工厂运行不是设备制造输出。 |  |
| `bom_extension` | route | 卡片为具体条件性锚点，不是通用配方。审查实际物料清单、配方、试料、包装、燃料、废物和物种。增补每个缺失实际原子交换；仅有不存在证据时记录 not_applicable，未知不同于零。研磨表面配方未知须实际供应状态证据。 |  |
| `upstream` | links | 按实际牌号、状态、交付地理或电压及期间链接供应商生产和运输；计量废物转移后的外部处理与场内排放不同。供应商链接未完成时此工厂包不是完整摇篮到大门结果。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际投入供应牌号、完成状态和交付接口 |
| starting_condition_role | 工厂收料边界 |
| product_classification_scope | 完整非农用谷类或干豆磨机、脱壳机、碾白或抛光机及制粉专用筛理机，包括实际原粮调质润湿机器 |
| recursive_input_rule | 同类别外购前体上游计一次，仅展开后续场内操作，内部转移成对抵消 |
| upstream_dataset_requirement | 实际牌号、配方、状态、地理期间和供应商；缺口明确 |
| disclosure | 实际供应清单、自制外购、保留填充及工厂试料、条件不适用、分母及不确定性 |

### 配置与供应状态矩阵

| 配置 | 实际条件接口 | 证据限制 |
| --- | --- | --- |
| 辊磨 | 实际机架、磨辊、喂料、带传动及控制 | 铸铁机架及食品接触示例不是全机材料配方；水冷仅实际随附或试验 |
| 石磨 | 完整外购磨石或实际自制磨石 | 金刚砂燧石菱镁矿示例不是配方比例；外购磨石上游计一次 |
| 脱壳及抛光 | 实际胶辊或砂辊、筛筒、压力调节及随附吸风组件 | 不同机构；无默认橡胶化学、风机或试粮 |
| 干豆及冲击研磨 | 实际脱壳分瓣锤片或冲击表面 | 工艺链区分干燥清选，独立模块单独分类 |
| 制粉专用筛理 | 实际筛组、框架、筛布或筛网、悬挂及传动 | 木质或合成配置按实物；独立原粮分选排除 |
| 原粮调质润湿 | 实际计量加液湿侧混合及随附泵控制阀和供应范围 | HS第84章注2(A)(ii)在8419热加工品目之外保留原粮润湿于8437，无通用调质配方或用户能耗分配 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | 机架及机械制造 | conditional | 仅实际场内铸造机加工成形焊接及研磨表面精加工；外购完整部件不重复制造 | foreground | 每 1 kg 参考流 |
| `finish` | 清洗及防护表面处理 | conditional | 实际清洗涂装固化，区分食品接触及非接触状态 | foreground | 每 1 kg 参考流 |
| `integration` | 整机集成 | required | 实际完整研磨脱壳筛理传动控制及随附吸风和工具 | foreground | 每 1 kg 参考流 |
| `test` | 工厂试验及返工 | required | 实际验收计划，负载粮食试验仅实施时纳入，保留失败和重复试验 | foreground | 每 1 kg 参考流 |
| `dispatch` | 包装及验收放行 | required | 完整验收供应配置；包装及试粮不入净输出 | foreground | 每 1 kg 参考流 |
| `services` | 剩余公用工程及实际场内供能量（含发电量） | conditional | 仅共同期间未分配剩余及实际场内供能量（含发电量） | foreground | 每 1 kg 参考流 |

### 过程：机架及机械制造（`fabrication`）

仅实际场内铸造机加工成形焊接及研磨表面精加工；外购完整部件不重复制造。

#### 输入

##### 产品流

###### 低碳冷轧钢板 （`steel_sheet`）

仅实际供应牌号状态和场内路线。外购完成机架铸造计一次；自铸需增补实际炉料合金、铸型、黏结剂及废物行，不能用初级铸铁原料代理成品。

- 选定流：低碳冷轧钢板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 进一步加工的不锈钢平板材 （`stainless`）

仅实际供应牌号状态和场内路线。外购完成机架铸造计一次；自铸需增补实际炉料合金、铸型、黏结剂及废物行，不能用初级铸铁原料代理成品。 仅实际深加工不锈钢平板料，不适用于未经深加工板或完整磨机零件；供应商合金牌号及食品接触表面另核。

- 选定流：深加工不锈钢平板轧材 `add37984-82d6-4c91-85e3-9911c0135944`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：buhler-diorit-2019; buhler-plansifters

###### 直条热轧钢轴棒 （`steel_bar`）

仅实际供应牌号状态和场内路线。外购完成机架铸造计一次；自铸需增补实际炉料合金、铸型、黏结剂及废物行，不能用初级铸铁原料代理成品。

- 选定流：直条热轧钢轴棒
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 金属加工液浓缩液 （`cutting_fluid`）

仅实际供应牌号状态和场内路线。外购完成机架铸造计一次；自铸需增补实际炉料合金、铸型、黏结剂及废物行，不能用初级铸铁原料代理成品。

- 选定流：金属加工液浓缩液
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 未涂层钢焊丝 （`weld_wire`）

仅实际供应牌号状态和场内路线。外购完成机架铸造计一次；自铸需增补实际炉料合金、铸型、黏结剂及废物行，不能用初级铸铁原料代理成品。

- 选定流：未涂层钢焊丝
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 气态氩焊接供应 （`argon`）

仅实际供应牌号状态和场内路线。外购完成机架铸造计一次；自铸需增补实际炉料合金、铸型、黏结剂及废物行，不能用初级铸铁原料代理成品。 仅实际气态纯氩供应，保留纯度供应商及必要温压密度换算；液态混合气不可互换。

- 选定流：氩气 `f83a939c-a58f-44de-a593-d9c9ffb584e4`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 交付交流电 （`fabrication_electricity`）

实际分配过程负荷；公用服务仅同期间进口、场内供能量、出口及储能及子过程核对后的未分配公共剩余。身份仅中国1–35千伏用户接口，无重复全厂电表。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 外送未处理钢生产废料 （`scrap`）

一项实际外送废物流，测自身干湿化验、水分、库存返回和处理转移。捕集粮食、返回油或内部废料不是额外外购。其他实际试粮废物须分物种卡。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

##### 基本流

### 过程：清洗及防护表面处理（`finish`）

实际清洗涂装固化，区分食品接触及非接触状态。

#### 输入

##### 产品流

###### 聚酯粉末涂料配方 （`powder`）

仅有文件支持实际清洗或表面路线；须实际配方、自身含量水分、槽液库存回收及保留涂膜。食品接触适用性须声明，不能由涂料名称推定。

- 选定流：聚酯粉末涂料配方
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 异丙醇 （`ipa`）

仅有文件支持实际清洗或表面路线；须实际配方、自身含量水分、槽液库存回收及保留涂膜。食品接触适用性须声明，不能由涂料名称推定。 仅实际匹配中国生产化学供应，记录实际异丙醇含量和水分，不设默认浓度。

- 选定流：异丙醇 `a4a75541-e156-4e30-947c-ba067a682afd`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 工艺用水 （`water`）

仅有文件支持实际清洗或表面路线；须实际配方、自身含量水分、槽液库存回收及保留涂膜。食品接触适用性须声明，不能由涂料名称推定。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 管输天然气 （`gas`）

仅实际场内燃烧供应；保留组成温压密度及自身净热值；特定电厂项目燃气不是通用工厂气。

- 选定流：管输天然气
- 流属性/单位：体积 / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_gas。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_gas`
- 来源：

###### 外购天然气工业供热 （`heat`）

仅实际匹配中国天然气工业供热供应者，其他热需自身身份。供应商燃料在上游，不是虚构场内燃烧。

- 选定流：区域或工业热, 天然气 `eb581eb3-c707-41a0-b4e6-ee1854551714`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

###### 交付交流电 （`finish_electricity`）

实际分配过程负荷；公用服务仅同期间进口、场内供能量、出口及储能及子过程核对后的未分配公共剩余。身份仅中国1–35千伏用户接口，无重复全厂电表。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 工业清洗废水 （`wastewater`）

一项实际外送废物流，测自身干湿化验、水分、库存返回和处理转移。捕集粮食、返回油或内部废料不是额外外购。其他实际试粮废物须分物种卡。

- 选定流：工业清洗废水
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

###### 粉末涂装污泥 （`sludge`）

一项实际外送废物流，测自身干湿化验、水分、库存返回和处理转移。捕集粮食、返回油或内部废料不是额外外购。其他实际试粮废物须分物种卡。

- 选定流：粉末涂装污泥
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

##### 基本流

### 过程：整机集成（`integration`）

实际完整研磨脱壳筛理传动控制及随附吸风和工具。

#### 输入

##### 产品流

###### 铸铁碾磨机架成品 （`cast_frame`）

仅实际供应牌号状态和场内路线。外购完成机架铸造计一次；自铸需增补实际炉料合金、铸型、黏结剂及废物行，不能用初级铸铁原料代理成品。

- 选定流：铸铁碾磨机架成品
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：buhler-diorit-2019

###### 谷类研磨齿辊成品 （`roller`）

条件性实际随附部件牌号配方；完整外购状态上游计一次。须识别单独供应、部分完成、预填充及密封终身润滑状态，不再次填充或重复已含电机轴承筛及板材料。化学未知是采集缺口，不是通用配方或排除。

- 选定流：谷类研磨齿辊成品
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：buhler-diorit-2019

###### 稻谷脱壳胶辊成品 （`rubber_roll`）

条件性实际随附部件牌号配方；完整外购状态上游计一次。须识别单独供应、部分完成、预填充及密封终身润滑状态，不再次填充或重复已含电机轴承筛及板材料。化学未知是采集缺口，不是通用配方或排除。

- 选定流：稻谷脱壳胶辊成品
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：satake-husker

###### 完整复合研磨磨石 （`millstone`）

条件性实际随附部件牌号配方；完整外购状态上游计一次。须识别单独供应、部分完成、预填充及密封终身润滑状态，不再次填充或重复已含电机轴承筛及板材料。化学未知是采集缺口，不是通用配方或排除。

- 选定流：完整复合研磨磨石
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：engsko-europemill

###### 完整砂辊碾米研磨辊 （`abrasive_roll`）

条件性实际随附部件牌号配方；完整外购状态上游计一次。须识别单独供应、部分完成、预填充及密封终身润滑状态，不再次填充或重复已含电机轴承筛及板材料。化学未知是采集缺口，不是通用配方或排除。

- 选定流：完整砂辊碾米研磨辊
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：satake-polisher

###### 不锈钢碾磨筛成品 （`screen`）

条件性实际随附部件牌号配方；完整外购状态上游计一次。须识别单独供应、部分完成、预填充及密封终身润滑状态，不再次填充或重复已含电机轴承筛及板材料。化学未知是采集缺口，不是通用配方或排除。

- 选定流：不锈钢碾磨筛成品
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：satake-polisher

###### 聚酰胺制粉筛布 （`sieve`）

条件性实际随附部件牌号配方；完整外购状态上游计一次。须识别单独供应、部分完成、预填充及密封终身润滑状态，不再次填充或重复已含电机轴承筛及板材料。化学未知是采集缺口，不是通用配方或排除。

- 选定流：聚酰胺制粉筛布
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：buhler-plansifters

###### 完整工业感应电机 （`motor`）

条件性实际随附部件牌号配方；完整外购状态上游计一次。须识别单独供应、部分完成、预填充及密封终身润滑状态，不再次填充或重复已含电机轴承筛及板材料。化学未知是采集缺口，不是通用配方或排除。

- 选定流：完整工业感应电机
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 滚珠轴承成品 （`bearing`）

条件性实际随附部件牌号配方；完整外购状态上游计一次。须识别单独供应、部分完成、预填充及密封终身润滑状态，不再次填充或重复已含电机轴承筛及板材料。化学未知是采集缺口，不是通用配方或排除。 仅实际独立供货滚珠或滚柱轴承，匹配声明子型和净质量；不是风轮变桨轴承。

- 选定流：滚珠轴承或滚柱轴承 `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 硫化橡胶传动带 （`belt`）

条件性实际随附部件牌号配方；完整外购状态上游计一次。须识别单独供应、部分完成、预填充及密封终身润滑状态，不再次填充或重复已含电机轴承筛及板材料。化学未知是采集缺口，不是通用配方或排除。 仅实际硫化橡胶动力传动带及匹配供应牌号；不是未硫化带坯或输送服务。

- 选定流：硫化橡胶制的传动、输送带或胶带 `1e587e97-03a2-4c50-8226-f8446a1dd1d9`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：buhler-diorit-2019

###### 完整工业齿轮箱 （`gearbox`）

条件性实际随附部件牌号配方；完整外购状态上游计一次。须识别单独供应、部分完成、预填充及密封终身润滑状态，不再次填充或重复已含电机轴承筛及板材料。化学未知是采集缺口，不是通用配方或排除。

- 选定流：完整工业齿轮箱
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 工业控制装配电路板 （`board`）

条件性实际随附部件牌号配方；完整外购状态上游计一次。须识别单独供应、部分完成、预填充及密封终身润滑状态，不再次填充或重复已含电机轴承筛及板材料。化学未知是采集缺口，不是通用配方或排除。

- 选定流：工业控制装配电路板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 绝缘铜电力线缆 （`cable`）

条件性实际随附部件牌号配方；完整外购状态上游计一次。须识别单独供应、部分完成、预填充及密封终身润滑状态，不再次填充或重复已含电机轴承筛及板材料。化学未知是采集缺口，不是通用配方或排除。

- 选定流：绝缘铜电力线缆
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 转速传感器 （`sensor`）

条件性实际随附部件牌号配方；完整外购状态上游计一次。须识别单独供应、部分完成、预填充及密封终身润滑状态，不再次填充或重复已含电机轴承筛及板材料。化学未知是采集缺口，不是通用配方或排除。

- 选定流：转速传感器
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：buhler-diorit-2019; satake-husker

###### 完整气动执行器 （`pneumatic`）

条件性实际随附部件牌号配方；完整外购状态上游计一次。须识别单独供应、部分完成、预填充及密封终身润滑状态，不再次填充或重复已含电机轴承筛及板材料。化学未知是采集缺口，不是通用配方或排除。

- 选定流：完整气动执行器
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：satake-husker

###### 三元乙丙橡胶密封垫 （`seal`）

条件性实际随附部件牌号配方；完整外购状态上游计一次。须识别单独供应、部分完成、预填充及密封终身润滑状态，不再次填充或重复已含电机轴承筛及板材料。化学未知是采集缺口，不是通用配方或排除。

- 选定流：三元乙丙橡胶密封垫
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 矿物润滑油 （`oil`）

条件性实际随附部件牌号配方；完整外购状态上游计一次。须识别单独供应、部分完成、预填充及密封终身润滑状态，不再次填充或重复已含电机轴承筛及板材料。化学未知是采集缺口，不是通用配方或排除。

- 选定流：矿物润滑油
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 润滑脂 （`grease`）

条件性实际随附部件牌号配方；完整外购状态上游计一次。须识别单独供应、部分完成、预填充及密封终身润滑状态，不再次填充或重复已含电机轴承筛及板材料。化学未知是采集缺口，不是通用配方或排除。

- 选定流：润滑脂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 交付交流电 （`integration_electricity`）

实际分配过程负荷；公用服务仅同期间进口、场内供能量、出口及储能及子过程核对后的未分配公共剩余。身份仅中国1–35千伏用户接口，无重复全厂电表。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

###### 完整碾磨吸风风机 （`aspirator`）

仅实际供应完整组件牌号及主要设备功能；独立风机或通用聚合物木原料不能替代总成。自制须增补实际材料过程行；外购完整上游计一次。

- 选定流：完整碾磨吸风风机
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 完整谷类锤磨转子总成 （`hammer_rotor`）

仅实际供应完整组件牌号及主要设备功能；独立风机或通用聚合物木原料不能替代总成。自制须增补实际材料过程行；外购完整上游计一次。

- 选定流：完整谷类锤磨转子总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 木制面粉筛理框 （`wood_frame`）

仅实际供应完整组件牌号及主要设备功能；独立风机或通用聚合物木原料不能替代总成。自制须增补实际材料过程行；外购完整上游计一次。

- 选定流：木制面粉筛理框
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 聚氨酯面粉筛理框 （`pu_frame`）

仅实际供应完整组件牌号及主要设备功能；独立风机或通用聚合物木原料不能替代总成。自制须增补实际材料过程行；外购完整上游计一次。

- 选定流：聚氨酯面粉筛理框
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 完整原粮润湿加水计量泵 （`dosing_pump`）

仅实际随附外购计量泵及声明机构湿侧化学和完成状态，不用通用食品家用泵代理。自制泵须单列实际材料过程；试水是工厂消耗，安装及使用水在下游。

- 选定流：完整原粮润湿加水计量泵
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：工厂试验及返工（`test`）

实际验收计划，负载粮食试验仅实施时纳入，保留失败和重复试验。

#### 输入

##### 产品流

###### 工厂试验小麦籽粒 （`wheat`）

仅实际工厂试验验收投料，计量牌号水分库存及回收返回。试验消耗粮食及水排除于验收整机净质量，其他实际谷类干豆分别增补原子卡。

- 选定流：工厂试验小麦籽粒
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 工厂试验未脱壳稻谷 （`rice`）

仅实际工厂试验验收投料，计量牌号水分库存及回收返回。试验消耗粮食及水排除于验收整机净质量，其他实际谷类干豆分别增补原子卡。

- 选定流：稻田，其他（未去壳） `bdbb913b-620c-42a0-baf6-c5802a2b6c4b`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 工厂试验干豌豆 （`pea`）

仅实际工厂试验验收投料，计量牌号水分库存及回收返回。试验消耗粮食及水排除于验收整机净质量，其他实际谷类干豆分别增补原子卡。

- 选定流：豌豆（干） `e64a5cdb-c922-45d9-90ab-c9dd573032f7`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 工厂试验自来水 （`tap_water`）

仅实际工厂试验验收投料，计量牌号水分库存及回收返回。试验消耗粮食及水排除于验收整机净质量，其他实际谷类干豆分别增补原子卡。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 工厂试验压缩空气 （`compressed_air`）

实际气动或工厂试验交付空气；保留实际温压或标准条件原生m3，质量采集用相应实际密度。场内压缩机电力与外购压缩空气供应不能重复。

- 选定流：压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：体积 / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_gas。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_gas`
- 来源：

###### 交付交流电 （`test_electricity`）

实际分配过程负荷；公用服务仅同期间进口、场内供能量、出口及储能及子过程核对后的未分配公共剩余。身份仅中国1–35千伏用户接口，无重复全厂电表。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 工厂试验废小麦 （`grain_waste`）

一项实际外送废物流，测自身干湿化验、水分、库存返回和处理转移。捕集粮食、返回油或内部废料不是额外外购。其他实际试粮废物须分物种卡。

- 选定流：工厂试验废小麦
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

###### 废矿物润滑油 （`oil_waste`）

一项实际外送废物流，测自身干湿化验、水分、库存返回和处理转移。捕集粮食、返回油或内部废料不是额外外购。其他实际试粮废物须分物种卡。

- 选定流：废矿物润滑油
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

##### 基本流

### 过程：包装及验收放行（`dispatch`）

完整验收供应配置；包装及试粮不入净输出。

#### 输入

##### 产品流

###### 发运瓦楞纸板 （`cardboard`）

实际包装牌号和供应加工状态，计量投用返回库存及已证实回用，无编造周转次数。包装质量排除设备分母。 仅实际C/E/F瓦楞纸板、纤维≥80%、含再生料并有实际再生比例文件；其他牌号或完整箱须不同身份。

- 选定流：瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 聚乙烯包装薄膜 （`film`）

实际包装牌号和供应加工状态，计量投用返回库存及已证实回用，无编造周转次数。包装质量排除设备分母。 仅实际非泡沫非自粘未增强PE-LD薄膜；复合增强或其他聚合物膜须自身身份，不泛用于所有PE。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 木制欧洲标准托盘 （`pallet`）

实际包装牌号和供应加工状态，计量投用返回库存及已证实回用，无编造周转次数。包装质量排除设备分母。 仅实际木制EURO标准托盘；其他尺寸材料单独核实。

- 选定流：木托盘（欧标） `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 交付交流电 （`dispatch_electricity`）

实际分配过程负荷；公用服务仅同期间进口、场内供能量、出口及储能及子过程核对后的未分配公共剩余。身份仅中国1–35千伏用户接口，无重复全厂电表。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 非农用谷类碾磨及干豆加工机械 （`reference_product`）

选定完整验收配置包括实际保留填充及附件，排除包装和废品。

- 选定流：粮食碾磨工业用机械或谷类或干豆类植物加工用机械，农用机械除外 `777a709f-59dc-4927-843f-2e9546f5495e`
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass`
- 来源：un-cpc-44513

##### 废物流

##### 基本流

### 过程：剩余公用工程及实际场内供能量（含发电量）（`services`）

仅共同期间未分配剩余及实际场内供能量（含发电量）。

#### 输入

##### 产品流

###### 交付交流电 （`services_electricity`）

实际分配过程负荷；公用服务仅同期间进口、场内供能量、出口及储能及子过程核对后的未分配公共剩余。身份仅中国1–35千伏用户接口，无重复全厂电表。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 向未指定空气排放的化石源二氧化碳 （`co2`）

仅实际治理后测量物种介质及独立实测逸散，分配一次至机械制造表面处理试验的实际源，不重复全厂总量。PM10须实测粒级，不是一般粮尘；捕集尘不是空气释放。供应者供热燃烧在上游。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

###### 向未指定空气排放的化石源一氧化碳 （`co`）

仅实际治理后测量物种介质及独立实测逸散，分配一次至机械制造表面处理试验的实际源，不重复全厂总量。PM10须实测粒级，不是一般粮尘；捕集尘不是空气释放。供应者供热燃烧在上游。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

###### 向未指定空气排放的水蒸气 （`vapour`）

仅实际治理后测量物种介质及独立实测逸散，分配一次至机械制造表面处理试验的实际源，不重复全厂总量。PM10须实测粒级，不是一般粮尘；捕集尘不是空气释放。供应者供热燃烧在上游。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

###### 向未指定空气排放的异丙醇 （`ipa_air`）

仅实际治理后测量物种介质及独立实测逸散，分配一次至机械制造表面处理试验的实际源，不重复全厂总量。PM10须实测粒级，不是一般粮尘；捕集尘不是空气释放。供应者供热燃烧在上游。

- 选定流：异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

###### 向未指定空气排放的分子二氧化氮 （`no2`）

仅实际治理后测量物种介质及独立实测逸散，分配一次至机械制造表面处理试验的实际源，不重复全厂总量。PM10须实测粒级，不是一般粮尘；捕集尘不是空气释放。供应者供热燃烧在上游。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

###### 向未指定空气排放的PM10颗粒物 （`dust`）

仅实际治理后测量物种介质及独立实测逸散，分配一次至机械制造表面处理试验的实际源，不重复全厂总量。PM10须实测粒级，不是一般粮尘；捕集尘不是空气释放。供应者供热燃烧在上游。

- 选定流：颗粒物 (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `causal` | site | 优先分离配置及子过程；按实测因果负荷、运行时间或适当物理驱动分配公共剩余，保留分子分母记录及不确定性。不得平均无关型号，也不得对全部公用工程自动按整机质量分配。 |  |
| `rejects` | accepted | 在合格输出归属 Q 中纳入实际废品、返工及合格试验负荷；分母仅含验收净质量或数量。分离回收转移及处理，不假定替代产品抵扣或再生上游零负荷。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference product | weighing | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 每个验收批次 | 同一制造期间 | 同一配置工厂 | 每台验收净质量 | 校准、皮重、配套附件及验收记录 |
| cp_material | all | actual inputs | meter_issue | 具体物种牌号；供应状态；投料；各项水分密度或含量；自制外购；库存；Q；N | 同一期间按独立交换核对计量及仓储、配方和成对返回；Q 含废品或返工负荷，保留各项自身分析。 | kg | 每批或连续表 | 同一制造期间 | 同一配置工厂及供应商 | 分配数量 / 验收设备数量 | 牌号或成分检验、计量及库存 |
| cp_energy | all | electricity and heat | meter | 各过程表；总进口；实际场内供能量（含发电量）；出口；储能；供回蒸汽各质量温压焓；已净发票；Q；N | 核对同一期间和单位的各过程表，共享服务仅尚未分配剩余；调查负剩余。供应或返回蒸汽各用自身 kg 和 MJ/kg，共同零点，返回仅扣一次。 | MJ | 连续表及各试验 | 同一制造期间 | 同一配置及场址 | 分配能量 / 验收设备数量 | 校准表、供电接口、热力及分配不确定性 |
| cp_waste | all | specific waste | transfer | 各物流质量和自身含水或含量；期初末库存；内部返回；外送处理；Q；N | 称重、取样及处理转移，区分返回再用、回收及处置，不能推定替代抵扣。 | kg | 每批转移 | 同一制造期间 | 同一配置场址及处理接口 | 分配废物 / 验收设备数量 | 废物联单、取样及库存 |
| cp_emission | all | specific species/compartment | species_measurement | 实际物种介质；浓度；排气或液流；水分温压基准；捕集或销毁；各项分析；Q；N | 采用匹配物种及介质实测或核实实际技术因子；调查闭合，捕集不是销毁，差额不是空气排放。 | kg | 实际试验及排放期间 | 同一制造期间 | 同一配置场址边界 | 分配排放 / 验收设备数量 | 采样流量和综合不确定性 |
| cp_gas | all | specific supplied gas | meter | 气体身份；交付体积；实际温压或标准条件；密度；Q；N | 按实际状态计量体积；质量换算用对应实测密度，不用燃气通用因子。 | m3 | 每批或连续表 | 同一制造期间 | 同一配置及供应接口 | 分配体积 / 验收设备数量 | 温压流量密度及校准 |

原始期间协议：N 为同一配置验收设备数，D 为该批校准验收净质量之和，M=D/N。每项 Q 为同期间归属数量，含废品、返工和工厂试验负荷；先 q_item=Q/N，再 q_ref=Q/D。包装及废品质量不入 D，保留实际各项原单位和各项成分、库存及反应记录。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| complete_bom | actual configuration | 覆盖实际全部交换，自制外购及附件、填充、试料分离；缺口明确 | 实际 BOM、路线及供应商 |
| mass_period | cohort | 同一配置期间和验收记录、校准质量及库存；不跨家族均值 | 校准及期间台账 |
| balance_uncertainty | physical balances | 按各项自身水分、密度、含量、反应及成对返回核对，与综合不确定性比较 | 实测、采样、反应及分配证据 |
| cohort_raw | cohort | Naccepted、Dnet与Qattr对应同一配置期间。Dnet为校准合格净质量之和；M=Dnet/Naccepted，q_item=Qattr/Naccepted，q_ref=Qattr/Dnet。Qattr包含废品返工和工厂试验，Dnet排除包装废品及消耗试料。保留每项原单位。 | 校准及实际期间台账 |
| species_sampling | emissions | 治理后物种浓度乘匹配同期间气液流量及持续时间，校正温压干湿与单位；逸散独立实测。未知差额不成为空气释放，捕集不是销毁；每项金属化学或水流采用自身含量水分密度库存反应及成对返回。 | 实际浓度、流量、时段及状态记录 |
| contained_assay | physical balances | 各输入产品废料污泥液体或释放均用自身实测总质量乘自身含量分析及干湿基准；总合金或污泥不是所含金属。水各流用自身水分比例及实际温度密度，包含产品保留、反应、蒸发、排水及期初末库存，内部返回成对抵消。 | 各项实测化验含水及库存 |
| solvent_fates | solvent records | 回收返回、产品保留、捕集液体或滤材、已证实销毁及废水或介质分别记录；回收保留捕集及废水为非空气去向，捕集不是销毁。未知差额须调查，不能转成空气释放。 | 实际物料采样及治理记录 |
| utility_residual | energy | 同期间核对进口加实际场内供能量（含发电量）减出口及储能变化与机械制造表面处理集成试验发运负荷；公用行仅未分配余量。负余量调查期间单位及综合不确定性，不截零。 | 校准分表及总表 |
| heat_return | thermal interface | 总供热为实测供应kg乘自身MJ/kg减独立实测返回kg乘返回自身MJ/kg，采用共同零点及实测温压；总供应返回仅扣一次，已净计费不再次扣。物理蒸汽或冷凝水质量与热能分开，供应者锅炉燃料不是场内燃烧。 | 供应返回各计量热力状态及发票 |
| provider_gaps | links | 每个实际上游和处理匹配状态地理期间；未核实不可作为完整足迹 | 直接记录及替代披露 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `identity` | dataset | 确认主要功能、非农用工业功能、型号或修订、交付配置及激活架构。每个实际交换须匹配身份、属性、单位及供应商；不存在、零及未知保持不同。 |  |
| `denominator` | all inventory rows | 全部清单采用同一验收批次及共同期间。核实校准验收净质量和 N，废品及包装质量排除。核对 q_item=Q/N 后按同一平均 M 归一化；混合配置无效。 |  |
| `double_count` | make_buy | 核对完整外购模块与自制材料及操作、保留填充或附件与工厂消耗、成对内部转移与外部投入。每项实际负荷计一次。 |  |
| `water_close` | physical water records | 每项采用自身实测水比例、密度及干湿基准：新水及输入水分、反应水和期初库存减期末库存、产品保留、排水和蒸发；内部返回成对抵消。按采样、仪表及分配综合不确定性调查实测闭合，无通用容差。 |  |
| `species_close` | material and chemical records | 每种含金属或化学物分别闭合，采用各输入、产品、废料、污泥、液体及释放自身匹配分析和干湿基准、反应计量及库存。总质量不是含元素量。不得将全部清单质量规则用于能量或运输。 |  |
| `solvent_close` | solvent records | 区分保留溶剂、回收返回、捕集液体或介质、已证实销毁、废水或非空气剩余及实际空气物种释放。捕集不是销毁；不明差额应调查，不分配至空气。 |  |
| `utility_close` | energy records | 按同一期间及单位核对外购进口、实际场内供能量（含发电量）、出口及储能变化和已分配机械制造、表面处理、集成、试验或包装负荷。共享行仅未分配剩余；按期间、单位及综合计量不确定性调查负剩余，不截零。 |  |
| `steam_close` | steam and condensate | 相对于共同零点，按计量压力或温度采用供应质量乘供应自身 MJ/kg 和返回质量乘返回自身 MJ/kg。总供应只扣返回一次；已净发票不得再扣。物理蒸汽或冷凝水质量衡算独立于能量。 |  |
| `species_emissions` | air releases | 独立校验每种排放物及环境介质。燃料碳衡算不能单独确立 CO 或 NOx。NO2 质量不是以 NO2 当量报告的 NOx；报告约定与实际物种身份保持不同。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | primary_dataset |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | 实际配置工厂生产前景数据及明确已完成上游链接的模型 |
| excluded_use | 跨家族功能等价、默认用户碾磨服务、默认重量或制造因子、缺失供应商的完整足迹 |
| required_metadata | 第3节限定及原始期间分母、实际架构、自制外购和边界 |
| required_quality_disclosure | 采集覆盖、供应商或身份或配方缺口、分配和综合不确定性、全部条件及排除 |
| update_trigger | 型号或架构、配方、供应状态或地区、计量、工厂试验或处理路线改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| buhler-diorit-2019 | handbook | Diorit Roller Mill MDDY/Z; Brochure en 10/19; https://dam.buhlergroup.com/asset/c7870175fc084f6eb3ce8a2c58ab8c5a/Brochure_Roller_Mill_Diorit_2019_EN.pdf | 产品架构或类别边界；非工厂配方或数量默认值 |
| engsko-europemill | handbook | Europemill industrial horizontal stone grinding mills W-model; undated; snapshot 2026-10-02; https://unitedmillingsystems.com/wp-content/uploads/EUROPEMILL_W-1.pdf | 产品架构或类别边界；非工厂配方或数量默认值 |
| buhler-pulses | handbook | From pulses to pulses flour; undated; HTML snapshot 2026-10-02; https://www.buhlergroup.com/global/en/process-chains/from-pulses-to-pulses-flour.html | 产品架构或类别边界；非工厂配方或数量默认值 |
| buhler-plansifters | handbook | Plansifters; undated; HTML snapshot 2026-10-02; https://www.buhlergroup.com/content/buhlergroup/global/en/product-families/Plansifters.html | 产品架构或类别边界；非工厂配方或数量默认值 |
| satake-polisher | handbook | Rice Polisher KB; undated; HTML snapshot 2026-10-02; https://www.satake-group.com/products/rice_processing_system_modular_plant_system/industrial_size_rice_milling/KB.html | 产品架构或类别边界；非工厂配方或数量默认值 |
| satake-husker | handbook | Paddy Husker HR10DDF; February 2022; No.7028-00; https://www.satake-group.com/products/uploads/99603-HR10DDE.pdf | 产品架构或类别边界；非工厂配方或数量默认值 |
| un-cpc-44513 | official_guidance | Central Product Classification (CPC) Version 3.0 Explanatory Notes; 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 产品架构或类别边界；非工厂配方或数量默认值 |
| wco-hs2022 | official_guidance | HS2022 Chapter84 nomenclature; HS2022 Chapter84; https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/1684_2022e.pdf | 产品架构或类别边界；非工厂配方或数量默认值 |
