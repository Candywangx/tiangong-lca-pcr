---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.converters-ladles-ingot-moulds-and-casting-machines-of-a-kind-used-in-metallurgy-or-in-dd96c907
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 冶金转炉、浇包、锭模、铸造机及金属轧机制造

## 1. 范围与适用性

本PCR针对转炉、浇包、锭模、铸造机及金属轧机五个分别限定设备族建立前景制造数据，不汇总为代表铸机平均值。每千克参考为声明生产基准，不表示各族运行性能等效。每数据集代表一个验收型号/配置及实际供货厂门范围。

区分设备制造与后续转炉精炼、熔融金属转移/浇铸及轧制生产。用户炉料金属、吹炼气体、生产燃料/水、周期换衬/换辊及土建安装不成为工厂输入。实际制造方负载试验、初衬烘干、保留充填或所供附属设备制造仅在合同及工厂记录有据时纳入。单独备辊及专用零件须独立类别审查；嵌入构件不是参考产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.converters-ladles-ingot-moulds-and-casting-machines-of-a-kind-used-in-metallurgy-or-in-dd96c907 |
| classification_refs | CPC 3.0:44310 |
| covered_products | 含声明BOF/AOD/有色技术的冶金转炉；铸造/冶金浇包；金属锭模；声明架构铸造机；热/冷金属轧机 |
| excluded_products | 单独供给零件/备辊；独立耐火材料；用户金属生产输出；翻修服务；基础设施及通用机床 |
| representative_product | 一个实际产品族/型号/配置及声明供给状态；无全类别平均机器 |
| production_route | 合同特定自制/外购路径：板材制造、铸/锻构件制造、机加工、有条件内衬/涂层、装配及实际厂内试验 |
| market_state | 制造方厂门验收配置设备净状态，包括裸容器或有据模块交货；明确限定所供内衬/驱动/附属设备 |

对实际BOM采用下列分族自制/外购矩阵；各单元有条件，不构成必需配方。

| 产品族 | 供给架构 | 实际路线及供应边界 |
| --- | --- | --- |
| 转炉 | 炉体、耳轴/支承/悬挂、倾动驱动；仅供给时含内衬/风口/阻尼/控制 | 板制壳及铸/锻/机加工支承；自制路线或外购完成装配体；BOF/AOD/有色技术分开。primetals-converter；primetals-converter-manufacture |
| 浇包 | 裸壳或所供预制/置入/浇筑衬、盖、保温及搬运/倾动机构 | 壳体自制或外购；各实际衬层购衬或场内混合/浇筑/养护/烘干。不推导专有RFM配方。pyrotek-ladle |
| 锭模 | 指定铸铁锭模或低碳钢有色金属锭模；仅供给时含把手/底座 | 实际铸造路线或购铸件；低碳钢路线分开，要求实际成形/焊接记录。历史钢锭实例不覆盖MIFCO铝/黄铜范围。ingot-design；mifco-mould |
| 铸造机 | 声明铸机类型；仅实际所供结晶器/铜板、框架、辊/段/拉坯、液压/电气/控制及冷却硬件 | 主体/构件制造及机加；供给新涂层铜板或自有核实电镀/HVOF；供应完成处理只计一次。其他铸造技术要求实际架构/配方，不强制连铸范围。primetals-copper |
| 金属轧机 | 单体/多件轧机架、工作/支承辊、轴承/轴承座、传动轴/驱动及辊缝控制；仅供给时含产线附属设备 | 实际铸/锻/板制构件或购完成件，热处理/机加后装配；热/冷/板/长材配置分别限定。primetals-mill |

