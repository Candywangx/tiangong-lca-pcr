---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-for-the-goods-of-subclasses-44914-44917-and-45150
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 工业印刷装订制版、非ADP独立复印机械及办公单张胶印机专用零件

## 1. 范围与适用性

本方法覆盖三类完整母机的新制造验收专用零件子组件：工业装订排版组版印版滚筒制备辅助及印刷44914；不可连接自动数据处理机的独立复印打印传真44917；办公单张胶印45150。工业胶印凸版柔版凹版丝网结构在真实母机符合时纳入。CPC44914正文列重复经纱印刷机却排除纺织纱线印刷44629，此特殊措辞须真实项级审查，不能授权所有纺织印刷机。ADP打印45263–65多功能设备45266零件完整母机无关机制排除。例有配置传墨输送辊专用叼纸牙驱动组件装订头订脚夹安装组件制版定位辅助及合格独立复印机定影压力组件。通用轴承电机紧固件保留自身产品身份，独立印版已制雕刻滚筒橡皮布未装刀具陶瓷技术玻璃制品不自动成为机械参考零件，完整专用金属复合组件可内含这些成分，不将此排除扩大到所有材料输入。订单图纸物料确认成品供货专用接口，替换目录不证明随货。返还辊包覆或组件维修属独立起始状态服务，不能默认新零件制造。客户印刷复印装订配方节能寿命耗材排除制造数量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-for-the-goods-of-subclasses-44914-44917-and-45150 |
| classification_refs | CPC3.0:44942 |
| covered_products | 完整44914非ADP独立44917办公胶印45150母机新制造专用零件 |
| excluded_products | 完整母机ADP多功能纺织纱线打印零件独立印版橡皮布刀具陶瓷玻璃制品通用件未声明维修 |
| representative_product | 真实专用印刷辊装订头组件制版台合格独立复印机定影组件，不设共同质量 |
| production_route | 自身有证毛坯机加工混炼包覆硫化磨削表面或外购完成零件，真实装配检查验收交付 |
| market_state | 声明工厂门新制造验收专用零件，毛坯返还维修额外备件库存独立 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明工业印刷装订制版、非ADP独立复印或办公胶印母机的新制造验收专用零件 |
| How much | 1 kg |
| How well | 声明母机主要功能专用零件图纸接口新制造成品供货状态订单物料，适用真实油墨溶剂热电接触兼容真实验收标准 |
| How long or cycle | 一个声明完成制造验收期间，不采用客户寿命印刷通量 |
| reference_flow_link | finished |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 44914、44917和45150子类货物的零件 `556c46e2-b440-4e5b-bd3a-c3bd533e9f3d` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 真实工业印刷装订制版非ADP独立复印办公胶印母机功能机制专用零件图纸接口新返还状态型号序号订单配置，实际包含硬件选件备件填充真实化学热接触范围，同期间验收数量校准净质量，原料合金纯度相态化学配方，自制外购完成状态本地作业验收介质不良返修，供应地域运输接收路线，原生单位化验状态返还库存分配不确定性身份缺口 |

必需限定信息须在前景数据包披露，缺失使其参考定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 通过cp_mass采集验收配置净质量，排除包装额外备件库存不良实耗试验介质，保留实际包含首套填充。 |
| native_amount | all inventory rows | actual native property | native unit | 保留各原生分子：缆Length米，液压油压缩气自来水Volume立方米，Energy千瓦时或兆焦，换算须自身同接口密度温压湿化验或缆千克每米，电每千瓦时3.6兆焦。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实收货识别原料毛坯或完成外购兼容零件 |
| starting_condition_role | foreground_input_boundary |
| product_classification_scope | 三类完整命名母机专用零件，真实主要功能专用接口审查 |
| recursive_input_rule | 完成外购零件上游计一次，本地制造实测原料作业，内部转移配对抵销 |
| upstream_dataset_requirement | 匹配完成状态牌号相供应地域原生数量，粉末原料不同成品嵌件 |
| disclosure | 母机型号图纸订单新或返还状态验收零件净质量自制外购本地路线试验介质留存填充 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| host_and_state | 真实44914/44917/45150母机专用图纸接口完成件审查控制分类，独立44917不可连接ADP排除多功能机，HS8443宽泛电脑多功能零件不扩大CPC；独立已制印版刀具橡皮布陶瓷玻璃制品保留自身类别，新维修起始状态明确。 | cpc; census84; muller-service |
| supplied_architecture | Horizon头订脚夹装配套件折辊按真实订单，列明不含头订脚夹的套件保留该排除；Hohner供货不是物料材料证明，Kinyo OA/SOLT及KB多层兼复印打印多功能机，须证明合格真实母机，不设通用随货辊节能系数。 | horizon-stitch; hohner-heads; kinyo-oa; kinyo-solt; kb-materials |
| local_route | Bottcher定制胶料过滤开炼压延KB海绵磨削可选涂层为可能真实本地路线，非固定配方；未硫化聚合物胶料成品套筒完成胶辊接口独立。NBR传统油性EPDM UV兼容属特定型号，不假定PFA为PTFE VMQ为硅油PI为芳纶填料比例层厚。实测本地制造连接试验返修不良交付，上游完成零件计一次。 | boettcher-compound; boettcher-faq; kb-materials; kb-sponges |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| fabrication | 本地结构胶料零件制造 | conditional | 仅真实兼容观察作业，公用仅含未归属剩余 | foreground | 每 1 kg 参考流 |
| assembly | 专用零件装配 | conditional | 仅真实兼容观察作业，公用仅含未归属剩余 | foreground | 每 1 kg 参考流 |
| finish | 真实本地连接清洗表面加工 | conditional | 仅真实兼容观察作业，公用仅含未归属剩余 | foreground | 每 1 kg 参考流 |
| test | 真实工厂检查验收试验 | conditional | 仅真实兼容观察作业，公用仅含未归属剩余 | foreground | 每 1 kg 参考流 |
| services | 共同期间未归属工厂公用 | conditional | 仅真实兼容观察作业，公用仅含未归属剩余 | foreground | 每 1 kg 参考流 |
| dispatch | 验收零件交付包装 | conditional | 仅真实兼容观察作业，公用仅含未归属剩余 | foreground | 每 1 kg 参考流 |
| residues | 实测废物交接直接排放 | conditional | 仅真实兼容观察作业，公用仅含未归属剩余 | foreground | 每 1 kg 参考流 |

