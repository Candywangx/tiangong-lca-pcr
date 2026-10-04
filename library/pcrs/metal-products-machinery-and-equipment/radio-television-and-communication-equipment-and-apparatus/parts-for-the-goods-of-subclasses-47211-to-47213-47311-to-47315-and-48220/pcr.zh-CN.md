---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.parts-for-the-goods-of-subclasses-47211-to-47213-47311-to-47315-and-48220
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 广播、电视、显示和雷达设备专用零件

## 1. 范围与适用性

本方法覆盖供广播、电视发射设备（含或不含接收）、电视摄像机、普通或车用广播接收机、电视接收机、ADP或非ADP监视器与投影机，以及雷达、无线电导航和遥控设备使用的已验收专用零件。壳体、已装配电路板、射频或显示分总成并不因名称自动适用：必须用图纸、专用主机适配、交付功能和尚需装配证明零件状态。完整设备即使无外壳，也不属于参考输出。

CPC3现行注释中47403仅有名称，没有详细包含或排除条文；相邻类别单列电容、电阻、裸印制电路、电子管、半导体和集成电路。它们及通用金属或聚合物原料不因购方用于主机便成为本参考产品。单独分类显示单元、一般紧固件、完整天线或可独立运作的显示或雷达模块须单独判定。电话网络设备、录放音视频设备、普通数码照相机和摄录机零件不自动纳入。历史海关案例证明电视主板可以是零件，LCD分总成可另行分类，含解码功能的LCD模块可以是完整监视器；这些案例不是通用现行CPC映射。来源：`un-cpc3-notes`；`cbp-n059857`；`cbp-h325872`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.parts-for-the-goods-of-subclasses-47211-to-47213-47311-to-47315-and-48220 |
| classification_refs | CPC 3.0:47403 |
| covered_products | 上述主机经图纸及交付状态审查的专用零件 |
| excluded_products | 完整设备；独立命名元件或通用原料；无主机证据的模块；范围外主机零件 |
| representative_product | 经主机适配验收的电视主控制电路组件 |
| production_route | 按实际自制外购矩阵的机械、聚合物、电路、微波、显示路线 |
| market_state | 声明工厂边界的验收合格专用零件，安装于主机之前 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合声明图纸及接口的专用设备零件供给 |
| How much | 1 kg |
| How well | 料号及图纸版本；实际主机类别、型号及专用适配；交付功能状态及后续装配；材料牌号及配方；自制外购及供方已完成工序；电气、射频、光学、机械接口及验收试验；配置及净质量；场址、期间、供方地区、测试和包装边界 |
| How long or cycle | 工厂门口一次供给；不声明主机使用寿命 |
| reference_flow_link | `final_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收合格的设备专用零件 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 料号及图纸版本；实际主机类别、型号及专用适配；交付功能状态及后续装配；材料牌号及配方；自制外购及供方已完成工序；电气、射频、光学、机械接口及验收试验；配置及净质量；场址、期间、供方地区、测试和包装边界 |

D为同一零件、图纸及配置在匹配期间的正验收净质量。用经校准秤称量验收批次，排除运输包装、试验夹具、不合格品及免费残留液体。小型零件允许批次净重配合同批数量；不得假造单件质量。计数转质量仅用同配置匹配批次的实测净质量除以实测验收数量；包装或不同型号重量不能替代。每一前景交换均将归属期间数量除以D，净参考输出为1 千克。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | final_product | Mass | kg | cp_mass计量D；所有行归属期间量除以D。 |
| units | all inventory rows | Row-specific property | kg; kWh; MJ; t km | 保留原始单位及转换证据；电力1 kWh=3.6 MJ；气体保留温压、组成及低位热值。 |
| balances | production | Mass | kg | 分别核对各合金、树脂、焊膏、溶剂的外部投入、库存、产品、废物和排放；每项含金属或元素均用对应实测组成，不以毛重充当元素质量；计入反应、吸氧、水分及库存，成对抵销内部转移并保留返工能耗。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明已收到的坯料、裸板、芯片、显示单元或完成组件及已完成工序 |
| starting_condition_role | Supplier intermediate product |
| product_classification_scope | 审查合格的广播、电视、显示、雷达主机专用零件 |
| recursive_input_rule | 外购同类零件具有独立供方负荷；内部回用仅抵销转移，不给替代信用。 |
| upstream_dataset_requirement | 链接实际牌号、制造阶段、地区、供方过程、公用工程、运输及废物接收方；未知不能记零。 |
| disclosure | 料号及图纸版本；实际主机类别、型号及专用适配；交付功能状态及后续装配；材料牌号及配方；自制外购及供方已完成工序；电气、射频、光学、机械接口及验收试验；配置及净质量；场址、期间、供方地区、测试和包装边界 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_routes | all processes | 按图纸逐阶段建立自制、外购、委外矩阵。外购底盘、PCBA、微波组件或显示单元只计供方负荷一次；自制时包括实际加工、装配、试验、返工及处理。不得同时计成品组件及其内含原料。 | `cbp-n353432`; `rogers-materials` |
| boundary_extensions | all processes | 并非每个零件厂都做晶圆、裸板或LCD玻璃制造。实际厂内制造时必须补充光刻、沉积或蚀刻、电镀、清洗、层压、封装等适用阶段，逐项列化学品、材料、公用工程、废物和物种排放；特殊配方证据不足即为该数据包缺口，不自动排除零件族。 | `cbp-n353432`; `rogers-materials` |
| boundary_gate | all processes | 包含实际工厂试验电力、样品报废、清洗、维护及控制设备服务；安装到主机、整机调试、用户使用和报废在本工厂门口数据包之外，需下游另行建模。资本设备或厂房排除须说明并检验敏感性。 | `cbp-n353432` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| receipt | 供方接收与自制外购核对 | required | 追溯实际零件图纸及收到的投入状态；记录入厂运输及供方已完成工序。 | Foreground manufacturing | 每 1 kg 参考流 |
| mechanical | 机械或聚合物零件制造 | conditional | 仅纳入厂内实际板材或型材切割、机加工、铸造、聚合物干燥成型或介电材料成型；外购成品壳体仅绕过供方已做工序。 | Foreground manufacturing | 每 1 kg 参考流 |
| electronics | 主机专用电路装联 | conditional | 实际印刷、贴装、回流焊或插件焊接、光学检验、电气试验及返修；外购装配板仅计一次供方制造。 | Foreground manufacturing | 每 1 kg 参考流 |
| rf_display | 射频或显示分总成集成 | conditional | 实际微波基板、裸芯片、互连装配，天线、波导、天线罩装配，或显示、背光、光学集成；交付零件须先满足范围判定。 | Foreground manufacturing | 每 1 kg 参考流 |
| surface | 表面处理与化学品控制 | conditional | 实际脱脂、涂覆固化、粘接、封装或电镀；纳入各实际配方、反应、漂洗及治理过程。 | Foreground manufacturing | 每 1 kg 参考流 |
| acceptance | 零件验收、包装与出厂 | required | 按零件图纸验收，适用时做功能、电气、射频、光学试验，剔除不合格品并最终净重计量。 | Foreground manufacturing | 每 1 kg 参考流 |
| utilities | 可归属公用工程与污染治理 | required | 计量共享能源、水，实际存在时纳入本地燃烧、废气收集及废水处理；不重复其他工序行已计公用工程。 | Foreground manufacturing | 每 1 kg 参考流 |

不同零件族的限定信息须匹配试验：机械或塑料件查尺寸、公差、材料及接口；主板查BOM、SPI、AOI、电气与主机功能；射频件按实际频段、连接器和配置查损耗、增益、匹配或天线性能；显示分总成查供方规定像素、亮度、光学及信号接口。仅做适用试验，保留合格、返修、报废和试验耗能记录，不给出通用测试阈值。来源：`cbp-n353432`；`rogers-materials`；`keysight-radar-tests`。下列行是有条件的具体接口示例，不能当作所有零件的通用BOM。未实际采用记not_applicable并说明依据；存在而未测量记unknown，不记零。

### 过程：供方接收与自制外购核对 （`receipt`）

#### 输入

##### 产品流

###### 电视主控制印制电路组件 （`purchased_board`）

仅外购专用主板时；标明供方料号、已装配状态及尚需的主机集成，不重复其内含裸板和芯片。

- 选定流：电视主控制印制电路组件
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_receipt采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt`
- 来源：`cbp-n059857`; `cbp-n353432`

