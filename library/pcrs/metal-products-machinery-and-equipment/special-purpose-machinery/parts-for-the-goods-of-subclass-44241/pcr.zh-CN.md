---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-for-the-goods-of-subclass-44241
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 电软钎焊、硬钎焊、焊接及金属碳化物热喷装置专用零件

## 1. 范围与适用性

本PCR覆盖独立供货电动软钎焊、硬钎焊或焊接机械专用零件，以及电动金属或烧结金属碳化物热喷机械装置专用零件。包括适用电阻焊夹持导电件、电弧焊接触气路导向件、软焊加热芯烙铁头夹持件、连接专用感应工作线圈、专用功率控制冷却送丝件、电热喷嘴电极注入驱动件。范围以各件有据专用宿主实际主要功能为准，不缩减为某个烙铁头材料。独售完整宿主属于完整装置类别；通用变压器电缆轴承电子元件不因进入物料表而变专用零件。非电连接燃气表面处理专用件属相邻范围；普通冷油漆粉末喷枪、仅切割硬件、无关炉线圈、客户处理工件未经实际范围审查排除。焊接软硬钎料喷粉喷丝是消耗介质，不是专用参考零件。

厂家示例结构不同：TUFFALOY夹持件包含冷却水管及适用研磨抛光Class2或镀镍铜体；Castolin列铜铬锆铜接触件、钢聚四氟乙烯导管和陶瓷分配件；Ambrell制造成形铜绝缘工作线圈并实际测试制造线圈，但须专门服务连接功能才在本范围。Metco SF0013.1说明水冷铜等离子阳极和可选钨内衬，不设通用内衬寿命因子。HAKKO铜铁焊料铬层结构明确排除RED、U、PORTABLE、MATCHLESS、JUNIOR，各真实型号表面状态独立。更换目录只证明可用兼容，不证明整机随货或零件厂原料镀槽质量产率试验配方。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-for-the-goods-of-subclass-44241 |
| classification_refs | CPC 3.0 44255; exact semantic scope |
| covered_products | 经审查宿主兼容独立供货电软硬钎焊焊接及电金属碳化物热喷专用零件 |
| excluded_products | 完整宿主；非电燃气专用件；通用电机械货物；焊材喷料；普通油漆喷枪；处理工件 |
| representative_product | 一个有据验收专用零件配置，示例不缩减完整类别 |
| production_route | 实际本地制造部件装配表面加工验收试验，或披露外购完整零件边界 |
| market_state | 工厂大门验收独立供货成品零件 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应声明专用电连接或电热喷零件 |
| How much | 1 kg验收配置成品零件净质量 |
| How well | 真实准确件号宿主功能兼容供货完成状态及适用有据尺寸电气热泄漏送丝验收 |
| How long or cycle | 一个匹配生产验收期间，不假定客户更换寿命 |
| reference_flow_link | finished_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 44241 子类货物的部件 `6f6ed072-afd5-4b25-89d5-cf849f542440` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 准确件号型号配置专用宿主主要电连接热喷功能；电阻电弧软焊感应等离子电弧喷涂机制；供货完成状态接口内含部件填充；金属聚合物陶瓷化学牌号掺杂涂层；真实自制外购本地工序；验收净质量物料；场址期间供应运输接收；实测真实工厂试验不良返修；原生单位化验状态换算分配身份缺口 |


## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考为1 kg验收配置成品零件净质量，采用cp_mass采集校准同配置验收质量，排除包装额外备件库存不良实耗工厂试验介质。 |
| native_amount | all inventory rows | actual native property | native unit | 保留原生分子包括供货缆Length/米气Volume/立方米Energy；实测换算需要才用同结构缆自身千克每米气自身温压湿密度，电每千瓦时3.6兆焦；化学溶液质量不是所含物种质量。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际收到棒料化学品或兼容完整外购零件部件，各接口准确完成状态 |
| starting_condition_role | foreground_input_boundary |
| product_classification_scope | 完整专用电连接及电金属碳化物热喷零件边界 |
| recursive_input_rule | 外购同类别完整件上游制造计一次，仅真实本地制造才改用自身棒料工序，内部转移配对抵销。 |
| upstream_dataset_requirement | 各外部输入须兼容上游状态牌号原生单位供应地域及披露运输处理接口 |
| disclosure | 声明自制外购供货物料本地涂层试验填充包装边界全部证据缺口 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| boundary_scope | 零件须专用于经审查电软硬钎焊焊接或电金属碳化物热喷宿主；通用采购货消耗料仅输入非自动参考件，辅助控制不能证明主要热功能。 | cpc |
| boundary_makebuy | 真实完整外购模块计一次排除内含原料制造；实际本地制造用独立查询原料工序，外购半成品披露余下工序；替换清单不证明整机备件随货。 | cpc; hakko-parts; hakko-tip; metco-nozzles; metco-spares; castolin-parts; resistance-parts; coil-actual |
| boundary_test | 纳入可归属观察零件制造表面加工失败重复工厂试验交付，留存随货部件填充与实耗试验片填料气冷却水客户寿命运行分开，仅泄漏检查不虚构喷涂焊接配方。 | coil-actual; metco-nozzles; hakko-tip |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| fabrication | 专用导电结构零件制造 | conditional | 仅真实本地切割成形机加工热处理 | foreground | 每 1 kg 参考流 |
| assembly | 专用零件装配 | conditional | 真实配置独立零件准确自制外购接口 | foreground | 每 1 kg 参考流 |
| finish | 零件清洗本地表面加工 | conditional | 真实自身槽涂层路线，外购成品涂层在上游 | foreground | 每 1 kg 参考流 |
| test | 真实工厂检查功能试验 | conditional | 仅真实电气泄漏尺寸热送丝试验，纳入不良返修 | foreground | 每 1 kg 参考流 |
| services | 未归属共享公用 | conditional | 仅工序归属负荷后共同期间剩余 | foreground | 每 1 kg 参考流 |
| dispatch | 验收零件交付包装 | conditional | 验收相同配置净零件及独立包装 | foreground | 每 1 kg 参考流 |
| residues | 真实残余直接排放 | conditional | 真实实测交接治理后无组织物种 | foreground | 每 1 kg 参考流 |