### 过程：本地结构胶料零件制造 (`fabrication`)

#### 输入

##### 产品流

###### 外购机加工钢辊芯 (`rollercore`)

真实供货外购机加工钢辊芯，自身牌号形态尺寸化验真实供货接口供应，称量收货裁切留存零件库存返还，本地作业独立实测；已查UUID保留牌号形态缺口。

- 选定流: 外购机加工钢辊芯
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### 本地未硫化丁腈橡胶基础聚合物 (`nbr`)

仅有证兼容路线真实本地本地未硫化丁腈橡胶基础聚合物，计量实物供货数量自身化学身份CAS物相纯度配方化验水分温压密度配制反应留存回收库存返还非空气去向；已查兼容UUID未建立，保留缺口。外购完成胶辊组件内含成分上游计一次，目录结构不给出配方。

- 选定流: 本地未硫化丁腈橡胶基础聚合物
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### 本地未硫化三元乙丙橡胶基础聚合物 (`epdm`)

仅有证兼容路线真实本地本地未硫化三元乙丙橡胶基础聚合物，计量实物供货数量自身化学身份CAS物相纯度配方化验水分温压密度配制反应留存回收库存返还非空气去向；已查兼容UUID未建立，保留缺口。外购完成胶辊组件内含成分上游计一次，目录结构不给出配方。

- 选定流: 本地未硫化三元乙丙橡胶基础聚合物
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### 本地乙烯基甲基硅橡胶基础胶料 (`silicone`)

仅有证兼容路线真实本地本地乙烯基甲基硅橡胶基础胶料，计量实物供货数量自身化学身份CAS物相纯度配方化验水分温压密度配制反应留存回收库存返还非空气去向；已查兼容UUID未建立，保留缺口。外购完成胶辊组件内含成分上游计一次，目录结构不给出配方。

- 选定流: 本地乙烯基甲基硅橡胶基础胶料
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### 本地PFA氟聚合物涂层树脂 (`pfa`)

仅有证兼容路线真实本地本地PFA氟聚合物涂层树脂，计量实物供货数量自身化学身份CAS物相纯度配方化验水分温压密度配制反应留存回收库存返还非空气去向；已查兼容UUID未建立，保留缺口。外购完成胶辊组件内含成分上游计一次，目录结构不给出配方。

- 选定流: 本地PFA氟聚合物涂层树脂
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### 本地聚酰亚胺带基树脂 (`polyimide`)

仅有证兼容路线真实本地本地聚酰亚胺带基树脂，计量实物供货数量自身化学身份CAS物相纯度配方化验水分温压密度配制反应留存回收库存返还非空气去向；已查兼容UUID未建立，保留缺口。外购完成胶辊组件内含成分上游计一次，目录结构不给出配方。

- 选定流: 本地聚酰亚胺带基树脂
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### 本地浇注聚氨酯辊弹性体树脂 (`pu`)

仅有证兼容路线真实本地本地浇注聚氨酯辊弹性体树脂，计量实物供货数量自身化学身份CAS物相纯度配方化验水分温压密度配制反应留存回收库存返还非空气去向；已查兼容UUID未建立，保留缺口。外购完成胶辊组件内含成分上游计一次，目录结构不给出配方。

- 选定流: 本地浇注聚氨酯辊弹性体树脂
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### 本地炭黑补强粉 (`carbonblack`)

仅有证兼容路线真实本地本地炭黑补强粉，计量实物供货数量自身化学身份CAS物相纯度配方化验水分温压密度配制反应留存回收库存返还非空气去向；已查兼容UUID未建立，保留缺口。外购完成胶辊组件内含成分上游计一次，目录结构不给出配方。

- 选定流: 本地炭黑补强粉
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### 本地二氧化硅填料粉 (`silica`)

仅真实SiO2填料粉，自身CAS7631-86-9物相纯度颗粒处理供应实测本地批配方化验水分库存返还反应留存胶料，数据集不证明沉淀或气相牌号，不是玻璃制品或假定配方。

- 选定流: 二氧化硅 `7a49705c-abee-4573-be50-a01a1e799ab3`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### 本地氧化锌混炼成分 (`zinc`)

仅真实ZnO粉，自身CAS1314-13-2纯度形态供应本地胶料批记录，原生Mass指实物氧化锌非所含锌或所有橡胶配方，须自身化验水分反应库存返还留存。

- 选定流: 氧化锌 `1512d759-45f7-4cf2-a42c-d02a8f71a19f`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### 本地工业硫磺硫化成分 (`sulfur`)

仅有证兼容路线真实本地本地工业硫磺硫化成分，计量实物供货数量自身化学身份CAS物相纯度配方化验水分温压密度配制反应留存回收库存返还非空气去向；已查兼容UUID未建立，保留缺口。外购完成胶辊组件内含成分上游计一次，目录结构不给出配方。

- 选定流: 本地工业硫磺硫化成分
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### 本地过氧化二异丙苯固化成分 (`peroxide`)

仅有证兼容路线真实本地本地过氧化二异丙苯固化成分，计量实物供货数量自身化学身份CAS物相纯度配方化验水分温压密度配制反应留存回收库存返还非空气去向；已查兼容UUID未建立，保留缺口。外购完成胶辊组件内含成分上游计一次，目录结构不给出配方。

- 选定流: 本地过氧化二异丙苯固化成分
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### 本地AISI304不锈钢板 (`ss304`)

真实供货本地AISI304不锈钢板，自身牌号形态尺寸化验真实供货接口供应，称量收货裁切留存零件库存返还，本地作业独立实测；已查UUID保留牌号形态缺口。

- 选定流: 本地AISI304不锈钢板
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### 本地碳钢结构板 (`ssteel`)