###### 主机专用铝制成品底盘 （`purchased_housing`）

仅适用于有主机图纸且声明合金及表面状态的外购成品底盘，不重复铝材及机加工。

- 选定流：主机专用铝制成品底盘
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_receipt采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt`
- 来源：`jrc-metal-bemp`

###### 道路货物运输服务 （`freight`）

实际入厂运输段；质量、距离、方式、装载及服务提供方基准须一致。

- 选定流：道路货物运输服务
- 流属性/单位：Transport service / t km
- 数量规则：归属期间数量按cp_receipt采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt`
- 来源：

### 过程：机械或聚合物零件制造 （`mechanical`）

#### 输入

##### 产品流

###### EN AW-6061铝合金挤压型材，T6状态 （`aluminium_stock`）

实际图纸规定本合金及状态时的条件示例；其他牌号另列原子行；铸造原料不属于本挤压型材。

- 选定流：EN AW-6061铝合金挤压型材，T6状态
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_mechanical采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mechanical`
- 来源：`jrc-metal-bemp`

###### 聚碳酸酯粒料 （`polycarbonate`）

仅实际聚碳酸酯成型；记录树脂牌号、添加剂及干燥；PC/ABS共混、热固性或介电复合物须独立成行，不以本行为代理。

- 选定流：聚碳酸酯粒料
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_mechanical采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mechanical`
- 来源：