### 过程：专用导电结构零件制造 (`fabrication`)

#### 输入

##### 产品流

###### 本地导电零件用T2铜杆 (`copper`)

仅实际T2铜杆供应用于本地机加工烙铁头夹持件，记录自身化验尺寸表面状态；完整外购头排除内含上游铜杆。

- 选定流: 铜杆 `776e80f1-8f0e-44ee-9a7e-baa9e747291a`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: hakko-tip; metco-nozzles; resistance-parts; coil-actual

###### 本地工作线圈用铜管 (`cutube`)

实际连接线圈水冷件管材牌号壁厚状态供应须明确，游乐滑管注释冲突未解决；外购成品线圈管制造在上游。

- 选定流: 本地工作线圈用铜管
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: hakko-tip; metco-nozzles; resistance-parts; coil-actual

###### 接触零件用铬锆铜棒 (`cucrzr`)

实际本地接触嘴夹持件铬锆铜棒采用自身合金化验热处理；黄铜纯铜镍铬丝不能证明铬锆铜。

- 选定流: 接触零件用铬锆铜棒
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: hakko-tip; metco-nozzles; resistance-parts; coil-actual

###### 专用连接件用黄铜棒 (`brass`)

仅本地专用连接件实际铜锌棒杆型材接口，采用自身铅铜锌化验机加工棒料；完整连接件排除内含棒料。

- 选定流: 铜锌合金 `e422cfbf-5444-43ab-a68a-22be82e2ad47`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: hakko-tip; metco-nozzles; resistance-parts; coil-actual

###### 本地专用壳体用碳钢薄板 (`steel`)

本地专用壳体实际薄板牌号加工状态；钢银板杆双语冲突不可用，客户工件不计零件物料。

- 选定流: 本地专用壳体用碳钢薄板
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: hakko-tip; metco-nozzles; resistance-parts; coil-actual

###### 结构用铝型材 (`aluminium`)

仅本地专用安装件机壳真实挤压结构型材，声明牌号接口；不是原铝或完整外购底盘。