真实供货本地碳钢结构板，自身牌号形态尺寸化验真实供货接口供应，称量收货裁切留存零件库存返还，本地作业独立实测；已查UUID保留牌号形态缺口。

- 选定流: 本地碳钢结构板
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### 外购铸铁辊座铸件 (`castiron`)

真实供货外购铸铁辊座铸件，自身牌号形态尺寸化验真实供货接口供应，称量收货裁切留存零件库存返还，本地作业独立实测；已查UUID保留牌号形态缺口。

- 选定流: 外购铸铁辊座铸件
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### 铝结构板 (`aluminium`)

真实厚度大于0.2毫米板材，自身合金状态表面供应本地裁切成形库存返还，不从板材身份推断油墨溶剂接触认证。

- 选定流: 铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### 本地导体制造T2铜杆 (`copper`)

真实T2铜杆自身牌号化验尺寸供应本地导体，称量收货裁切留存返还，排除完整电机内含铜。

- 选定流: 铜杆 `776e80f1-8f0e-44ee-9a7e-baa9e747291a`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### 本地未硫化氢化丁腈橡胶胶料 (`hnbr`)

仅有证兼容路线真实本地本地未硫化氢化丁腈橡胶胶料，计量实物供货数量自身化学身份CAS物相纯度配方化验水分温压密度配制反应留存回收库存返还非空气去向；已查兼容UUID未建立，保留缺口。外购完成胶辊组件内含成分上游计一次，目录结构不给出配方。

- 选定流: 本地未硫化氢化丁腈橡胶胶料
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### 本地未硫化FKM氟碳橡胶胶料 (`fkm`)

仅有证兼容路线真实本地本地未硫化FKM氟碳橡胶胶料，计量实物供货数量自身化学身份CAS物相纯度配方化验水分温压密度配制反应留存回收库存返还非空气去向；已查兼容UUID未建立，保留缺口。外购完成胶辊组件内含成分上游计一次，目录结构不给出配方。

- 选定流: 本地未硫化FKM氟碳橡胶胶料
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：专用零件装配 (`assembly`)

#### 输入

##### 产品流

###### 外购完成兼容专用机械零件 (`boughtpart`)

真实收货完成兼容专用零件用于进一步集成，自身母机图纸订单完成供应净硬件余下本地作业，上游材料作业计一次，不把已完成参考重命名或再加内含成分。

- 选定流: 44914、44917和45150子类货物的零件 `556c46e2-b440-4e5b-bd3a-c3bd533e9f3d`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### 外购完成印刷机包胶辊 (`pressroller`)

真实供货外购完成印刷机包胶辊自身完成配置材料供应，计量收货安装数量库存返还余下本地工序，完整外购硬件上游制造计一次，本地成分试验独立实测；已查UUID未解决。

- 选定流: 外购完成印刷机包胶辊
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### 外购完成非ADP独立复印机定影辊 (`copierroller`)

真实供货外购完成非ADP独立复印机定影辊自身完成配置材料供应，计量收货安装数量库存返还余下本地工序，完整外购硬件上游制造计一次，本地成分试验独立实测；已查UUID未解决。

- 选定流: 外购完成非ADP独立复印机定影辊
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### 外购完成铁丝装订头 (`bindinghead`)

真实供货外购完成铁丝装订头自身完成配置材料供应，计量收货安装数量库存返还余下本地工序，完整外购硬件上游制造计一次，本地成分试验独立实测；已查UUID未解决。

- 选定流: 外购完成铁丝装订头
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### 外购完成印刷机叼纸牙组件 (`gripper`)

真实供货外购完成印刷机叼纸牙组件自身完成配置材料供应，计量收货安装数量库存返还余下本地工序，完整外购硬件上游制造计一次，本地成分试验独立实测；已查UUID未解决。

- 选定流: 外购完成印刷机叼纸牙组件
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### 外购完成制版机定位台 (`ctpstage`)

真实供货外购完成制版机定位台自身完成配置材料供应，计量收货安装数量库存返还余下本地工序，完整外购硬件上游制造计一次，本地成分试验独立实测；已查UUID未解决。

- 选定流: 外购完成制版机定位台
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### 外购完成印刷机械专用合金钢齿轮 (`alloygear`)

真实供货外购完成印刷机械专用合金钢齿轮自身完成配置材料供应，计量收货安装数量库存返还余下本地工序，完整外购硬件上游制造计一次，本地成分试验独立实测；已查UUID未解决。

- 选定流: 外购完成印刷机械专用合金钢齿轮
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### 本地石油润滑油 (`luboil`)

仅真实石油馏分工业润滑油兼容不少于70%石油油接口供应添加剂黏度温度，独立称量本地充注实耗库存返还，首套留存独立；数据集40.5兆焦每千克非默认能量密度，客户维护排除制造。

- 选定流: 润滑油 `66628f20-9d33-4997-bd6c-6357453fa268`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### 本地锂增稠矿物润滑脂 (`grease`)

仅有证兼容路线真实本地本地锂增稠矿物润滑脂，计量实物供货数量自身化学身份CAS物相纯度配方化验水分温压密度配制反应留存回收库存返还非空气去向；已查兼容UUID未建立，保留缺口。外购完成胶辊组件内含成分上游计一次，目录结构不给出配方。

- 选定流: 本地锂增稠矿物润滑脂
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### 供货低压电力缆 (`cable`)

真实不超过1000伏电力缆兼容结构供应供货标准，保留原生Length米收货安装裁切返还，实物核对才用自身同结构千克每米。

- 选定流: 低压电缆 `49101b44-20cc-46a0-adfb-af07e4cc8908`
- 流属性/单位: Length / m
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### 供货滚动轴承 (`bearing`)

真实完成滚动轴承子型尺寸表面供应，称量独立供货返还，排除完整外购驱动内含轴承。