铸造机还包括热室及冷室压铸配置。热室设备按实际供给炉/铸造系统界面，冷室设备按实际三模板锁模、液压及控制系统界面分别限定；其他重力/低压/离心或有色连续铸造架构需实际图纸及相同制造路线审查。全部为设备构件制造：不把用户熔融金属、注射循环或熔炼炉运行默认纳入。金属轧机保持钢及有色金属、热/冷路线；用户轧件牌号不同不等于制造设备壳体牌号相同。frech-hot；frech-cold。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造及交付一个满足实际购货图纸及验收规范的声明配置设备族 |
| How much | 1 kg验收设备净质量，按实际同配置验收生产归一化 |
| How well | 声明能力、合金用途、几何、驱动/控制、所供衬/充填及签署出厂验收；无跨族性能等效 |
| How long or cycle | 制造方厂门生产期间；不规定运行寿命或用户金属生产吨数 |
| reference_flow_link | finished |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收合格配置冶金设备 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品族及技术（BOF/AOD/有色转炉；浇包合金用途；锭模金属用途；铸机类型；热/冷轧机）；型号/图纸；能力及几何；合金/牌号证书；裸容器或所供内衬及保温；支承/驱动/辊/铜板/液压/电气/自动化配置；所供辅助清单；自制/外购矩阵及上游已完成工序；初始保留充填；验收试验；净质量及模块核对；场址、期间、地域及供应接口 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| normalize_basis | 所有清单行 | 保留各行特定属性 | 每 1 kg 参考流 | 对各归属每台机器交换应用normalize_mass；分子单位按声明保持kg、m3、kWh或MJ。 |
| physical_species | 物理材料、化学品、废物及基本物种记录 | 自身总质量及匹配所含物种化验 | kg | 各含有元素/物种独立处理（适用时Fe、Cu、Ni、Cr、W及实际耐火碳/氧化铝）：外部进料质量乘其自身匹配化验之和 + 期初物种库存 + 实际反应生成 = 验收设备/构件乘自身化验 + 外部废料/屑/渣/粉尘/污泥/废水/排放各项乘各自化验 + 期末物种库存 + 实际反应消耗。保留湿/干及溶解/颗粒基准；内部浇冒口、屑、电镀回流及返工成对抵消且保留再加工负荷。合金总质量、水合盐、氧化皮及湿污泥不能等同含有金属。元素层面反应改变形态而不生成/消灭元素；仅经核实时保留物种化学计量。按称量、抽样、化验、检出限及分配合并不确定性审查闭合，不强制成材率或截零。 |
| water_basis | 物理水、含水及水库存记录 | 体积及实测质量转换 | m3; kg | 实际物理水项：新购/抽取补水 + 进料水分 + 期初水存量 + 反应生成水 = 外送液态水 + 外送湿废物/污泥所含水 + 处理排水 + 蒸发 + 设备保留水分 + 期末存量 + 反应耗水。各循环及试验排水分别测量。各湿料/浆料/污泥/废水/产品/库存项采用其自身实测含水或密度、适用时温度及明确湿/干基准；各项不得共用含水假设。成对内部循环/回流在厂界抵消，保留泵送及处理负荷；不得把总循环流当取水。按流量表、衡器、含水抽样、蒸发估计及分配的合并不确定性调查剩余；不设通用容差。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际购入板、坯、铸件、锻件、壳、涂层铜板、衬或装配体及交付已完成加工状态 |
| starting_condition_role | foreground_start |
| product_classification_scope | 完整审查五族范围，每数据集一个族/配置；分类码不是生产配方 |
| recursive_input_rule | 购同类别设备/模块只载一次上游制造；仅建模剩余转换/装配，不递归重复嵌入材料/公用工程清单 |
| upstream_dataset_requirement | 匹配实际牌号、涂层/内衬/充填、完成工序、物态、供应地域/技术及交付接口；不支持替代保留披露缺口 |
| disclosure | BOM自制/外购矩阵、供应负荷范围、工厂边界及供附属清单；各实际构件/路径一次计量 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| factory_gate | 全部过程 | 纳入实际上游输入及制造方工序、不合格/返工生产负荷、实际验收及厂门包装；用户金属生产及基础设施除另行声明情景外排除。 | primetals-converter-manufacture |
| make_buy_once | 外购构件 | 供应已完成铸/锻/电镀/电机/内衬制造只在上游一次；不可兼计装入外购装配体与其嵌入金属、油或工厂能源。保留本地剩余工序及实际模式/质量/距离外部运输。 |  |
| actual_route | 有条件路线 | BOM、工艺单及合同决定适用性；不适用区别于实测零及未知。仅记录实际提供的厂内试验负荷及所供保留耐火/流体；无用户熔融进料默认。 | pyrotek-ladle; primetals-copper |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| receipt | 接收与配置追溯 | required | 识别一个供货族、订单范围及构件自制/外购状态。 | foreground | 1 kg参考流 |
| body_fabrication | 容器壳体及板制机架制造 | conditional | 本场址自制时切割/成形板材并焊接转炉/浇包壳体或板制模具/机架；购壳仅跳过供应已完成工序。记录焊接程序、气体、焊丝及无损检测。 | foreground | 1 kg参考流 |
| foundry | 设备构件铸造与精整 | conditional | 仅本场址铸造锭模或机架/轧辊时，实际炉料、合金处理、制模/芯、浇注、冷却、落砂、去浇冒口及精整。此处制造设备而非用户钢锭。 | foreground | 1 kg参考流 |
| forge_heat | 锻造与热处理 | conditional | 实际场内轴/辊/耳轴锻造及指定去应力、退火、淬火/回火；购锻件关联供应热处理状态，仅实施剩余加工。 | foreground | 1 kg参考流 |
| machining | 机加工与尺寸精整 | conditional | 实际钻孔/镗孔/车削/铣削/磨削壳体、辊颈、轴承座或铜结晶器；各合金及流体分别追溯。 | foreground | 1 kg参考流 |
| lining | 初始耐火衬及保温安装 | conditional | 仅制造方供给并保留的初始内衬/保温：安装实际购砖/预制/置入衬，或实际浇注料并在此混合/浇筑/养护/烘干。裸容器有效；不含用户换衬/预热。 | foreground | 1 kg参考流 |
| surface | 有条件保护涂层及铜板处理 | conditional | 实际喷砂/清洗/涂装/固化；新铸机铜板可按指定电镀镍/镍硼/铬或HVOF硬涂层路线。购涂层铜板只计一次供应电镀负荷，不默认全部涂层配方。 | foreground | 1 kg参考流 |
| assembly | 配置装配与出厂验收 | required | 按实际合同装配壳体/支承/倾动系统、浇包搬运、锭模、铸机模块或轧机架/驱动；检验对中/无损检测并实施实际空载或负载厂内试验。声明试验流体排出/保留。 | foreground | 1 kg参考流 |
| services | 剩余共享公用工程及污染控制 | required | 仅在制造、机加、内衬、涂层、装配及发运分表后未分配场址负荷。处理水及实际排放/废物控制；不得再叠加全厂电量。 | foreground | 1 kg参考流 |
| dispatch | 厂门包装与交付 | required | 保护及包装验收配置设备。拆分运输模块可组成一个有文件的验收套件；核对全部序号及质量。 | foreground | 1 kg参考流 |

卡片识别有条件原子交换，不是通用BOM/配方。仅与实际证据匹配时使用命名牌号/配方。在声称数据集完整前，其他各实际合金、耐火层/粘结剂、模/芯树脂/催化剂、电镀盐/添加剂（含实际镍硼或铬化学）、清洗剂、燃料、气体、运输服务、构件、废物及物种/环境介质均各自立卡。不同供应/状态分开接口。不因身份或配方未解决而缩小产品族范围。

### 过程：接收与配置追溯（`receipt`）

#### 输入

##### 产品流

###### S355JR热轧钢板（`plate`）

仅实际采用经证S355JR时的具体板材示例；转炉高温板或其他指定钢级须另立原子卡及证书，不替代为此牌号。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：S355JR热轧钢板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_receipt。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt`
- 来源：

###### 购入无衬板制钢浇包壳体（`purchased_ladle_shell`）

仅按交付图纸/规范外购无衬壳；壳钢及供应制造负荷在上游纳入，此处不重复。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：购入无衬板制钢浇包壳体
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_receipt。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt`
- 来源：

###### 购入无衬钢转炉炉体（`purchased_converter_vessel`）

声明BOF/AOD/有色转炉技术、壳体牌号、支承及所供衬状态；购壳边界包含已完成制造。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：购入无衬钢转炉炉体
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_receipt。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt`
- 来源：

###### 购入铸铁锭模（`purchased_cast_mould`）

实际指定铸铁锭模；供应合金/炉型/铸造/精整证据。不表示低碳钢有色锭模采用此路线。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：购入铸铁锭模
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_receipt。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt`
- 来源：

###### 购入锻制合金钢工作辊（`purchased_roll`）

仅实际装入的锻制工作辊，声明合金、硬度及热处理状态；铸辊另立卡；不含单独备辊。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：购入锻制合金钢工作辊
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_receipt。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt`
- 来源：

###### 购入铸钢轧机机架（`purchased_housing`）

实际供应铸钢机架；板制或多件机架为另行声明自制/外购路径。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：购入铸钢轧机机架
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_receipt。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt`
- 来源：

###### 购入镀镍铜合金铸机结晶器板（`purchased_copper`）

仅匹配铜合金与镍涂层的实际新结晶器板；供应机加/电镀负荷只计一次。裸铜或镍硼/铬/HVOF涂层各自立卡关联供应方。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：购入镀镍铜合金铸机结晶器板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_receipt。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt`
- 来源：

###### 交付工厂的购入电力（`receipt_electricity`）

实际电压/电网地域/年份的计量供电；不采用特定电源发电或输配服务替代。services行仅为其他工序计量后未分配剩余量。 校准分时分表及因果分配；全部行与同一场址期间输入、自发电、输出及储能变化核对。

- 选定流：交付工厂的购入电力
- 流属性/单位：能量 / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_receipt。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：容器壳体及板制机架制造（`body_fabrication`）

#### 输入

##### 产品流

###### 交付工厂的购入电力（`body_fabrication_electricity`）

实际电压/电网地域/年份的计量供电；不采用特定电源发电或输配服务替代。services行仅为其他工序计量后未分配剩余量。 校准分时分表及因果分配；全部行与同一场址期间输入、自发电、输出及储能变化核对。

- 选定流：交付工厂的购入电力
- 流属性/单位：能量 / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_body_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_fabrication`
- 来源：