- 选定流: 铝挤压型材 `4f197be3-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: hakko-tip; metco-nozzles; resistance-parts; coil-actual

###### 本地耐热嵌件用钨杆 (`tungsten`)

仅化学有据匹配制造嵌件的真实钨杆供应；须自身纯度掺杂化验供应，TIG杆说明不证明所有等离子阴极钨内衬碳化钨钴粉或掺杂配方。

- 选定流: 钨杆 `d1ae0b3b-722a-4590-8022-dc6245bb357b`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: hakko-tip; metco-nozzles; resistance-parts; coil-actual

###### 机加工切削液 (`cutfluid`)

实际液态机加工配方采用自身油水比例库存返还；目录不设通用稀释切削负荷。

- 选定流: 切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: hakko-tip; metco-nozzles; resistance-parts; coil-actual

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：专用零件装配 (`assembly`)

#### 输入

##### 产品流

###### 外购完整专用连接或喷涂零件 (`boughtpart`)

同类别完整零件须真实准确件号电连接热喷宿主兼容完成状态内含子件；上游制造计一次，原料本地制造替换该接口不得叠加。

- 选定流: 44241 子类货物的部件 `6f6ed072-afd5-4b25-89d5-cf849f542440`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### 氧化铝电绝缘零件 (`ceramic`)

仅实际成品氧化铝陶瓷绝缘件牌号形状，自身供应化验电接口；化学氧化铝粉填环氧绝缘件茶具不同；本地陶瓷制造须自身原料烧成清单。

- 选定流: 氧化铝电绝缘零件
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### 成品聚四氟乙烯管 (`ptfe`)

实际专用导管绝缘接口成品聚四氟乙烯管；原生树脂塑料板不能证明管成品，钢螺旋复合导管另有供货身份。

- 选定流: 成品聚四氟乙烯管
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### 模塑硅橡胶零件 (`silicone`)

仅真实成品硅橡胶绝缘柔性件自身配方硫化供应范围；填缝胶无关消费品模塑不可用。

- 选定流: 模塑硅橡胶零件
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### 丁腈橡胶垫片 (`gasket`)

真实成品丁腈垫片配方尺寸气体冷却兼容；通用橡胶密封件不证明丁腈或替代所有密封。

- 选定流: 丁腈橡胶垫片
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### 供货低压铜电缆 (`cable`)

仅实际不超过1000伏动力电缆结构匹配供货接口，核对铜导体绝缘护套柔性电流工况，保留裁切安装返还长度米；实物质量核对才用同结构自身千克每米，通用控制缆Energy不可用。

- 选定流: 低压电缆 `49101b44-20cc-46a0-adfb-af07e4cc8908`
- 流属性/单位: Length / m
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### 完整已贴装控制板 (`pcb`)

一个完整板须实际件号已贴装电子供货控制接口；裸FR4线路板通用混合电子件其他设备模块不可替代完整控制板。

- 选定流: 完整已贴装控制板
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### 完整专用焊接变压器 (`transformer`)

实际完整变压器件须绕组铁芯冷却范围电接口；仅壳体或整台焊机不能证明模块，本地绕组铁芯装配须新增计量原子原料。

- 选定流: 完整专用焊接变压器
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### 完整烙铁陶瓷加热芯 (`heater`)

实际成品非碳电热件陶瓷电阻结构温度传感器范围；CTUe基准不可作实物数量，完整工作站不是加热芯。

- 选定流: 完整烙铁陶瓷加热芯
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### 完整感应硬钎焊工作线圈 (`coil`)

真实成形连接工作线圈须导体绝缘冷却连接，声明主要连接宿主专用兼容；通用感应炉线圈或原铜管不是完整工作线圈。

- 选定流: 完整感应硬钎焊工作线圈
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### 完整钢螺旋MIG送丝导管 (`liner`)

一个真实成品钢螺旋导管须匹配指定焊枪丝径；聚四氟乙烯复合导管另列原子牌号，焊丝是消耗填料不是导管硬件。

- 选定流: 完整钢螺旋MIG送丝导管
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### 完整钨内衬铜等离子喷嘴 (`nozzle`)

一个真实成品电等离子喷嘴须铜阳极实际纳入可选内衬水电接口；无内衬另列配置，铜钨原料普通油漆燃烧喷嘴不是该件。

- 选定流: 完整钨内衬铜等离子喷嘴
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### 完整电弧喷涂送丝滚轮 (`wirefeed`)

真实供货送丝滚轮须匹配电金属碳化物热喷平台及丝接口；完整送丝机通用车轴耗材焊丝不同于滚轮。

- 选定流: 完整电弧喷涂送丝滚轮
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### 装配钢螺钉 (`screw`)

真实独立供货成品螺钉牌号尺寸涂层安装于专用件；完整外购总成内含紧固件计一次。

- 选定流: 钢螺钉 `895204f6-6425-4814-afc5-cb97e530e892`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### 专用送丝零件安装滚柱轴承 (`bearing`)

实际成品滚柱轴承子类型尺寸牌号供货范围；完整外购驱动已内含轴承，单保持架不是轴承。

- 选定流: 滚珠轴承或滚柱轴承 `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### 锡银铜焊料合金用于本地零件制造 (`solder_manufacture`)

仅供应零件真实本地制造，与工厂功能试验客户运行分开。仅零件装配实耗焊料，自身合金化验助焊剂范围；光学装配限定通用无铅记录不可用，留存涂层试验消耗独立计量。

- 选定流: 锡银铜焊料合金用于本地零件制造
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### 银铜锌硬钎料用于本地零件制造 (`braze_manufacture`)

仅供应零件真实本地制造，与工厂功能试验客户运行分开。真实制造线圈零件连接实耗填料，自身化验返还；合金棒整机不是成品硬钎料。

- 选定流: 银铜锌硬钎料用于本地零件制造
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### 松香软焊助焊剂用于本地零件制造 (`flux_manufacture`)

仅供应零件真实本地制造，与工厂功能试验客户运行分开。真实观察软焊独立松香配方载体浓度；含助焊剂焊料不能证明独立助焊剂供货，其他真实成分逐条新增。

- 选定流: 松香软焊助焊剂用于本地零件制造
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### 碳钢实心焊丝用于本地零件制造 (`weld_manufacture`)

仅供应零件真实本地制造，与工厂功能试验客户运行分开。仅本地零件连接真实实耗实心填料自身牌号质量；不是药芯丝导管用户寿命用量。

- 选定流: 碳钢实心焊丝用于本地零件制造
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### 本地连接或试验气态氧用于本地零件制造 (`oxygen_manufacture`)

仅供应零件真实本地制造，与工厂功能试验客户运行分开。仅匹配供应纯度状态真实低温空分厂气态供应及实测本地制造；保留原生Mass，体积须自身温压湿度密度；不是环境空气氧或不计汽化的液态供货。