- 选定流: 滚珠轴承或滚柱轴承 `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### 供货钢装配螺钉 (`screw`)

真实完成钢装配螺钉自身尺寸牌号表面供应安装返还库存，非默认螺钉数量或不锈钢油墨溶剂接触牌号。

- 选定流: 钢螺钉 `895204f6-6425-4814-afc5-cb97e530e892`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### 外购液压缸 (`actuator`)

真实完成线性液压缸自身行程缸径密封供应接口，称量供货模块区分本地充注工厂行程试验公用。

- 选定流: 线性作用（气缸）水力发动机和风力发动机及马达 `aea61250-788d-4a2b-9c63-ff24b8113469`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### 外购钢制隔离阀 (`valve`)

真实外购完整钢制隔离阀供应合金压力表面，此通用身份不证明特殊溶剂接触或专用计量阀。

- 选定流: 钢制阀门 `3cb88a81-618f-4fa5-814e-46399b121622`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### 本地石油液压油充注 (`hydfluid`)

仅非油墨溶剂接触驱动回路实际兼容石油油含量不少于70%的液压制剂，按真实温度原生Volume立方米实测自身组成密度收货库存返还留存充注，不推断特殊用途批准。

- 选定流: 液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位: Volume / m3
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### 工厂处理工艺水 (`water`)

真实处理工业工艺水供应品质自身水分温度密度收货返还反应水库存，独立于去离子自来水。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### 留存供货工厂试验去离子水 (`retained_di`)

真实去离子水兼容离子交换反渗透供货接口，自身电导水分温度密度实测工厂试验收货库存返还，客户用水率不是工厂默认。 仅记录验收随货零件组件内实测留存充注，独立于试验实耗返还，空回路目录选件不证明包含填充。

- 选定流: 去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### 留存供货本地石油液压油充注 (`retained_hydfluid`)

仅非油墨溶剂接触驱动回路实际兼容石油油含量不少于70%的液压制剂，按真实温度原生Volume立方米实测自身组成密度收货库存返还留存充注，不推断特殊用途批准。 仅记录验收随货零件组件内实测留存充注，独立于试验实耗返还，空回路目录选件不证明包含填充。

- 选定流: 液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位: Volume / m3
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：真实本地连接清洗表面加工 (`finish`)

#### 输入

##### 产品流

###### 本地三氧化铬电镀试剂 (`chromic`)

仅有证兼容路线真实本地本地三氧化铬电镀试剂，计量实物供货数量自身化学身份CAS物相纯度配方化验水分温压密度配制反应留存回收库存返还非空气去向；已查兼容UUID未建立，保留缺口。外购完成胶辊组件内含成分上游计一次，目录结构不给出配方。

- 选定流: 本地三氧化铬电镀试剂
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-faq; kb-sponges

###### 本地六水硫酸镍电镀试剂 (`nickel`)

仅有证兼容路线真实本地本地六水硫酸镍电镀试剂，计量实物供货数量自身化学身份CAS物相纯度配方化验水分温压密度配制反应留存回收库存返还非空气去向；已查兼容UUID未建立，保留缺口。外购完成胶辊组件内含成分上游计一次，目录结构不给出配方。

- 选定流: 本地六水硫酸镍电镀试剂
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-faq; kb-sponges

###### 本地白熔氧化铝磨削磨料 (`alumina`)

真实供货本地白熔氧化铝磨削磨料自身完成配置材料供应，计量收货安装数量库存返还余下本地工序，完整外购硬件上游制造计一次，本地成分试验独立实测；已查UUID未解决。

- 选定流: 白色熔融氧化铝 `429f2b7f-592a-434c-92e2-43a6b4859300`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-faq; kb-sponges

###### 本地供货油水机加工乳化液 (`cutfluid`)

仅有证兼容路线真实本地本地供货油水机加工乳化液，计量实物供货数量自身化学身份CAS物相纯度配方化验水分温压密度配制反应留存回收库存返还非空气去向；已查兼容UUID未建立，保留缺口。外购完成胶辊组件内含成分上游计一次，目录结构不给出配方。

- 选定流: 本地供货油水机加工乳化液
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-faq; kb-sponges

###### 本地未变性精馏乙醇清洗溶剂 (`ethanol`)

仅真实变性前未变性精馏乙醇酒精度不少于80%体积兼容中国厂内供应自身化验水温度密度本地清洗，称量实物溶液独立稀释反应库存返还非空气去向，非变性溶剂或默认无水乙醇。

- 选定流: 精馏乙醇 `276f1cf5-0aa1-4d57-ad95-9dada6e043a0`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-faq; kb-sponges

###### 本地正己烷工艺清洗溶剂 (`hexane`)

仅有证兼容路线真实本地本地正己烷工艺清洗溶剂，计量实物供货数量自身化学身份CAS物相纯度配方化验水分温压密度配制反应留存回收库存返还非空气去向；已查兼容UUID未建立，保留缺口。外购完成胶辊组件内含成分上游计一次，目录结构不给出配方。

- 选定流: 本地正己烷工艺清洗溶剂
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-faq; kb-sponges

###### 本地设备清洗异丙醇 (`ipa`)

本地设备清洗实际兼容中国厂内异丙醇，自身纯度水密度供应实测配制库存返还反应留存，不是光学装配或假定70%消毒供应。

- 选定流: 异丙醇 `a4a75541-e156-4e30-947c-ba067a682afd`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-faq; kb-sponges

###### 本地表面加工50%硝酸 (`nitric`)

真实50%硝酸水溶液工业表面清洗试剂CAS7697-37-2，自身浓度供应密度反应稀释，计量实物溶液非无水酸，无通用表面加工配方。

- 选定流: 本地表面加工50%硝酸
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-faq; kb-sponges

###### 本地清洗30%氢氧化钠 (`alkali`)

真实30%氢氧化钠水溶液CAS1310-73-2供应化验密度有据本地清洗，实物溶液稀释反应返还独立，非自动客户清洗消耗。

- 选定流: 本地清洗30%氢氧化钠
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-faq; kb-sponges

###### 本地不锈钢焊接填充丝 (`weld`)

真实供货本地不锈钢焊接填充丝自身完成配置材料供应，计量收货安装数量库存返还余下本地工序，完整外购硬件上游制造计一次，本地成分试验独立实测；已查UUID未解决。

- 选定流: 本地不锈钢焊接填充丝
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-faq; kb-sponges

###### 本地气态氩焊接保护气 (`argon`)

真实供货本地气态氩焊接保护气自身完成配置材料供应，计量收货安装数量库存返还余下本地工序，完整外购硬件上游制造计一次，本地成分试验独立实测；已查UUID未解决。

- 选定流: 本地气态氩焊接保护气
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: boettcher-faq; kb-sponges

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：真实工厂检查验收试验 (`test`)

#### 输入

##### 产品流

###### 真实工厂试验无涂层无木浆纸 (`paper`)

仅实测可归属工厂验收真实使用无涂层无木浆印刷纸匹配供应形态水分，收货返还复用不良留存丢弃试验纸独立，客户通量整打印机工作周期非零件制造数量。

- 选定流: 未涂布印刷书写纸和包装纸 `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: horizon-stitch; kinyo-oa