###### ER70S-6碳钢焊丝（`weld_wire`）

仅实际经评定ER70S-6程序；其他合金焊丝/焊条/焊剂另列。计量消耗焊丝及余头，不仅凭焊长推断。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：ER70S-6碳钢焊丝
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_body_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_fabrication`
- 来源：

###### 焊接保护氩气（`argon`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：焊接保护氩气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_body_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_fabrication`
- 来源：

###### 焊接保护二氧化碳气体（`shield_co2`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：焊接保护二氧化碳气体
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_body_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_fabrication`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 分类碳钢制造边角料（`steel_scrap`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：分类碳钢制造边角料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_body_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_fabrication`
- 来源：

##### 基本流

### 过程：设备构件铸造与精整（`foundry`）

#### 输入

##### 产品流

###### 交付工厂的购入电力（`foundry_electricity`）

实际电压/电网地域/年份的计量供电；不采用特定电源发电或输配服务替代。services行仅为其他工序计量后未分配剩余量。 校准分时分表及因果分配；全部行与同一场址期间输入、自发电、输出及储能变化核对。

- 选定流：交付工厂的购入电力
- 流属性/单位：能量 / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_foundry。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry`
- 来源：

###### 铸造生铁炉料（`pigiron`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：铸造生铁炉料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_foundry。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry`
- 来源：jrc-foundry-2024

###### 按牌号分类的碳钢铸造废钢炉料（`scrap_charge`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：按牌号分类的碳钢铸造废钢炉料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_foundry。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry`
- 来源：jrc-foundry-2024

###### 硅铁合金添加料（`ferrosilicon`）

仅实际铸造化学；计量牌号/硅化验，不规定配方。内部浇冒口为成对转移而非新购废钢。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：硅铁合金添加料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_foundry。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry`
- 来源：jrc-foundry-2024

###### 硅砂造型砂（`silica_sand`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：硅砂造型砂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_foundry。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry`
- 来源：jrc-foundry-2024

###### 膨润土型砂粘结剂（`bentonite`）

仅实际湿型砂路线；树脂砂须另列具体粘结剂及固化剂，不替代。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：膨润土型砂粘结剂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_foundry。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry`
- 来源：jrc-foundry-2024

###### 冲天炉燃烧用铸造焦炭（`coke`）

仅实际冲天炉；感应电炉不意味着焦炭。计量焦炭牌号/碳/灰及实际炉排气物种。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：冲天炉燃烧用铸造焦炭
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_foundry。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry`
- 来源：jrc-foundry-2024

###### 工厂燃烧用天然气（`foundry_natural_gas`）

仅实际工厂炉/烘干/HVOF燃烧燃料，实测组成及热值；其他燃料另立行。不含用户转炉吹炼气体及浇包预热。 实际气体计量及有据压力/温度，按实测低位热值转换；保留运行期间及适用库存。

- 选定流：工厂燃烧用天然气
- 流属性/单位：能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_foundry。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 铸铁铸造炉渣（`slag`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：铸铁铸造炉渣
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_foundry。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry`
- 来源：jrc-foundry-2024

###### 废硅砂铸造型砂（`spent_sand`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：废硅砂铸造型砂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_foundry。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry`
- 来源：jrc-foundry-2024

##### 基本流

###### 化石二氧化碳排入空气（`foundry_fossil_co2`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 控制后按匹配气流/浓度/时间测量此命名物种；化石CO2可采用经核实碳/氧化平衡。碳平衡不能单独求CO或NO2；NO与NO2及以NO2计NOx当量分开报告。

- 选定流：化石二氧化碳排入空气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_foundry。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry`
- 来源：

###### 一氧化碳排入空气（`foundry_co`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 控制后按匹配气流/浓度/时间测量此命名物种；化石CO2可采用经核实碳/氧化平衡。碳平衡不能单独求CO或NO2；NO与NO2及以NO2计NOx当量分开报告。

- 选定流：一氧化碳排入空气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_foundry。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry`
- 来源：

###### 二氧化氮排入空气（`foundry_no2`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 控制后按匹配气流/浓度/时间测量此命名物种；化石CO2可采用经核实碳/氧化平衡。碳平衡不能单独求CO或NO2；NO与NO2及以NO2计NOx当量分开报告。

- 选定流：二氧化氮排入空气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_foundry。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry`
- 来源：

### 过程：锻造与热处理（`forge_heat`）

#### 输入

##### 产品流

###### 交付工厂的购入电力（`forge_heat_electricity`）

实际电压/电网地域/年份的计量供电；不采用特定电源发电或输配服务替代。services行仅为其他工序计量后未分配剩余量。 校准分时分表及因果分配；全部行与同一场址期间输入、自发电、输出及储能变化核对。

- 选定流：交付工厂的购入电力
- 流属性/单位：能量 / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_forge_heat。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forge_heat`
- 来源：

###### 42CrMo4钢锻造坯料（`forging_stock`）

仅实际指定42CrMo4轴/耳轴路径；其他钢或铸件另列。记录上游熔炼/坯状态、炉周期及保留硬度要求。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：42CrMo4钢锻造坯料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_forge_heat。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forge_heat`
- 来源：

###### 矿物油基热处理淬火液（`quench_oil`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：矿物油基热处理淬火液
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_forge_heat。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forge_heat`
- 来源：

###### 工厂燃烧用天然气（`forge_heat_natural_gas`）

仅实际工厂炉/烘干/HVOF燃烧燃料，实测组成及热值；其他燃料另立行。不含用户转炉吹炼气体及浇包预热。 实际气体计量及有据压力/温度，按实测低位热值转换；保留运行期间及适用库存。

- 选定流：工厂燃烧用天然气
- 流属性/单位：能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_forge_heat。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forge_heat`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 氧化铁锻造氧化皮（`scale`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：氧化铁锻造氧化皮
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_forge_heat。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forge_heat`
- 来源：

##### 基本流

###### 化石二氧化碳排入空气（`forge_heat_fossil_co2`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 控制后按匹配气流/浓度/时间测量此命名物种；化石CO2可采用经核实碳/氧化平衡。碳平衡不能单独求CO或NO2；NO与NO2及以NO2计NOx当量分开报告。

- 选定流：化石二氧化碳排入空气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_forge_heat。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forge_heat`
- 来源：

###### 一氧化碳排入空气（`forge_heat_co`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 控制后按匹配气流/浓度/时间测量此命名物种；化石CO2可采用经核实碳/氧化平衡。碳平衡不能单独求CO或NO2；NO与NO2及以NO2计NOx当量分开报告。

- 选定流：一氧化碳排入空气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_forge_heat。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forge_heat`
- 来源：