- 选定流: 氧气 `4f19ca15-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### 留存供货去离子水首充 (`retained_di`)

仅验收供货零件内真实实测留存去离子水，自身供应纯度温度密度交付质量记录；空水道更换清单不证明填充，实耗回收工厂试验水独立。

- 选定流: 去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：零件清洗本地表面加工 (`finish`)

#### 输入

##### 产品流

###### 异丙醇清洗液 (`ipa`)

仅实际中国化学厂异丙醇须自身供应纯度兼容交付，计库存返还独立核对所有空气非空气去向；不是混合清洁剂通用溶剂。

- 选定流: 异丙醇 `a4a75541-e156-4e30-947c-ba067a682afd`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: hakko-tip; resistance-parts

###### 氯化亚铁电镀原料 (`ferrous`)

仅本地镀铁槽实际记录指定FeCl2准确水合态自身化验时计；水处理牌号氧化物分类冲突未解决，铁层本身不证明此槽化学。

- 选定流: 氯化亚铁电镀原料
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: hakko-tip; resistance-parts

###### 三氧化铬电镀原料 (`chromium`)

仅真实CrO3镀铬路线供应CAS1333-82-0自身化验；有机分类冲突未解决，三价铬外包镀层须不同真实投入不得假定CrO3。

- 选定流: 三氧化铬电镀原料
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: hakko-tip; resistance-parts

###### 无水硫酸镍电镀原料 (`nickel`)

仅真实无水NiSO4槽原料供应自身化验；金属中间产品分类标20–25%镍不能证明无水牌号，水合盐留存水独立。

- 选定流: 无水硫酸镍电镀原料
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: hakko-tip; resistance-parts

###### 六水硫酸镍电镀原料 (`nickelhyd`)

仅真实NiSO4·6H2O供应CAS10101-97-0自身纯度水分；稀土化合物分类冲突未解决，不是无水盐质量金属镍。

- 选定流: 六水硫酸镍电镀原料
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: hakko-tip; resistance-parts

###### 硫酸原料 (`acid`)

仅真实工业厂93–98%H2SO4原料匹配CAS7664-93-9密封供应自身化验实际清洗电镀路线；计自身稀释水反应，不设标准槽浓度。

- 选定流: 硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: hakko-tip; resistance-parts

###### 氢氧化钠清洗原料 (`alkali`)

真实供应物态浓度CAS1310-73-2实际清洗中和路线；杂项产品及固体30%液冲突不能设自身槽浓度。

- 选定流: 氢氧化钠清洗原料
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: hakko-tip; resistance-parts

###### 本地镀锡留存锡条 (`tin`)

仅实测本地镀锡纯锡条CAS7440-31-5原料，合金焊料不同；留存涂层槽库存返还渣采用自身化验，HAKKO涂层例外型号独立。

- 选定流: 锡条材 `e9c72b13-0d60-4d67-a1c9-b0c963ec62cf`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: hakko-tip; resistance-parts

###### 过程清洗水 (`water`)

实际外购过程水来源供应；自身水分温度密度清洗返还库存排出，不等于化学溶液毛量。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: hakko-tip; resistance-parts

###### 去离子过程水 (`di`)

实际有据清洗配槽去离子供水；自身化验温度密度库存返还，不作通用冷却混合物假定随货首充。

- 选定流: 去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: hakko-tip; resistance-parts

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：真实工厂检查功能试验 (`test`)

#### 输入

##### 产品流

###### 锡银铜焊料合金 (`solder`)

仅真实工厂功能试验消耗，本地制造另计装配行。仅工厂功能试验实耗焊料，自身合金化验助焊剂范围；光学装配限定通用无铅记录不可用，留存涂层试验消耗独立计量。

- 选定流: 锡银铜焊料合金
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: coil-actual; metco-nozzles; hakko-tip

###### 银铜锌硬钎料 (`braze`)

仅真实工厂功能试验消耗，本地制造另计装配行。真实工厂试验实耗填料，自身化验返还；合金棒整机不是成品硬钎料。

- 选定流: 银铜锌硬钎料
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: coil-actual; metco-nozzles; hakko-tip

###### 松香软焊助焊剂 (`flux`)

仅真实工厂功能试验消耗，本地制造另计装配行。真实观察软焊独立松香配方载体浓度；含助焊剂焊料不能证明独立助焊剂供货，其他真实成分逐条新增。

- 选定流: 松香软焊助焊剂
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: coil-actual; metco-nozzles; hakko-tip

###### 碳钢实心焊丝 (`weld`)

仅真实工厂功能试验消耗，本地制造另计装配行。仅工厂试验真实实耗实心填料自身牌号质量；不是药芯丝导管用户寿命用量。

- 选定流: 碳钢实心焊丝
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: coil-actual; metco-nozzles; hakko-tip

###### 气态氩试验介质 (`argon`)

真实工厂焊接等离子试验气体，供应纯度交付实测状态换算；液氩须真实汽化负荷，气态候选杂项化学分类待审，不用通用混合保护气替代。

- 选定流: 气态氩试验介质
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: coil-actual; metco-nozzles; hakko-tip

###### 氮保护吹扫气 (`nitrogen`)

仅实际厂内保护气氛氮供应及实测工厂吹扫泄漏试验负荷，匹配供应纯度交付；等离子工作气牌号须另审供应接口。

- 选定流: 氮气 `50626f35-0e0d-4139-b9f9-7e9ff238ba62`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: coil-actual; metco-nozzles; hakko-tip

###### 气态氦试验介质 (`helium`)

实际观察等离子泄漏试验氦气，供应纯度交付物态；电力钢污泥不是氦。

- 选定流: 气态氦试验介质
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: coil-actual; metco-nozzles; hakko-tip

###### 气态氢试验介质 (`hydrogen`)

真实观察等离子氢气供应工厂试验负荷，自身纯度物态库存；过氧化物氯化氢转炉原料气不是氢气。

- 选定流: 气态氢试验介质
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: coil-actual; metco-nozzles; hakko-tip

###### 本地连接或试验气态氧 (`oxygen`)

仅真实工厂功能试验消耗，本地制造另计装配行。仅匹配供应纯度状态真实低温空分厂气态供应及实测工厂试验；保留原生Mass，体积须自身温压湿度密度；不是环境空气氧或不计汽化的液态供货。

- 选定流: 氧气 `4f19ca15-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: coil-actual; metco-nozzles; hakko-tip