###### 真实工厂试验溶剂型胶印油墨 (`ink`)

仅真实供货溶剂型平版油墨兼容供应树脂颜料溶剂配方有据可归属零件工厂验收，计量实物油墨自身水固溶剂化验密度库存返还反应残留去向，非通用水性UV凹版油墨或默认黑颜料添加量。

- 选定流: 溶剂型平版油墨 `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源:

###### 真实工厂试验独立复印机墨粉 (`toner`)

仅有据合格独立复印零件工厂试验真实供货粉，自身粘结相颜料助剂配方化验水颗粒状态供应称重收货库存返还留存图像捕集废物，完整ADP激光打印机非此化学输入，无客户墨盒消耗默认配方。

- 选定流: 真实工厂试验独立复印机墨粉
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: horizon-stitch; kinyo-oa

###### 真实工厂试验热塑性固体热熔胶 (`hotmelt`)

仅真实原生热塑性固体热熔胶兼容供应基础聚合物配方可归属工厂验收试验或本地连接，称量实物胶自身固体水反应库存返还留存试验残留，不假定EVA比例客户书籍生产胶率或熔融循环库存。

- 选定流: 胶粘剂（固体热熔） `33c968ac-4d9d-410c-bb6f-53d4e7b247f9`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源:

###### 真实工厂试验非合金钢装订铁丝 (`stitchwire`)

仅真实收货非合金钢丝自身碳合金化验涂层直径卷供应匹配选定钢丝接口真实装订头试验，计量实耗长度实物质量留存订钉边料库存返还，涂覆合金钢丝另匹配身份，目录头能力不提供默认试验数。

- 选定流: 钢丝 `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: horizon-stitch; kinyo-oa

###### 工厂试验去离子水 (`di`)

真实去离子水兼容离子交换反渗透供货接口，自身电导水分温度密度实测工厂试验收货库存返还，客户用水率不是工厂默认。

- 选定流: 去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: horizon-stitch; kinyo-oa

###### 工厂保护气氛氮气 (`nitrogen`)

仅真实工厂保护气氛氮气匹配纯度供应气相容器实测气瓶管路库存返还，客户寿命气及电子级供货独立。

- 选定流: 氮气 `50626f35-0e0d-4139-b9f9-7e9ff238ba62`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: horizon-stitch; kinyo-oa

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：共同期间未归属工厂公用 (`services`)

#### 输入

##### 产品流

###### 工厂低压电力 (`electricity`)

仅真实兼容中国用户侧电网平均低压交流小于1千伏，保留表计Energy千瓦时及每千瓦时3.6兆焦，归属本地作业试验表计优先，共享公用仅共同期间未归属剩余。

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

真实压缩气供应压力纯度原生Volume立方米声明温压干湿状态，仅真实表计密度修正，共享剩余计一次排除客户成形寿命气需求。

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

###### 外购天然气工业热 (`heat`)

仅实际兼容中国天然气工业供热表计原生Energy兆焦，声明毛净表计基准，毛热同基准独立实测返还扣一次，净供应不重复扣。

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

仅真实兼容香港处理水生产供应接口，保留原生Volume立方米，质量核对采用自身温度密度水分，未归属公用剩余排除已实测清洗试验水。

- 选定流: 自来水 `3a8411b6-e476-4f98-9d77-0d492661a07f`
- 流属性/单位: Volume / m3
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

真实C/E/F瓦楞板纤维不少于80%供应再生含量水分称重交付材料返还，包装排除零件净质量。

- 选定流: 瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_dispatch
- 来源: cpc; horizon-stitch

###### LDPE包装薄膜 (`film`)

真实非泡沫非增强非粘合LDPE薄膜供应厚度水分交付返还质量，非PVA PET或结构树脂。

- 选定流: 低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_dispatch
- 来源: cpc; horizon-stitch

###### 交付木托盘 (`pallet`)

真实交付木托盘自身结构水分收货复用返还台账，属于Dnet外包装，不假定欧标或每件一托质量。

- 选定流: 木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_dispatch
- 来源: cpc; horizon-stitch

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收新制造印刷及独立复印机械专用零件 (`finished`)

仅工业装订排版制版辅助印刷44914、非ADP独立复印打印传真44917或办公单张胶印45150的新制造验收成品专用零件，先审真实母机功能图纸接口完成状态再按cp_mass；电脑打印机多功能机纺织纱线印刷整母机独立耗材制品不能凭厂家用途纳入。

- 选定流: 44914、44917和45150子类货物的零件 `556c46e2-b440-4e5b-bd3a-c3bd533e9f3d`
- 流属性/单位: Mass / kg
- 数量规则: 1 千克
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_mass
- 来源: cpc; horizon-stitch

##### 废物流

##### 基本流

### 过程：实测废物交接直接排放 (`residues`)

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 外送钢机加工废料 (`wsteel`)

实测外送未处理钢机加工成形废料，自身合金金属含量水分库存回收返还真实接收路线，无假定避免负荷。

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

实测外送铜废料自身含铜污染水分库存接收；选定接口要求真实湿法冶金回收路线，直接重熔外送须另一身份。

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

###### 外送聚乙烯工艺边角废物 (`wplastic`)

仅真实清洗聚乙烯加工废物在兼容机械回收接口交接，自身聚合物添加物水污染库存返还接收路线，未处理油墨污染混合物独立。