###### 二氧化氮排入空气（`forge_heat_no2`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 控制后按匹配气流/浓度/时间测量此命名物种；化石CO2可采用经核实碳/氧化平衡。碳平衡不能单独求CO或NO2；NO与NO2及以NO2计NOx当量分开报告。

- 选定流：二氧化氮排入空气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_forge_heat。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forge_heat`
- 来源：

### 过程：机加工与尺寸精整（`machining`）

#### 输入

##### 产品流

###### 交付工厂的购入电力（`machining_electricity`）

实际电压/电网地域/年份的计量供电；不采用特定电源发电或输配服务替代。services行仅为其他工序计量后未分配剩余量。 校准分时分表及因果分配；全部行与同一场址期间输入、自发电、输出及储能变化核对。

- 选定流：交付工厂的购入电力
- 流属性/单位：能量 / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machining。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining`
- 来源：

###### CuCrZr铜合金铸机结晶器毛坯（`copper_blank`）

仅实际经证CuCrZr在场内机加；其他合金另立卡。购入已涂层成品板跳过此嵌入毛坯。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：CuCrZr铜合金铸机结晶器毛坯
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machining。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining`
- 来源：primetals-copper

###### 矿物油基直用切削液（`straight_oil`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：矿物油基直用切削液
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machining。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining`
- 来源：jrc-metalworking-2020

###### 水可乳化矿物油切削液浓缩料（`emulsion_concentrate`）

仅实际供应配方，区别于稀释水及直用油；记录SDS/规范及保留流体级分。合成液路线另列身份。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：水可乳化矿物油切削液浓缩料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machining。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining`
- 来源：jrc-metalworking-2020

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 分类合金钢机加工屑（`steel_chips`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：分类合金钢机加工屑
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machining。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining`
- 来源：

###### 分类CuCrZr机加工屑（`copper_chips`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：分类CuCrZr机加工屑
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machining。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining`
- 来源：

###### 废矿物油切削乳化液（`spent_emulsion`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：废矿物油切削乳化液
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machining。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining`
- 来源：

##### 基本流

### 过程：初始耐火衬及保温安装（`lining`）

#### 输入

##### 产品流

###### 交付工厂的购入电力（`lining_electricity`）

实际电压/电网地域/年份的计量供电；不采用特定电源发电或输配服务替代。services行仅为其他工序计量后未分配剩余量。 校准分时分表及因果分配；全部行与同一场址期间输入、自发电、输出及储能变化核对。

- 选定流：交付工厂的购入电力
- 流属性/单位：能量 / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_lining。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lining`
- 来源：

###### 氧化铝基耐火浇注料（`alumina_castable`）

仅所供衬的实际氧化铝浇注料订单配方；非转炉/浇包通用化学。追溯干配方、加水、养护损失及保留质量。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：氧化铝基耐火浇注料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_lining。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lining`
- 来源：pyrotek-ladle

###### 镁碳耐火砖（`magcarbon_brick`）

仅实际指定并装入所供设备的转炉/钢包衬；记录砖牌号、粘结剂及保留碳。不默认更换周期。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：镁碳耐火砖
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_lining。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lining`
- 来源：

###### 购入预制氧化铝耐火浇包衬（`precast_liner`）

实际所供预制衬与同层场内浇注料为替代；供应烘干负荷只计一次。供背衬时另立具体层。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：购入预制氧化铝耐火浇包衬
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_lining。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lining`
- 来源：pyrotek-ladle

###### 工厂燃烧用天然气（`lining_natural_gas`）

仅实际工厂炉/烘干/HVOF燃烧燃料，实测组成及热值；其他燃料另立行。不含用户转炉吹炼气体及浇包预热。 实际气体计量及有据压力/温度，按实测低位热值转换；保留运行期间及适用库存。

- 选定流：工厂燃烧用天然气
- 流属性/单位：能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_lining。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lining`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 未装入氧化铝浇注料余料（`refractory_waste`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：未装入氧化铝浇注料余料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_lining。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lining`
- 来源：

##### 基本流

###### 化石二氧化碳排入空气（`lining_fossil_co2`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 控制后按匹配气流/浓度/时间测量此命名物种；化石CO2可采用经核实碳/氧化平衡。碳平衡不能单独求CO或NO2；NO与NO2及以NO2计NOx当量分开报告。

- 选定流：化石二氧化碳排入空气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_lining。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lining`
- 来源：

###### 一氧化碳排入空气（`lining_co`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 控制后按匹配气流/浓度/时间测量此命名物种；化石CO2可采用经核实碳/氧化平衡。碳平衡不能单独求CO或NO2；NO与NO2及以NO2计NOx当量分开报告。

- 选定流：一氧化碳排入空气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_lining。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lining`
- 来源：

###### 二氧化氮排入空气（`lining_no2`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 控制后按匹配气流/浓度/时间测量此命名物种；化石CO2可采用经核实碳/氧化平衡。碳平衡不能单独求CO或NO2；NO与NO2及以NO2计NOx当量分开报告。