###### 聚四氟乙烯介电复合材料坯料 （`ptfe_dielectric`）

仅声明的PTFE基介电材料机加工或成型路线；记录填料及供方牌号，不视为通用天线罩材料。

- 选定流：聚四氟乙烯介电复合材料坯料
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_mechanical采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mechanical`
- 来源：`rogers-materials`

###### 矿物油基纯油切削液 （`cutting_oil`）

仅使用时；保留实际配方、安全数据表及库存；若用水溶性路线，浓缩液和稀释水必须分别计量。

- 选定流：矿物油基纯油切削液
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_mechanical采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mechanical`
- 来源：`jrc-metal-bemp`

#### 输出

##### 废物流

###### EN AW-6061铝合金机加工切屑 （`aluminium_swarf`）

仅对外切屑；测定油、水及合金比例；内部回用抵销转移，但保留重复能耗。

- 选定流：EN AW-6061铝合金机加工切屑
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_mechanical采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mechanical`
- 来源：`jrc-metal-bemp`

###### 聚碳酸酯成型废品 （`polycarbonate_reject`）

对外废品或清机料；区分内部回用碎料，记录树脂组成和去向。

- 选定流：聚碳酸酯成型废品
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_mechanical采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mechanical`
- 来源：

### 过程：主机专用电路装联 （`electronics`）

#### 输入

##### 产品流

###### 印制线路板 （`bare_board`）

仅供厂内装联的收到的FR4玻纤、环氧、铜裸板；本核实身份不是已装配板、柔性电路或微波覆铜板；供方蚀刻、电镀负荷仅计一次。

- 选定流：印制线路板 `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_electronics采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electronics`
- 来源：`cbp-n353432`

###### 已封装硅电视调谐器集成电路 （`tuner_ic`）

仅实际电视调谐器BOM条目；记录制造商料号及封装；外购晶圆制造、封装属于上游，不用本芯片替代整板。

- 选定流：已封装硅电视调谐器集成电路
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_electronics采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electronics`
- 来源：`cbp-n059857`

###### 已封装CMOS电视摄像机图像传感器 （`camera_sensor`）

仅实际专业电视摄像机专用组件；记录感光面积、封装及主机接口；照相机或网络摄像头零件不自动进入本主机范围。

- 选定流：已封装CMOS电视摄像机图像传感器
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_electronics采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electronics`
- 来源：`un-cpc3-notes`

###### SAC305免清洗焊膏 （`solder_paste`）

仅实际SAC305免清洗配方；分别保留焊膏合金比例及助焊剂安全数据表用于去向核算；其他合金或助焊体系另列行，不设通用配方或损失因子。