- 选定流: 废聚乙烯 `7e78f0a8-c042-47ca-a742-3bac92be1477`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 外送废异丙醇溶液 (`spentipa`)

独立计量真实交接外送废异丙醇溶液，自身组成化验水分期间库存返还回收真实接收处理路线；已查身份未解决，不用无关废物或直接空气替代。

- 选定流: 外送废异丙醇溶液
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 外送工厂工业废水 (`wastewater`)

独立计量真实交接外送工厂工业废水，自身组成化验水分期间库存返还回收真实接收处理路线；已查身份未解决，不用无关废物或直接空气替代。

- 选定流: 外送工厂工业废水
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 外送金属氢氧化物表面加工污泥 (`sludge`)

独立计量真实交接外送金属氢氧化物表面加工污泥，自身组成化验水分期间库存返还回收真实接收处理路线；已查身份未解决，不用无关废物或直接空气替代。

- 选定流: 外送金属氢氧化物表面加工污泥
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 外送机加工润滑油废物 (`wasteoil`)

兼容供货范围本地机加工设备维护试验实测废润滑切削油，自身油水金属化验库存返还处理接收，废食用油独立。

- 选定流: 废油 `2a68e97a-21fe-43f7-a86e-3e39b653e10a`
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

独立计量真实交接交接捕集金属磨削粉尘，自身组成化验水分期间库存返还回收真实接收处理路线；已查身份未解决，不用无关废物或直接空气替代。

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

###### 外送LDPE包装废物 (`wfilm`)

仅真实清洗LDPE包装废物兼容机械回收接口，独立称量交付边料返还组成水库存接收，无自动回收率。

- 选定流: 废聚乙烯 `7e78f0a8-c042-47ca-a742-3bac92be1477`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 外送橡胶辊磨削废物 (`wrubber`)

交接实测丢弃橡胶磨削裁切废物，自身聚合物硫化状态填料金属水分库存返还回收接收路线，捕集橡胶颗粒是废物非空气量，液态胶料电镀污泥另身份。 此UUID仅适用于真实非硬质橡胶废料；硬质橡胶/硬胶及不同复合涂层须独立审查身份，不得默认替代。

- 选定流: 废旧橡胶 `b4818cb7-cbef-403a-9fc3-a12fe8baf092`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 外送丢弃工厂试验废纸 (`wpaper`)

实测丢弃试验纸张回收废纸，自身纸油墨墨粉订钉胶污染水分库存返还复用接收路线，真实纸牌号接收要求更具体身份时优先匹配，可销售返还试验纸非默认废物。

- 选定流: 废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源:

###### 外送捕集工厂试验废墨粉 (`wtoner`)

独立计量真实交接外送捕集工厂试验废墨粉，自身组成化验水分期间库存返还回收真实接收处理路线；已查身份未解决，不用无关废物或直接空气替代。

- 选定流: 外送捕集工厂试验废墨粉
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

仅真实独立实测化石二氧化碳向空气，实际本地治理后CAS物种来源普通未指明空气区室匹配浓度乘同时流量时间状态单位修正并无组织，捕集污泥废水库存未解释残差属非空气。 化石来源须自身燃料碳证据，溶剂纸张生物源碳独立。

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

仅真实独立实测异丙醇向空气，实际本地治理后CAS物种来源普通未指明空气区室匹配浓度乘同时流量时间状态单位修正并无组织，捕集污泥废水库存未解释残差属非空气。

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

仅真实独立实测水蒸气向空气，实际本地治理后CAS物种来源普通未指明空气区室匹配浓度乘同时流量时间状态单位修正并无组织，捕集污泥废水库存未解释残差属非空气。

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

仅真实独立实测分子二氧化氮向空气，实际本地治理后CAS物种来源普通未指明空气区室匹配浓度乘同时流量时间状态单位修正并无组织，捕集污泥废水库存未解释残差属非空气。 分子NO2不同以NO2当量报告的NOx。

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

仅真实独立实测PM10向空气，实际本地治理后CAS物种来源普通未指明空气区室匹配浓度乘同时流量时间状态单位修正并无组织，捕集污泥废水库存未解释残差属非空气。 PM10含细粒径，避免组分元素颗粒重叠报告。

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

###### 铜向空气 (`copperair`)

仅真实独立实测铜向空气，实际本地治理后CAS物种来源普通未指明空气区室匹配浓度乘同时流量时间状态单位修正并无组织，捕集污泥废水库存未解释残差属非空气。 自身所含元素不同氧化物盐合金毛量，通用金属离子流要求实际LCIA方法区分时优先独立匹配个别物种。

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

###### 六价铬向空气 (`chromiumair`)

仅真实独立实测六价铬向空气，实际本地治理后CAS物种来源普通未指明空气区室匹配浓度乘同时流量时间状态单位修正并无组织，捕集污泥废水库存未解释残差属非空气。 须自身六价铬化验，非总铬合金质量。

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

###### 镍向空气 (`nickelair`)

仅真实独立实测镍向空气，实际本地治理后CAS物种来源普通未指明空气区室匹配浓度乘同时流量时间状态单位修正并无组织，捕集污泥废水库存未解释残差属非空气。 自身所含元素不同氧化物盐合金毛量，通用金属离子流要求实际LCIA方法区分时优先独立匹配个别物种。

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

###### 乙醇向普通未指明空气 (`ethanolair`)

仅真实独立实测乙醇向普通未指明空气，实际本地治理后CAS物种来源普通未指明空气区室匹配浓度乘同时流量时间状态单位修正并无组织，捕集污泥废水库存未解释残差属非空气。