###### 铝喷涂试验线 (`alwire`)

仅实际成品实心铝线牌号直径供应兼容工厂电弧喷涂试验，称实耗返还线；不是安装滚轮寿命喷涂通量。

- 选定流: 铝线 `89db8507-09bd-45f8-ba96-4e459058412c`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: coil-actual; metco-nozzles; hakko-tip

###### 碳化钨钴热喷试验粉 (`wc`)

仅实测试验实际可喷WC-Co粉牌号颗粒态自身钨碳钴化验；钨粉钨铁成品硬质合金件不可用。

- 选定流: 碳化钨钴热喷试验粉
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: coil-actual; metco-nozzles; hakko-tip

###### 碳钢工厂试验片 (`coupon`)

真实称重试验片牌号重用不良质量记录，排除验收零件净质量，宿主客户工件能力不能作零件质量。

- 选定流: 碳钢工厂试验片
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: coil-actual; metco-nozzles; hakko-tip

###### 工厂试验去离子水 (`test_di`)

真实工厂冷却泄漏试验负荷实测返还水，自身纯度温度密度；分开真实留存随货首充客户公用水。

- 选定流: 去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: coil-actual; metco-nozzles; hakko-tip

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：未归属共享公用 (`services`)

#### 输入

##### 产品流

###### 工厂电力 (`electricity`)

真实匹配中国用户侧低于1千伏输入电量，表计制造装配表面试验交付自产输出库存，只分配未归属共享剩余。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: Energy / kWh
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_utilities
- 来源:

###### 工厂压缩空气 (`air`)

真实外购压缩气体积交付压力温度水分；场内压缩机改计实测能源独立损失一次。

- 选定流: 压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位: Volume / m3
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_utilities
- 来源:

###### 外购工业热 (`heat`)

仅真实匹配中国天然气工业供热供应，供回自身焓同基准，毛热返还扣一次净热不重复扣，供应锅炉燃料属上游。

- 选定流: 区域或工业热, 天然气 `eb581eb3-c707-41a0-b4e6-ee1854551714`
- 流属性/单位: Energy / MJ
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_utilities
- 来源:

###### 公用自来水 (`tap`)

真实自来水供应表计未归属公用水，自身水分温度密度返还，排除已归属表面试验水。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_utilities
- 来源:

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：验收零件交付包装 (`dispatch`)

#### 输入

##### 产品流

###### 瓦楞包装纸板 (`board`)

仅真实C/E/F瓦楞纸板至少80%纤维匹配材料接口，自身供应再生成分，实测包装质量在验收零件净量外。

- 选定流: 瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_dispatch
- 来源: cpc

###### 低密度聚乙烯包装薄膜 (`film`)

仅真实PE-LD非自黏非泡孔非增强非层压无衬底薄膜，自身厚度牌号实测包覆负荷；其他聚合物牌号须独立身份。

- 选定流: 低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_dispatch
- 来源: cpc

###### 交付木托盘 (`pallet`)

仅真实木EURO托盘结构供应状态，实测质量有据复用返还份额，不设默认托盘数或纳入零件质量。

- 选定流: 木托盘（欧标） `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_dispatch
- 来源: cpc

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收专用电连接或热喷零件 (`finished_output`)

一个验收配置专用零件匹配电连接或电金属碳化物热喷宿主准确供货范围，校准净质量排除货运包装额外备件库存不良件实耗试验片介质。

- 选定流: 44241 子类货物的部件 `6f6ed072-afd5-4b25-89d5-cf849f542440`
- 流属性/单位: Mass / kg
- 数量规则: 1 千克
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_dispatch
- 来源: cpc

##### 废物流

##### 基本流

### 过程：真实残余直接排放 (`residues`)

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 外送钢机加工废料 (`wsteel`)

仅真实未处理工业后钢废料交接，自身合金水分油化验库存返还接收方，回收出售产品内部返还独立核对。

- 选定流: 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 外送铜机加工废料 (`wcu`)

仅真实含铜废料交接匹配湿法冶金接收路线，自身铜合金油水化验库存返还；接收处理不得虚构场内工序。

- 选定流: 废铜 `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 外送钨机加工废料 (`wtungsten`)