- 选定流：SAC305免清洗焊膏
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_electronics采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electronics`
- 来源：`kester-solder-paste`

###### 供给的氮气 （`reflow_nitrogen`）

仅氮气回流或吹扫；空气回流不意味着本投入；记录纯度及钢瓶、槽罐或现场制氮接口。

- 选定流：供给的氮气
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_electronics采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electronics`
- 来源：

#### 输出

##### 废物流

###### 废料，印制线路板 （`pcba_scrap`）

仅SMT或回流焊对外报废的已装配板；称量实际废品，保留组成及接收处理；直读身份不提供数量或回收率。

- 选定流：废料，印制线路板 `fe1d2a9b-bdb0-498a-9b5f-4836ec35f883`
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_electronics采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electronics`
- 来源：`cbp-n353432`

###### SAC305焊膏废物 （`solder_waste`）

实际废焊膏或钢网残留，与保留焊料、捕集烟尘及板废物分开；记录合金、助焊剂及去向。

- 选定流：SAC305焊膏废物
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_electronics采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electronics`
- 来源：

### 过程：射频或显示分总成集成 （`rf_display`）

#### 输入

##### 产品流

###### PTFE基覆铜微波电路板 （`microwave_board`）

仅实际射频覆铜电路投入；识别基板牌号、填料、铜箔及已完成图形；不以裸FR4 UUID替代微波电路板。

- 选定流：PTFE基覆铜微波电路板
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_rf_display采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rf_display`
- 来源：`rogers-materials`

###### 砷化镓微波放大器MMIC裸芯片 （`rf_die`）

仅实际GaAs裸芯片集成；识别芯片料号及安装、互连路线；外购制造属于上游，硅或GaN芯片另列行。

- 选定流：砷化镓微波放大器MMIC裸芯片
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_rf_display采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rf_display`
- 来源：

###### 金键合丝 （`gold_wire`）

仅实际金丝键合；记录纯度、直径及用量；倒装、铜丝或带状互连为另一声明路线。

- 选定流：金键合丝
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_rf_display采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rf_display`
- 来源：

###### 液晶显示单元 （`lcd_cell`）

仅经审查的专用主机分总成中的实际显示单元投入；原始单元、完整监视器或单独分类显示模块不自动归为专用零件；记录驱动、解码、背光及后续装配。

- 选定流：液晶显示单元
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_rf_display采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rf_display`
- 来源：`cbp-h325872`; `cbp-n059857`

###### LED背光灯条组件 （`backlight`）

仅实际外购背光灯条；记录LED类型、光学及电气状态；连接供方装配负荷后不重复内含LED或电路板。

- 选定流：LED背光灯条组件
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_rf_display采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rf_display`
- 来源：`cbp-n353432`

###### 铝制微波波导段 （`waveguide`）

仅实际波导装配；规定合金、口径、长度、表面处理及主机适配；完整雷达或收发机不能作为本参考输出。

- 选定流：铝制微波波导段
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_rf_display采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rf_display`
- 来源：`rogers-materials`

### 过程：表面处理与化学品控制 （`surface`）

#### 输入

##### 产品流

###### 异丙醇 （`isopropanol`）

仅实际清洗溶剂；记录纯度、配方组分及回收；不用通用VOC替代，不假定全部挥发。

- 选定流：异丙醇
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_surface采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：`epa-metal-coating`

###### 二甲苯 （`xylene`）

仅实际使用二甲苯并声明异构体组成及涂覆或清洗接口；异丙醇为替代路线，并非必须同时消耗。

- 选定流：二甲苯
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_surface采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：`epa-metal-coating`

###### 银填充环氧芯片粘接胶 （`epoxy_adhesive`）

仅实际导电环氧安装；规定配方、银比例、固化剂及固化记录；焊料安装为另一条路线，不属于本胶。

- 选定流：银填充环氧芯片粘接胶
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_surface采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

#### 输出

##### 废物流

###### 废异丙醇清洗液 （`ipa_waste`）

仅对外废液；记录溶剂、水、固体分析及合规处理；内部回收溶剂作为抵销的内部转移。