- 选定流: 乙醇 `08a91e70-3ddc-11dd-9349-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置零件净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源:

###### 正己烷向普通未指明空气 (`hexaneair`)

仅真实独立实测正己烷向普通未指明空气，实际本地治理后CAS物种来源普通未指明空气区室匹配浓度乘同时流量时间状态单位修正并无组织，捕集污泥废水库存未解释残差属非空气。

- 选定流: 正己烷向普通未指明空气
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
| allocate_configuration | 先分真实配置场址过程表计，共同期间剩余按实测因果公用需求作业分配，不用目录印刷通量。可归属失败试验返修不良计入验收零件负荷，内部转移配对抵销，披露复用返还试验纸张可销售共产品接收分配处理，无虚构避免负荷。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | 验收零件 | foreground_record | 型号配置序号净质量Naccepted Dnet包含硬件填充排除包装备件 | 校准可追溯称重核对同配置期间验收完整零件真实订单物料，合计验收净质量排除包装备件库存不良实耗试验，只纳入实际留存随货填充。 | kg | 各真实批次匹配区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 原始收据校准自身化验验收物料不确定性 |
| cp_materials | fabrication | 本地原料化学成分 | foreground_record | Qattr自身毛量化验水密度合金配方库存返还反应留存零件真实本地路线 | 称量真实原料各本地表面连接清洗成分，自身各流元素水化学含量核对留存硬件反应产物槽回收废物库存返还。真实接触合金聚合物兼容仅对应接触零件，不代表所有机架，完整模块内含材料上游计一次。 | kg | 各真实批次匹配区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 原始收据校准自身化验验收物料不确定性 |
| cp_modules | assembly | 完整硬件留存填充 | foreground_record | Qattr物料完成选件硬件质量长度独立填充配方化验温压密度收货安装返还库存 | 硬件分支称量真实完成收货安装返还组件缆长，声明余下本地工序。化学分支按自身原生单位独立计量本地填充润滑气及自身组成水温压密度库存反应留存返还。完整外购模块内含化学属上游一次，硬件毛量不能替代化学量。首套留存供货填充独立于试验实耗客户维护。 | native unit | 各真实批次匹配区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 原始收据校准自身化验验收物料不确定性 |
| cp_tests | test | 观察工厂试验介质 | foreground_record | Qattr真实验收订单试验重复不良水纸油墨气收货自身组成状态返还复用出售丢弃库存 | 表计真实归属工厂试验重复失败，各纸油墨胶墨粉铁丝化学水气自身实测数量组成，返还复用回收可销售试验纸张独立记录不能消失；排除正常客户生产目录配方能力研发演示客户调试，除非明确声明制造归属有证。 | native unit | 各真实批次匹配区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 原始收据校准自身化验验收物料不确定性 |
| cp_utilities | services | 各未归属公用 | foreground_record | Qattr共同期间场址输入自产输出库存归属表计毛净热基准独立返还温压湿密度 | 各公用共同期间输入真实自产扣输出库存核对归属本地试验表计，仅剩余分配一次，缆能量体积保留原生单位。毛热同基准独立实测返还扣一次，净热不重复。工艺DI公用水内部循环冷却流各接口独立，返还配对抵销。 | native unit | 各真实批次匹配区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 原始收据校准自身化验验收物料不确定性 |
| cp_dispatch | dispatch | 各包装件 | foreground_record | Qattr包装牌号水尺寸交付收货返还复用库存包装排除Dnet | 独立称量真实纸板薄膜托盘，同验收配置期间核对交付返还复用库存，不设通用包装比目录运输毛重作零件净质量。 | kg | 各真实批次匹配区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 原始收据校准自身化验验收物料不确定性 |
| cp_wastes | residues | 各外送废物流 | foreground_record | Qattr交接重量自身组成化验水密度库存返还回收接收运输处理路线 | 各外送废物按真实交接状态独立实测，保留自身流干湿组成化学金属含量返还库存接收路线，废水污泥废溶剂捕集粉尘纸墨粉橡胶油独立，处理不同直接环境释放，捕集料非空气，缺兼容身份保留缺口不作错误来源废物替代。 | kg | 各真实批次匹配区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 原始收据校准自身化验验收物料不确定性 |
| cp_emissions | residues | 各直接释放物种 | foreground_record | Qattr CAS物种来源区室治理后浓度同时流量时间温压干湿氧修正无组织取样捕集反应副产 | 采用独立观察治理后浓度乘匹配真实流量时间单位状态修正并独立取样无组织，按自身化验核对输入留存回收销毁污泥废水库存，捕集非销毁，非空气未解释残差不能推空气。分子NO2不同NOx当量，所含六价铬镍铜不同总金属氧化物盐合金并防PM重叠。 | kg | 各真实批次匹配区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 原始收据校准自身化验验收物料不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | 同真实配置期间可归属原生单位合计除以校准验收完整零件净质量合计，保留每件零件数量真实分母证据。 | Qattr; Dnet; Naccepted; cp_mass | native-unit amount per kg reference flow |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_qnd | all inventory rows | 同配置期间Qattr包含可归属制造装配试验不良返修负荷，Naccepted为验收零件数，Dnet为校准净质量合计，M=Dnet/Naccepted，q_item=Qattr/Naccepted，q_ref=Qattr/Dnet，目录空机毛重印刷通量不是分母。 | 校准配置特定验收台账 |
| quality_physical | all inventory rows | 各元素化学项采用自身毛量化验水干湿基反应库存返还留存，合金污泥溶液质量不同所含元素活性化学量，各水流须自身水分真实温度密度独立反应留存填充蒸发排出库存，内部返还配对抵销。 | 自身各流化验状态库存反应记录 |
| quality_solvent | ipa; spentipa; ipair; wastewater | 逐溶剂自身化验库存反应留存回收捕集销毁废水废介质项核对独立实测空气，捕集非销毁，非空气未解释残差不能变成释放异丙醇。 | 独立实测去向空气记录 |
| quality_scope | reference product | 保留三类命名母机零件真实母机功能专用接口新制造状态审查，化学热电接触兼容要求属组件特定非整个机架，目录选件空机毛重客户配方产率公用需求营销节能维护耗材非工厂制造默认。 | 真实订单物料验收原始技术正文 |
| quality_rubber_waste | wrubber | 选定废橡胶身份仅用于真实非硬质橡胶废料，交接核验聚合物硫化状态填料金属涂层水分库存接收路线；硬质橡胶/硬胶及其他复合涂层废物须独立审查身份，仅硫化状态不证明非硬质橡胶。 | 真实组成与废物交接记录 |
| quality_identity | all inventory rows | 匹配真实发布100类型原生基准内部ID属性单位组官方双语名完整化学CAS牌号相供应完成区室，各真实未列材料原料燃料填充模块试验介质运输废物释放物种新增独立查询原子实测交换，未解决身份保留缺口，缺失不同零，不适用须实物证据。 | 自身完整直读供应接口审查 |


## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| validate_scope | 须验收专用新零件真实工业印刷装订制版非ADP独立复印办公胶印母机功能图纸接口每千克净参考披露完成新返还状态，拒整母机通用机械普通材料工具耗材替代。 | cpc; census84; horizon-stitch |
| validate_makebuy | 须真实供货订单物料零件特定化学热电接触兼容要求原料外购完成互斥分支真实试验归属，拒目录合金粘结剂配方质量能量客户产率寿命替换默认，纳入可归属不良返修失败试验。 | cpc; census84; boettcher-compound; boettcher-faq; kinyo-oa; kinyo-solt; kb-materials; kb-sponges; horizon-stitch; muller-service; hohner-heads |
| validate_balances | 须各流自身化验水密度库存返还反应实测非空气溶剂去向，各释放真实物种来源区室治理后浓度乘匹配流量时间状态独立无组织，公用输入真实自产输出库存核对归属表计剩余一次，独立同基准毛热返还扣一次。 |  |
| validate_species | 须分子NO2非NOx当量六价铬非总铬所含镍铜非盐氧化物毛量PM不重叠，实际LCIA方法区分时优先匹配个别物种，化石与溶剂纸张生物源碳实测空气与捕集液相去向独立，报告执行跳过检查发现真实完整性。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | 真实验收配置新制造工业印刷装订制版非ADP独立复印办公胶印专用零件制造 |
| excluded_use | 整母机通用组件材料客户印刷替代目录质量工艺配方通用工厂假定 |
| required_metadata | 全部参考限定Qattr/Naccepted/Dnet原生单位自身化验状态订单物料自制外购真实试验供应接收分配缺口 |
| required_quality_disclosure | 实测估计缺失校准取样不确定性残差身份范围缺口执行跳过检查完整性 |
| update_trigger | 主要功能订单配置接触合金化学相供应自制外购场址期间验收处理变化 |


## 11. 数据源

| source_id | type | title | reference | used_for |
| --- | --- | --- | --- | --- |
| cpc | official_guidance | 完整44914工业装订排版制版辅助印刷、非ADP独立44917及办公单张胶印45150零件 | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 完整44914工业装订排版制版辅助印刷、非ADP独立44917及办公单张胶印45150零件，真实排除项优先于宽泛HS标签。 |
| census84 | handbook | 补充HS8440.90/8442.40/8443零件与8442.50已制印版滚筒、ADP多功能零件及章68磨石章69陶瓷技术玻璃制品边界 | https://www.census.gov/foreign-trade/schedules/b/2022/c84.html | 补充HS8440.90/8442.40/8443零件与8442.50已制印版滚筒、ADP多功能零件及章68磨石章69陶瓷技术玻璃制品边界，不扩大CPC44917或纺织排除项。 |
| boettcher-compound | handbook | 真实定制胶料过滤开炼压延结构 | https://boettcher-systems.se/cmsimages/Compounding_E.pdf | 真实定制胶料过滤开炼压延结构，NBR/HNBR供货胶片胶板不同原料配方完整胶辊，无目录网目速率组成默认。 |
| boettcher-faq | handbook | 有条件NBR油性及EPDM UV兼容专用胶辊套筒接口 | https://www.bottcher.com.br/faq/ | 有条件NBR油性及EPDM UV兼容专用胶辊套筒接口，网纹雕刻陶瓷表面独立橡皮布制品须完成件边界审查，无通用胶料配方。 |
| kinyo-oa | handbook | 压力定影辊带为定制OA结构兼复印多功能打印机 | https://www.kinyo-j.co.jp/en/products/oarollers/ | 压力定影辊带为定制OA结构兼复印多功能打印机，须真实非ADP独立母机，不由供货目录自动分类。 |
| kinyo-solt | handbook | SOLT硅海绵通孔压力辊是一种配置结构 | https://www.kinyo-j.co.jp/en/data/623.html | SOLT硅海绵通孔压力辊是一种配置结构，预热送纸说法属客户操作，非工厂能量或通用树脂配方。 |
| kb-materials | handbook | VMQ硅橡胶海绵FKM PFA聚酰亚胺多层结构须真实供货配方未硫化胶料成品套筒完成胶辊接口 | https://www.kbrt.de/en/applications/materials/ | VMQ硅橡胶海绵FKM PFA聚酰亚胺多层结构须真实供货配方未硫化胶料成品套筒完成胶辊接口，PI非芳纶PFA非通用PTFE。 |
| kb-sponges | handbook | 硅海绵磨削可选实心硅橡胶氟聚合物层为真实路线 | https://www.kbrt.de/en/applications/silicone-sponges/ | 硅海绵磨削可选实心硅橡胶氟聚合物层为真实路线，导电型号目录密度硬度非固定配方计量系数。 |
| horizon-stitch | handbook | 真实装订头订脚夹装配套件输送聚氨酯折辊选件 | https://www.horizon.co.jp/products/catalog/e_pdf/e008di/05sl_pdf/iCE%20STITCHLINER%20Mark%20V_e.pdf | 真实装订头订脚夹装配套件输送聚氨酯折辊选件，列明套件可能不含头订脚夹，完整母机不提供默认零件物料铁丝数量零件净质量。 |
| muller-service | handbook | 原装专用替换供货不同维修重建服务 | https://mullermartini.com/wp-content/uploads/2026/02/Broschure_MMServices-EN.pdf | 原装专用替换供货不同维修重建服务，不证明交付配置材料配方工厂试验数量，032021真实版次不同上传日期。 |
| hohner-heads | handbook | 实际厂家设计制造列明装订头系列 | https://www.hohner-postpress.com/en/products/stitching-heads/ | 实际厂家设计制造列明装订头系列，首页供货支持有条件专用接口，无图纸物料材料试验数证明。 |