- 选定流：二氧化氮排入空气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_lining。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lining`
- 来源：

### 过程：有条件保护涂层及铜板处理（`surface`）

#### 输入

##### 产品流

###### 交付工厂的购入电力（`surface_electricity`）

实际电压/电网地域/年份的计量供电；不采用特定电源发电或输配服务替代。services行仅为其他工序计量后未分配剩余量。 校准分时分表及因果分配；全部行与同一场址期间输入、自发电、输出及储能变化核对。

- 选定流：交付工厂的购入电力
- 流属性/单位：能量 / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

###### 钢砂喷砂磨料（`steel_grit`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：钢砂喷砂磨料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

###### 环氧涂层树脂（`epoxy`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：环氧涂层树脂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

###### 胺类涂层固化剂（`amine`）

按SDS识别实际单一供应固化剂配方；其他固化剂另立卡，不假设混合配方。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：胺类涂层固化剂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

###### 二甲苯涂层溶剂（`xylene`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：二甲苯涂层溶剂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

###### 电镀氨基磺酸镍盐（`nickel_sulfamate`）

仅场内新铸机铜板实际氨基磺酸镍槽；计量盐水合/化验及全部实际单独槽液化学品。供应已镀铜板跳过槽进料。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：电镀氨基磺酸镍盐
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：primetals-copper

###### 镍电镀阳极（`nickel_anode`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：镍电镀阳极
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：primetals-copper

###### 碳化钨HVOF涂层粉末（`wc_powder`）

仅实际指定碳化物粉末及实测粘結合金；镍硼及铬电镀为不同实际配方备选，不由此粉末推断。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：碳化钨HVOF涂层粉末
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：primetals-copper

###### HVOF或热切割用氧气（`oxygen`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：HVOF或热切割用氧气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

###### 工厂燃烧用天然气（`surface_natural_gas`）

仅实际工厂炉/烘干/HVOF燃烧燃料，实测组成及热值；其他燃料另立行。不含用户转炉吹炼气体及浇包预热。 实际气体计量及有据压力/温度，按实测低位热值转换；保留运行期间及适用库存。

- 选定流：工厂燃烧用天然气
- 流属性/单位：能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废未固化环氧涂料（`waste_epoxy`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：废未固化环氧涂料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

###### 废氨基磺酸镍电镀液（`spent_bath`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：废氨基磺酸镍电镀液
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：primetals-copper

##### 基本流

###### 二甲苯排入空气（`xylene_air`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 物种特定进料化验及库存/回收/保留/控制平衡，与实际控制后烟囱/逸散测量核对；不采用通用VOC因子。

- 选定流：二甲苯排入空气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

###### 化石二氧化碳排入空气（`surface_fossil_co2`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 控制后按匹配气流/浓度/时间测量此命名物种；化石CO2可采用经核实碳/氧化平衡。碳平衡不能单独求CO或NO2；NO与NO2及以NO2计NOx当量分开报告。

- 选定流：化石二氧化碳排入空气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

###### 一氧化碳排入空气（`surface_co`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 控制后按匹配气流/浓度/时间测量此命名物种；化石CO2可采用经核实碳/氧化平衡。碳平衡不能单独求CO或NO2；NO与NO2及以NO2计NOx当量分开报告。

- 选定流：一氧化碳排入空气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

###### 二氧化氮排入空气（`surface_no2`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 控制后按匹配气流/浓度/时间测量此命名物种；化石CO2可采用经核实碳/氧化平衡。碳平衡不能单独求CO或NO2；NO与NO2及以NO2计NOx当量分开报告。

- 选定流：二氧化氮排入空气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

### 过程：配置装配与出厂验收（`assembly`）

#### 输入

##### 产品流

###### 交付工厂的购入电力（`assembly_electricity`）

实际电压/电网地域/年份的计量供电；不采用特定电源发电或输配服务替代。services行仅为其他工序计量后未分配剩余量。 校准分时分表及因果分配；全部行与同一场址期间输入、自发电、输出及储能变化核对。

- 选定流：交付工厂的购入电力
- 流属性/单位：能量 / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

###### 购入冷室压铸三模板锁模机构（`die_clamp`）

仅实际供给且装入的指定装配体，记录规范、供应已完成加工及嵌入初始充填。自制机构按实际铸/锻/板制、机加工及装配路线展开；供炉硬件仅纳入实际保留炉体/衬/控制，不默认用户运行燃料及熔融金属。

- 选定流：购入冷室压铸三模板锁模机构
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：frech-cold

###### 购入压铸液压控制阀块（`die_control`）

仅实际供给且装入的指定装配体，记录规范、供应已完成加工及嵌入初始充填。自制机构按实际铸/锻/板制、机加工及装配路线展开；供炉硬件仅纳入实际保留炉体/衬/控制，不默认用户运行燃料及熔融金属。

- 选定流：购入压铸液压控制阀块
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：frech-cold

###### 购入热室压铸保温炉（`hot_furnace`）

仅实际供给且装入的指定装配体，记录规范、供应已完成加工及嵌入初始充填。自制机构按实际铸/锻/板制、机加工及装配路线展开；供炉硬件仅纳入实际保留炉体/衬/控制，不默认用户运行燃料及熔融金属。

- 选定流：购入热室压铸保温炉
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：frech-hot

###### 购入交流异步电动机（`motor`）

仅实际所供配置装入或保留时；要求规范/额定参数及交付状态。购装配体含嵌入材料及供应试验；不再计嵌入电机铜/钢/油。仅试验后排出流体另列。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：购入交流异步电动机
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

###### 购入转炉减速齿轮倾动驱动（`tilt_drive`）

仅实际所供配置装入或保留时；要求规范/额定参数及交付状态。购装配体含嵌入材料及供应试验；不再计嵌入电机铜/钢/油。仅试验后排出流体另列。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：购入转炉减速齿轮倾动驱动
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

###### 购入液压泵（`pump`）

仅实际所供配置装入或保留时；要求规范/额定参数及交付状态。购装配体含嵌入材料及供应试验；不再计嵌入电机铜/钢/油。仅试验后排出流体另列。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：购入液压泵
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

###### 购入轧机支承辊轴承（`bearing`）

仅实际所供配置装入或保留时；要求规范/额定参数及交付状态。购装配体含嵌入材料及供应试验；不再计嵌入电机铜/钢/油。仅试验后排出流体另列。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：购入轧机支承辊轴承
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

###### 购入铸机控制柜（`control`）

仅实际所供配置装入或保留时；要求规范/额定参数及交付状态。购装配体含嵌入材料及供应试验；不再计嵌入电机铜/钢/油。仅试验后排出流体另列。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：购入铸机控制柜
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

###### ISO VG46液压油初始充填（`hydraulic_oil`）

仅实际所供配置装入或保留时；要求规范/额定参数及交付状态。购装配体含嵌入材料及供应试验；不再计嵌入电机铜/钢/油。仅试验后排出流体另列。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：ISO VG46液压油初始充填
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

###### ISO VG220齿轮油初始充填（`gear_oil`）

仅实际所供配置装入或保留时；要求规范/额定参数及交付状态。购装配体含嵌入材料及供应试验；不再计嵌入电机铜/钢/油。仅试验后排出流体另列。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：ISO VG220齿轮油初始充填
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

###### 锂皂润滑脂（`grease`）

仅实际所供配置装入或保留时；要求规范/额定参数及交付状态。购装配体含嵌入材料及供应试验；不再计嵌入电机铜/钢/油。仅试验后排出流体另列。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：锂皂润滑脂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

###### 购入出厂压力试验用水（`test_water`）

仅实际制造方压力/泄漏试验；声明补水、内部回用、排水及保留体积。不假设连铸机使用阶段冷却。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：购入出厂压力试验用水
- 流属性/单位：体积 / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：primetals-copper

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 排出的矿物液压试验油（`drained_test_oil`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：排出的矿物液压试验油
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

##### 基本流

### 过程：剩余共享公用工程及污染控制（`services`）

#### 输入

##### 产品流

###### 交付工厂的购入电力（`services_electricity`）

实际电压/电网地域/年份的计量供电；不采用特定电源发电或输配服务替代。services行仅为其他工序计量后未分配剩余量。 校准分时分表及因果分配；全部行与同一场址期间输入、自发电、输出及储能变化核对。

- 选定流：交付工厂的购入电力
- 流属性/单位：能量 / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_services。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_services`
- 来源：

###### 购入工业工艺补水（`process_water`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 按实际循环校准补水表；共享输入分配剩余前扣除已分配试验/内衬/机加/表面水；核对含水及液体库存。

- 选定流：购入工业工艺补水
- 流属性/单位：体积 / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_services。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_services`
- 来源：

###### 废水中和用氢氧化钙（`lime`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：废水中和用氢氧化钙
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_services。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_services`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 含镍废水处理污泥（`sludge`）