- 选定流：废异丙醇清洗液
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_surface采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：`epa-metal-coating`

##### 基本流

###### 异丙醇，空气 （`ipa_air`）

仅捕集、回收后的实际物种特定残余排放，以对应配方库存及去向记录或废气浓度、流量计量。

- 选定流：异丙醇，空气
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_surface采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：`epa-metal-coating`

###### 二甲苯，空气 （`xylene_air`）

实际对空气的残余二甲苯物种或异构体混合物；区分膜内保留、废物、捕集及销毁；其他实测组分单列。

- 选定流：二甲苯，空气
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_surface采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：`epa-metal-coating`

### 过程：零件验收、包装与出厂 （`acceptance`）

#### 输入

##### 产品流

###### 瓦楞纸板箱 （`corrugated`）

实际纸箱投入；不计入验收零件净质量；供方负荷及出厂包装各计一次。

- 选定流：瓦楞纸板箱
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_acceptance采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 来源：

###### 金属化聚乙烯防静电屏蔽袋 （`esd_bag`）

仅实际使用；声明多层组成及处理接口，与纸箱分开。

- 选定流：金属化聚乙烯防静电屏蔽袋
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_acceptance采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 来源：

#### 输出

##### 产品流

###### 验收合格的设备专用零件 （`final_product`）

同一声明零件及配置的1 千克验收净输出。保留图纸、质量及验收记录；不用同一参考身份混合无关零件族。

- 选定流：验收合格的设备专用零件
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：`un-cpc3-notes`

### 过程：可归属公用工程与污染治理 （`utilities`）

#### 输入

##### 产品流

###### 外购电网电力 （`electricity`）

实际输入电力；记录地区、电压、期间、合同或电网提供方及计量负荷；专用焚烧发电不是通用工厂电网代理。

- 选定流：外购电网电力
- 流属性/单位：能量 / kWh
- 数量规则：归属期间数量按cp_utilities采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：

###### 市政供水 （`water`）

仅实际供水；保留计量及体积转换所需温度、密度；直接取水须另列基本取水及处理。

- 选定流：市政供水
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_utilities采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：

###### 供给的天然气 （`natural_gas`）

仅实际本地燃烧器、烘炉或发电机；保留体积条件、组成及低位热值；外购热不意味着厂内燃气投入。

- 选定流：供给的天然气
- 流属性/单位：能量 / MJ
- 数量规则：归属期间数量按cp_utilities采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：

#### 输出

##### 废物流

###### 交外部处理的工艺废水 （`wastewater`）

仅实际对外液体转移；表征固体、pH、溶解金属、溶剂及接收处理；不将接收方排放重复计为本厂排放。

- 选定流：交外部处理的工艺废水
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_utilities采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：

##### 基本流

###### 二氧化碳，化石来源，空气 （`fossil_co2`）

仅实际本地化石燃烧；核对燃料碳、未燃碳及其他含碳物种；电网电力不产生本地燃烧排放。

- 选定流：二氧化碳，化石来源，空气
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_utilities采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：

###### 一氧化碳，空气 （`carbon_monoxide`）

仅实际燃烧设备及治理的实测值或适用物种特定因子；总碳平衡不能单独确定CO。

- 选定流：一氧化碳，空气
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_utilities采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：

###### 二氧化氮，空气 （`nitrogen_dioxide`）

仅物种明确的NO2排放；以NO2当量报告的总NOx须声明物种分配及转换，适用时另列NO行；不从燃料碳单独推导。