真实称重钨废料交接自身金属掺杂油水组成库存返还有据接收路线，矿尾不是机加工废料。

- 选定流: 外送钨机加工废料
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 不良氧化铝绝缘陶瓷 (`wceramic`)

真实称重离场陶瓷不良，自身氧化铝添加物水分化验接收路线，重用返料与外部交接分开；赤泥金属渣不同。

- 选定流: 不良氧化铝绝缘陶瓷
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 外送废异丙醇 (`spentipa`)

真实废溶剂交接自身异丙醇水污染物化验库存回收返还接收处理；回收溶剂销毁空气独立实测。

- 选定流: 外送废异丙醇
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 外送工业废水 (`wastewater`)

真实排放交接工业水自身水分溶解悬浮物实测温度密度库存返还接收路线，锰渣清洗市政来源不可用；废水不是空气释放。

- 选定流: 外送工业废水
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 外送金属氢氧化物电镀污泥 (`sludge`)

真实称重交接污泥自身干固体水分铁镍铬价态化验留存化学库存返还接收路线；污泥毛量不同所含金属。

- 选定流: 外送金属氢氧化物电镀污泥
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 交接捕集金属磨削粉尘 (`dust`)

真实捕集称重非空气粉尘交接，自身金属磨料水分组成库存返还接收方；饲料研磨尘无关，未捕集实测空气独立。

- 选定流: 交接捕集金属磨削粉尘
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 捕集热喷试验过喷废料 (`testwaste`)

真实工厂试验捕集金属碳化物过喷自身金属黏结相水分化验，排除试验片，计库存回收接收路线；普通聚合物粉末油漆废物不可用。

- 选定流: 捕集热喷试验过喷废料
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 外送绝缘铜缆边料 (`cablewaste`)

真实称重铜芯绝缘边料自身导体聚合物油水组成返还可用长度接收方；市政收集机械回收身份不证明工厂交接路线。

- 选定流: 外送绝缘铜缆边料
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 外送低密度聚乙烯包装边料 (`wfilm`)

真实称重PE-LD边料交接自身聚合物添加物水分污染库存返还接收方；已洗回收厂HDPE情境不同于未处理工厂LDPE。

- 选定流: 外送低密度聚乙烯包装边料
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

##### 基本流

###### 化石二氧化碳向空气 (`co2`)

仅真实独立有据观察本地过程溶剂销毁化石碳释放，外购热电供应排放在上游，匹配普通未指定空气非生物长时。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源:

###### 异丙醇向空气 (`ipair`)

自身真实异丙醇物种治理后浓度乘匹配流量时间状态加独立无组织实测，库存捕集回收废水销毁是独立去向非未解释空气残差。

- 选定流: 异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源:

###### 水蒸气向空气 (`vapor`)

真实治理后水物种蒸发自身水分匹配实测气状态流量时间及无组织；返还冷却水留存水废水是非空气去向。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源:

###### 分子二氧化氮向空气 (`no2`)

仅观察制造工厂焊接等离子试验治理后分子NO2，实测物种流量时间状态独立无组织，NO2当量NOx碳闭合不能证明NO2。

- 选定流: 二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源:

###### PM10向空气 (`pm10`)

真实制造工厂试验治理后PM10释放，匹配取样浓度流量时间状态无组织基准，含更细粒径；捕集尘非空气，元素报告避免重叠。