仅实际含镍处理废物；要求湿质量、干固形物及其自身镍化验，不用槽盐质量或铁化验。其他污泥物种另立卡。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：含镍废水处理污泥
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_services。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_services`
- 来源：

###### 外送处理的工业废水（`wastewater`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：外送处理的工业废水
- 流属性/单位：体积 / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_services。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_services`
- 来源：

##### 基本流

###### 处理水排入河流（`river_water`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：处理水排入河流
- 流属性/单位：体积 / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_services。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_services`
- 来源：

###### 溶解镍排入河流（`nickel_water`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 匹配处理后废水体积及镍浓度，保留环境介质/检出限/形态；不等同湿污泥或总废水与镍。

- 选定流：溶解镍排入河流
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_services。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_services`
- 来源：

### 过程：厂门包装与交付（`dispatch`）

#### 输入

##### 产品流

###### 交付工厂的购入电力（`dispatch_electricity`）

实际电压/电网地域/年份的计量供电；不采用特定电源发电或输配服务替代。services行仅为其他工序计量后未分配剩余量。 校准分时分表及因果分配；全部行与同一场址期间输入、自发电、输出及储能变化核对。

- 选定流：交付工厂的购入电力
- 流属性/单位：能量 / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_dispatch。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dispatch`
- 来源：

###### 木制运输底托（`wood_pack`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：木制运输底托
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_dispatch。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dispatch`
- 来源：

###### 钢制包装带（`steel_strap`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：钢制包装带
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_dispatch。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dispatch`
- 来源：

###### 聚乙烯运输膜（`pe_film`）

仅在声明路线中此具体交换跨越过程边界时纳入；要求实际牌号/规范、供应接口及不发生证据。 称量发料/收料、匹配退料及期初期末库存；追溯批次、规范及实际工序去向。

- 选定流：聚乙烯运输膜
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_dispatch。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dispatch`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格配置冶金设备（`finished`）

参考仅为一个声明产品族/配置及验收供给套件。净质量仅含所供主体、支承、驱动、保留初衬/涂层/充填及合同限定附属设备；不含用户熔融炉料、包装或不合格品。 校准称量同一配置验收设备净质量；核对运输模块及验收记录。

- 选定流：验收合格配置冶金设备
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| subdivide | 共享过程 | 优先追溯订单/序号/批次，细分物料发料及工序计量。 | ef-allocation-2021 |
| causal_residual | 未分配共享负荷 | 仅剩余负荷按适当实测因果设备时间/负荷、焊接时间、处理面积或炉负荷分配。记录分母及不确定性；不默认全部公用工程按设备质量分配。其他关系须说明并进行敏感性分析。 | ef-allocation-2021 |
| scrap_returns | 废料及内部退料 | 汇总边界成对抵消内部转移；保留返工能耗及损失。外部废料/回收溶剂保留命名输出及实际去向；不自动给避免初生材料信用。 |  |
| services_once | 公用工程 | 核对场址期间购入输入 + 实际现场发电 + 期初储能 = 已分配制造/铸造/热处理/机加/内衬/表面/装配/发运耗用 + 剩余共享耗用 + 输出 + 期末储能 + 有据输配损失。services仅含计量未分配剩余及实测因果分配；相同时间段/单位，不在分表上叠加全场址量。负剩余应按时间、单位及计量/分配不确定性调查，不截为零。如发生购蒸汽/热、各燃料及发电输入则另立实际卡，不重复购电及发电输出。 |  |

## 8. 前景数据采集、计算与质量规则