- 选定流：二氧化氮，空气
- 流属性/单位：质量 / kg
- 数量规则：归属期间数量按cp_utilities采集，核对库存、内部转移和分配后除以D。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared activities | 先分表或分批追踪；不能分割时用可核实工时、试验时间或机器运行及负荷计量分配，记录分配总和、原因和敏感性。不同零件不强制按质量分配。 |  |
| allocation_residues | scrap and rework | 本候选采用切断法：生产承担投入和厂内加工负荷，按实际废物接口连接接收处理；不默认给予废料替代信用。可售共产品须明确功能、边界及一致方法，避免重复信用。内部返工无新产品信用且保留其能源及材料。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | final_product | 称重与验收 | 料号；图纸；配置；批次；验收净质量D；验收数量；皮重；秤校准 | 用经校准秤称量同配置合格零件，排除运输包装；核对BOM、验收及同批数量。 | kg | each accepted lot | matched reporting period | declared plant gate | 同一参考流期间验收净质量D | 校准证书、去皮及合格记录 |
| cp_receipt | receipt | individual atomic exchanges | 计量、台账及试验 | 各行身份；料号或配方；原始量；库存；内转；拒收；路线；分配；D；物种及接收方；水温密度及废物含水；元素分析；物种比例；期初期末库存；成对回用编号；反应生成消耗；捕集销毁去向；各项不确定性 | 逐条称重或计量，配合批次BOM、采购发货、SDS、生产工时及试验；物种排放用实测浓度流量或适用因子，保留期间、治理及不确定性。 | row-specific | each lot or metered period | matched reporting period | declared plant and attributable supplier interface | 每 1 kg 参考流 | 原始仪表、批次、SDS、分析、接收及分配凭据 |
| cp_mechanical | mechanical | individual atomic exchanges | 计量、台账及试验 | 各行身份；料号或配方；原始量；库存；内转；拒收；路线；分配；D；物种及接收方；水温密度及废物含水；元素分析；物种比例；期初期末库存；成对回用编号；反应生成消耗；捕集销毁去向；各项不确定性 | 逐条称重或计量，配合批次BOM、采购发货、SDS、生产工时及试验；物种排放用实测浓度流量或适用因子，保留期间、治理及不确定性。 | row-specific | each lot or metered period | matched reporting period | declared plant and attributable supplier interface | 每 1 kg 参考流 | 原始仪表、批次、SDS、分析、接收及分配凭据 |
| cp_electronics | electronics | individual atomic exchanges | 计量、台账及试验 | 各行身份；料号或配方；原始量；库存；内转；拒收；路线；分配；D；物种及接收方；水温密度及废物含水；元素分析；物种比例；期初期末库存；成对回用编号；反应生成消耗；捕集销毁去向；各项不确定性 | 逐条称重或计量，配合批次BOM、采购发货、SDS、生产工时及试验；物种排放用实测浓度流量或适用因子，保留期间、治理及不确定性。 | row-specific | each lot or metered period | matched reporting period | declared plant and attributable supplier interface | 每 1 kg 参考流 | 原始仪表、批次、SDS、分析、接收及分配凭据 |
| cp_rf_display | rf_display | individual atomic exchanges | 计量、台账及试验 | 各行身份；料号或配方；原始量；库存；内转；拒收；路线；分配；D；物种及接收方；水温密度及废物含水；元素分析；物种比例；期初期末库存；成对回用编号；反应生成消耗；捕集销毁去向；各项不确定性 | 逐条称重或计量，配合批次BOM、采购发货、SDS、生产工时及试验；物种排放用实测浓度流量或适用因子，保留期间、治理及不确定性。 | row-specific | each lot or metered period | matched reporting period | declared plant and attributable supplier interface | 每 1 kg 参考流 | 原始仪表、批次、SDS、分析、接收及分配凭据 |
| cp_surface | surface | individual atomic exchanges | 计量、台账及试验 | 各行身份；料号或配方；原始量；库存；内转；拒收；路线；分配；D；物种及接收方；水温密度及废物含水；元素分析；物种比例；期初期末库存；成对回用编号；反应生成消耗；捕集销毁去向；各项不确定性 | 逐条称重或计量，配合批次BOM、采购发货、SDS、生产工时及试验；物种排放用实测浓度流量或适用因子，保留期间、治理及不确定性。 | row-specific | each lot or metered period | matched reporting period | declared plant and attributable supplier interface | 每 1 kg 参考流 | 原始仪表、批次、SDS、分析、接收及分配凭据 |
| cp_acceptance | acceptance | individual atomic exchanges | 计量、台账及试验 | 各行身份；料号或配方；原始量；库存；内转；拒收；路线；分配；D；物种及接收方；水温密度及废物含水；元素分析；物种比例；期初期末库存；成对回用编号；反应生成消耗；捕集销毁去向；各项不确定性 | 逐条称重或计量，配合批次BOM、采购发货、SDS、生产工时及试验；物种排放用实测浓度流量或适用因子，保留期间、治理及不确定性。 | row-specific | each lot or metered period | matched reporting period | declared plant and attributable supplier interface | 每 1 kg 参考流 | 原始仪表、批次、SDS、分析、接收及分配凭据 |
| cp_utilities | utilities | individual atomic exchanges | 计量、台账及试验 | 各行身份；料号或配方；原始量；库存；内转；拒收；路线；分配；D；物种及接收方；水温密度及废物含水；元素分析；物种比例；期初期末库存；成对回用编号；反应生成消耗；捕集销毁去向；各项不确定性 | 逐条称重或计量，配合批次BOM、采购发货、SDS、生产工时及试验；物种排放用实测浓度流量或适用因子，保留期间、治理及不确定性。 | row-specific | each lot or metered period | matched reporting period | declared plant and attributable supplier interface | 每 1 kg 参考流 | 原始仪表、批次、SDS、分析、接收及分配凭据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | 各交换归属期间量除以cp_mass的D；final_product为1 千克。计数投入先用同配置同批次实测净重及验收数量转质量，不使用假造单件质量。 | period exchange; D; cp_mass | exchange per 1 kg reference flow |  |
| species_fate | ipa_air; xylene_air; fossil_co2; carbon_monoxide; nitrogen_dioxide | 用对应物种浓度乘匹配废气量并扣除适用背景或采用适用设备因子；溶剂核对购入与库存、残留、废物、回收、反应及物种释放。燃料碳不能单独求CO或NOx。 | species data; exhaust flow; formulation and fuel records | individual species amount | `epa-metal-coating` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all rows | 逐行核实物理或化学身份、状态、单位、供方地区、工序及中文名称；参考产品的分类不能代替实际身份。 | direct flow record and supplier specification |
| coverage | all processes | 每个实际步骤及原子流有数量、未知或带证明的不适用状态；引用仅为路线证据，不设实测默认值。 | site audit; make/buy matrix; source applicability |
| measurement | all rows | D与投入、试验、废物、期间及配置对应，保留计量校准、库存调整、元素分析及不确定性。 | cp_mass and individual process protocols |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | final_product | 先审核图纸、主机适配、交付功能及剩余装配；有完整设备功能或单独更具体类别时不能凭模块名称通过本范围。 | `un-cpc3-notes`; `cbp-h325872`; `cbp-n059857` |
| validate_denominator | all inventory rows | 所有行使用同一正D和验收配置；包装及废品不在D；逐项核对原始单位、数量转换及分配。 |  |
| validate_completeness | all processes | 核对自制外购、逐阶段工序和实物流；缺失UUID、配方或物种证据须明示并阻止该数据包声称完整，不因无UUID就排除零件族。上游负荷、组件内含物及内部转移只计一次；未知不等于零或不适用。 |  |
| validate_water_closure | utilities; all water-bearing processes | 在同一期间以水的质量计量全部外部供水及实际取水加期初库存，加反应生成水，等于产品夹带水、外排废水中水、各废物含水、蒸发或其他释放水、反应消耗水及期末库存之和。流量计保留温度和密度转换；废物水分分别取样，蒸发使用实测或透明水量平衡及其不确定性。回用循环、清洗回流和工序间水转移按同一编号成对抵销，不能作为新取水或无依据损失。 |  |
| validate_contained_metal | mechanical; electronics; rf_display; surface | 对每一实际金属元素采用各外部物料实测毛重乘该物料对应元素分析值。外部投入元素及期初元素库存等于验收产品、外排切屑、报废板、焊料残留、污泥、废液、排放及期末库存中该元素之和；金属化或反应物料的元素投入和输出均纳入。分别计氧化吸氧和水分，不能把合金、焊膏或氧化物毛重当元素质量。内部金属回用和返修转移用同编号成对抵销，不抵销重复加工负荷。 |  |
| validate_solvent_closure | surface; electronics; rf_display | 逐一溶剂物种按实测配方质量及该物种比例核算：外部投入、期初库存及反应生成量等于产品或涂膜残留、外排废液和固废中含量、对外回收量、治理后物种排放、反应销毁量及期末库存之和。内部回收回用成对抵销，外排回收不再计为空气排放。记录捕集效率、治理去向及实际反应证据，不假定全部挥发或固定损失率。 |  |
| validate_balance_uncertainty | all material and water balances | 逐项保存秤、仪表、取样分析、库存和分配的实际不确定性，计算及解释各平衡残差；超出组合实测不确定性的残差须查明遗漏、期间错配或重复计量。未知分析值、反应去向或蒸发证据保留为未解决缺口，不以假造收率、零或统一容差强行闭合。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 符合限定信息的专用零件数据生产及其下游过程或生命周期模型 |
| excluded_use | 无论证跨零件族比较；完整设备使用寿命或系统环境声明 |
| required_metadata | 料号及图纸版本；实际主机类别、型号及专用适配；交付功能状态及后续装配；材料牌号及配方；自制外购及供方已完成工序；电气、射频、光学、机械接口及验收试验；配置及净质量；场址、期间、供方地区、测试和包装边界 |
| required_quality_disclosure | 边界、自制外购、上游阶段、分配、计量与身份缺口、不适用依据及来源限制 |
| update_trigger | 图纸、主机、交付状态、材料、供应链、制造或试验变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| keysight-radar-tests | handbook | Keysight Portable RADAR Testing Saves Time on the Assembly Line, publisher asset page, snapshot 2026-10-02; https://www.keysight.com/us/en/assets/7018-06239/case-studies/5992-3124.pdf | 按配置雷达试验及早期测试返工；仅OEM安装案例，无通用工厂阈值 |
| kester-solder-paste | handbook | Kester NP505-HR Technical Data Sheet, publisher public copy, pp1–3; https://www.kester.com/downloads?Command=Core_Download&EntryId=1623 | 具体条件SAC305免清洗焊膏；采集实际配方、助焊剂及制造曲线；无通用配方或数量 |
| un-cpc3-notes | official_guidance | UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025, pp255–259 and 267; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 主机及类别身份；无详细叶节点注释及单独列名元件；分类证据而非制造强度 |
| cbp-n059857 | official_guidance | CBP N059857, 1 June 2009; https://rulings.cbp.gov/api/getdoc/ny/2009/N059857.pdf | 历史电视主板零件及独立LCD分总成反例；不用于现行关税或默认CPC映射 |
| cbp-h325872 | official_guidance | CBP H325872, 27 March 2023; https://rulings.cbp.gov/api/getdoc/hq/2023/H325872.pdf | 交付状态反例：含解码器LCD模块可成为监视器；特定案例，不自动扩展范围 |
| cbp-n353432 | official_guidance | CBP N353432, 6 October 2025, pp1–2; https://rulings.cbp.gov/api/getdoc/ny/2025/N353432.pdf | 外购与厂内PCBA、SMT、回流焊、SPI、AOI及后续装配；非通用BOM或能耗范围 |
| rogers-materials | handbook | Rogers Engineered Material Solutions capabilities brochure, p2, public snapshot 2026-10-02; https://rogerscorp.com/-/media/project/rogerscorp/documents/advanced-electronics-solutions/english/brochures/engineered-material-solutions---capabilities-brochure.pdf | 条件PTFE、热固性、覆铜射频材料，天线罩成型及金属化替代；制造商定性证据，非强制牌号 |
| jrc-metal-bemp | official_guidance | JRC, Best Environmental Management Practice in the Fabricated Metal Products sector, EUR30025EN (2020), pp190 and 226; DOI 10.2760/894966; https://publications.jrc.ec.europa.eu/repository/bitstream/JRC119281/jrc119281_jrc_bemp_fabricated_metal_product_manufacturing_report.pdf | 条件切削液及分类金属残渣；不采用设备零件制造强度 |
| epa-metal-coating | official_guidance | EPA Miscellaneous Metal Parts and Products Surface Coating Operations Technical Support Document (EPA-453/R-02-006, February 2002), pp7-4 and 8-14; https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=P1006FDO.PDF | 实际配方清洗、涂覆及二甲苯、异丙醇替代；不用通用VOC因子或溶剂数量 |