- 选定流: 颗粒物 (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源:

###### 铜元素向空气 (`copperair`)

仅铜加工等离子喷嘴试验治理后自身实测所含铜，匹配浓度流量时间状态独立无组织；合金尘CuO毛量不是铜元素质量。

- 选定流: 铜 `fe0acd60-3ddc-11dd-a7a0-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源:

###### 镍元素向空气 (`nickelair`)

仅真实镀镍试验治理后排放自身所含镍化验匹配浓度流量时间状态独立无组织；水相镍捕集污泥属非空气。原生通用镍记录涵盖金属和离子；若实际LCIA方法区分个别物种流，须查询并优先匹配对应物种流。二价镍盐毛量不是所含镍，不得无条件以通用镍代替所有形态。

- 选定流: 镍 `08a91e70-3ddc-11dd-96c8-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源:

###### 六价铬向空气 (`chromiumair`)

仅真实本地镀铬治理后自身实测六价铬，匹配浓度流量时间状态独立无组织，总铬金属铬层不证明六价铬，废水污泥属非空气。

- 选定流: 六价铬 `08a91e70-3ddc-11dd-950b-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源:


## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| allocate_burdens | 先区分配置场址共同期间记录，直接部件工序试验记录优先；共享服务仅分配未归属剩余并采用有据因果计量基准，保留不良返修试验负荷，不以全厂无关产量稀释。 |  |
| allocate_scrap | 保留可回收材料为库存配对返料，真实外部共产品须明确分配替代法及兼容产出状态，废物交接不自动获得避免原生金属收益。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | 验收配置参考 | foreground_record | 配置序列物料 Naccepted 各校准验收净质量 Dnet 纳入附件填充 排除包装备件不良试验负载 | 同配置验收配置成品零件采用校准称重可追溯记录，核对验收实际供货物料；拆件运输各纳入模块仅加一次。 | kg | 各实际批次匹配表计区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |
| cp_materials | fabrication | 各实际材料配方 | foreground_record | 身份牌号毛量 Qattr 自身化验水分 库存反应返料本地工序外购完成状态不确定性 | 各采购使用流称重测自身化学水分，核对供应加工库存调整本地制造导电线圈绝缘制造表面处理不良返修。 | kg | 各实际批次匹配表计区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |
| cp_modules | assembly | 各成品硬件、本地连接原料及保留填充 | foreground_record | 部件序列原生 Qattr 化学配方含量水分 气体实际温压密度 库存反应成品留存返还 兼容供应物料 内含材料工序 纳入导体线圈导管喷嘴电极绝缘控制板冷却填充 不良返修数量 | 硬件分支：采用实际收据及各供货硬件实测质量，安装数按同件实测质量换算；保留充气维持原生质量体积真实温压密度供应完成库存，硬件质量不是气量。化学原料分支：真实本地连接填料、助焊剂及气体按原生实物单位独立计量，采用自身供货配方含量水分、气体温压密度、库存反应、验收成品留存及返还。完整硬件质量不是化学量。外购成品上游制造及内含化学仅计一次，本地连接另用自身实测原料；本地线圈接触绝缘专用控制装配须自身原子路线上游替代。 | native unit | 各实际批次匹配表计区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |
| cp_tests | test | 各实际工厂试验交换 | foreground_record | 配置试验计划实际区间实测 Qattr 气体输入返还排放真实辅助电负荷 介质试片消耗返还 冷却库存 验收不良返修 | 计量实际尺寸电气绝缘泄漏送丝或焊接软硬钎焊电喷零件功能试验，保留可归属失败重复试验，随货首套硬件填充与消耗介质用户寿命数量分开，仅泄漏检查不虚构连接填料或电喷涂消耗，仅核对实际执行试验状态。 | native unit | 各实际批次匹配表计区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |
| cp_utilities | services | 各实际公用表计 | foreground_record | 原生 Qattr 共同期间输入实际场内供能量输出库存 工序试验归属表计 剩余共享服务 电压供应 气温压湿密度 毛净热返还 | 按真实输入自产输出库存核对制造装配表面试验交付归属负荷，仅分配未归属剩余，调查负值不确定性不截零；毛热供应千克乘自身兆焦每千克减独立返还千克乘自身兆焦每千克，同一焓基准扣一次；净热不再扣返还，蒸汽凝结水实物独立于热能，上游供应锅炉排除场内燃料。 | native unit | 各实际批次匹配表计区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |
| cp_dispatch | dispatch | 各包装成品产出 | foreground_record | 验收配置物料净产出 包装 Qattr 实际聚合物纸板托盘牌号 返还份额 外部运输原生活动 | 实际交付包装称重与验收配置零件净质量分开，保留供应运输接口真实返还包装，不设标准包装比。 | kg | 各实际批次匹配表计区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |
| cp_wastes | residues | 各真实废物流 | foreground_record | 毛量 Qattr 自身水分元素化学化验 库存内部返还回收 真实外部交接供应处理 | 采用称重交接联单自身物流取样，完整污泥合金废水不同于所含物种，捕集粉尘溶剂在实测释放前属非空气去向，外部处理排放属供应过程。 | kg | 各实际批次匹配表计区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |
| cp_emissions | residues | 各基本物种 | foreground_record | CAS 来源区室 Qattr 实际治理后浓度 匹配气液流量时间 温压干湿氧单位修正 独立无组织基准 留存捕集销毁 | 按治理后实测浓度乘匹配流量乘同期间测物种，并用状态单位修正独立无组织测量，元素物种化验不同于粉尘氧化物毛量，防止总颗粒物组分排放重叠；未解释质量残差碳闭合不能推导 CO/NO2。 | kg | 各实际批次匹配表计区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | 对一个配置期间，将各可归属原生单位交换总量除以验收配置零件净质量之和，保留原始数量单位不确定性。 | Qattr; Dnet; cp_mass | native-unit amount per kg reference flow |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_qnd | all inventory rows | 同一零件配置期间Qattr包括可归属制造表面不良返修工厂试验负荷，Naccepted计校准质量合计Dnet的验收零件；单件交换=Qattr/Naccepted，实测平均零件净质量=Dnet/Naccepted，每千克交换=Qattr/Dnet；保留原生分子，不假定目录宿主零件工件质量寿命试验通量。 | 校准净质量同配置验收台账 |
| quality_physical | all inventory rows | 各实物元素物种项采用自身毛量化验水分干湿基库存反应零件留存返还废物；合金污泥溶液毛量不是所含铜铁镍铬钨锡化学量，各水流采用自身水分实际温度实测有据密度反应留存蒸发排出库存，内部返还配对抵销。 | 各流自身化验库存反应测量 |
| quality_solvent | ipa; spentipa; ipair | 按各流自身异丙醇化验核对投入库存零件留存回收捕集废水废介质销毁独立实测空气，捕集不是销毁，非空气去向未解释残差不能变空气。 | 独立去向测量自身化验 |
| quality_native | cable | 保留真实缆结构实测接收裁切安装返还长度米库存真实损失，质量闭合需换算时独立测同结构自身千克每米，缆Energy容量基准不能证明实物缆质量。 | 原始缆供应长度质量记录 |
| quality_identity | all inventory rows | 匹配发布状态100类型原生基准内部ID属性单位组化学CAS水合态牌号供货完成供应地域基本物种来源区室，真实未列专用功率控制冷却送丝件磁性原料绕组绝缘镀料气燃料制冷剂首充运输废物排放均新增独立查询计量原子交换，通用电子集合原料完整宿主不能替代专用零件，缺失不同零不适用须实物证据。 | 原始供应物料明确身份缺口 |
| quality_scope | reference product | 逐件审专用宿主准确零件完成状态，包括电阻电弧逆变变压器连接、感应钎焊、电等离子电弧热喷结构；HAKKO涂层例外型号Metco可选钨内衬保留项级。目录备件可用气兼容功率寿命最大工件宿主额定不证明通用随货工厂化学零件质量试验配方。 | 原始配置主要功能审查 |


## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| validate_scope | 须准确专用零件经审查电连接电金属碳化物热喷宿主兼容完整供货状态及双语相同每千克净参考，整机通用件消耗粉丝非电专用件普通油漆喷件不可作类别参考。 | cpc |
| validate_makebuy | 拒绝重复完整外购模块制造未配对内部转移假定更换随货首充用户运行作工厂负荷，保留可归属真实失败重复试验返修，镀层外购电子须匹配实际完成状态。 | cpc; hakko-parts; hakko-tip; metco-nozzles; metco-spares; castolin-parts; resistance-parts; coil-actual |
| validate_balances | 须各流自身元素水溶剂平衡治理后物种浓度乘匹配流量时间状态及独立无组织基准，公用共同期间输入真实自产输出库存核对归属负荷仅分配未归属剩余；毛热同基准独立返还扣一次净热不重复扣。 |  |
| validate_species | 总铬不同六价铬，氧化物烟毛量不同所含元素，PM10含更细颗粒不得重复组分排放核算，分子NO2不同NO2当量NOx；状态20、CTUe或缆Energy实物替代、冲突牌号路线区室未查询身份不可用，真实报告接受输入已执行跳过检查发现完整性。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | 声明真实专用电连接电金属碳化物热喷零件制造兼容供货配置 |
| excluded_use | 整机通用件替代通用涂层试验配方客户寿命更换未经审查相邻非电冷喷硬件 |
| required_metadata | 全部限定信息真实Qattr/Naccepted/Dnet原生单位，零件物料自制外购路线场址期间供应运输处理，试验分配缺口 |
| required_quality_disclosure | 实测估计缺失校准取样不确定性实物残差供应身份范围缺口及已执行跳过检查完整性 |
| update_trigger | 专用宿主零件物料牌号镀层完成状态自制外购供应场址期间试验处理变化 |


## 11. 数据源

| source_id | type | title | reference | used_for |
| --- | --- | --- | --- | --- |
| cpc | official_guidance | 联合国CPC3.0解释注释 | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅真实原件专用零件范围结构观察制造接口，不是通用配方质量负荷寿命。 |
| hakko-parts | handbook | HAKKO FX-971更换零件 | https://www.hakko.com/english/products/hakko_fx971_parts.html | 仅真实原件专用零件范围结构观察制造接口，不是通用配方质量负荷寿命。 |
| hakko-tip | handbook | HAKKO烙铁头结构及型号例外 | https://www.hakko.com/english/support/maintenance/detail.php?seq=163 | 仅真实原件专用零件范围结构观察制造接口，不是通用配方质量负荷寿命。 |
| metco-nozzles | handbook | Metco铜等离子喷嘴及可选钨内衬 | https://www.oerlikon.com/ecoma/files/SF-0013_3MB_9MB_W-Nozzles_EN.pdf?download=true | 仅真实原件专用零件范围结构观察制造接口，不是通用配方质量负荷寿命。 |
| metco-spares | handbook | Metco分级备件目录 | https://www.oerlikon.com/ecoma/files/FLY-0003_SpareParts_EN.pdf?download=true | 仅真实原件专用零件范围结构观察制造接口，不是通用配方质量负荷寿命。 |
| castolin-parts | handbook | Castolin MIG/MAG焊枪专用配件 | https://shop.castolin.com/en-gb/products/welding-torch/mig-mag-torches-accessories | 仅真实原件专用零件范围结构观察制造接口，不是通用配方质量负荷寿命。 |
| resistance-parts | handbook | TUFFALOY电阻焊夹持件水管表面加工 | https://tjsnow.com/resistance-welding-supplies/tuffaloy-resistance-welding-products/electrode-holders/straight-welding-electrode-holders/ | 仅真实原件专用零件范围结构观察制造接口，不是通用配方质量负荷寿命。 |
| coil-actual | handbook | Ambrell线圈制造与实测 | https://www.ambrell.com/blog/art-and-science-of-induction-coil-manufacturing | 仅真实原件专用零件范围结构观察制造接口，不是通用配方质量负荷寿命。 |