采集期间：Q为一个族/型号/配置包含不合格/返工负荷的归属交换总量；N为其完整验收设备数；D为同一期间/配置校准验收设备净质量之和。M = D/N，q_item = Q/N，因此声明q_ref = q_item/M = Q/D。D排除不合格品、在制品及包装质量；Q保留归属负荷并核对在制品期初期末。不得混合不同配置平均质量。模块验收套件仅汇总所供模块，不重复构件；质量范围匹配BOM、厂内试验及合格输出。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | 参考质量 | 校准称量记录 | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 各验收设备 | 同一生产期间 | 声明制造场址 | 每台验收净质量 | 衡器校准；模块/BOM/验收核对 |
| cp_receipt | receipt | 各原子交换 | 计量；称量；化验；路线/订单账 | 供应方；批次；牌号/状态；上游完成工序；交付BOM；运输模式/质量/距离 | 按各卡所述方法采集，采用同配置/期间、各原始单位及分配记录；统计验收数，追溯不合格/返工负荷并量化不确定性。 | kg; m3; kWh; MJ | 各批次/试验/班次；期间核对 | 实际代表性报告期间 | 选定实际工序及供给范围 | 归属数量 / 验收机器数量 | 校准；原始记录；各自匹配化验；路线适用性；核对及不确定性 |
| cp_body_fabrication | body_fabrication | 各原子交换 | 计量；称量；化验；路线/订单账 | 牌号/配方；发料/退料；校准数量；各物种化验；期初期末库存；工序表；废物及内部转移 | 按各卡所述方法采集，采用同配置/期间、各原始单位及分配记录；统计验收数，追溯不合格/返工负荷并量化不确定性。 | kg; m3; kWh; MJ | 各批次/试验/班次；期间核对 | 实际代表性报告期间 | 选定实际工序及供给范围 | 归属数量 / 验收机器数量 | 校准；原始记录；各自匹配化验；路线适用性；核对及不确定性 |
| cp_foundry | foundry | 各原子交换 | 计量；称量；化验；路线/订单账 | 炉；炉料牌号/化验；模/芯配方；浇冒口回流；渣/尘/砂含水；库存 | 按各卡所述方法采集，采用同配置/期间、各原始单位及分配记录；统计验收数，追溯不合格/返工负荷并量化不确定性。 | kg; m3; kWh; MJ | 各批次/试验/班次；期间核对 | 实际代表性报告期间 | 选定实际工序及供给范围 | 归属数量 / 验收机器数量 | 校准；原始记录；各自匹配化验；路线适用性；核对及不确定性 |
| cp_forge_heat | forge_heat | 各原子交换 | 计量；称量；化验；路线/订单账 | 牌号/配方；发料/退料；校准数量；各物种化验；期初期末库存；工序表；废物及内部转移 | 按各卡所述方法采集，采用同配置/期间、各原始单位及分配记录；统计验收数，追溯不合格/返工负荷并量化不确定性。 | kg; m3; kWh; MJ | 各批次/试验/班次；期间核对 | 实际代表性报告期间 | 选定实际工序及供给范围 | 归属数量 / 验收机器数量 | 校准；原始记录；各自匹配化验；路线适用性；核对及不确定性 |
| cp_machining | machining | 各原子交换 | 计量；称量；化验；路线/订单账 | 牌号/配方；发料/退料；校准数量；各物种化验；期初期末库存；工序表；废物及内部转移 | 按各卡所述方法采集，采用同配置/期间、各原始单位及分配记录；统计验收数，追溯不合格/返工负荷并量化不确定性。 | kg; m3; kWh; MJ | 各批次/试验/班次；期间核对 | 实际代表性报告期间 | 选定实际工序及供给范围 | 归属数量 / 验收机器数量 | 校准；原始记录；各自匹配化验；路线适用性；核对及不确定性 |
| cp_lining | lining | 各原子交换 | 计量；称量；化验；路线/订单账 | 层；实际耐火配方/化验；水；养护/烘干燃料；装入干质量；含水；废余料 | 按各卡所述方法采集，采用同配置/期间、各原始单位及分配记录；统计验收数，追溯不合格/返工负荷并量化不确定性。 | kg; m3; kWh; MJ | 各批次/试验/班次；期间核对 | 实际代表性报告期间 | 选定实际工序及供给范围 | 归属数量 / 验收机器数量 | 校准；原始记录；各自匹配化验；路线适用性；核对及不确定性 |
| cp_surface | surface | 各原子交换 | 计量；称量；化验；路线/订单账 | 实际槽/涂料/溶剂/HVOF配方；物种化验；镀/保留质量；控制；捕集介质；回收/销毁物种；库存 | 按各卡所述方法采集，采用同配置/期间、各原始单位及分配记录；统计验收数，追溯不合格/返工负荷并量化不确定性。 | kg; m3; kWh; MJ | 各批次/试验/班次；期间核对 | 实际代表性报告期间 | 选定实际工序及供给范围 | 归属数量 / 验收机器数量 | 校准；原始记录；各自匹配化验；路线适用性；核对及不确定性 |
| cp_assembly | assembly | 各原子交换 | 计量；称量；化验；路线/订单账 | 装入装配体规范；嵌入初填；试验负载/时间；排出/保留；验收；配置 | 按各卡所述方法采集，采用同配置/期间、各原始单位及分配记录；统计验收数，追溯不合格/返工负荷并量化不确定性。 | kg; m3; kWh; MJ | 各批次/试验/班次；期间核对 | 实际代表性报告期间 | 选定实际工序及供给范围 | 归属数量 / 验收机器数量 | 校准；原始记录；各自匹配化验；路线适用性；核对及不确定性 |
| cp_services | services | 各原子交换 | 计量；称量；化验；路线/订单账 | 场址表总量；全部已分配分表量；自发电/输入/输出/储能；剩余驱动；水库存；废水体积/浓度；污泥自身化验 | 按各卡所述方法采集，采用同配置/期间、各原始单位及分配记录；统计验收数，追溯不合格/返工负荷并量化不确定性。 | kg; m3; kWh; MJ | 各批次/试验/班次；期间核对 | 实际代表性报告期间 | 选定实际工序及供给范围 | 归属数量 / 验收机器数量 | 校准；原始记录；各自匹配化验；路线适用性；核对及不确定性 |
| cp_dispatch | dispatch | 各原子交换 | 计量；称量；化验；路线/订单账 | 牌号/配方；发料/退料；校准数量；各物种化验；期初期末库存；工序表；废物及内部转移 | 按各卡所述方法采集，采用同配置/期间、各原始单位及分配记录；统计验收数，追溯不合格/返工负荷并量化不确定性。 | kg; m3; kWh; MJ | 各批次/试验/班次；期间核对 | 实际代表性报告期间 | 选定实际工序及供给范围 | 归属数量 / 验收机器数量 | 校准；原始记录；各自匹配化验；路线适用性；核对及不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| route_identity | 各供给接口 | 一个族/配置、实际自制/外购矩阵及供应完成状态；完整前景放行前扩展全部实际配方/物种。 | 合同；图纸；BOM；工艺单；供应数据 |
| water_closure | 物理水记录 | 实际物理水项：新购/抽取补水 + 进料水分 + 期初水存量 + 反应生成水 = 外送液态水 + 外送湿废物/污泥所含水 + 处理排水 + 蒸发 + 设备保留水分 + 期末存量 + 反应耗水。各循环及试验排水分别测量。各湿料/浆料/污泥/废水/产品/库存项采用其自身实测含水或密度、适用时温度及明确湿/干基准；各项不得共用含水假设。成对内部循环/回流在厂界抵消，保留泵送及处理负荷；不得把总循环流当取水。按流量表、衡器、含水抽样、蒸发估计及分配的合并不确定性调查剩余；不设通用容差。 | 循环计量、含水、库存、反应及抽样记录 |
| species_closure | 物理材料/物种记录 | 各含有元素/物种独立处理（适用时Fe、Cu、Ni、Cr、W及实际耐火碳/氧化铝）：外部进料质量乘其自身匹配化验之和 + 期初物种库存 + 实际反应生成 = 验收设备/构件乘自身化验 + 外部废料/屑/渣/粉尘/污泥/废水/排放各项乘各自化验 + 期末物种库存 + 实际反应消耗。保留湿/干及溶解/颗粒基准；内部浇冒口、屑、电镀回流及返工成对抵消且保留再加工负荷。合金总质量、水合盐、氧化皮及湿污泥不能等同含有金属。元素层面反应改变形态而不生成/消灭元素；仅经核实时保留物种化学计量。按称量、抽样、化验、检出限及分配合并不确定性审查闭合，不强制成材率或截零。 | 各项自身化验；质量/库存；成对回流记录 |
| solvent_closure | 溶剂记录 | 各实际溶剂如二甲苯：树脂/稀释剂/清洗剂中外部溶剂 + 期初库存 = 产品保留溶剂 + 期末库存 + 外送回收溶剂 + 未固化涂料/其他废物含溶剂 + 捕集介质保留溶剂 + 实测销毁 + 控制后烟囱/逸散空气排放。计入废水及其他非空气余物溶剂、反应产物及内部回收回流。捕集本身不是销毁：区分转移到捕集介质的溶剂与实测销毁或经核实化学转化，并记录各自保留库存及产物；不得重复扣捕集和销毁。不得自动把未解释平衡剩余归为空气排放。总VOC不自动等同某命名物种。按实际配方化验、抽样、计量、控制及分配不确定性调查剩余，不假设蒸发比例。 | SDS/配方化验；回收/销毁；控制后监测 |
| utility_closure | 公用工程记录 | 核对场址期间购入输入 + 实际现场发电 + 期初储能 = 已分配制造/铸造/热处理/机加/内衬/表面/装配/发运耗用 + 剩余共享耗用 + 输出 + 期末储能 + 有据输配损失。services仅含计量未分配剩余及实测因果分配；相同时间段/单位，不在分表上叠加全场址量。负剩余应按时间、单位及计量/分配不确定性调查，不截为零。如发生购蒸汽/热、各燃料及发电输入则另立实际卡，不重复购电及发电输出。 | 同场址期间核对及实测因果分配 |
| uncertainty | 全部记录 | 披露期间、校准、抽样、测量/转换/分配不确定性、未解决供应/UUID/配方/范围证据及材料排除。不适用、零、低于检出及未知分开。 | 原始记录；不确定性预算；缺口登记 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| reference_scope | 参考产品 | 确认实测M及验收质量/数量、供模块、内衬/充填及试验分母匹配一个配置；不含包装/不合格或用户熔融金属质量。 |  |
| route_completeness | 所有清单行 | 校验产品族架构、牌号及各条件自制/外购路线；不支持配方/UUID保留缺口，不视为排除或正零。拒绝合并交换及重复嵌入负荷。 |  |
| balance_validation | 物理平衡 | 要求各自匹配化验及单位/基准、水/溶剂库存及实际反应、成对内部转移、实测外部余物/排放。按实际合并不确定性调查剩余并披露未解决闭合。 |  |
| utility_validation | 公用工程行 | 核对场址期间购入输入 + 实际现场发电 + 期初储能 = 已分配制造/铸造/热处理/机加/内衬/表面/装配/发运耗用 + 剩余共享耗用 + 输出 + 期末储能 + 有据输配损失。services仅含计量未分配剩余及实测因果分配；相同时间段/单位，不在分表上叠加全场址量。负剩余应按时间、单位及计量/分配不确定性调查，不截为零。如发生购蒸汽/热、各燃料及发电输入则另立实际卡，不重复购电及发电输出。 |  |
| emission_validation | 基本流排放 | 核实命名物种、物态、去向环境介质及控制后测量。不仅凭燃料碳求CO/NOx，不由总污泥求Ni，不自动把VOC映射二甲苯。 |  |
| uuid_validation | 全部采用身份 | 实际数据集放行/发布前要求直读公开类型/状态、双语正式名称、属性/单位关联、物态/接口及供应条件；解决当前缺口但不替代为更窄参考产品族。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景制造方厂门设备生产数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 同声明设备族/配置/供给范围及代表性制造；附上游供应关联的process/lifecyclemodel下游投影 |
| excluded_use | 跨族性能比较、用户金属产出清单、自动全生命周期寿命、独立备件、翻修或通用平均机器 |
| required_metadata | 产品族及技术（BOF/AOD/有色转炉；浇包合金用途；锭模金属用途；铸机类型；热/冷轧机）；型号/图纸；能力及几何；合金/牌号证书；裸容器或所供内衬及保温；支承/驱动/辊/铜板/液压/电气/自动化配置；所供辅助清单；自制/外购矩阵及上游已完成工序；初始保留充填；验收试验；净质量及模块核对；场址、期间、地域及供应接口 |
| required_quality_disclosure | 一手覆盖、校准、抽样、不确定性、平衡剩余、分配、供应状态、条件适用性、缺UUID/配方/供应关联/范围及排除 |
| update_trigger | 产品族/配置、供内衬/充填/驱动/铜板/辊、自制/外购、冶金/涂层配方、厂内试验、供应、电源或分配改变 |

## 11. 数据源

| Source id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| pyrotek-ladle | extension_guidance | Pyrotek, Ladles and Crucibles, undated publisher page. https://www.pyrotek.com/primary-solutions/aluminium/casthouse/metal-transfer-casthouse/ladles-and-crucibles | 浇包壳体、预制或现场浇筑内衬及有条件盖体/背衬保温；铝用例，不提供默认耐火配方。 |
| mifco-mould | extension_guidance | MIFCO, Ingot Molds / Charging Tongs, undated publisher page. https://mifco.com/foundry-accessories/ingot-molds-charging-tongs/ | 铝/黄铜用低碳锭模，明确不适用青铜；反证所有锭模均为铸铁的假设。不采用目录质量。 |
| ingot-design | literature | Ingot Metallurgy Forum technical library, Design of Ingot Moulds, Ingot Technology-11, printed page43. Historical undated chapter; edition/date not established. https://virteomdevcdn.blob.core.windows.net/site-ingotmetallurgyforum-com/uploaded_media/ingotmetallurgyforum_com/Technical_Library/Chapter_11_-_Design_of_Ingot_Molds.pdf | 仅支持历史钢用铸铁锭模例及搬运/形状区别；不采用当代必需材料、几何、寿命或成材率。 |
| primetals-converter | extension_guidance | Primetals Technologies, Stainless Steelmaking with the AOD Converter, undated publisher page. https://www.primetals.com/en/portfolio/solutions/steelmaking/aod-converter/ | 转炉悬挂、驱动/阻尼器及风口接口；供给系统区别于运行气体及熔融进料。 |
| primetals-converter-manufacture | extension_guidance | Primetals Technologies and ArcelorMittal Complete Converter Revamp in Eisenhuettenstadt, 28 April 2026. https://www.primetals.com/en/news/primetals-technologies-and-arcelormittal-complete-converter-revamp-in-eisenhuettenstadt/ | 区分设备制造/供给及后续施工/调试接口；改造实例不规定新设备配置。 |
| primetals-copper | extension_guidance | Primetals Technologies, Continuous Caster Mold Copper Repair & Coatings, undated publisher page. https://www.primetals.com/en/portfolio/solutions/continuous-casting/continuous-caster-mold-copper-repair-and-coatings/ | 新/旧铜板加工；分别区分氨基磺酸镍、镍硼、铬及HVOF碳化钨备选路线；结晶器水/润滑脂/液压试验。新设备参考不含翻修。 |
| primetals-mill | extension_guidance | Primetals Technologies, Plate Mills, Plate Mill Stand section, undated publisher page. https://www.primetals.com/en/portfolio/solutions/hot-rolling/plate-mill/ | 单体/多件机架、工作/支承辊、液压辊缝控制及传动轴；更广产线附属设备按供货合同有条件纳入。 |
| jrc-foundry-2024 | official_guidance | JRC, Smitheries and Foundries Industry BAT Reference Document, EUR40127, 2024, DOI10.2760/4805267, section2.2.1.1, printed67-68. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2024-12/SF_BREF_2024-bref.pdf | 设备构件铸造路线：熔化/处理、制模、浇注/冷却/落砂及精整；购入铸件跳过已完成供应工序。不采用经验因子。 |
| jrc-metalworking-2020 | official_guidance | JRC, Best Environmental Management Practice in the Fabricated Metal Products manufacturing sector, EUR30025EN, 2020, DOI10.2760/894966, printed190 section4.1. https://publications.jrc.ec.europa.eu/repository/bitstream/JRC119281/jrc119281_jrc_bemp_fabricated_metal_product_manufacturing_report.pdf | 分开直用切削油、水溶性浓缩液及稀释水，按实际成形/切削/磨削适用性。 |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU)2021/2279, AnnexI section4.5. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | 细分及物理因果分配层级；不宣称完全符合环境足迹。 |
| frech-cold | extension_guidance | FRECH, Cold Chamber Die Casting Machines, undated publisher page. https://www.frech.com/en/cold-chamber.html | 冷室三模板锁模及液压/控制架构，不采用锁模力/运行性能数据。 |
| frech-hot | extension_guidance | FRECH, Hot Chamber Die Casting Machines, undated publisher page. https://www.frech.com/en/hot-chamber.html | 热室设备供炉至铸造系统界面，不采用用户熔炼能耗或循环参数。 |
